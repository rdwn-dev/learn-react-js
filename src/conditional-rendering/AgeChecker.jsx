export function AgeChecker({ age }) {
  if (age < 13) {
    return <h3>Anak-anak</h3>;
  }

  if (age <= 17) {
    return <h3>Remaja</h3>;
  }

  return <h3>Dewasa</h3>;
}
