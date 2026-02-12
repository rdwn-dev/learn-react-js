// PRACTICE 1 - RENDER LIST + COMPONENT

export function ProdukCard({ nama, harga }) {
  return (
    <div>
      <h3>{nama}</h3>
      <p>Rp {harga}</p>
    </div>
  );
}
