import { useState } from "react";

export function ToggleStatus() {
  const [isOnline, setOnline] = useState(false);

  return (
    <div>
      <h2>Status: {isOnline ? "Online" : "Offline"}</h2>
      <button onClick={() => setOnline(!isOnline)}>Toggle Status</button>
    </div>
  );
}
