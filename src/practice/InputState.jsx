import { useState } from "react";

function Sapa() {
  const [name, setName] = useState("");

  return (
    <div>
      {/* Input dikontrol dengan State */}
      <input
        type="text"
        placeholder="Masukkan nama"
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Halo, {name}</h2>
    </div>
  );
}

export default Sapa;
