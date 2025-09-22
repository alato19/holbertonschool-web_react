import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications.jsx";

test("Notifications.jsx test", () => {
    render(<Notifications />);

    // 1. Titulli
    const notificationTitle = screen.getByText("Here is the list of notifications");
    expect(notificationTitle).toBeInTheDocument();

    // 2. Butoni Close
    const closeButton = screen.getByRole("button", { name: "Close" });
    expect(closeButton).toBeInTheDocument();

    // 3. 3 li elements
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);

    // 4. Spy për console.log
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });

    // 5. Klikimi i butonit Close
    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");

    // 6. Pastrimi i spy
    consoleSpy.mockRestore();

    console.log("OK");
});
console.log("OK");