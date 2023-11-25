"use client";

import { useContext, useState, useRef, useEffect } from "react";
import { NoteDataContext } from "./NoteEditor.jsx";

export const NoteCard = ({ id, content, created }) => {
  const { deleteNote, updateNote } = useContext(NoteDataContext);
  const [newContent, setNewContent] = useState(content);
  const [onEdit, setOnEdit] = useState(false);
  const textareaRef = useRef(null);

  const originalDate = new Date(created);
  const year = originalDate.getFullYear();
  const month = originalDate.getMonth() + 1; // Perlu ditambah 1 karena indeks bulan dimulai dari 0
  const day = String(originalDate.getDate()).padStart(2, "0");
  const hours = String(originalDate.getHours()).padStart(2, "0");
  const minutes = String(originalDate.getMinutes()).padStart(2, "0");
  const seconds = String(originalDate.getSeconds()).padStart(2, "0");
  const formattedDateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  const handleUpdate = () => {
    console.log(newContent);
    updateNote(id, newContent);
    setOnEdit(false);
  };

  useEffect(() => {
    if (onEdit) {
      textareaRef.current.focus();
    }
  }, [onEdit]);

  return (
    <div className="bg-yellow-400 p-4 rounded-xl h-fit">
      {onEdit ? (
        <textarea
          ref={textareaRef}
          onChange={(event) => setNewContent(event.target.value)}
          value={newContent}
          name=""
          className="w-full h-[220px] bg-transparent focus:outline-none resize-none"
          id=""
        />
      ) : (
        <textarea
          disabled
          className="w-full h-[220px] bg-transparent focus:outline-none resize-none"
        >
          {content}
        </textarea>
      )}

      <div className="space-x-2 flex justify-between items-center">
        <div>{formattedDateString}</div>
        <div className="flex gap-2">
          {onEdit ? (
            <button className="btnPrimary" onClick={handleUpdate}>
              Update
            </button>
          ) : (
            <button className="btnSecondary" onClick={() => setOnEdit(true)}>
              Edit
            </button>
          )}
          <button className="btnDanger" onClick={() => deleteNote(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
