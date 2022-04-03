import { render } from '@testing-library/react';
import {TaskForm} from './TaskForm';

test('<TaskForm>', () => {
  function onModalClose () {
  }
  render(<TaskForm openModal onModalClose={onModalClose}/>);
});
