import Header from "../Components/Header";
import SignOut from "../Components/SingOut";
import Account from "../Components/Account";
import { useSelector } from "react-redux";

export default function User() {
   // Data from store
   const userData = useSelector((state) => state.profile);

   console.log(userData);
   return (
      <div>
         <Header header={<SignOut />} />
         <main className="main bg-dark">
            <div className="container-user">
               <div className="header">
                  <h1>
                     Welcome back
                     <br />
                     {userData.firstName} {userData.lastName}
                  </h1>
                  <button className="edit-button">Edit Name</button>
               </div>
               <h2 className="sr-only">Accounts</h2>
               <Account />
               <Account />
               <Account />
            </div>
         </main>
      </div>
   );
}
