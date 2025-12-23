
import NavItem from "../Config/NavItem";
import './reusable_comp_base_css.css'; 
export const Hero = ({eyebrow,heading,description,buttons,heroImage}) => {
  

  return (
    <div className="home_outer_container">
      <div className="home_about_academy">
        <h3 className="home_hero_eyebrow">{eyebrow}</h3>
        <h1 className="home_hero_heading">{heading}</h1>
        <p className="home_hero_description">{description}</p>

        <div className="home_hero_cta">
  {buttons?.map((item) => (
    <NavItem
      key={item._uid}
      label={item.label}
      link={`/${item.link?.cached_url ?? ""}`}
    />
  ))}
</div>
      </div>

      {heroImage && (
        <img
          src={heroImage}
          alt={heading}
          className="home_hero_image"
        />
      )}
    </div>
  );
};
