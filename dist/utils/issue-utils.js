"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractIssueDataFromFields = void 0;

var _pick = _interopRequireDefault(require("lodash/pick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jiraTicketFields = ['description', 'issuetype', 'status', 'summary'];

var extractIssueDataFromFields = function extractIssueDataFromFields() {
  var jiraData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _pick.default)(jiraData, jiraTicketFields);
};

exports.extractIssueDataFromFields = extractIssueDataFromFields;