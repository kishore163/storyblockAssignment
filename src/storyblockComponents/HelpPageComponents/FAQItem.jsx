import { useState } from "react";
import "./HelpPage.css";
export const FAQItem = ({ blok }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`faq_item ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="faq_question">
        {blok.Question}
        <span className="faq_icon">{open ? "−" : "+"}</span>
      </div>

      {open && (
        <div className="faq_answer">
          {blok.Answer}
        </div>
      )}
    </div>
  );
};
