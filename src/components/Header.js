import React from 'react';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="AllMemes">All Memes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="MyMemes">My Memes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="AddMeme">Add Meme</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Search"> Search</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
