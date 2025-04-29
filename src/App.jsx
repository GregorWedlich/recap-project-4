import { useState } from "react";
import { initialColors } from "./lib/colors";
import { ColorForm } from "./Components/ColorForm/ColorForm";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  // Initial state of colors
  const [colors, setColors] = useState(initialColors);

  // combine the newcolors with the intialcolors, This function is called in the ColorForm component and gets the new color
  function handleAddColor(newColor) {
    setColors([newColor, ...colors]);
  }

  function handleDeleteColor(id) {
    // filter the colors array to remove the color with the given id
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  }

  function handleEditColor(id, newColor) {
    // map over the colors array and update the color with the given id
    const newColors = colors.map((color) => {
      if (color.id === id) {
        return { ...color, ...newColor };
      }
      return color;
    });
    setColors(newColors);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      {/* Pass the handleAddColor function as prop to the form */}
      <ColorForm onAddColor={handleAddColor} />
      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeleteColor}
            onEditColor={handleEditColor}
          />
        );
      })}
    </>
  );
}

export default App;
