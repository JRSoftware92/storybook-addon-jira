import pick from 'lodash/pick';

const jiraTicketFields = [
  'description',
  'issuetype',
  'status',
  'summary',
];

export const extractIssueDataFromFields = (jiraData = {}) => pick(jiraData, jiraTicketFields);
