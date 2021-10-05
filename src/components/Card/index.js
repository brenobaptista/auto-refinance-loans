import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Card = ({
  vehicleId,
  photo,
  info,
  mileage,
  lender,
  annualPercentage,
  monthlyPayment,
  timeRemaining,
}) => {
  return (
    <div className="card">
      <img src={photo} alt="Vehicle" className="vehicle-image" />
      <div className="card-info">
        <div className="vehicle-info">
          <div className="text-important">{info}</div>
          <div className="vehicle-mileage">
            with an estimated <span className="text-important">{mileage}</span>{" "}
            miles
          </div>
        </div>
        <div className="loan-info">
          <div>Lender</div>
          <div className="text-important">{lender}</div>
        </div>
        <hr />
        <div className="loan-info">
          <div>APR</div>
          <div className="text-important">{annualPercentage}</div>
        </div>
        <hr />
        <div className="loan-info">
          <div>Monthly payment</div>
          <div className="text-important">{monthlyPayment}</div>
        </div>
        <hr />
        <div className="loan-info">
          <div>Time remaining</div>
          <div className="text-important">{timeRemaining}</div>
        </div>
        <Link to={`/offers/${vehicleId}`}>
          <button type="button" className="btn">
            Select loan
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
