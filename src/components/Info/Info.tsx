import styles from './Info.module.scss';

const Info = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className={styles.wrapper}>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
};

export default Info;
