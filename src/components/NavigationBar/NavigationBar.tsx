import ROUTES from '@constants/routes';
import { useNavigate } from 'react-router-dom';

import styles from './NavigationBar.module.scss';

const NAVIGATION_BAR_TITLE = [
  {
    title: '캐릭터 정보',
    path: ROUTES.character,
  },
  {
    title: '유니온 정보',
    path: ROUTES.union,
  },
  {
    title: '길드 정보',
    path: ROUTES.guild,
  },
  {
    title: '확률 정보',
    path: ROUTES.statistics,
  },
  {
    title: '랭킹 정보',
    path: ROUTES.rank,
  },
];

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.wrapper}>
      {NAVIGATION_BAR_TITLE.map(({ title, path }) => {
        return (
          <div className={styles.title} onClick={() => handleClick(path)}>
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default NavigationBar;
