import useApi from '@hooks/useApi';
import characterAtom from '@recoil/user/character';
import { useRecoilValue } from 'recoil';

const Detail = () => {
  useApi();

  const data = useRecoilValue(characterAtom);

  if (!data) {
    <div>no Data</div>;
  }

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
  } = data;

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

export default Detail;
