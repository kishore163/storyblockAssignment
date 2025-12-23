import { renderRichText } from "@storyblok/react";

export const RichText = ({ document }) => {
  if (!document) return null;

  const html = renderRichText(document); 

  return <div className="rich_text" dangerouslySetInnerHTML={{ __html: html }} />;
};
