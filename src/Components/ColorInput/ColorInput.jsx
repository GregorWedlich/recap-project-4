import "./ColorInput.css";

export function ColorInput({ colorValue, onColorChange, labelText, name }) {
  return (
    <div>
      <label htmlFor={name}>
        {labelText}
        <div>
          <input
            type="text"
            name={name}
            value={colorValue}
            onChange={(event) => onColorChange(event.target.value)}
            pattern="^#([A-Fa-f0-9]{6})$" // only HEX-Code pattern #FF0000
            title="Hex code (e.x. #FF0000)"
          />

          <input
            type="color"
            id={name}
            name={name}
            value={colorValue}
            onChange={(event) => onColorChange(event.target.value)}
          />
        </div>
      </label>
    </div>
  );
}
