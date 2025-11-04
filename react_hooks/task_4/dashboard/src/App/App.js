// App.js
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/util";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";

function App({ isLoggedIn, logOut }) {
  // ✅ Hook state replacing class state
  const [displayDrawer, setDisplayDrawer] = useState(true);

  const handleDisplayDrawer = useCallback(() => setDisplayDrawer(true), []);
  const handleHideDrawer = useCallback(() => setDisplayDrawer(false), []);

  return (
    <div className={css(styles.body)}>
      <Notifications
        listNotifications={listNotifications}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
        displayDrawer={displayDrawer}
      />
      <Header logOut={logOut} />
      {isLoggedIn ? (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom>
      ) : (
        <div className={css(styles.login)}>
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
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
