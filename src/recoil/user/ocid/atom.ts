import { atom } from 'recoil';

import { localStorageEffect } from '@utils/recoilUtil';

const ocidAtom = atom<string | null>({
  key: 'ocidAtom',
  default: null,
  effects: [localStorageEffect<string | null>('ocid')],
});

export default ocidAtom;
