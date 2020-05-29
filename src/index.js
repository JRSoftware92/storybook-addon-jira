import addons from '@storybook/addons';
import get from 'lodash/get';

import { ADD_JIRA_TICKETS } from './constants';
import { extractIssueDataFromFields } from "./utils/issue-utils";

const fetchJiraTicketData = (jiraTicket) => {
  return fetch(`https://jira.willhillatlas.com/rest/api/latest/issue/${jiraTicket}`).then(response => response.json())
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

const fetchJiraData = (jiraTickets = []) => {
  if (!jiraTickets || !jiraTickets.length) {
    return
  }

  return Promise.all(jiraTickets.map(fetchJiraTicketData));
};

const emitAddJiraData = ({ kind, story, jiraTickets }) => {
  fetchJiraData(jiraTickets).then((jiraData) => {
    addons.getChannel().emit(ADD_JIRA_TICKETS, {
      storyName: story,
      kind,
      jiraData
    });
  }).catch((e) => {
    console.error(e);
  });
};

export const withJira = (...args) => {
  const [storyFn, { parameters = {} }] = args;
  let { jiraTickets } = parameters;

  if (typeof jiraTickets === 'string') {
    jiraTickets = [jiraTickets];
  }

  if (jiraTickets && Array.isArray(jiraTickets)) {
    emitAddJiraData({ jiraTickets, story: storyFn });
  }

  return storyFn();
};

export default withJira;
