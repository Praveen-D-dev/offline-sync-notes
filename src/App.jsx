import { useState } from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleNoteAdded = () => {
    setRefresh(!refresh); // trigger re-render for NoteList
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Offline Note Sync</h2>
      <NoteEditor onNoteAdded={handleNoteAdded} />
      <NoteList refresh={refresh} />
    </div>
  );
}

export default App;