import React from "react";
import { Checkbox } from "@headlessui/react";

const MyCheckbox = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
      <span className="ml-2">Check me</span>
    </Checkbox>
  );
};

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">
        My React App with DaisyUI and Flowbite
      </h1>
      <MyCheckbox />
      {/* Add more components as needed */}
    </div>
  );
};

export default App;
