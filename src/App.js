import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes, useLocation,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import PhonePage from "./pages/PhonePage/PhonePage";
import "./App.css";
import Cart from "./pages/Cart/Cart";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:manufacturer" element={<Home />} />
            <Route path="/:phone/:id" element={<PhonePage />} />
            <Route path="/cart" element = {<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
