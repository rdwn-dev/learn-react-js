import { useState } from "react";

export function Mahasiswa() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    // Form Sederhana
    <div>
      <input
        type="text"
        placeholder="Masukan nama"
        name={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Umur"
        name={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <p>
        Halo {name}, umur kamu {age} tahun
      </p>
    </div>
  );
}
