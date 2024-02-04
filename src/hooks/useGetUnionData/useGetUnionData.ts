import ocidAtom from '@recoil/user/ocid';
import axios from 'axios';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';

const baseURL = import.meta.env.VITE_NEXON_API;
const url = import.meta.env.VITE_MY_API;

const useGetUnionData = () => {
  const [unionData, setUnionData] = useState();

  const ocid = useRecoilValue(ocidAtom);

  const fetchUnionData = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/maplestory/v1/user/union?ocid=${ocid}&date=2024-01-24`,
        {
          headers: {
            'x-nxopen-api-key': url,
          },
        },
      );

      setUnionData(response.data);
    } catch (e) {
      console.log('unionData 조회에 실패했습니다 .');
    }
  };

  return {
    unionData,
    fetchUnionData,
  };
};

export default useGetUnionData;
