import "./Color.css";
import { DeleteColor } from "../DeleteColor/DeleteColor";

export default function Color({ color, onDeleteColor }) {
  // console.log("Find Issue 1 ");
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {/* Prop drilling with onDeleteColor :-) */}
      <DeleteColor color={color} onDeleteColor={onDeleteColor} />
    </div>
  );
}
