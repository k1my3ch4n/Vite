import { useEffect, useState } from 'react';
import useApi from '@hooks/useApi';
import useGetCharacterData from '@hooks/useGetCharacterData';
import Button from '@components/Button';

const Home = () => {
  const [api, setApi] = useState<string>('');
  const [ocid, setOcid] = useState<string | undefined>(undefined);

  const { fetchData } = useApi({ id: api, setOcid });
  const { data, fetchCharacterData } = useGetCharacterData(ocid);

  useEffect(() => {
    if (!ocid) {
      return;
    }

    fetchCharacterData();
  }, [ocid]);

  return (
    <>
      <h1>Mashboard</h1>
      <div className="card">
        <input value={api} onChange={(e) => setApi(e.target.value)} />
        <Button variant="red" onClick={fetchData}>
          검색
        </Button>
      </div>
      {data && (
        <div>
          <p>id : {data.character_name}</p>
          <p>
            레벨 : {data.character_level} {data.character_exp_rate}%
          </p>
          <p>길드 : {data.character_guild_name ?? '길드 없음'}</p>
          {/* <p>{data.character_image}</p> */}
          <p>월드 이름 : {data.world_name}</p>
        </div>
      )}
    </>
  );
};

export default Home;
