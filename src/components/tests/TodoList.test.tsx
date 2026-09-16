import { describe, it, expect, vi} from 'vitest';
import TodoList from '../TodoList';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('TodoList', () => {
    it("should check the right iD on checkbox click", async () => {

  // arrange
        const todos = [
            {id: 1, text: "task 1", completed: false},
            {id: 2, text: "task 2", completed: false}
        ];

        const onToggle = vi.fn();

        render(<TodoList 
            todos={todos} 
            onToggle={onToggle} 
            onDelete={vi.fn()}
            />);
    
//act

await userEvent.click(
    screen.getByRole("checkbox", { name: "task 2" }));
;

// assert
    expect(onToggle).toHaveBeenCalledWith(2);
});
});
