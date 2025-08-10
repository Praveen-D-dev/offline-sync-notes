import { useEffect, useState } from 'react';
import { getNotes } from '../utils/db';

const NoteList = ({ refresh }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const loadNotes = async () => {
      const storedNotes = await getNotes();
      setNotes(storedNotes);
    };
    loadNotes();
  }, [refresh]);

  return (
    <div>
      <h3>Saved Notes</h3>
      {notes.length === 0 && <p>No notes yet.</p>}
      <ul>
        {notes.map((note) => (
          <li key={note.id} style={{ marginBottom: '10px' }}>
            <div><strong>{note.timestamp}</strong></div>
            <div>{note.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;