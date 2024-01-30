import { useEffect, useState } from 'react';
import useApi from '@hooks/useApi';
import useGetCharacterData from '@hooks/useGetCharacterData';
import HomeView from './HomeView';

const Home = () => {
  const [api, setApi] = useState<string>('');
  const [ocid, setOcid] = useState<string | undefined>(undefined);

  const { fetchData } = useApi({ id: api, setOcid });
  const { data, fetchCharacterData } = useGetCharacterData(ocid);

  const handleChangeCharacterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApi(e.target.value);
  };

  useEffect(() => {
    if (!ocid) {
      return;
    }

    fetchCharacterData();

    console.log(data);
  }, [ocid]);

  return <HomeView value={api} onChange={handleChangeCharacterName} onClick={fetchData} />;
};

export default Home;
