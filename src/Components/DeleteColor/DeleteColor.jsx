import { useState, useEffect } from "react";

export function DeleteColor({
  color,
  onDeleteColor,
  onDeleteStart,
  onDeleteEnd,
  initialDeleteMode,
}) {
  const [isConfirming, setIsConfirming] = useState(initialDeleteMode || false);

  /*
  Sync internal state with prop: Ensures component reacts if 'initialDeleteMode' changes after mount.
  Primarily for robustness/reusability, as useState handles the initial mount case here.
  */
  useEffect(() => {
    if (initialDeleteMode !== undefined) {
      setIsConfirming(initialDeleteMode);
    }
  }, [initialDeleteMode]);

  function handleStartDelete() {
    setIsConfirming(true);
    if (onDeleteStart) onDeleteStart(); // Set the isDeleting state to true
    // This is used to show the confirmation dialog
  }

  function handleCancelDelete() {
    setIsConfirming(false);
    if (onDeleteEnd) onDeleteEnd(); // Set the isDeleting state to false
    // This is used to hide the confirmation dialog
  }

  function handleConfirmDelete() {
    onDeleteColor(color.id); // Call the onDeleteColor function passed from the parent component
    setIsConfirming(false);
    if (onDeleteEnd) onDeleteEnd(); // Set the isDeleting state to false
    // This is used to hide the confirmation dialog
  }

  return (
    <>
      {/* Conditional rendering for confirmation dialog */}
      {!isConfirming ? (
        <button onClick={handleStartDelete}>DELETE</button>
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
