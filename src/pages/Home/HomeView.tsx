import Button from '@components/Button';

import styles from './Home.module.scss';

const HomeView = ({
  value,
  onChange,
  onClick,
}: {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={styles.wrapper}>
      <h1>Mashboard</h1>
      <div className={styles.search}>
        <input value={value} onChange={onChange} />
        <Button variant="purple" onClick={onClick}>
          검색
        </Button>
      </div>
    </div>
  );
};

export default HomeView;
