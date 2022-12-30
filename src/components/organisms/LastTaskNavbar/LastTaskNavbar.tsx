import React  from 'react';
import { LastTaskNavbarProps } from '~/components/organisms/LastTaskNavbar/LastTaskNavbar.types';
import './style.scss';
import UploadInput from '~/components/atoms/UploadInput/UploadInput';

const LastTaskNavbar = ({fileName, setFileName}: LastTaskNavbarProps) => {
  function handleChange(this: HTMLInputElement, e: any) {
    setFileName(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className={'navbar'}>
      <p className={'header'}>{fileName}</p>
      <UploadInput onChange={handleChange} />
    </div>
  );
};

export default LastTaskNavbar;
