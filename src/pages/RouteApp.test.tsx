import React from "react";
import { render, screen } from "@testing-library/react";
import RouteApp from "./RouteApp";

test("renders learn react link", () => {
  render(<RouteApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
