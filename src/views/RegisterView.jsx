import {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import {walletApi} from "../api";
import {logIn} from "../redux/userSlice";

export const RegisterView = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => setError(), [firstName, lastName, email, password, passwordConfirm]);

  const submit = useCallback(
    async (ev) => {
      ev.preventDefault();
      if (password != passwordConfirm) {
        setError("The passwords don't match");

        return;
      }
      setError();
      try {
        await walletApi.post("/users", {
          firstName,
          lastName,
          email,
          password,
          roleId: 1,
          points: 50,
        });
      } catch (e) {
        setError(e.response?.data?.error || e.message);

        return;
      }
      const resp = await dispatch(logIn({email, password}));

      if (resp.error) setError(resp.error.message);
      else navigate("/home");
    },
    [firstName, lastName, email, password, passwordConfirm, navigate, dispatch],
  );

  return (
    <form className="p-4 max-w-xl mx-auto mt-5" onSubmit={submit}>
      <h1 className="text-primary">Create an account</h1>
      {error && (
        <div>
          <b className="text-secondary">Error: </b>
          {error}
        </div>
      )}
      <label>
        First name
        <input
          required
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last name
        <input
          required
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Email
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input
          required
          minLength={8}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Repeat password
        <input
          required
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </label>
      <p>
        Already have an account? <Link to="/auth/login">Log in</Link>
      </p>
      <button className="float-right">Register</button>
    </form>
  );
};
