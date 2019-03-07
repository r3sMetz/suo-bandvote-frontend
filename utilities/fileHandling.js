import { saveAs } from 'file-saver';

export const saveStorage = localStorageString => {
  const blob = new Blob([localStorageString], {
    type: 'text/plain;charset=utf-8'
  });
  const date = Date.now();
  saveAs(blob, `${date}.txt`);
};
