import { React, useState } from "react";
import { useLogin } from "../hooks/useLogin";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, pending } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <h3>Not Defteri Login</h3>
        <label>Email Adres:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password :</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {!pending && <button type="submit">Giriş</button>}
        {pending && (
          <button type="submit" disabled>
            İşlem Sürüyor
          </button>
        )}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
