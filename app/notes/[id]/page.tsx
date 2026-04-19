import { fetchNoteById } from "@/lib/api";
import NoteDetailClient from "./NoteDetails.client";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NotePage({ params }: Props) {
  const { id } = await params;
  let note;

  try {
    note = await fetchNoteById(id);
  } catch (error) {
    return notFound();
  }

  return <NoteDetailClient note={note} />;
}
