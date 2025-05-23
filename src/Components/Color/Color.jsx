import { useState } from "react";
import "./Color.css";
import { DeleteColor } from "../DeleteColor/DeleteColor";
import { EditColor } from "../EditColor/EditColor";
import { CopyToClipboard } from "../CopyToClipboard/CopyToClipboard";

export default function Color({ color, onDeleteColor, onEditColor }) {
  // State to manage editing and deleting modes
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <CopyToClipboard text={color.hex} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      <div className="color-card-buttons">
        {/* Show Delete and Edit Button */}
        {!isEditing && !isDeleting && (
          <>
            <DeleteColor
              color={color}
              onDeleteColor={onDeleteColor}
              onDeleteStart={() => setIsDeleting(true)}
            />
            <EditColor
              color={color}
              onEditColor={onEditColor}
              onEditStart={() => setIsEditing(true)}
            />
          </>
        )}

        {/* Show EditColor Component when isEditing state is true */}
        {isEditing && (
          <EditColor
            color={color}
            onEditColor={onEditColor}
            onEditEnd={() => setIsEditing(false)}
            initialEditMode={true}
          />
        )}

        {/* Show DeleteColor Component when isDeleting state is true */}
        {isDeleting && (
          <DeleteColor
            color={color}
            onDeleteColor={onDeleteColor}
            onDeleteEnd={() => setIsDeleting(false)}
            initialDeleteMode={true}
          />
        )}
      </div>
    </div>
  );
}
