import PocketBase from 'pocketbase';

// Detecta se estamos em localhost ou produção
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
// Em produção, como o PB serve o front, a URL é a mesma do site
const url = isLocal ? 'http://127.0.0.1:8090' : window.location.origin;


export const pb = new PocketBase(url);

// Helper para pegar URL de arquivos
export const getFileUrl = (record, filename) => {
    if (!filename || filename.length === 0) return null;
    const f = Array.isArray(filename) ? filename[0] : filename;
    return `${url}/api/files/${record.collectionId}/${record.id}/${f}`;
};

export const getFileUrls = (record, filenames) => {
    if (!filenames || filenames.length === 0) return [];
    const files = Array.isArray(filenames) ? filenames : [filenames];
    return files.map(f => `${url}/api/files/${record.collectionId}/${record.id}/${f}`);
};
