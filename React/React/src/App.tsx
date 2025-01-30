// import UsingProps from "./UsingProps";

// const App = () => {
//   let names = ["ram", "hari", "shyam"];
//   const handleSelection = (name: string) => {
//     console.log(name);
//   };
//   return (
//     <>
//       <UsingProps
//         names={names}
//         title="Friends name: "
//         onSelection={handleSelection}
//       />
//     </>
//   );
// };

// export default App;

// import PassingFunctionviaProps from "./PassingFunctionviaProps";

// const App = () => {
//   let countries = ["Nepal", "USA", "Uk", "Japan"];
//   const handleSelection = (country: string) => {
//     console.log(country);
//   };
//   return (
//     <>
//       <PassingFunctionviaProps
//         countries={countries}
//         title="List of Countries: "
//         onSelection={handleSelection}
//       />
//     </>
//   );
// };

// export default App;

// import ChildrenProps from "./ChildrenProps";
// import Alert from "./ChildrenProps";

// const App = () => {
//   return (
//     <>
//       <Alert>
//         Hello <span>World</span>
//       </Alert>

//       <ChildrenProps>
//         Hello <span>Children</span>, Hello
//       </ChildrenProps>
//     </>
//   );
// };

// export default App;

import { useState } from "react";

import Button from "./Button";
import AlertDismissing from "./AlertDismissing";
const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      {alertVisible && (
        <AlertDismissing
          onClose={() => {
            setAlertVisible(false);
          }}
        >
          My Alert
        </AlertDismissing>
      )}
      <Button color="danger" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </>
  );
};

export default App;
