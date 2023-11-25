import { NoteEditor } from "@/components/NoteEditor.jsx";

async function getNotes() {
  const res = await fetch(
    "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='akbarh@gmail.com')",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const { items } = await getNotes();

  return <NoteEditor data={items} />;
}
