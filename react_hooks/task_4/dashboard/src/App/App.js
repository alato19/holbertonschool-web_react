import React, { useState, useCallback, useEffect } from "react";
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

function App() {
  // User state management
  const [user, setUser] = useState({
    email: "",
    password: "",
    isLoggedIn: false,
  });

  // Drawer state management
  const [displayDrawer, setDisplayDrawer] = useState(false);

  // Notifications state management
  const [listNotifications, setListNotifications] = useState([
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ]);

  // Login function - uses setter, does not mutate state
  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  // Logout function - uses setter, does not mutate state
  const logOut = useCallback(() => {
    setUser({ email: "", password: "", isLoggedIn: false });
  }, []);

  // Drawer handlers with stable references
  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, []);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, []);

  // Mark notification as read (delete from UI)
  const markNotificationAsRead = useCallback((id) => {
    setListNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  }, []);

  // Keyboard event handler for Ctrl+h
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "h") {
        alert("Logging you out");
        logOut();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [logOut]);

  return (
    <React.Fragment>
      <Notifications
        listNotifications={listNotifications}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
        displayDrawer={displayDrawer}
        markNotificationAsRead={markNotificationAsRead}
      />
      <div className={css(styles.body)}>
        <Header logOut={logOut} />
        {user.isLoggedIn ? (
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
    </React.Fragment>
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

// PropTypes validation to catch wrong prop data types
App.propTypes = {
  // No props needed since we manage state internally
};

App.defaultProps = {
  // No default props needed
};

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

export default App;
