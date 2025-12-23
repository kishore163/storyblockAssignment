import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist
} from "../../ReduxStore/wishlistSlice";

import "./StorePage.css";

export const Product = ({ blok }) => {
  const dispatch = useDispatch();
  const wishListItems = useSelector(
    (state) => state.wishlist.items
  );

  const isWishlisted = wishListItems.some(
    (item) => item.id === blok._uid
  );

  const toggleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(blok._uid));
    } else {
      dispatch(
        addToWishlist({
          id: blok._uid,
          name: blok.Name,
          price: blok.price,
          image: blok.Image?.filename
        })
      );
    }
  };

  return (
    <div className="product_container">
      <div className="product_name">{blok.Name}</div>

      <img
        src={blok.Image?.filename}
        alt={blok.Name}
      />

      <div className="product_price">₹{blok.price}</div>

      <button
        className={`add_to_wishlist ${isWishlisted ? "active" : ""}`}
        onClick={toggleWishlist}
      >
      {isWishlisted ? "Remove From Wishlist" : "Add To Wishlist"}
      </button>
    </div>
  );
};
