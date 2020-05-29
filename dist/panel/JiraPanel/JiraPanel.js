"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _JiraSection = _interopRequireDefault(require("../JiraSection/JiraSection"));

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JiraPanel = function JiraPanel(_ref) {
  var _ref$jiraData = _ref.jiraData,
      jiraData = _ref$jiraData === void 0 ? [] : _ref$jiraData;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: _styles.contentBox
  }, jiraData.map(function (jiraEntry) {
    return /*#__PURE__*/_react.default.createElement(_JiraSection.default, {
      key: jiraEntry.key,
      jiraEntry: jiraEntry
    });
  }));
};

var _default = JiraPanel;
exports.default = _default;