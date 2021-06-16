import React from "react";
import Pic5 from "../image/j.jpg";
import Pic6 from "../image/kk.jpg";
import Pic3 from "../image/y.jpg";
import Pic8 from "../image/uu.jpg";

const Plans = () => {
  return (
    <>
      <div class="container ck">
        <div class="row">
          <h1>PLANS</h1>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
              <img src={Pic5} alt="office" />
              <div class="caption">
                <h3>Customized Office</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
              <img src={Pic6} alt="office" />
              <div class="caption">
                <h3> Meeting Room</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
              <img src={Pic3} alt="office" />
              <div class="caption">
                <h3>Victual Office</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat..
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
              <img src={Pic8} alt="office" />
              <div class="caption">
                <h3>personal office</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
