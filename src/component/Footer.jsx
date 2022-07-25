import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <footer className="text-center text-lg-start bg-dark bg-gradient  text-muted">
        <div className="container p-4">
          <div className="row d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase text-white ">Բաժիններ</h5>
              <ul className="list-unstyled mb-0 mt-4">
                <li>
                  <a href="#!" className="text-white">
                    Գլխավոր
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Takdir.am - ի մասին
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase text-white ">Հղումներ</h5>
              <ul className="list-unstyled mb-0 mt-4">
                <li>
                  <a href="#!" className="text-white">
                    Կապ մեզ հետ
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Առաքման պայմանաններ
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase text-white ">Հետադարձ կապ</h5>
              <ul className="list-unstyled mb-0 mt-4">
                <li>
                  <a href="#!" className="text-white">
                    <i className="fa fa-phone fa-lg"></i> +374 96070445
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    <i class="fa fa-envelope-o fa-lg"></i> takdir@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase text-white ">
                Հետևեք մեզ սոց․ ցանցերում
              </h5>
              <ul className="list-unstyled mb-0 d-flex mt-4">
                <li>
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i class="fa fa-facebook-square fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="#!"
                    role="button"
                  >
                    <i className="fa fa-instagram fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-4">
          <p className="text-white"> © 2021 All rights reserved.:   By Takdir.am</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
