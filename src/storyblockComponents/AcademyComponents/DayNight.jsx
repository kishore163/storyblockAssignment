import "./Academy.css";

import { RichText } from "../CommonComponents/RichText"

export const DayNight = ({ blok}) => {
  return (
    <div className="day_night_container">
      <h1 className="day_night_heading">{blok.heading}</h1>
      <RichText document={blok.Description} />
      <div className="day_night_fee">₹{blok.fees}</div>
    </div>
  )
}