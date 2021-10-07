import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Loans from "./index";

beforeEach(() => {
  fetch.resetMocks();
});

test("matches snapshot", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        id: 1,
        lender: "The Big Bank",
        annualPercentage: 0.142,
        loanBalance: 15000,
        monthlyPayment: 377.5,
        paidPeriod: 18,
        totalPeriod: 72,
        vehicle: {
          photo: "1.jpg",
          make: "HONDA",
          model: "ACCORD",
          year: 2019,
          mileage: 41855,
        },
      },
    ])
  );

  const { asFragment, findByText } = render(<Loans />, {
    wrapper: MemoryRouter,
  });

  const vehicle = await findByText("2019 HONDA ACCORD");

  expect(vehicle).toBeInTheDocument();

  expect(asFragment()).toMatchSnapshot();
});

test("matches snapshot when expection", async () => {
  fetch.mockReject(() => Promise.reject("API is down"));

  const { asFragment } = render(<Loans />, {
    wrapper: MemoryRouter,
  });

  expect(asFragment()).toMatchSnapshot();
});
