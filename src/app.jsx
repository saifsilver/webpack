import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const H1 = styled.h1`
font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
letter-spacing: -2px;
`;
const I = styled.i`
  color:rgba(219, 11, 11, 0.856)
`;

const App = () => (
  <H1>
    Cool --
    <I>You</I>
    {' '}
    -- Did It
  </H1>
);

ReactDOM.render(<App />, document.getElementById('app'));
