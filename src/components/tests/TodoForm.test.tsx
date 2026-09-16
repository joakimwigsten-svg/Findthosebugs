import { render, screen } from "@testing-library/react";
import TodoApp from "../TodoApp";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";


describe("TodoForm", () => {
    it("should not show emty tasks", async () => {
        // arrange
        render(<TodoApp />);

        //act
        await userEvent.click(screen.getByRole("button", { name: "Lägg till" }));

        // assert
        expect(screen.queryByText("checkbox")).not.toBeInTheDocument();
    });
});