import React from 'react';
import get from 'lodash/get';
import DescriptionSection from "../DescriptionSection/DescriptionSection";

const JiraSection = ({ jiraEntry }) => {
  const ticketKey = get(jiraEntry, 'key');
  if (!ticketKey) {
    console.warn(`Warning: Invalid Jira Entry found.`);
    return null;
  }

  return (
    <div id={`jira-section-${ticketKey}`} className="standard-margin full-width">
      <>
        <span className="header-jira-section bold">{ticketKey}</span>
        <div className="standard-margin full-width">
          <DescriptionSection description={get(jiraEntry, 'description')} />
        </div>
      </>
    </div>
  );
};

export default JiraSection;
