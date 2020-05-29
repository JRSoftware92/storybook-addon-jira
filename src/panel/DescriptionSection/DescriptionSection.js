import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

import jiraToMd from 'jira2md';

export const DescriptionSection = ({ description }) => {
  const markdown = useMemo(() => jiraToMd.to_markdown(description), [description]);
  return (
    <div className="description-section">
      <ReactMarkdown source={markdown} />
    </div>
  )
};

export default DescriptionSection;
