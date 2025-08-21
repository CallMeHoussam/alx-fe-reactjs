import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a project')).toBeInTheDocument();
    expect(screen.getByText('Deploy to production')).toBeInTheDocument();
  });

  test('adds a new todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    await user.type(input, 'Test new todo');
    await user.click(addButton);
    
    expect(screen.getByText('Test new todo')).toBeInTheDocument();
  });

  test('toggles todo completion', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const todo = screen.getByText('Learn React');
    await user.click(todo);
    
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const deleteButtons = screen.getAllByText('Delete');
    await user.click(deleteButtons[0]);
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('does not add empty todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByRole('listitem').length;
    const addButton = screen.getByText('Add Todo');
    
    await user.click(addButton);
    
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodoCount);
  });
});