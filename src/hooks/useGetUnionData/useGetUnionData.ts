import axios from 'axios';
import { useState } from 'react';

interface UnionDataType {
  date: string;
  union_level: number;
  union_grade: string;
  union_artifact_level: number;
  union_artifact_exp: number;
  union_artifact_point: number;
}

const INITIAL_UNION_DATA = {
  date: '',
  union_level: 0,
  union_grade: '',
  union_artifact_level: 0,
  union_artifact_exp: 0,
  union_artifact_point: 0,
};

const baseURL = import.meta.env.VITE_NEXON_API;
const url = import.meta.env.VITE_MY_API;

const useGetUnionData = () => {
  const [unionData, setUnionData] = useState<UnionDataType>(INITIAL_UNION_DATA);

  const fetchUnionData = async (ocid: string) => {
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
