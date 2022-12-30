import { addDays, chooseRandomly, formatDate, range } from '~/utils';

const baseDate = new Date('2022-01-01');

// TODO could we have more strict type here? //done
enum colorVariants {
  red='red',
  green='green',
  blue='blue'
}
export type colors = keyof colorVariants
// TODO could we make this range function infer the type, so we don't get any here? // done
export const items: Item[] = range(40, (index) => ({
  date: formatDate(addDays(baseDate, index)),
  color: chooseRandomly(Object.keys(colorVariants)),
}));

export const dataSample = {
  start: '2022-01-01',
  end: '2022-01-03',
  color: 'red',
};

// TODO could we use inferred items type here?
export interface Item {
  date: string;
  // TODO could we use stronger color type here? //done
  color: colors;
}

export interface Range {
  start: string;
  end: string;
  // TODO could we use stronger color type here? //done
  color: colors;
}


// TODO could we type this stronger, so autocomplete by key works? //done

export const colorToClassName: Record<keyof any | colorVariants, string>= {
  [colorVariants.red]: 'bg-red-300 text-red-900',
  [colorVariants.green]: 'bg-green-300 text-green-900',
  [colorVariants.blue]: 'bg-blue-300 text-blue-900'
};

