import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    act(() => {
      render(<TodoList />);
    });
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a project')).toBeInTheDocument();
    expect(screen.getByText('Deploy to production')).toBeInTheDocument();
  });

  test('adds a new todo', async () => {
    const user = userEvent.setup();
    act(() => {
      render(<TodoList />);
    });
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    await act(async () => {
      await user.type(input, 'Test new todo');
      await user.click(addButton);
    });
    
    expect(screen.getByText('Test new todo')).toBeInTheDocument();
  });

  test('toggles todo completion', async () => {
    const user = userEvent.setup();
    act(() => {
      render(<TodoList />);
    });
    
    const todo = screen.getByText('Learn React');
    await act(async () => {
      await user.click(todo);
    });
    
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', async () => {
    const user = userEvent.setup();
    act(() => {
      render(<TodoList />);
    });
    
    const deleteButtons = screen.getAllByText('Delete');
    await act(async () => {
      await user.click(deleteButtons[0]);
    });
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('does not add empty todo', async () => {
    const user = userEvent.setup();
    act(() => {
      render(<TodoList />);
    });
    
    const initialTodos = screen.getAllByRole('listitem');
    const addButton = screen.getByText('Add Todo');
    
    await act(async () => {
      await user.click(addButton);
    });
    
    const currentTodos = screen.getAllByRole('listitem');
    expect(currentTodos).toHaveLength(initialTodos.length);
  });
});