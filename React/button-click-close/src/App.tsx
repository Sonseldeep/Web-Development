import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}

      <Button onClick={() => setAlertVisible(true)}>Click Me</Button>
    </>
  );
};

export default App;
