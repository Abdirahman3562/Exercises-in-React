import Product from "./Product";
import { ProductProvider } from "./ProductContext";

const App = () => {
  return (
    <ProductProvider>

      <h1>My Shop</h1>

      <Product />

    </ProductProvider>
  );
};

export default App;