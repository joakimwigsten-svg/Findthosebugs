import { render } from "@testing-library/react";
import Post from "../Post";
import { describe, it, expect, vi } from "vitest";


describe("Post", () => {
    it("should show different posts", async () => {
        // arrange
        vi.stubGlobal("fetch",
            vi.fn().mockResolvedValue({
                json: vi.fn() }
            )
        );

        //act
        render(<Post id={2} />);

        // assert
        expect(fetch).toHaveBeenCalledWith(
            "https://jsonplaceholder.typicode.com/posts/2"
        );
    });
});