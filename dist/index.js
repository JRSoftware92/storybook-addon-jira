import _objectSpread from "/Users/jriley/Workspace/@storybook/addon-jira/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import addons from '@storybook/addons';
import get from 'lodash/get';
import { ADD_JIRA_TICKETS } from './constants';
import { extractIssueDataFromFields } from "./utils/issue-utils";

var constructIssueUrl = function constructIssueUrl(_ref) {
  var protocol = _ref.protocol,
      jiraSite = _ref.jiraSite,
      apiPath = _ref.apiPath;
  return "".concat(protocol, "://").concat(jiraSite).concat(apiPath);
};

var fetchJiraTicketData = function fetchJiraTicketData() {
  var issueUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (jiraTicket) {
    return fetch("".concat(issueUrl).concat(jiraTicket)).then(function (response) {
      return response.json();
    }).then(function (data) {
      var id = get(data, 'id');
      var key = get(data, 'key');
      var fields = get(data, 'fields');
      var issueData = extractIssueDataFromFields(fields);
      return _objectSpread({
        id: id,
        key: key
      }, issueData);
    });
  };
};

var fetchJiraData = function fetchJiraData() {
  var jiraTickets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var jiraOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!jiraTickets || !jiraTickets.length) {
    return;
  }

  return Promise.all(jiraTickets.map(fetchJiraTicketData(constructIssueUrl(jiraOptions))));
};

var emitAddJiraData = function emitAddJiraData(_ref2) {
  var jiraTickets = _ref2.jiraTickets,
      jiraOptions = _ref2.jiraOptions;
  fetchJiraData(jiraTickets, jiraOptions).then(function (jiraData) {
    addons.getChannel().emit(ADD_JIRA_TICKETS, {
      jiraData: jiraData
    });
  }).catch(function (e) {
    console.error(e);
  });
};

export var withJira = function withJira() {
  var userOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultOptions = {
    protocol: 'https',
    jiraSite: 'jira.atlassian.com',
    apiPath: '/rest/api/latest/issue/'
  };

  var options = _objectSpread(_objectSpread({}, defaultOptions), userOptions);

  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var storyFn = args[0],
        _args$1$parameters = args[1].parameters,
        parameters = _args$1$parameters === void 0 ? {} : _args$1$parameters;
    var jiraTickets = parameters.jiraTickets;

    if (typeof jiraTickets === 'string') {
      jiraTickets = [jiraTickets];
    }

    if (jiraTickets && Array.isArray(jiraTickets)) {
      emitAddJiraData({
        jiraTickets: jiraTickets,
        jiraOptions: options,
        story: storyFn
      });
    }

    return storyFn();
  };
};

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}