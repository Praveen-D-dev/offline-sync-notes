import { useState } from 'react';
import { addNote } from '../utils/db';

const NoteEditor = ({ onNoteAdded }) => {
  const [text, setText] = useState('');

  const handleAddNote = async () => {
    if (!text.trim()) return;
    const newNote = { content: text, timestamp: new Date().toLocaleString() };
    await addNote(newNote);
    setText('');
    onNoteAdded(); // refresh notes list
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note..."
        style={{
          width: '100%',
          height: '80px',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '6px',
          border: '1px solid #ccc'
        }}
      />
      <button
        onClick={handleAddNote}
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Save Note
      </button>
    </div>
  );
};

export default NoteEditor;