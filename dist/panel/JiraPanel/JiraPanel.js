import React from 'react';
import JiraSection from '../JiraSection/JiraSection';

var JiraPanel = function JiraPanel(_ref) {
  var _ref$jiraData = _ref.jiraData,
      jiraData = _ref$jiraData === void 0 ? [] : _ref$jiraData;
  return /*#__PURE__*/React.createElement("div", {
    className: "contentBox"
  }, jiraData.map(function (jiraEntry) {
    return /*#__PURE__*/React.createElement(JiraSection, {
      key: jiraEntry.key,
      jiraEntry: jiraEntry
    });
  }));
};

export default JiraPanel;