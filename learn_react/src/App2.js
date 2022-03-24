import "./styles.css";
import { Routes, Route } from "react-router-dom";
import TopMenu from "./Components/TopMenu";
import Products from "./pages/Products";
import Photo from "./Higher_Order_Components/Photo";
import HowerOpacity from "./Higher_Order_Components/HowerOpacity";
import WithHoverOpacity from "./Higher_Order_Components/WithHoverOpacity";
import List from "./Render_Props/List";
import Counter from "./Render_Props/Counter";
import React from "react";
import Provider from "./Context/Provider";
import Consumer from "./Context/Consumer";
import { CartProvider } from "./pages/cart";
const Hover = WithHoverOpacity(Photo, 0.8);
const data = ["A", "B", "C"];
function App2() {
  return (
    <CartProvider>
      <div>
        <header>
          <TopMenu />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="props" element={<Props />} />
        </Routes>
      </div>
    </CartProvider>
  );
}
const NumberContext = React.createContext();
function Home() {
  return (
    <NumberContext.Provider value={5}>
      <>
        <main>
          <NumberContext.Consumer>
            {(context) => <h2>{context} context API</h2>}
          </NumberContext.Consumer>
          <HowerOpacity>
            <Photo src="http://dummyimage.com/237x100.png/ff4444/ffffff" />
          </HowerOpacity>
          <Hover src="http://dummyimage.com/237x100.png/ff4444/ffffff" />
        </main>
      </>
    </NumberContext.Provider>
  );
}
function Props() {
  return (
    <div>
      <List data={data} render={(item) => <div>{item}</div>} />
      <Counter render={(value) => <h1>{value}</h1>} />
      <Provider>
        {/* context Api */}
        <Consumer.Consumer>
          {({ number, updateNumber }) => (
            <div>
              <h2>{number}</h2>
              <button onClick={updateNumber}>Update</button>
            </div>
          )}
        </Consumer.Consumer>
      </Provider>
    </div>
  );
}
export default App2;
