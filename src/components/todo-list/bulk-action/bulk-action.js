import React from "react";
import "./bulk-action.css";

function BulkAction({ selectedTasks, handleRemoveTask }) {
  return (
    <div className="bulk-action-container">
      <div className="bulk-action-title">Bulk Action:</div>
      <div className="spacer" />
      <button className="bulk-action-done">Done</button>
      <button
        className="bulk-action-remove"
        onClick={() => handleRemoveTask(...selectedTasks)}
      >
        Remove
      </button>
    </div>
  );
}

export default BulkAction;
