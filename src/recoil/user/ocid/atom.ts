import { atom } from 'recoil';

import { localStorageEffect } from '@utils/recoilUtil';

const ocidAtom = atom<string | undefined>({
  key: 'ocidAtom',
  default: undefined,
  effects: [localStorageEffect<string | undefined>('ocid')],
});

export default ocidAtom;
