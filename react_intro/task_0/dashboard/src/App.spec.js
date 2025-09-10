import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 'School Dashboard' h1 element", () => {
    render(<App />);
    const titleElement = screen.getByRole("heading", { level: 1, name: /school dashboard/i });
    expect(titleElement).toBeInTheDocument();
    const bodyText = screen.getByText(/login to access the full dashboard/i);
    expect(bodyText).toBeInTheDocument();
    const footerText = screen.getByText(/copyright/i);
    expect(footerText).toBeInTheDocument();
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  }
);
