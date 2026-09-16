import { render, screen } from "@testing-library/react";
import TodoApp  from "../TodoApp";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

describe ('TodoApp', () => {
    it("should only show completed tasks", async () => {
        // arrange
        render(<TodoApp />);

        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button", { name: "Lägg till" });

        await userEvent.type(input, "task 1");
        await userEvent.click(button);   

        // act
        await userEvent.click(screen.getByRole("checkbox", { name: "task 1" }));
        await userEvent.click(screen.getByRole("button", { name: "Klara" }));
        
        // assert
        expect(screen.getByText("task 1")).toBeInTheDocument();
    });
});