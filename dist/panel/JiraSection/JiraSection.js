"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _DescriptionSection = _interopRequireDefault(require("../DescriptionSection/DescriptionSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JiraSection = function JiraSection(_ref) {
  var jiraEntry = _ref.jiraEntry;
  var ticketKey = (0, _get.default)(jiraEntry, 'key');

  if (!ticketKey) {
    console.warn("Warning: Invalid Jira Entry found.");
    return null;
  }

  var summary = (0, _get.default)(jiraEntry, 'summary');
  var issueTypeName = (0, _get.default)(jiraEntry, 'issuetype.name');
  var statusName = (0, _get.default)(jiraEntry, 'status.name');
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "jira-section-".concat(ticketKey),
    className: "standard-margin full-width"
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "bottom-border"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "header-jira-section bold"
  }, ticketKey, " - ", summary), /*#__PURE__*/_react.default.createElement("img", {
    className: "aligned-icon left-spaced",
    src: (0, _get.default)(jiraEntry, 'issuetype.iconUrl'),
    alt: issueTypeName,
    title: issueTypeName
  }), /*#__PURE__*/_react.default.createElement("img", {
    className: "aligned-icon left-spaced",
    src: (0, _get.default)(jiraEntry, 'status.iconUrl'),
    alt: statusName,
    title: statusName
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "standard-margin full-width"
  }, /*#__PURE__*/_react.default.createElement(_DescriptionSection.default, {
    description: (0, _get.default)(jiraEntry, 'description')
  }))));
};

var _default = JiraSection;
exports.default = _default;