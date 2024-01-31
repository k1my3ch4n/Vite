import axios from 'axios';

import { useEffect } from 'react';

const baseURL = import.meta.env.VITE_NEXON_API;
const url = import.meta.env.VITE_MY_API;

import { useParams } from 'react-router-dom';
import useGetCharacterData from '@hooks/useGetCharacterData';

const useApi = () => {
  const { characterId } = useParams();

  const { characterData, fetchCharacterData } = useGetCharacterData();

  const fetchOcid = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/maplestory/v1/id?character_name=${characterId}`,
        {
          headers: {
            'x-nxopen-api-key': url,
          },
        },
      );

      await fetchCharacterData(response.data.ocid);
    } catch (e) {
      console.log('ocid 조회에 실패했습니다.');
    }
  };

  useEffect(() => {
    if (!characterId) {
      return;
    }

    fetchOcid();
  }, []);

  return {
    characterData,
  };
};

export default useApi;
