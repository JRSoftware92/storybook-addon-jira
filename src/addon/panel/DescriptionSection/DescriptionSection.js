import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

import { to_markdown } from 'jira2md';

import { descriptionSection } from "../styles";

export const DescriptionSection = ({ description }) => {
  const markdown = useMemo(() => to_markdown(description), [description]);
  return (
    <div style={descriptionSection}>
      <ReactMarkdown source={markdown} />
    </div>
  )
};

export default DescriptionSection;
