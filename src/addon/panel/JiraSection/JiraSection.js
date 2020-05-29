import React from 'react';
import get from 'lodash/get';
import DescriptionSection from "../DescriptionSection/DescriptionSection";
import {alignedIcon, bottomBorder, fullWidthSection, ticketHeader} from "../styles";

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
    <div id={`jira-section-${ticketKey}`} style={fullWidthSection}>
      <>
        <div style={bottomBorder}>
          <span style={ticketHeader}>{ticketKey} - {summary}</span>
          <img
            style={alignedIcon}
            src={get(jiraEntry, 'issuetype.iconUrl')}
            alt={issueTypeName}
            title={issueTypeName}
          />
          <img
            style={alignedIcon}
            src={get(jiraEntry, 'status.iconUrl')}
            alt={statusName}
            title={statusName}
          />
        </div>
        <div style={fullWidthSection}>
          <DescriptionSection description={get(jiraEntry, 'description')} />
        </div>
      </>
    </div>
  );
};

export default JiraSection;
