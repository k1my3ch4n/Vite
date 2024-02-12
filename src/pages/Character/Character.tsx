import useGetCharacterData from '@hooks/useGetCharacterData';
import ocidAtom from '@recoil/user/ocid';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import CharacterView from './CharacterView';

const Character = () => {
  const ocid = useRecoilValue(ocidAtom);

  const { characterData, fetchCharacterData } = useGetCharacterData();

  useEffect(() => {
    if (!ocid) {
      return;
    }

    fetchCharacterData(ocid);
  }, [ocid]);

  const {
    character_class,
    character_class_level,
    character_exp,
    character_exp_rate,
    character_gender,
    character_guild_name,
    character_image,
    character_level,
    character_name,
    date,
    world_name,
  } = characterData;

  return <CharacterView />;
};

export default Character;
