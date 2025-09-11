import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./App.css";

export default function App() {
  // Fake registered users (demo only)
  const users = [
    { username: "Andi", email: "andi@example.com", password: "1234" },
    { username: "Aldo", email: "aldo@example.com", password: "1234" },
    { username: "Lushi", email: "lushi@example.com", password: "1234" },
    { username: "Silvi", email: "silvi@example.com", password: "1234" },
    { username: "Jona", email: "jona@example.com", password: "1234" },
    { username: "Serxhio", email: "serxhio@example.com", password: "1234" },
  ];

  // Form state
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState("");

  // On mount: restore session from cookie if present
  useEffect(() => {
    const sessionUser = Cookies.get("sessionUser");
    if (sessionUser) setLoggedInUser(sessionUser);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const id = usernameOrEmail.trim();
    const pwd = password;

    // Find user by username OR email and matching password
    const found = users.find(
      (u) =>
        (u.username.toLowerCase() === id.toLowerCase() ||
          u.email.toLowerCase() === id.toLowerCase()) &&
        u.password === pwd
    );

    if (!found) {
      setError("Invalid credentials. Try one of the demo users.");
      return;
    }

    // Save session cookie
    if (rememberMe) {
      // Persist for 7 days
      Cookies.set("sessionUser", found.username, {
        expires: 7,
        sameSite: "Lax",
      });
    } else {
      // Session cookie (clears on browser close)
      Cookies.set("sessionUser", found.username, { sameSite: "Lax" });
    }

    setLoggedInUser(found.username);
    setUsernameOrEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    // Remove cookie immediately
    Cookies.remove("sessionUser");
    setLoggedInUser(null);
    setRememberMe(false);
    setError("");
  };

  if (loggedInUser) {
    return (
      <div className="app-wrap">
        <div className="card">
          <h1>Welcome, {loggedInUser}! 🎉</h1>
          <p>You are now logged in. This session is tracked by a cookie.</p>
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-wrap">
      <form className="card" onSubmit={handleLogin}>
        <h1>Login</h1>

        <label className="label" htmlFor="id">
          Username or Email
        </label>
        <input
          id="id"
          className="input"
          type="text"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          autoComplete="username"
          required
        />

        <label className="label" htmlFor="pwd">
          Password
        </label>
        <input
          id="pwd"
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <label className="checkbox">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe((v) => !v)}
          />
          Remember me (7 days)
        </label>

        {error && <div className="error">{error}</div>}

        <button className="btn" type="submit">
          Login
        </button>

        <div className="hint">
          <strong>Demo users</strong>: Andi / andi@example.com (pwd: 1234),
          Aldo, Lushi, Silvi, Jona, Serxhio
        </div>
      </form>
    </div>
  );
}
