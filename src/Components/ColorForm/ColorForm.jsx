import "./ColorForm.css";

import { nanoid } from "nanoid"; // Add nanoid to generate unique ids for the colors
import { useState } from "react";
import { ColorInput } from "../ColorInput/ColorInput";

export function ColorForm({ onAddColor }) {
  const [colorRole, setColorRole] = useState("");
  const [colorHex, setColorHex] = useState("#000000");
  const [contrastHex, setContrastHex] = useState("#FFFFFF");

  function handleSubmit(event) {
    event.preventDefault();

    // get the form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // create color object
    const newColor = {
      id: nanoid(),
      hex: data.colorHex,
      role: data.colorRole,
      contrastText: data.contrastValue,
    };

    onAddColor(newColor); // pass the new color to the handleAddColor() function from App.jsx

    // reset form states
    setColorRole("");
    setColorHex("#000000");
    setContrastHex("#FFFFFF");
  }
  //   console.log(colorHex);

  return (
    <form onSubmit={handleSubmit} className="color-form">
      <label htmlFor="color-role" className="color-role">
        Role
        <div>
          <input
            type="text"
            id="color-role"
            name="colorRole" // we need it for the formData
            value={colorRole} // controlled input
            onChange={(event) => setColorRole(event.target.value)} // controlled input
            required
          />
        </div>
      </label>

      {/* DRY: Dont Repeat Yourself  */}
      <ColorInput
        colorValue={colorHex}
        onColorChange={setColorHex}
        labelText="Hex"
        name="colorHex"
      />

      <ColorInput
        colorValue={contrastHex} // current value from the state
        onColorChange={setContrastHex} // function to update the state
        labelText="Contrast Text"
        name="contrastValue"
      />

      <button type="submit">Add color</button>
    </form>
  );
}
