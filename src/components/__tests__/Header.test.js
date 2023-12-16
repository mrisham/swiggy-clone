import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("should check if the login button has loaded", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const login = screen.getByRole("button", { name: "login" });
  expect(login).toBeInTheDocument();
});
it("should check if cart is loaded", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cart = screen.getByText(/Cart/);
  expect(cart).toBeInTheDocument();
});
it("should check if login button is enabled", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const login = screen.getByRole("button", { name: "login" });
  fireEvent.click(login);
  const logout = screen.getByRole("button", { name: "logout" });
  expect(logout).toBeInTheDocument();
});
