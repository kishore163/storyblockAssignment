import { RichText } from "../CommonComponents/RichText";

import "./AboutPage.css";

export const SuccessCard = ({ blok }) => {
  const number = blok.Success_number;
  const subHeading = blok.sub_heading;
  const description = blok.description;

  return (
    <div className="success_card">
      <div className="successCard_number">{number}</div>
      <div className="successCard_sub_heading">{subHeading}</div>
      <div className="success_card_description">
        {description}
      </div>
    </div>
  );
};
