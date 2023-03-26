import Header from "../Components/Header";
import SignOut from "../Components/SingOut";
import Account from "../Components/Account";
import { useSelector, useDispatch } from "react-redux";
import editUser from "../services/editUser";
import { useState, useEffect } from "react";
import { profileActions } from "../store/profile";

import login from "../services/login";
import { useNavigate } from "react-router-dom";

export default function User() {
   const navigate = useNavigate();
   // Data from store
   const userData = useSelector((state) => state.profile);
   console.log(userData);

   // Retrieves token Store
   const token = useSelector((state) => state.token.token);
   // States made to display or not the form
   const [displayForm, setDisplayForm] = useState(false);
   // firstName and lastName holds inputs via listeners
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const dispatch = useDispatch();

   useEffect(() => {
      //rememberMe at true or it read as a string
      if (!userData.firstName && localStorage.getItem("rememberMe") === "true") {
         login(localStorage.getItem("token")).then((res) => {
            dispatch(
               profileActions.getNames({
                  firstName: res.body.firstName,
                  lastName: res.body.lastName,
               })
            );
         });
      } else if (!userData.firstName) {
         localStorage.clear();
         navigate(`/login`);
      }
   });

   /**
    * Changes the value of displayForm to its opposite whenever it's called
    */
   const handleDisplayForm = () => {
      setDisplayForm(!displayForm);
   };

   /**
    * Handles the form allowing to edit user's firstName and lastName
    * Function editUser() the PUT request to the API
    * dispatch() used to update the profiles store
    */
   const handleForm = () => {
      if (firstName !== "" && lastName !== "") {
         editUser(firstName, lastName, token);
         setDisplayForm(!displayForm);
         dispatch(profileActions.getNames({ firstName: firstName, lastName: lastName }));
      }
   };

   return (
      <div>
         <Header header={<SignOut />} />

         <main className="main bg-dark">
            {displayForm && (
               <div className="container__profile_header">
                  <h1>Welcome back</h1>
                  <div className="container__profile-form">
                     <div className="inputBox">
                        <input
                           type="text"
                           placeholder={userData.firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                           required
                        />
                        <input
                           type="text"
                           placeholder={userData.lastName}
                           onChange={(e) => setLastName(e.target.value)}
                           required
                        />
                     </div>
                     <div className="buttonBox">
                        <button onClick={handleForm}>Save</button>
                        <button onClick={handleDisplayForm}>Cancel</button>
                     </div>
                  </div>
               </div>
            )}
            {!displayForm && (
               <div className="container__profile-header">
                  <h1>{`Welcome back ${userData.firstName} ${userData.lastName}`}</h1>
                  <button onClick={handleDisplayForm}>Edit Name</button>
               </div>
            )}
            <Account />
            <Account />
            <Account />
         </main>
      </div>
   );
}
