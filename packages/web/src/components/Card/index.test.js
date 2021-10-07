import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "./index";

test("matches snapshot", () => {
  const { asFragment } = render(
    <Card
      loanId={1}
      photo="http://localhost:3333/vehicles/1.jpg"
      info="2019 HONDA ACCORD"
      mileage={41855}
      lender="The Big Bank"
      annualPercentage={0.142}
      monthlyPayment={377.5}
      paidPeriod={18}
      totalPeriod={72}
    />,
    {
      wrapper: MemoryRouter,
    }
  );

  expect(asFragment()).toMatchSnapshot();
});
