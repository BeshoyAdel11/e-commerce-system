import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignInScreen from "./screens/SignInScreen";
import ProductsListScreen from "./screens/ProductsListScreen";
 
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInScreen />} />
        <Route path="/products" element={<ProductsListScreen />} />
      </Routes>
    </>
  );
}

export default App;
