import React from 'react';
import { ScrollArea, Placeholder } from '@storybook/components';

import provideJiraData from '../hoc/provideJira';
import JiraPanel from './JiraPanel/JiraPanel';

import './panel.css';

export const WrappedJiraPanel = ({ jiraData }) => {
  const hasJiraData = jiraData && jiraData.length;
  return (
    <ScrollArea vertical>
      {hasJiraData ? (
        <JiraPanel jiraData={jiraData} />
      ) : (
        <Placeholder>
          <div>No JIRA Data Found</div>
        </Placeholder>
      )}
    </ScrollArea>
  );
};

export default provideJiraData(WrappedJiraPanel);
