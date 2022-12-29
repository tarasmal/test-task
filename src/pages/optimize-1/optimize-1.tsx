import { memo, useCallback, useState } from 'react';
import { CenteredLayout } from '~/components';
import { useRenderHighlight } from '~/utils';
import css from './optimize-1.module.scss';

const todosData = [
  { id: 0, text: 'run a marathon', done: false },
  { id: 1, text: 'ride an elephant', done: false },
  { id: 2, text: 'swim with a fish', done: false },
];

// TODO Fix all list re-rendering when only one component is changed :(

interface TodoProps {
  text: string;
  id: number,
  onClick: (id: number) => void;
}

const Todo = memo(({ text, id, onClick }: TodoProps) => {
  const [isDone, setIsDone] = useState<boolean>(false)
  const ref = useRenderHighlight(css.render);
  return (
    <li ref={ref} onClick={() => {
      setIsDone(prevState => !prevState)
      onClick(id)
      console.log(todosData); //data which probably will be sent to the server is changing. We map static object, creating children with it`s own state.
    }} className={css.listItem}>
      {isDone ? '[x]' : '[ ]'} {text}
    </li>
  );
});

export const Optimize1 = () => {
  const handleTodoClick = useCallback(
    (id: number) => {
      const currentTodo = todosData[id]
      currentTodo.done = !currentTodo.done
    },
    [],
  );

  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">It re-renders all items! =\</div>
      <div>We need to fix that</div>
      <ul>
        {todosData.map(({id, text}) => (
          <Todo
            key={id}
            id={id}
            text={text}
            onClick={() => handleTodoClick(id)}
          />
        ))}
      </ul>
    </CenteredLayout>
  );
};
