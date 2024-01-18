import axios from "axios";
import { useState } from "react";

const baseURL = import.meta.env.VITE_NEXON_API;

const url = import.meta.env.VITE_MY_API;

const useApi = (id: string) => {
  const [ocid, setOcid] = useState<string>();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/maplestory/v1/id?character_name=${id}`,
        {
          headers: {
            "x-nxopen-api-key": url,
          },
        }
      );

      setOcid(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(ocid);

  return {
    ocid,
    fetchData,
  };
};

export default useApi;
