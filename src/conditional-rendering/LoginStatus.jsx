import { useState } from "react";

export function LoginStatus() {
  const [isLoginStatus, setIsLoginStatus] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setIsLoginStatus(!isLoginStatus)}>
        {isLoginStatus ? "Logout" : "Login"}
      </button>
      <br />
      {isLoginStatus ? "Halo, Andi" : "Silahkan Login"}
    </div>
  );
}
