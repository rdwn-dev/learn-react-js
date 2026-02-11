export function Role() {
  const role = "admin"; // user atau admin

  return (
    <div>
      <h1>{role === "admin" ? "Dashboard Admin" : "Dashboard User"}</h1>
    </div>
  );
}
