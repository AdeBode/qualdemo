import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "./index.js";

// tests are leaking into each other :(
// seems to be a bug in react 17: https://github.com/testing-library/react-testing-library/issues/716

test("renders navbar", () => {
  render(<App />);
  expect(screen.getByText("Contacts")).toBeInTheDocument();
  expect(screen.getByText("Organize your connections")).toBeInTheDocument();
});

describe("upon initial state", () => {
  test("displays loading message and fetches data", async () => {
    render(<App />);
    expect(screen.getByText("loading...")).toBeInTheDocument();
    expect(screen.queryByTestId("contact-grid")).not.toBeInTheDocument();
    await waitFor(() => screen.getByTestId("contact-grid"));
    expect(screen.getByTestId("contact-grid")).toBeInTheDocument();
  });

  test("clicking add contact button will add a new blank contact", async () => {
    render(<App />);
    await waitFor(() => screen.getByTestId("contact-grid-card"));
    expect(screen.getAllByTestId("contact-grid-card")).toHaveLength(1);
    const addContactButton = screen.queryByText("Add Contact");
    fireEvent.click(addContactButton);
    expect(screen.getAllByTestId("contact-grid-card")).toHaveLength(2);
  });
});
