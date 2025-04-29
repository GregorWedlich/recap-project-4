import { useState } from "react";

export function DeleteColor({ color, onDeleteColor }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  // if the user clicks the delete button, show the confirmation message "Really delete?"
  function handleDeleteClick() {
    setShowConfirmation(true);
  }

  // if the user clicks the delete button, call the onDeleteColor function and pass the color id to it
  function handleConfirmDelete() {
    onDeleteColor(color.id);
    setShowConfirmation(false);
  }

  // if the user clicks the cancel button, hide the confirmation message
  function handleCancelDelete() {
    setShowConfirmation(false);
  }

  return (
    <>
      {/* Conditional rendering for confirmation dialog */}
      {!showConfirmation ? (
        <button onClick={handleDeleteClick}>DELETE</button>
      ) : (
        <div>
          <p className="color-card-headline">Really delete?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
    </>
  );
}
