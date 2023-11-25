"use client";

import { useContext, useState } from "react";
import { NoteDataContext } from "./NoteEditor.jsx";

export const NoteCardInput = () => {
  const { addNote } = useContext(NoteDataContext);
  const [newNote, setNote] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNote(event.target.value);
    }
  };

  const handleAdd = () => {
    if (newNote.trim() !== "") {
      addNote(newNote);
      setNote("");
    }
  };

  return (
    <div className="bg-emerald-500 p-4 rounded-xl h-fit">
      <textarea
        onChange={handleChange}
        placeholder="Type to add a note..."
        className="w-full h-[220px] bg-transparent focus:outline-none resize-none placeholder:text-slate-50"
        value={newNote}
      />
      <div className="space-x-2 flex justify-between items-center">
        <small className="text-base font-medium">
          {characterLimit - newNote.length} Remaining
        </small>
        <button className="btnPrimary" onClick={handleAdd}>
          Save
        </button>
      </div>
    </div>
  );
};
