import { render } from '@testing-library/react';
import Task from './Task';

test('<Task>', () => {
  const mockTask = {
    id: 1,
    title: 'Lorem ipsum ... ',
    priority: 'High',
    completed: false,
  };
  const onTaskDelete = () => {};
  render(<Task task={mockTask} onTaskDelete={onTaskDelete} />);
});
