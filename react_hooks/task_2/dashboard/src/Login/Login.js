import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

function Login({ login }) {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChangeEmail = (e) => {
    const email = e.target.value;
    setFormData((prev) => ({ ...prev, email }));

    // enable button if both email and password valid
    if (email && formData.password.length >= 8) {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    setFormData((prev) => ({ ...prev, password }));

    // enable button if both email and password valid
    if (formData.email && password.length >= 8) {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (login) login(formData.email, formData.password);
  };

  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          className={css(styles.input)}
          value={formData.email}
          onChange={handleChangeEmail}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          className={css(styles.input)}
          value={formData.password}
          onChange={handleChangePassword}
        />
        <button
          type="submit"
          className={css(styles.button)}
          disabled={!enableSubmit}
        >
          OK
        </button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  body: {
    margin: 50,
    "@media only screen and (max-width: 600px)": {
      margin: 0,
    },
  },
  input: {
    marginLeft: 20,
    marginRight: 20,
    "@media only screen and (max-width: 600px)": {
      marginTop: 10,
      marginBottom: 10,
    },
  },
  button: {
    "@media only screen and (max-width: 600px)": {
      display: "flex",
      marginTop: 10,
    },
  },
});

export default Login;
