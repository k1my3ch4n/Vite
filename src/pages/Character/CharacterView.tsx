import Info from '@components/Info';
import styles from './Character.module.scss';

interface CharacterViewParams {
  characterClass: string;
  characterLevel: number;
  characterName: string;
}

const CharacterView = ({ characterClass, characterLevel, characterName }: CharacterViewParams) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>CHARACTER INFO</p>
        <div className={styles.infoWrapper}>
          <div className={styles.basic}>
            <Info label={characterClass} />
            <div className={styles.info}>
              <Info label="유니온" value="8000" />
              <Info label="무릉도장" value="80층" />
              <Info label="인기도" value="800" />
            </div>
          </div>
          <div className={styles.character}>
            <div className={styles.level}>Lv. {characterLevel}</div>
            <div>사진</div>
            <Info label={characterName} />
          </div>
          <div className={styles.guild}>
            <Info label="길드" />
            <Info label="길드" value="-" />
            <Info label="연합" value="-" />
          </div>
        </div>
        <div className={styles.detailToggle}>DETAIL</div>
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
