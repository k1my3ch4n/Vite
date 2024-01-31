import { atom } from 'recoil';

interface CharacterData {
  character_class: string;
  character_class_level: string;
  character_exp: number;
  character_exp_rate: string;
  character_gender: string;
  character_guild_name: string | null;
  character_image: string;
  character_level: number;
  character_name: string;
  date: string;
  world_name: string;
}

const characterAtom = atom<CharacterData>({
  key: 'characterAtom',
  default: {
    character_class: '',
    character_class_level: '',
    character_exp: 0,
    character_exp_rate: '',
    character_gender: '',
    character_guild_name: '',
    character_image: '',
    character_level: 0,
    character_name: '',
    date: '',
    world_name: '',
  },
});

export default characterAtom;
