/* eslint-env jest */
/* global test, expect */
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


    // 2 input fields (email + password)
    const inputs = screen.getAllByRole("textbox"); // email is "textbox"
    const passwordInput = screen.getByLabelText(/password/i);
    expect(inputs.length).toBe(1); // only 1 textbox (email)
    expect(passwordInput).toBeInTheDocument();

    // 2 labels (Email + Password)
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();

    // Button with text "Ok"
    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
});