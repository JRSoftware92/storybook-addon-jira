import React from 'react';
import { ScrollArea, Placeholder } from '@storybook/components';
import provideJiraData from '../hoc/provideJira';
import JiraPanel from './JiraPanel/JiraPanel';
import './panel.css';
export var WrappedJiraPanel = function WrappedJiraPanel(_ref) {
  var jiraData = _ref.jiraData;
  var hasJiraData = jiraData && jiraData.length;
  return /*#__PURE__*/React.createElement(ScrollArea, {
    vertical: true
  }, hasJiraData ? /*#__PURE__*/React.createElement(JiraPanel, {
    jiraData: jiraData
  }) : /*#__PURE__*/React.createElement(Placeholder, null, /*#__PURE__*/React.createElement("div", null, "No JIRA Data Found")));
};
export default provideJiraData(WrappedJiraPanel);