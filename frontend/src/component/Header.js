import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/");
  }

  return (
    <React.StrictMode>
      <div className="logo-container" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <img src="./로고 최종.png" alt="로고" className="logo" />
      </div>
      <div className="login-container">
        <input type="text" placeholder="ID" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="login-button">로그인</button>
        <a href = "signup" className="signup-button">회원가입</a>
      </div>
    </React.StrictMode>
  );
}

export default Header;
