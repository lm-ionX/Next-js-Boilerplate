// import fs from 'fs';

import cv from '../data/cv.json';

export const cvRepo = {
  getGeneral: () => cv.general,
  getFormations: () => cv.formations,
  getJobs: () => cv.jobs,
  getCategories: () => cv.categories,
};
