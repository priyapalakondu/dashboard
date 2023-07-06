import { render, screen } from '@testing-library/react';
import App from './App';

describe("App test suit", function () {
    let root;
    beforeEach(() => {
        root = render(<App />);
    });
    test("App should not be empty", async () => {
        const { container } = root;
        expect(container).not.toBeEmptyDOMElement();
    });
    test("App should contain Dashboard component", async () => {
        const { container } = root;
        expect(container.getElementsByClassName("dashboard")[0]).toBeInTheDocument();
    });
});
