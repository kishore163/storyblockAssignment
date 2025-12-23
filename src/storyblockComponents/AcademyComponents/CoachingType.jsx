import "./Academy.css";

export const CoachingType = ({ blok }) => {
  const fees = blok.Price;
  const image = blok.Image.filename;
  const description = blok.Description;

  return (
    <div className="coaching_type_container">
      <h1 className="coaching_type_heading">{blok.headline}</h1>
      <img src={image} />
      <div className="coaching_type_description">{description}</div>
      <div className="coaching_type_fees">₹{fees}</div>
    </div>
  )
  
}