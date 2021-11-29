import { atom } from 'jotai';

import { IFormation, IJob } from '../utils/interfaces';

type ModalAtom = {
  open: boolean;
  isFormation: boolean;
  jobOrFormation: IFormation | IJob | null;
};

export const modalAtom = atom<ModalAtom>({
  open: false,
  isFormation: true,
  jobOrFormation: null,
});
