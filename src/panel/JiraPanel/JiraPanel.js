import React from 'react';

import JiraSection from '../JiraSection/JiraSection';

const JiraPanel = ({ jiraData = [] }) => (
  <div className="contentBox">
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
