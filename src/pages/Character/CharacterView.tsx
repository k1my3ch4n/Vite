import Info from '@components/Info';
import styles from './Character.module.scss';

interface CharacterViewParams {
  characterClass: string;
}

const CharacterView = ({ characterClass }: CharacterViewParams) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>CHARACTER INFO</p>
        <div className={styles.infoWrapper}>
          <div className={styles.basic}>
            <div className={styles.class}>{characterClass}</div>
            <div className={styles.info}>
              <Info label="유니온" value="8000" />
              <Info label="무릉도장" value="80층" />
              <Info label="인기도" value="800" />
            </div>
          </div>
          <div className={styles.character}>캐릭터 정보</div>
          <div className={styles.guild}>길드 정보</div>
        </div>
        <div>디테일 토글 버튼</div>
      </div>
      {/* 디테일 토글 버튼 on 인 경우 보임 */}
      {/* <div className={styles.detail}>
        <div>STAT</div>
        <div>전투력 : 000만</div>
        <div>stat info</div>
        <div>stat info detail</div>
        <div>extra detail</div>
        <div>
          <div>하이퍼스탯</div>
          <div>어빌리티</div>
        </div>
      </div> */}
    </div>
  );
};

export default CharacterView;
