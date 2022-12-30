import React, { useMemo, useState } from 'react';
import LastTaskNavbar from '~/components/organisms/LastTaskNavbar/LastTaskNavbar';
import './lastTask.scss'
const formatInputValue = (value: string) => {
  const splitValue = value.split('\\')
  return splitValue[splitValue.length - 1]
}
const LastTask = () => {

  const [fileName, setFileName] = useState<string>('')
  const inputValue = document.getElementById('file-upload') as HTMLInputElement

  const fileNameToDisplay = useMemo(() => fileName ? inputValue?.value : 'Here goes your image', [fileName])

  return (
    <div className={'last-task-container'}>
      <LastTaskNavbar fileName={formatInputValue(fileNameToDisplay)} setFileName={setFileName} />
      <div className={'image-container'}>
        <img src={fileName}/>
      </div>
    </div>
  );
};

export default LastTask;
