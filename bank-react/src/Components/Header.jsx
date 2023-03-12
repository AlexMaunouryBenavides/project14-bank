import "../App.css";
import ArgentBankLOGO from "../Assets/Img/argentBankLogo.png";
import { NavLink } from "react-router-dom";

export default function Header({ header }) {
   return (
      <div>
         <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
               <img className="main-nav-logo-image" src={ArgentBankLOGO} alt="Argent Bank Logo" />
            </NavLink>

            <div>
               {/* ajouter condition pour affichage du sign out quand le login sera pret */}
               {header}
            </div>
         </nav>
      </div>
   );
}
