import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../ReduxStore/wishlistSlice";
; import "./Non_dependent_css.css"

export const Item = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="product_container">
      <div className="product_name">{item.name}</div>

      <img src={item.image} alt={item.name} />

      <div className="product_price">₹{item.price}</div>

      <button
        className="remove_from_wishList"
        onClick={() =>
          dispatch(removeFromWishlist(item.id))
        }
      >
        Remove From Wishlist
      </button>
    </div>
  );
};
