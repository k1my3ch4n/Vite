import useGetCharacterData from '@hooks/useGetCharacterData';
import ocidAtom from '@recoil/user/ocid';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

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

  return (
    <div>
      <div>{character_class}</div>
      <div>{character_class_level}</div>
      <div>{character_exp}</div>
      <div>{character_exp_rate}</div>
      <div>{character_gender}</div>
      <div>{character_guild_name}</div>
      <div>{character_image}</div>
      <div>{character_level}</div>
      <div>{character_name}</div>
      <div>{date}</div>
      <div>{world_name}</div>
    </div>
  );
};

export default Character;
