"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WrappedJiraPanel = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("@storybook/components");

var _provideJira = _interopRequireDefault(require("../hoc/provideJira"));

var _JiraPanel = _interopRequireDefault(require("./JiraPanel/JiraPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrappedJiraPanel = function WrappedJiraPanel(_ref) {
  var jiraData = _ref.jiraData;
  var hasJiraData = jiraData && jiraData.length;
  return /*#__PURE__*/_react.default.createElement(_components.ScrollArea, {
    vertical: true
  }, hasJiraData ? /*#__PURE__*/_react.default.createElement(_JiraPanel.default, {
    jiraData: jiraData
  }) : /*#__PURE__*/_react.default.createElement(_components.Placeholder, null, /*#__PURE__*/_react.default.createElement("div", null, "No JIRA Data Found")));
};

exports.WrappedJiraPanel = WrappedJiraPanel;

var _default = (0, _provideJira.default)(WrappedJiraPanel);

exports.default = _default;