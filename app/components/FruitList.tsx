export default function FruitList() {
  const fruits: string[] = ["Apple", "Banana", "Orange"];

  return (
    <ul className="mb-6 list-disc pl-6">
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
