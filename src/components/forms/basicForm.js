import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    // Replace this with actual authentication logic.
    // For demonstration purposes, assume the login is successful.
    const loginSuccessful = true;

    if (loginSuccessful) {
      // Redirect to the Dashboard page after successful login
      navigate("/dashboard");
    } else {
      console.log("Login failed");
      // Handle login failure (optional)
    }
  };

  return (
    <form action="" onSubmit={submitForm}>
      <div>
        <label htmlFor="email">Email</label><br />
        <TextField
          required
          type="text"
          id="email"
          name="email"
          variant="filled"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
      </div>
      <div>
        <label htmlFor="password" className="center-text">Password</label><br />
        <TextField
          required
          type="password"
          id="password"
          name="password"
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <br /><Button type="submit" variant="contained">Log In</Button>
      </div>
    </form>
  );
};

export default BasicForm;
