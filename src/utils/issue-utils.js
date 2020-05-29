import pick from 'lodash/pick';

const jiraTicketFields = [
  'assignee',
  'comment',
  'created',
  'reporter',
  'description',
  'fixVersions',
  'issuelinks',
  'issuetype',
  'labels',
  'priority',
  'project',
  'resolution',
  'status',
  'subtasks',
  'summary',
  'updated',
];

export const extractIssueDataFromFields = (jiraData = {}) => pick(jiraData, jiraTicketFields);
