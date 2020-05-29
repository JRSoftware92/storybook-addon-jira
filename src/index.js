import addons from '@storybook/addons';
import get from 'lodash/get';

import { ADD_JIRA_TICKETS } from './constants';
import { extractIssueDataFromFields } from "./utils/issue-utils";

const constructIssueUrl = ({ protocol, jiraSite, apiPath }) => {
  return `${protocol}://${jiraSite}${apiPath}`
};

const fetchJiraTicketData = (issueUrl = '') => (jiraTicket) => {
  return fetch(`${issueUrl}${jiraTicket}`).then(response => response.json())
    .then(data => {
      const id = get(data, 'id');
      const key = get(data, 'key');
      const fields = get(data, 'fields');
      const issueData = extractIssueDataFromFields(fields);

      return {
        id,
        key,
        ...issueData,
      };
    });
};

const fetchJiraData = (jiraTickets = [], jiraOptions = {}) => {
  if (!jiraTickets || !jiraTickets.length) {
    return
  }

  return Promise.all(jiraTickets.map(fetchJiraTicketData(constructIssueUrl(jiraOptions))));
};

const emitAddJiraData = ({ jiraTickets, jiraOptions }) => {
  fetchJiraData(jiraTickets, jiraOptions).then((jiraData) => {
    addons.getChannel().emit(ADD_JIRA_TICKETS, {
      jiraData
    });
  }).catch((e) => {
    console.error(e);
  });
};

export const withJira = (userOptions = {}) => {
  const defaultOptions = {
    protocol: 'https',
    jiraSite: 'jira.atlassian.com',
    apiPath: '/rest/api/latest/issue/',
  };
  const options = { ...defaultOptions, ...userOptions };

  return (...args) => {
    const [storyFn, { parameters = {} }] = args;
    let { jiraTickets } = parameters;

    if (typeof jiraTickets === 'string') {
      jiraTickets = [jiraTickets];
    }

    if (jiraTickets && Array.isArray(jiraTickets)) {
      emitAddJiraData({ jiraTickets, jiraOptions: options, story: storyFn });
    }

    return storyFn();
  };
};

export default withJira;
