
import { HomeTabEntry } from "./HomeTabEntry";
import './Home.css';
export const HomeTabSection = ({heading,entries}) => {
  

 

  return (
    <div className="home_tab_section">
      <h2 className="home_tab_section_heading">{heading}</h2>

      <div className="home_tab_entry">
        {entries.map((entry) => (
          <HomeTabEntry key={entry._uid} blok={entry} />
        ))}
      </div>
    </div>
  );
};
