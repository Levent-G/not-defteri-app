import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>NOT DEFTERİ</h1>
        </Link>

        <nav>
          {!user && (
            <div>
              <Link to="/login">Giriş</Link>
              <Link to="/signup">Üye Ol</Link>
            </div>
          )}
          {user && (
            <div>
              <span>{user.displayName}</span> &nbsp;
              <button onClick={logout}>Çıkış</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
