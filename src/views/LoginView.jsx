import {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import {logIn} from "../redux/userSlice";

export const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => setError(), [email, password]);

  const submit = useCallback(
    async (ev) => {
      ev.preventDefault();
      setError();
      const resp = await dispatch(logIn({email, password}));

      if (resp.error) setError(resp.error.message);
      else navigate("/home");
    },
    [email, password, navigate, dispatch],
  );

  return (
    <form className="p-4 max-w-xl mx-auto mt-5" onSubmit={submit}>
      <h1 className="text-primary">Welcome back!</h1>
      {error && (
        <div>
          <b className="text-secondary">Error: </b>
          {error}
        </div>
      )}
      <label>
        Email
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <p>
        No account? <Link to="/auth/register">Register</Link>
      </p>
      <button className="float-right">Log in</button>
    </form>
  );
};
