import React, { useContext } from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="Holberton logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>

      {user?.isLoggedIn && (
        <div className={css(styles.userSection)}>
          <p>
            Welcome <strong>{user.email}</strong> (
            <a
              href="#logout"
              onClick={logOut}
              className={css(styles.logoutLink)}
            >
              logout
            </a>
            )
          </p>
        </div>
      )}
    </header>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "5px #E0354B solid",
    padding: "10px 20px",
    flexWrap: "wrap",
  },
  h1: {
    color: "#E0354B",
    fontWeight: "bold",
    "@media only screen and (max-width: 600px)": {
      fontSize: "1.5em",
    },
  },
  logo: {
    width: 300,
    "@media only screen and (max-width: 600px)": {
      width: 200,
    },
  },
  userSection: {
    fontSize: "1rem",
    color: "#333",
  },
  logoutLink: {
    color: "#E0354B",
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
});

export default Header;
