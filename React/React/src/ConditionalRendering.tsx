const ConditionalRendering = () => {
  let items = ["New York", "San Franciso", "Tokyo", "London"];
  items = [];

  //   const message = items.length === 0 ? <p>No data found</p> : null;

  return (
    <>
      <h1>List:</h1>

      {items.length === 0 && <p>No data found in items</p>}

      <ul>
        {items.map((item) => (
          <li key={Math.random()}> {item}</li>
        ))}
      </ul>
    </>
  );
};

export default ConditionalRendering;
