import { useEffect, useState } from 'react';
import HomeView from './HomeView';
import { useNavigate } from 'react-router';
import ROUTES from '@constants/routes';
import useApi from '@hooks/useApi';

const Home = () => {
  const navigate = useNavigate();

  const [characterId, setCharacterId] = useState<string>('');

  const { fetchOcid } = useApi();

  const handleChangeCharacterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterId(e.target.value);
  };

  const handleClickSearchButton = () => {
    navigate(ROUTES.character);

    fetchOcid(characterId);
  };

  useEffect(() => {
    const ocid = localStorage.getItem('ocid');

    if (ocid) {
      localStorage.clear();
    }
  }, []);

  return (
    <HomeView
      value={characterId}
      onChange={handleChangeCharacterName}
      onClick={handleClickSearchButton}
    />
  );
};

export default Home;
