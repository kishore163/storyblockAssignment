import { RichText } from "../CommonComponents/RichText";
import "./AboutPage.css";

export const ImageTextComp = ({ blok }) => {
  const image = blok.Image?.filename;
  const heading = blok.Headline;
  const description = blok.description;

  return (
    <div className="image_text_comp">
      {image && <img src={image} alt={heading} />}

      <div className="image_text_headline">{heading}</div>

      <RichText document={description} />
    </div>
  );
};
