import {describe, it, expect} from "vitest";
import TodoStats from "../TodoStats";
import { render, screen } from "@testing-library/react";

describe("TodoStats", () => {
    it("should render the correct number of tasks", () => {
        // arrange
        const tasks = [
            {id: 1, text: "Task 1", completed: false},
            {id: 2, text: "Task 2", completed: true},
            {id: 3, text: "Task 3", completed: false}
        ];

        // act  
        render(<TodoStats todos={tasks} />);

        // assert
        expect(screen.getByText("2 kvar av 3")).toBeInTheDocument();
});
});
