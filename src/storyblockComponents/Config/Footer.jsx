
import NavItem from "./NavItem";
import './config.css';

import { useStory } from "../../customHooks/useStory";

const Footer = () => {

const data = useStory("site_config");
  const content = data?.story?.content;

  if (!content) return null;




  const footerNav1 = content.footer_nav1 || [];
  const footerNav2 = content.footer_nav2 || [];

  const footerHeading =
    content.footer_headline?.content?.[0]?.content?.[0]?.text;

  const footerSubHeading = content.footer_subheading;
  const footerCopyright = content.footer_copyright;

  return (
    <div className="footer_container">
      <div className="footer_heading">{footerHeading}</div>
      <div className="footer_subheading">{footerSubHeading}</div>

      <div className="footer_nav_container">
        <div className="footer_nav1">
          {footerNav1.map((item) => (
            <NavItem
              key={item._uid}
              label={item.label}
              link={`/${item.link?.cached_url ?? ""}`}
            />
          ))}
        </div>

        <div className="footer_nav2">
          {footerNav2.map((item) => (
            <NavItem
              key={item._uid}
              label={item.label}
              link={`/${item.link?.cached_url ?? ""}`}
            />
          ))}
        </div>
      </div>

      <div className="footer_copyright">
        {footerCopyright}
      </div>
    </div>
  );
};

export default Footer;
