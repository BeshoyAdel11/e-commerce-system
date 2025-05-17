import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignInScreen from "./screens/SignInScreen";
import ProductsListScreen from "./screens/ProductsListScreen";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./screens/Cart";
 
function App() {
  return (
    <>
    <Provider store={store}>
    <Routes>
        <Route path="/" element={<SignInScreen />} />
        <Route path="/products" element={<ProductsListScreen />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Provider>
    </>
  );
}

export default App;
