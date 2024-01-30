import { useState } from 'react';
import HomeView from './HomeView';
import { useNavigate } from 'react-router';
import ROUTES from '@constants/routes';

const Home = () => {
  const navigate = useNavigate();

  const [api, setApi] = useState<string>('');

  const handleChangeCharacterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApi(e.target.value);
  };

  const handleClickSearchButton = () => {
    navigate(ROUTES.detail);
  };

  return (
    <HomeView value={api} onChange={handleChangeCharacterName} onClick={handleClickSearchButton} />
  );
};

export default Home;
