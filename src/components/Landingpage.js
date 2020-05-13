import React from "react";

const Landingpage = () => {
  return (
    <>
      <div id="home">
        <div class="container-fluid row" id="landingText">
          <div class="row">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded"
                src="assets/images/avatar.png"
                id="avatarIcon"
                alt="avatar"
              ></img>
            </div>

            <div class="col-lg-6">
              <h1>Anas Qazi</h1>
              <p id="jobTitle">
                I am Full Stack Web Developer. Skilled at developing responsive
                web applications using MERN Stack, React-Native, Vue, Angular,
                jQuery, Bootstrap and other NPM libraries.
              </p>
              <a
                id="collaborateBtn"
                class="btn btn-primary"
                href="#footerSection"
              >
                COLLABORATE
              </a>

              <a href="https://github.com/ianasqazi" target="_blank">
                <img
                  class="img-fluid rounded col-sm-4"
                  id="gitIcon"
                  src="assets/images/icons/githubIcon.png"
                  alt="github Icon"
                  title="github Icon"
                ></a>
              </p>
            </div>

            <div class="bird-container bird-container--one">
              <div class="bird bird--one"></div>
            </div>
            <div class="bird-container bird-container--two">
              <div class="bird bird--two"></div>
            </div>
            <div class="bird-container bird-container--three">
              <div class="bird bird--three"></div>
            </div>
            <div class="bird-container bird-container--four">
              <div class="bird bird--four"></div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6"></div>
            <div class="col-sm-6 weatherForcast text-right" id="weatherForcast">
              <div class="row">
                <div class="col">
                  <span id="dayDate"></span>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <span id="currentCity"></span>
                  <span id="currentCountry"></span>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <span id="weatherInfo"></span>
                  <img id="weatherIcon"></img>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <img src="assets/images/icons/temp.png">
                    <span id="currentTemp"></span>
                  </img>
                  <img src="assets/images/icons/tempLow.png">
                    <span id="tempLow"></span>
                  </img>
                  <img src="assets/images/icons/tempHigh.png">
                    <span id="tempHigh"></span>
                  </img>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <img src="assets/images/icons/pressure.png">
                    <span id="pressure"></span>
                  </img>
                  <img src="assets/images/icons/wind.png">
                    <span id="windSpeed"></span>
                  </img>
                  <img src="assets/images/icons/humidity.png">
                    <span id="humidity"></span>
                  </img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
