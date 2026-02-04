function Fruits() {
  const fruitsName = ["Melocotón", "Fresa", "Mango", "Plátano"];

  <div>Hola</div>
  return (
    <div>
      <h1>Fruits Page</h1>
      <ul>
        {fruitsName.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default Fruits