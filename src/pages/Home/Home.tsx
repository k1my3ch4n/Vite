import { useState } from 'react';
import HomeView from './HomeView';
import { useNavigate } from 'react-router';
import ROUTES from '@constants/routes';
import { replaceParam } from '@utils/navigateUtil';

const Home = () => {
  const navigate = useNavigate();

  const [characterId, setCharacterId] = useState<string>('');

  const handleChangeCharacterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterId(e.target.value);
  };

  const handleClickSearchButton = () => {
    navigate(
      replaceParam({
        path: ROUTES.detail,
        params: { characterId },
      }),
    );
  };

  return (
    <HomeView
      value={characterId}
      onChange={handleChangeCharacterName}
      onClick={handleClickSearchButton}
    />
  );
};

export default Home;
