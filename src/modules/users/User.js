import React from 'react';

const User = (props) => {

  let name = props.children ? props.children : 'NA';
  let job_level = props.jlvl ? props.jlvl : 'NA';

  return (
    <span><b>{name}</b> - <em>{job_level}</em></span>
  );
}

export default User;
