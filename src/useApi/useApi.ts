import axios from "axios";

const baseURL = import.meta.env.VITE_NEXON_API;
const url = import.meta.env.VITE_MY_API;

const useApi = ({
  id,
  setOcid,
}: {
  id: string;
  setOcid: (value: string) => void;
}) => {
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

      const ocidData = response.data;

      setOcid(ocidData.ocid);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    fetchData,
  };
};

export default useApi;
