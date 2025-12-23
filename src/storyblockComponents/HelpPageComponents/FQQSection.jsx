import "./HelpPage.css";
import { StoryblokComponent } from "@storyblok/react";
import { FAQItem } from "./FAQItem";

export const FAQSection = ({ blok }) => {
  
  const heading = blok.heading;
  return (
    <div className="faqSection_container">
      <div className="faq_heading">{heading}</div>

      {blok.FAQ?.map(faq=><StoryblokComponent blok={faq}/>)}
    </div>
  )

  
  

}