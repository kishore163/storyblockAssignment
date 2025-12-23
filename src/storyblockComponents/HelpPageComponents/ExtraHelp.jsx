import "./HelpPage.css";

export const ExtraHelp = ({ blok }) => {
  
  const heading = blok.heading;
  const subheading = blok.subheading;
  const description = blok.decription;

  return (
    <div className="extra_help_container">
      <h1>{heading}</h1>
      <h3>{subheading}</h3>
      <div className="extra_help_description">{description}</div>

    </div>

  )
  
}