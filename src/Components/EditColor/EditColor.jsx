import { useState, useEffect } from "react";
import { ColorInput } from "../ColorInput/ColorInput";

export function EditColor({
  color,
  onEditColor,
  onEditStart,
  onEditEnd,
  initialEditMode,
}) {
  const [isEditing, setIsEditing] = useState(initialEditMode || false);

  /*
  Sync internal state with prop: Ensures component reacts if 'initialEditMode' changes after mount.
  Primarily for robustness/reusability, as useState handles the initial mount case here.
  */
  useEffect(() => {
    if (initialEditMode !== undefined) {
      setIsEditing(initialEditMode);
    }
  }, [initialEditMode]);

  const [editedRole, setEditedRole] = useState(color.role);
  const [editedHex, setEditedHex] = useState(color.hex);
  const [editedContrastText, setEditedContrastText] = useState(
    color.contrastText
  );

  function handleStartEditing() {
    setIsEditing(true);
    setEditedRole(color.role);
    setEditedHex(color.hex);
    setEditedContrastText(color.contrastText);
    if (onEditStart) onEditStart();
  }

  function handleCancelEditing() {
    setIsEditing(false);
    if (onEditEnd) onEditEnd();
  }

  function handleSaveChanges() {
    const updatedColor = {
      role: editedRole,
      hex: editedHex,
      contrastText: editedContrastText,
    };

    onEditColor(color.id, updatedColor);
    setIsEditing(false);
    if (onEditEnd) onEditEnd();
  }

  return (
    <>
      {!isEditing ? (
        <button type="button" onClick={handleStartEditing}>
          Edit
        </button>
      ) : (
        <div className="edit-form">
          <div className="form-group">
            <label htmlFor="edit-role">
              Role
              <input
                type="text"
                id="edit-role"
                value={editedRole}
                onChange={(event) => setEditedRole(event.target.value)}
                required
              />
            </label>
          </div>

          <ColorInput
            colorValue={editedHex}
            onColorChange={setEditedHex}
            labelText="Hex"
            name="editHex"
          />

          <ColorInput
            colorValue={editedContrastText}
            onColorChange={setEditedContrastText}
            labelText="Contrast Text"
            name="editContrastText"
          />

          <div className="edit-buttons">
            <button type="button" onClick={handleSaveChanges}>
              Update Color
            </button>
            <button type="button" onClick={handleCancelEditing}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
