import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";
import investments from "../data";

describe("Item component test suit", function () {
    let ItemRoot;
    beforeEach(() => {
        ItemRoot = render(<Dashboard />);
    });
    test("Dashboard should display all the items", async () => {
        const { container } = ItemRoot;
        expect(container.getElementsByClassName("itemRow").length).toBe(investments.length);
    });
});