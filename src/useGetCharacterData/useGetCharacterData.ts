import axios from "axios";
import { useState } from "react";

const baseURL = import.meta.env.VITE_NEXON_API;
const url = import.meta.env.VITE_MY_API;

interface CharacterData {
  character_class: string;
  character_class_level: string;
  character_exp: number;
  character_exp_rate: string;
  character_gender: string;
  character_guild_name: string | null;
  character_image: string;
  character_level: number;
  character_name: string;
  date: string;
  world_name: string;
}

const useGetCharacterData = (ocid?: string) => {
  const [data, setData] = useState<CharacterData | undefined>(undefined);

  const fetchCharacterData = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/maplestory/v1/character/basic?ocid=${ocid}&date=2024-01-17`,
        {
          headers: {
            "x-nxopen-api-key": url,
          },
        }
      );

      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    data,
    fetchCharacterData,
  };
};

export default useGetCharacterData;
