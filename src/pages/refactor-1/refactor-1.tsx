import clsx from 'clsx';
import { useState } from 'react';
import { CenteredLayout } from '~/components';

// TODO is there a way to not write this twice? =\
// type ButtonType = 'fast' | 'quality' | 'cheap';
//
// const buttons: ButtonType[] = ['fast', 'quality', 'cheap'];
const buttons = ['fast', 'quality', 'cheap'] as const;
type ButtonType = typeof buttons[number]

interface ButtonProps {
  button: ButtonType;
  selectedButton: ButtonType | null;
  setSelectedButton: (value: ButtonType) => void;
  index: number;
}

// TODO is it possible to improve this component's interface (props)?
const Button = ({ button, selectedButton, setSelectedButton, index }: ButtonProps) => {
  const style = button === selectedButton;
  return (
    <button
      key={index}
      onClick={() => setSelectedButton(button)}
      className={clsx(
        'h-10 px-5 flex items-center justify-center rounded transition-colors',
        style ? 'bg-green-400' : 'bg-gray-300',
      )}
    >
      {button}
    </button>
  );
};

export const Refactor1 = () => {
  const [selectedButton, setSelectedButton] = useState<ButtonType | null>(null);
  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">See the code</div>
      <div className="grid grid-cols-3 gap-2 w-60">
        {buttons.map((button, index) => (
          <Button
            key={index}
            index={index}
            button={button}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
          />
        ))}
      </div>
    </CenteredLayout>
  );
};
