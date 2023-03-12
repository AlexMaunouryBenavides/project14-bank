import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getToken from "../services/getToken";
import { authActions } from "../store/auth";
import login from "../services/login";
import { tokenActions } from "../store/token";
import "../App.css";
import { profileActions } from "../store/profile";
import Header from "../Components/Header";
import SignInHeader from "../Components/SignInHeader";

const SignIn = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const token = useSelector((state) => state.token);
   const userProfile = useSelector((state) => state.profile);

   //Récup input values
   const [email, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = async (event) => {
      event.preventDefault();
      //recup token
      const dataToken = await getToken(email, password);
      // Status = 200, token saved
      if (dataToken.status === 200) {
         dispatch(tokenActions.getToken(dataToken.body.token));
         //si state du token = true
         if (token) {
            // Update: auth = true
            dispatch(authActions.login());
            //use Login() to connect with user info and token
            const dataUser = await login(dataToken.body.token);

            if (dataUser.status === 200) {
               dispatch(
                  profileActions.getNames({
                     firstName: dataUser.body.firstName,
                     lastName: dataUser.body.lastName,
                  })
               );
               if (userProfile) {
                  navigate(`/profile/${dataUser.body.id}`);
               } else {
                  navigate("/*");
               }
            }
         }
      }
   };
   return (
      <>
         <Header header={<SignInHeader />} />
         <div className="container">
            <main className="main bg-dark">
               <section className="sign-in-content">
                  <i className="fa fa-user-circle sign-in-icon"></i>
                  <h2>Sign In</h2>
                  <form onSubmit={handleSubmit}>
                     <div className="input-wrapper">
                        <label htmlFor="">Username</label>
                        <input
                           type={"text"}
                           id="username"
                           onChange={(e) => setUsername(e.target.value)}
                        />
                     </div>
                     <div className="input-wrapper">
                        <label htmlFor="">Password</label>
                        <input
                           type={"password"}
                           required
                           id="password"
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </div>
                     <div className="input-remember">
                        <input type="checkbox" name="checkbox" />
                        <label>Remember me</label>
                     </div>
                     <button type="submit" className="sign-in-button">
                        Sign In
                     </button>
                  </form>
               </section>
            </main>
         </div>
      </>
   );
};

export default SignIn;
