import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { to_markdown } from 'jira2md';
export var DescriptionSection = function DescriptionSection(_ref) {
  var description = _ref.description;
  var markdown = useMemo(function () {
    return to_markdown(description);
  }, [description]);
  return /*#__PURE__*/React.createElement("div", {
    className: "description-section"
  }, /*#__PURE__*/React.createElement(ReactMarkdown, {
    source: markdown
  }));
};
export default DescriptionSection;