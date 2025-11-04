import React, { useContext } from "react";
import { getFooterCopy, getFullYear } from "../utils/util";
import AppContext from "../App/AppContext";

function Footer() {
  const { user, logOut } = useContext(AppContext);

  return (
    <footer>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user?.isLoggedIn && (
        <p>
          Welcome <strong>{user.email}</strong> (
          <a href="#logout" onClick={logOut}>
            logout
          </a>
          )
        </p>
      )}
    </footer>
  );
}

export default Footer;
