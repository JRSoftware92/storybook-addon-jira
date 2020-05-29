import pick from 'lodash/pick';
var jiraTicketFields = ['description', 'issuetype', 'status', 'summary'];
export var extractIssueDataFromFields = function extractIssueDataFromFields() {
  var jiraData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return pick(jiraData, jiraTicketFields);
};