import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

import { to_markdown } from 'jira2md';

export const DescriptionSection = ({ description }) => {
  const markdown = useMemo(() => to_markdown(description), [description]);
  return (
    <div className="description-section">
      <ReactMarkdown source={markdown} />
    </div>
  )
};

export default DescriptionSection;
