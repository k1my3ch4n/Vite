import styles from './Info.module.scss';

const Info = ({ label, value }: { label: string; value?: string }) => {
  return (
    <div className={`${styles.wrapper} ${value ? styles.double : styles.single}`}>
      <div>{label}</div>
      {value && <div>{value}</div>}
    </div>
  );
};

export default Info;
