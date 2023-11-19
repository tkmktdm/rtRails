import React from 'react';
// import 'bootstrap';
// const login = document.getElementById('login');
// interface Props {
//   login: 0;
// }

export function Header(login) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <span className='navbar-text'>
                { (login==0) ? (
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Sign up</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Sign in</a>
                  </li>
                </ul>
                ) : (
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className='nav-item'>
                      <a className='nav-link active' aria-current='page' href='#'>Profile</a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link active' aria-current='page' href='#'>Logout</a>
                    </li>
                  </ul>
                )}
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}