"use client";

import { NoteCard } from "./NoteCard.jsx";
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NoteCardInput } from "./NoteCardInput.jsx";
import { Search } from "./Search.jsx";

export const NoteDataContext = createContext();

export const NoteEditor = ({ data }) => {
  const router = useRouter();
  const [notes, setNotes] = useState(data);
  const [searchText, setSearchText] = useState("");

  const addNote = async (newContent) => {
    await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: newContent,
          user: "akbarh@gmail.com",
          additionalData: "",
        }),
      }
    );
    router.refresh();
  };

  const deleteNote = async (id) => {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "DELETE",
      }
    );
    router.refresh();
  };

  const updateNote = async (id, newContent) => {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: newContent }),
      }
    );
    router.refresh();
  };

  useEffect(() => {
    setNotes(data);
  }, [data]);

  return (
    <NoteDataContext.Provider
      value={{ notes, addNote, deleteNote, updateNote }}
    >
      <Search handleSearchNote={setSearchText} />
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 ">
        {notes
          .filter((note) => note.content.toLowerCase().includes(searchText))
          .map(({ id, content, created }) => {
            return (
              <NoteCard key={id} id={id} content={content} created={created} />
            );
          })}
        <NoteCardInput />
      </section>
    </NoteDataContext.Provider>
  );
};
