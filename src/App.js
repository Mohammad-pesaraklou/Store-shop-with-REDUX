import { Provider } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

//components
import Store from "./Components/Store";
import DetailsPage from "./Components/DetailsPage";
import Navbar from "./Components/Navbar";
import ShopCart from "./Components/ShopCart";
//redux
import store from "./redux/app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/products" element={<Store />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
