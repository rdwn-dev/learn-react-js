import { useState } from "react";

export function Messages() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLogin(!isLogin)}>
        {/* Conditional Rendering */}
        {isLogin ? "Logout" : "Login"}
      </button>

      {/* 
        Jika tombol isLogin === false -> tidak tampil 
        Jika tombil isLogin === true -> tampil tag <h2></h2>
      */}
      {isLogin && <h2>Selamat datang, User</h2>}
    </div>
  );
}
