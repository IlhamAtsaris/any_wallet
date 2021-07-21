import React from "react";

function Amount() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body text-primary">
              <h5 className="card-title">Balance</h5>
              <p className="card-text">
                RP 3.000.000
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body text-success">
              <h5 className="card-title">Income</h5>
              <p className="card-text">
              Rp 5.000.000
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body text-danger">
              <h5 className="card-title">Expense</h5>
              <p className="card-text">
                RP 2.000.000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Amount;
