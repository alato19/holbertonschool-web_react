// App.js
import React, { useState, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import Notification from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/util";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

function App({ isLoggedIn, logOut }) {
  const context = useContext(AppContext);
  const [user, setUser] = useState(context.user);
  const [displayDrawer, setDisplayDrawer] = useState(true); // ✅ per test instruction

  const handleDisplayDrawer = useCallback(() => setDisplayDrawer(true), []);
  const handleHideDrawer = useCallback(() => setDisplayDrawer(false), []);

  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  const handleLogOut = useCallback(() => {
    setUser({ email: "", password: "", isLoggedIn: false });
    logOut();
  }, [logOut]);

  return (
    <>
      <Notification
        listNotifications={listNotifications}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
        displayDrawer={displayDrawer}
      />
      <div className={css(styles.body)}>
        <Header logOut={handleLogOut} />
        {isLoggedIn || user?.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <div className={css(styles.login)}>
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={logIn} />
            </BodySectionWithMarginBottom>
          </div>
        )}
        <div className={css(styles.news)}>
          <BodySection title="News from the School">
            <p>Lorem ipsum hello world</p>
          </BodySection>
        </div>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    borderTop: "5px #E0354B solid",
    fontStyle: "italic",
    backgroundColor: "#fff",
  },
  news: {
    marginLeft: 30,
  },
  login: {
    "@media only screen and (max-width: 600px)": {
      margin: 30,
    },
  },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

export default App;
