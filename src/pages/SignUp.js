import { React, useState } from "react";
import { useSignup } from "../hooks/useSignup";
export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { error, pending, signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      signup(email, password, userName);
    } else {
      alert("Parolalar eşleşmedi");
    }
  };
  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Not Defteri SignUp</h3>
        <label>User Name :</label>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
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
        <label>Confirm Password :</label>
        <input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        {!pending && <button type="submit">Üye Ol</button>}
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
