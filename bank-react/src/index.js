import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./Pages/Home";
import SignIn from "./Pages/Sign-in";
import User from "./Pages/User";
import Error from "./Pages/Error";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <Routes>
               <Route path={"/"} element={<Home />} />
               <Route path={"/login"} element={<SignIn />} />
               <Route path={"/profile/:id"} element={<User />} />
               <Route path={"/*"} element={<Error />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
);
