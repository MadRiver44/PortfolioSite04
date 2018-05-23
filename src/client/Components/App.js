import React from 'react';
import { hot } from 'react-hot-loader';
import styles from '../../stylesheets/main.scss';

const App = () => {
  return <div className="start">{'Hello Component hot'}</div>;
};
export default hot(module)(App);
