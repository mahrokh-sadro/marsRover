import * as React from "react";

function Header(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div class="container">
          <a class="navbar-brand" href="#!">
            Welcome to Mars Rover Page
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
          ></div>
        </div>
      </nav>
    </>
  );
}

export default Header;
