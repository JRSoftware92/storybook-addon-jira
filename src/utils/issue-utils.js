import pick from 'lodash/pick';

const jiraTicketFields = [
  'comment',
  'created',
  'description',
  'issuelinks',
  'issuetype',
  'project',
  'resolution',
  'status',
  'subtasks',
  'summary',
  'updated',
];

export const extractIssueDataFromFields = (jiraData = {}) => pick(jiraData, jiraTicketFields);
