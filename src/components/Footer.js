import React from "react";

const Landingpage = () => {
  return (
    <>
      <footer class="container-fluid text-center" id="footerSection">
        <div class="row">
            <div class="col-sm-4" id="myInfo">
                <h3>COLLABORATE WITH ME</h3>
                <h4 style="color:#F2CAA7;">{ Anas Qazi }</h4>
                <p>647-581-7770<br>
                    ianasqazi@gmail.com<br>
                    Toronto, Canada</p>

                <a href="mailto:ianasqazi@gmail.com" class="fas fa-envelope-square" title="Email Me"></a>
                <a href="tel:647-581-7770" class="fas fa-mobile-alt" title="Call Me"></a>
                <a href="sms:647-581-7770" class="fas fa-sms" title="SMS Me"></a>


            </div>
            <div class="col-sm-4" id="connectMe">
                <h3>CONNECT ME</h3>
                <a href="https://www.linkedin.com/in/anasqazi" class="fab fa-linkedin" target="_blank"
                    title="LinkedIn"></a>
                <a href="https://uttorfsfpt092-czt9438.slack.com/team/UN0F08AG6" class="fab fa-slack" target="_blank"
                    title="Slack"></a>
                <a href="https://t.me/ianasqazi" class="fab fa-telegram-plane" target="_blank" title="Telegram"></a>
                <a href="https://twitter.com/ianasqazi" class="fab fa-twitter" target="_blank" title="Twitter"></a>
                <a href="https://www.facebook.com/ianasqazi" class="fab fa-facebook" target="_blank"
                    title="Facebook"></a>
                <a href="https://www.instagram.com/ianasqazi/" class="fab fa-instagram" target="_blank"
                    title="Instagram"></a>
                <a href="https://www.snapchat/com/add/ianasqazi" class="fab fa-snapchat-square" target="_blank"
                    title="Snapchat"></a>
                <a href="https://www.youtube.com/c/AnasQazi" class="fab fa-youtube-square" target="_blank"
                    title="Youtube"></a>

            </div>
            <div class="col-sm-4" id="githubLink">
                <h3>GITHUB</h3>
                <a href="https://github.com/ianasqazi" target="_blank">
                    <img class="img-fluid rounded" id="footerGitIcon" src="assets/images/icons/githubIcon.png"
                        alt="github Icon" title="Github Profile">
                </a>
            </div>
        </div>

        <div class="row container-fluid text-center">
            <div class="col">
                <a id="scrollTop" href="#mainNav">
                    <i class="fas fa-angle-up"></i>SCROLL TO TOP<i class="fas fa-angle-up"></i>
                </a>
            </div>
        </div>

        <div class="row container-fluid text-right" id="fixedBotton">
            <div class="col">
                <span id="footerNoteSpan"> &copy; Anas Qazi 2020</span>
            </div>

        </div>

    </footer>
    </>
  );
};

export default Landingpage;
