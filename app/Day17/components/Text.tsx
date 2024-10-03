import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("This is a Text");

  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <Draggable>
      <div className="cursor-move">
        {editMode ? (
          <div>
            <input
              className="outline-none border-[3px] border-blue-800 p-3"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <button
              onClick={handleSave}
              className="ml-2 p-2 bg-green-500 text-white rounded"
            >
              Save
            </button>
           
          </div>
        ) : (
          <h1
            onDoubleClick={() => setEditMode(true)}
            className="font-bold text-2xl"
          >
            {value}
          </h1>
        )}
      </div>
    </Draggable>
  );
};

export default Text;