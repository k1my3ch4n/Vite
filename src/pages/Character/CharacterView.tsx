import styles from './Character.module.scss';

const CharacterView = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>CHARACTER INFO</p>
        <div className={styles.infoWrapper}>
          <div className={styles.basic}>기본 정보</div>
          <div className={styles.character}>캐릭터 정보</div>
          <div className={styles.guild}>길드 정보</div>
        </div>
        <div>디테일 토글 버튼</div>
      </div>
      {/* 디테일 토글 버튼 on 인 경우 보임 */}
      <div className={styles.detail}></div>
    </div>
  );
};

export default CharacterView;
