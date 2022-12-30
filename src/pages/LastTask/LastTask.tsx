import React from 'react';
import LastTaskNavbar from '~/components/organisms/LastTaskNavbar/LastTaskNavbar';
import './lastTask.scss'

const LastTask = () => {
  return (
    <div className={'last-task-container'}>
      <LastTaskNavbar />
    </div>
  );
};

export default LastTask;
