// src/utils/db.js
import Dexie from 'dexie';

const db = new Dexie('whatsappClone');
db.version(1).stores({
  contacts: 'id,name',
  messages: '++id,contactId,text,createdAt'
});

export { db };
