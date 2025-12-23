
import NavItem from "./NavItem";
import './config.css';

import { useStory } from "../../customHooks/useStory";
import { Link } from "react-router";

const Header = () => {
    
const data = useStory("site_config");
  const content = data?.story?.content;

  if (!content) return null;
  const headerImg = content.headerImg?.filename;
  const storeImg = content.header_store_img?.filename;
  const navItems = content.headerNav || [];

  return (
    <div className="outer_header_container">
      <Link to ="/" className="header_brand">
        {headerImg ? <img src={headerImg} /> : null}
      </Link>

      <div className="nav_bar">
        {navItems.map((item) => (
          <NavItem
            key={item._uid}
            label={item.label}
            link={`/${item.link?.cached_url ?? ""}`}
          />
        ))}
      </div>

      <Link to="/wishlist" className="header_storeImg">
        {storeImg ? 
          <img src={storeImg} alt="store" /> : null}
        
        
      </Link>
    </div>
  );
};

export default Header;
