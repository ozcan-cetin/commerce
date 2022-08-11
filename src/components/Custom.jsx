import React from "react";
import { GiCompass } from "react-icons/gi";
import { GiDiamondHard } from "react-icons/gi";
import { GiScrollUnfurled } from "react-icons/gi";

const Custom = () => {
  return (
    <main className="custom p-5">
      <div className="d-flex justify-content-between align-items-center row">
        <h3 className="col-lg-6">
          Custom Furniture <br />
          Built Only For You
        </h3>
        <p className="col-lg-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 p-3">
          <div className="card text-center p-3">
            <span className="fs-1 bg-light icon">
              <GiCompass />
            </span>
            <h4 className="my-3">Mission</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 p-3">
          {" "}
          <div className="card text-center p-3">
          <span className="fs-1 bg-light icon">
              <GiDiamondHard />
            </span>
            <h4 className="my-3">Vision</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 p-3">
          {" "}
          <div className="card text-center p-3">
          <span className="fs-1 bg-light icon">
              <GiScrollUnfurled />
            </span>
            <h4 className="my-3">History</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Custom;
