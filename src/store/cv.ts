import { atom } from 'jotai';

import { cvRepo } from '../helpers/cvRepo';

export const cvAtom = atom({
  cvGeneral: cvRepo.getGeneral(),
  cvFormations: cvRepo.getFormations(),
  cvJobs: cvRepo.getJobs(),
  cvCategories: cvRepo.getCategories(),
});
