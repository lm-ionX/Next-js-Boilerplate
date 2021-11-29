export interface ICV {
  general: IGeneral;
  formations: Array<IFormation>;
  jobs: Array<IJob>;
  categories: Array<ICategory>;
}

export interface IGeneral {
  name: string;
  title: string;
  description: string;
}

export type IJobOrFormation = IFormation & IJob;

export interface IFormation {
  school: {
    name: string;
    place: string;
    title: string;
    imageUrl: string;
  };
  bYear: number;
  eYear: number;
}

export interface IJob {
  company: {
    name: string;
    email: string;
    imageUrl: string;
    website: string;
  };
  worker: {
    bYear: number;
    eYear: number;
    title: string;
    tasks: Array<string>;
  };
}

export interface ICategory {
  name: string;
  href: string;
  skills: Array<ISkills>;
}

export interface ISkills {
  name: string;
  href: string;
  logo: string;
}
