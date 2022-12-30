import React, { useState } from 'react';
import { LastTaskNavbarProps } from '~/components/organisms/LastTaskNavbar/LastTaskNavbar.types';
import Button from '~/components/atoms/Button/Button';
import './style.scss';

const LastTaskNavbar = ({}: LastTaskNavbarProps) => {
  const [fileName, setFileName] = useState('Here goes the file name')
  return (
    <div className={'navbar'}>
      <h2>{fileName}</h2>
      <Button onClickHandler={() => {}} className={'primary-button'}>Upload image</Button>
    </div>
  );
};

export default LastTaskNavbar;
