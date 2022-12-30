import clsx from 'clsx';
import untypedItems from './items.json';
import untypedRanges from './ranges.json';
import { colorToClassName, dataSample, Item, randomItems, Range } from './utils';

const items = untypedItems as Item[];
const ranges = untypedRanges as Range[];


const transform = (items: Item[]) => {
  const transformed: Range[] = [{start: items[0].date, end: items[0].date, color: items[0].color}]
  items.slice(0, items.length - 1).forEach(({date, color}, index) => color === items[index + 1].color ?
    transformed[transformed.length - 1].end = items[index + 1].date
    :
    transformed.push({start: items[index + 1].date, end: items[index + 1].date, color: items[index + 1].color})
  )
  return transformed;
};

const RangesView = ({ ranges }: { ranges: Range[] }) => (
  <ul className="space-y-4">
    {ranges.map((item) => (
      <li
        key={item.start + item.end}
        className={clsx(
          'h-10 flex items-center justify-between px-5 rounded',
          colorToClassName[item.color],
        )}
      >
        <span>{item.start}</span>
        <span>{item.end}</span>
      </li>
    ))}
  </ul>
);

export const Ranges = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4 grid grid-cols-3 gap-8">
      <div className="col-span-3">
        <h2 className="text-2xl mb-4">Convert adjacent items of same type into ranges</h2>
        <p>The data of individual item should look like this: </p>
        <pre>{JSON.stringify(dataSample, null, 2)}</pre>
      </div>

      <h3 className="text-xl font-bold row-start-2">Discretes</h3>
      <ul className="space-y-4">
        {randomItems.map((item) => (
          <li
            key={item.date}
            className={clsx('h-10 flex items-center px-5 rounded', colorToClassName[item.color])}
          >
            {item.date}
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold row-start-2">Ranges example</h3>
      <RangesView ranges={ranges} />

      <h3 className="text-xl font-bold row-start-2">Ranges implementation</h3>
      <RangesView ranges={transform(randomItems)} />
    </div>
  );
};
