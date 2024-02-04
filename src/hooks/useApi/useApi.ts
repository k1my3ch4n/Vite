import ocidAtom from '@recoil/user/ocid/atom';
import axios from 'axios';

const baseURL = import.meta.env.VITE_NEXON_API;
const url = import.meta.env.VITE_MY_API;

import { useSetRecoilState } from 'recoil';

const useApi = () => {
  const setOcid = useSetRecoilState(ocidAtom);

  const fetchOcid = async (characterId: string) => {
    try {
      const response = await axios.get(
        `${baseURL}/maplestory/v1/id?character_name=${characterId}`,
        {
          headers: {
            'x-nxopen-api-key': url,
          },
        },
      );

      setOcid(response.data.ocid);
    } catch (e) {
      console.log('ocid 조회에 실패했습니다.');
    }
  };

  return {
    fetchOcid,
  };
};

export default useApi;
