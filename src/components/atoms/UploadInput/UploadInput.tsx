import React  from 'react';
import './styles.scss';

interface UploadInputProps {
  onChange: (event: any) => void,
}

const UploadInput = ({onChange}: UploadInputProps) => {
  return (
    <>
      <label className={'upload'} htmlFor={'file-upload'}>Upload image</label>
      <input id={'file-upload'} type={'file'} onChange={onChange}/>
    </>
  );
};

export default UploadInput;
