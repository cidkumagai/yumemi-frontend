import { atom } from 'recoil';

import { ATOM_KEYS} from '../../constants/recoilKeys';

type SelectedTypeState = string;

const initialState: SelectedTypeState = '総人口';

// 選択された人口の種類を格納する
export const selectedTypeState = atom({
  key: ATOM_KEYS.SELECTED_TYPE_STATE,
  default: initialState,
});
