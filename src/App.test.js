import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test('renders a div with a classname of "calculator"', () => {
  const { container } = render(<App />);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const calculator = container.getElementsByClassName("calculator");
  expect(calculator[0]).toBeInTheDocument();
});

test("checks if sum functionality works", () => {
  const { container } = render(<App />);
  const button2 = screen.getByText("2");
  const buttonPlus = screen.getByText("+");
  const buttonEqual = screen.getByText("=");
  fireEvent.click(button2);
  fireEvent.click(buttonPlus);
  fireEvent.click(button2);
  fireEvent.click(buttonEqual);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const display = container.getElementsByClassName("display");
  expect(display[0].innerHTML).toBe("4");
});

test("checks if subtraction functionality works", () => {
  const { container } = render(<App />);
  // get 2 button
  const button2 = screen.getByText("2");
  const buttonMinus = screen.getByText("-");
  const buttonEqual = screen.getByText("=");
  fireEvent.click(button2);
  fireEvent.click(buttonMinus);
  fireEvent.click(button2);
  fireEvent.click(buttonEqual);
  // find div with classname "display"
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const display = container.getElementsByClassName("display");
  expect(display[0].innerHTML).toBe("0");
});

test("checks if multiplication functionality works", () => {
  const { container } = render(<App />);
  const button3 = screen.getByText("3");
  const buttonTimes = screen.getByText("*");
  const buttonEqual = screen.getByText("=");
  fireEvent.click(button3);
  fireEvent.click(buttonTimes);
  fireEvent.click(button3);
  fireEvent.click(buttonEqual);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const display = container.getElementsByClassName("display");
  expect(display[0].innerHTML).toBe("9");
});

test("checks division functionality works", () => {
  const { container } = render(<App />);
  const button3 = screen.getByText("3");
  const buttonDivide = screen.getByText("/");
  const buttonEqual = screen.getByText("=");
  fireEvent.click(button3);
  fireEvent.click(buttonDivide);
  fireEvent.click(button3);
  fireEvent.click(buttonEqual);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const display = container.getElementsByClassName("display");
  expect(display[0].innerHTML).toBe("1");
});

test("checks delete functionality works", () => {
  const { container } = render(<App />);
  const button1 = screen.getByText("1");
  const buttonDelete = screen.getByText("DEL");
  fireEvent.click(button1);
  fireEvent.click(button1);
  fireEvent.click(buttonDelete);
  fireEvent.click(buttonDelete);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const display = container.getElementsByClassName("display");
  expect(display[0].innerHTML).toBe("0");
})
