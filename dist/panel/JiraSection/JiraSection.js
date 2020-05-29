import React from 'react';
import get from 'lodash/get';
import DescriptionSection from "../DescriptionSection/DescriptionSection";

var JiraSection = function JiraSection(_ref) {
  var jiraEntry = _ref.jiraEntry;
  var ticketKey = get(jiraEntry, 'key');

  if (!ticketKey) {
    console.warn("Warning: Invalid Jira Entry found.");
    return null;
  }

  var summary = get(jiraEntry, 'summary');
  var issueTypeName = get(jiraEntry, 'issuetype.name');
  var statusName = get(jiraEntry, 'status.name');
  return /*#__PURE__*/React.createElement("div", {
    id: "jira-section-".concat(ticketKey),
    className: "standard-margin full-width"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bottom-border"
  }, /*#__PURE__*/React.createElement("span", {
    className: "header-jira-section bold"
  }, ticketKey, " - ", summary), /*#__PURE__*/React.createElement("img", {
    className: "aligned-icon left-spaced",
    src: get(jiraEntry, 'issuetype.iconUrl'),
    alt: issueTypeName,
    title: issueTypeName
  }), /*#__PURE__*/React.createElement("img", {
    className: "aligned-icon left-spaced",
    src: get(jiraEntry, 'status.iconUrl'),
    alt: statusName,
    title: statusName
  })), /*#__PURE__*/React.createElement("div", {
    className: "standard-margin full-width"
  }, /*#__PURE__*/React.createElement(DescriptionSection, {
    description: get(jiraEntry, 'description')
  }))));
};

export default JiraSection;