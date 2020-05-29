import React from 'react';
import get from 'lodash/get';

const JiraSection = ({ jiraEntry }) => {
  const ticketKey = get(jiraEntry, 'key');
  if (!ticketKey) {
    console.warn(`Warning: Invalid Jira Entry found.`);
    return null;
  }

  return (
    <div id={`jira-section-${ticketKey}`} className="standard-margin">
      <>
        <span className="header-jira-section bold">{ticketKey}</span>
      </>
    </div>
  );
};

export default JiraSection;
