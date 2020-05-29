"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withJira = void 0;

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _get = _interopRequireDefault(require("lodash/get"));

var _constants = require("./constants");

var _issueUtils = require("./utils/issue-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      var id = (0, _get.default)(data, 'id');
      var key = (0, _get.default)(data, 'key');
      var fields = (0, _get.default)(data, 'fields');
      var issueData = (0, _issueUtils.extractIssueDataFromFields)(fields);
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
    _addons.default.getChannel().emit(_constants.ADD_JIRA_TICKETS, {
      jiraData: jiraData
    });
  }).catch(function (e) {
    console.error(e);
  });
};

var withJira = function withJira() {
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

exports.withJira = withJira;

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}