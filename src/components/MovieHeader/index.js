import React from 'react';

import { ContainerHeader } from './style';

function MovieHeader(props) {
  return <ContainerHeader>{props.heading}</ContainerHeader>;
}

export default MovieHeader;
