import { useSelector } from "react-redux";
import { Item } from "../NonDependentComponents/Item";
import '../App.css';
import { Link } from "react-router";

export const Wishlist = () => {
  const wishListItems = useSelector(
    (state) => state.wishlist.items
  );

  if (wishListItems.length === 0) {
    return (
    
        <div className="empty_wishlist">
      
        <h1>There are no items added to your wishlist</h1>
        <Link to='/store' className="go_to_store_from_wishlist link_to_wishlist">
          Go to Store
    
        
        </Link>
      </div>

    )
  }

  return (
    <div className="wishlist_grid">
      {wishListItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
