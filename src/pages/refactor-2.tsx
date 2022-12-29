import { CenteredLayout } from '~/components';
import { useMemo } from 'react';

// TODO refactor

type IQuestionOrAnswer = {question: string} | {answer: string}

const QnA: IQuestionOrAnswer[] = [
  { question: 'Do you run like a fish?' },
  { answer: 'Absolutely man' },
  { question: 'Have you tried to swim like a dinosaur?' },
  { answer: 'Nah, not my cup of tea' },
  { question: 'How are we counting from 5 to 10?' },
  { answer: 'Do I look like a counter?' },
];

interface AnswerQuestion {textToRender: string}
type IEntries = ['question' | 'entries', string]
const Question = ({textToRender}:AnswerQuestion) => <h3 className="font-bold text-lg">{textToRender}</h3>;
const Answer = ({textToRender}: AnswerQuestion) => <p className="mb-2">{textToRender}</p>;
const QnaRender = (props: IQuestionOrAnswer) => {
  const [key, value] = useMemo(() => Object.entries(props)[0] as IEntries, [])
  return key === 'question' ?
    <Question textToRender={value} />
    :
    <Answer textToRender={value}/>

};

export const Refactor2 = () => {
  return (
    <CenteredLayout className="gap-2">
      <div className="text-3xl mb-2">See the code</div>
      {QnA.map((item, index) => (
        <QnaRender key={index} {...item} />
      ))}
    </CenteredLayout>
  );
};
