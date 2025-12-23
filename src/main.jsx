import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import "./storyblockComponents/init.js";
import App from "./routes/App.jsx";
import { Home } from "./routes/Home.jsx";
import { About } from "./routes/About.jsx";
import { Academy } from "./routes/Academy.jsx";
import { Provider } from "react-redux";

import { Store } from "./routes/Store.jsx";
import { Wishlist } from "./routes/Wishlist.jsx";
import { store } from "./ReduxStore/index.js";
import { Help } from "./routes/Help.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/academy", element: <Academy /> },
      { path: "/store", element: <Store /> },
      { path: "/help", element: <Help /> },
      { path: "/wishlist", element: <Wishlist /> },

      
      
      
    ]
    
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store= {store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
  
);
