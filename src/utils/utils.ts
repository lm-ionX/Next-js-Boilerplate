export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function getDates(bYear: number, eYear: number): string {
  if (bYear && eYear) {
    if (bYear === eYear) {
      return bYear.toString();
    }

    return `${bYear.toString()} - ${eYear.toString()}`;
  }

  return '';
}
