import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Offer from "./index";

test("matches snapshot", () => {
  const { asFragment } = render(
    <Offer
      setOffer={() => {}}
      monthlyPayment={377.5}
      newAnnualPercentage={0.142 / 2}
      newMonthlyPayment={282.76}
      newTotalPeriod={84}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});

test("selects an option", async () => {
  const { getByRole } = render(
    <Offer
      setOffer={() => {}}
      monthlyPayment={377.5}
      newAnnualPercentage={0.142 / 2}
      newMonthlyPayment={282.76}
      newTotalPeriod={84}
    />
  );

  const option = getByRole("radio", {
    name: "Lower you payment by 94.74 per month",
  });

  expect(option).toBeInTheDocument();

  expect(option).not.toBeChecked();

  fireEvent.click(option);

  expect(option).toBeChecked();
}, 10000);
