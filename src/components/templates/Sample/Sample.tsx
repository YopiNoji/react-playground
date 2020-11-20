import React from 'react';

const Sample: React.FC = ({...props}) => {
  return (
    <a
      {...props}
    >
      {props.children}
    </a>
  );
};
export default Sample;
