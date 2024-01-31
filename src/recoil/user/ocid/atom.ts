import { atom } from 'recoil';

const ocidAtom = atom<string | null>({
  key: 'ocidAtom',
  default: null,
});

export default ocidAtom;
