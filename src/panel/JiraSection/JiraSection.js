import React from 'react';
import get from 'lodash/get';
import DescriptionSection from "../DescriptionSection/DescriptionSection";

const JiraSection = ({ jiraEntry }) => {
  const ticketKey = get(jiraEntry, 'key');
  if (!ticketKey) {
    console.warn(`Warning: Invalid Jira Entry found.`);
    return null;
  }

  const summary = get(jiraEntry, 'summary');
  const issueTypeName = get(jiraEntry, 'issuetype.name');
  return (
    <div id={`jira-section-${ticketKey}`} className="standard-margin full-width">
      <>
        <div className="bottom-border">
          <span className="header-jira-section bold">{ticketKey} - {summary}</span>
          <img
            className="issue-type-icon"
            src={get(jiraEntry, 'issuetype.iconUrl')}
            alt={issueTypeName}
            title={issueTypeName}
          />
        </div>
        <div className="standard-margin full-width">
          <DescriptionSection description={get(jiraEntry, 'description')} />
        </div>
      </>
    </div>
  );
};

export default JiraSection;
