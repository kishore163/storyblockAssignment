import { RichText } from "../CommonComponents/RichText";

import './Home.css';
export const HomeTabEntry = ({ blok }) => {
  const image = blok.image?.filename;
  const headline = blok.headline;
  const description = blok.description; // full richtext doc

  return (
    <div className="home_tab_entry_item">
      <h3 className="entry_headline">{headline}</h3>

      {image && (
        <img
          src={image}
          alt={headline}
          className="entry_image"
        />
      )}

      <RichText document={description} />
    </div>
  );
};
