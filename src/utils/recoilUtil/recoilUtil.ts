import type { AtomEffect } from 'recoil';

// recoil 공식 문서 : https://recoiljs.org/docs/guides/atom-effects/#local-storage-persistence
export const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        return localStorage.removeItem(key);
      }

      return localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
