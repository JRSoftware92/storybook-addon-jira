import React from 'react';

import JiraSection from '../JiraSection/JiraSection';
import { contentBox } from '../styles';

const JiraPanel = ({ jiraData = [] }) => (
  <div style={contentBox}>
    {
      jiraData.map((jiraEntry) => (
        <JiraSection
          key={jiraEntry.key}
          jiraEntry={jiraEntry}
        />
      ))
    }
  </div>
);

export default JiraPanel;
