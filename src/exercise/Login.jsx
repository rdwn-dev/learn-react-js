import { useState } from "react";

export function User() {
  const [isLogin, setLogin] = useState(false);

  return (
    <div>
      <h2>Status User: {isLogin ? "Login" : "Belum Login"}</h2>
      <button onClick={() => setLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
}
