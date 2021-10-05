import React from "react";
import Card from "../../components/Card";
import "./index.css";

const Vehicles = () => {
  return (
    <div className="vehicles">
      <div>
        <h1 className="select-loan">Select the loan you want to refinance</h1>
        <Card
          vehicleId="1"
          photo="2019-honda-accord.jpg"
          info="2019 HONDA ACCORD"
          mileage="41,855"
          lender="The Big Bank"
          annualPercentage="14.2%"
          monthlyPayment="$377.50"
          timeRemaining="54/72 mo"
        />
        <Card
          vehicleId="2"
          photo="1965-volkswagen-beetle.jpg"
          info="2018 MERCEDES BENZ GLA CLASS 4D 4WD 250"
          mileage="932,671"
          lender="The Credit Union"
          annualPercentage="13.6%"
          monthlyPayment="$486.72"
          timeRemaining="50/60 mo"
        />
        <Card
          vehicleId="3"
          photo="2017-fiat-500.jpg"
          info="2017 CHEVROLET CAMARO 2D 2LT"
          mileage="68,138"
          lender="The Auto-Lender"
          annualPercentage="15.8%"
          monthlyPayment="$527,40"
          timeRemaining="32/72 mo"
        />
      </div>
    </div>
  );
};

export default Vehicles;
