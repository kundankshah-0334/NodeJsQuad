import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">

      <a className="navbar-brand hodlonfo" href="#">HODLINFO</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle inr" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              INR
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <button className="dropdown-item btn btn-primary" href="#">INR</button>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              BTC
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">BTC</a>
              <a className="dropdown-item" href="#">EDH</a>
              <a className="dropdown-item" href="#">USDT</a>
              <a className="dropdown-item" href="#">XRP</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">BUY BTC</a>
          </li>
        </ul>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
