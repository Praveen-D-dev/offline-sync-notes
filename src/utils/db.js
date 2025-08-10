import { openDB } from 'idb';

export const initDB = async () => {
  return openDB('notes-db', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('notes')) {
        db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const addNote = async (note) => {
  const db = await initDB();
  return db.add('notes', note);
};

export const getNotes = async () => {
  const db = await initDB();
  return db.getAll('notes');
};