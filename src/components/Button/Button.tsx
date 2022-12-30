import React, { useMemo, useState } from 'react';
import { ButtonTypes } from '~/components/Button/Button.types';
import './button.scss'

const Button = (
  {
    children,
    onClickHandler,
    className,
    ...props
  }: ButtonTypes
) => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const currentClassname: string = useMemo<string>(() =>
    isClicked ? `${className} active` : className, [isClicked])
  return (
    <button
      onClick={onClickHandler}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      className={currentClassname}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
