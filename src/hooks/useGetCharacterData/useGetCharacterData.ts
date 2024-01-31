import axios from 'axios';

import { useRecoilState } from 'recoil';
import characterAtom from '@recoil/user/character';

const baseURL = import.meta.env.VITE_NEXON_API;
const url = import.meta.env.VITE_MY_API;

const useGetCharacterData = () => {
  const [characterData, setCharacterData] = useRecoilState(characterAtom);

  const fetchCharacterData = async (ocid?: string) => {
    try {
      console.log('ocid : ', ocid);

      const response = await axios.get(
        `${baseURL}/maplestory/v1/character/basic?ocid=${ocid}&date=2024-01-24`,
        {
          headers: {
            'x-nxopen-api-key': url,
          },
        },
      );

      setCharacterData(response.data);
    } catch (e) {
      console.log('characterData 조회에 실패했습니다 .');
    }
  };

  return {
    characterData,
    fetchCharacterData,
  };
};

export default useGetCharacterData;
