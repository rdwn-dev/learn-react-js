// PRACTICE 2 - RENDER LIST OBJECT

export function Product() {
  const products = [
    { id: 1, name: "Laptop", price: 5000000 },
    { id: 2, name: "Mouse", price: 150000 },
    { id: 3, name: "Keyboard", price: 250000 },
  ];

  return (
    <div>
      <h1>Latihan Render List Pakai Object</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Rp. {product.price}</p>
        </div>
      ))}
    </div>
  );
}
