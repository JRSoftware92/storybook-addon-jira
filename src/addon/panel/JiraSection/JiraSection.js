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
  const statusName = get(jiraEntry, 'status.name');
  return (
    <div id={`jira-section-${ticketKey}`} className="standard-margin full-width">
      <>
        <div className="bottom-border">
          <span className="header-jira-section bold">{ticketKey} - {summary}</span>
          <img
            className="aligned-icon left-spaced"
            src={get(jiraEntry, 'issuetype.iconUrl')}
            alt={issueTypeName}
            title={issueTypeName}
          />
          <img
            className="aligned-icon left-spaced"
            src={get(jiraEntry, 'status.iconUrl')}
            alt={statusName}
            title={statusName}
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
