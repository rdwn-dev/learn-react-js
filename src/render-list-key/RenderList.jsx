// PRACTICE 1 - RENDER LIST ARRAY

export function Fruits() {
  const fruits = ["Apple", "Mango", "Jeyuk"];

  return (
    <div>
      <h1>Daftar Buah</h1>
      {fruits.map((fruit, index) => (
        /* React Butuh Key:
            Mengidentifikasi item
            Optimasi re-render
            Menghindari bug
        */
        <p key={index}>{fruit}</p>
      ))}
    </div>
  );
}
