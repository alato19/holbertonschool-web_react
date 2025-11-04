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

function App({ isLoggedIn }) {
  // ✅ Context user (initially from context)
  const context = useContext(AppContext);
  const [user, setUser] = useState(context.user);

  // ✅ Drawer visibility (initially true as per requirement)
  const [displayDrawer, setDisplayDrawer] = useState(false);

  // ✅ Notifications list state
  const [notifications, setNotifications] = useState(listNotifications);

  // ✅ Handlers (memoized to prevent unnecessary re-renders)
  const handleDisplayDrawer = useCallback(() => setDisplayDrawer(true), []);
  const handleHideDrawer = useCallback(() => setDisplayDrawer(false), []);

  // ✅ Log in/out handlers (functional style)
  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  const logOut = useCallback(() => {
    setUser({ email: "", password: "", isLoggedIn: false });
  }, []);

  // ✅ Mark notification as read
  const markNotificationAsRead = useCallback((id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif.id !== id)
    );
  }, []);

  return (
    <>
      <Notification
        listNotifications={notifications}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
        displayDrawer={displayDrawer}
      />
      <div className={css(styles.body)}>
        <Header />
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
};

App.defaultProps = {
  isLoggedIn: false,
};

// ✅ Static data (unchanged)
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
