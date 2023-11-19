import React from 'react';

type Props = {
  data: {
    name: string
    age: number
    login: boolean
    root_path: string
    login_path: string
    logout_path: string
    profile_path: string
  }
}

export function Header({data}: Props) {
  const handleClick = () => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/auth/auth0';

    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    if (csrfToken) {
      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.name = 'authenticity_token';
      hiddenInput.value = csrfToken;
      form.appendChild(hiddenInput);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={data.root_path}>Home</a>
              </li>
            </ul>
            <span className='navbar-text'>
                { (!data.login) ? (
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Sign up</a>
                  </li>
                  <li className="nav-item">
                    <button className='nav-link active' aria-current='page' onClick={handleClick}>
                      Login
                    </button>
                  </li>
                </ul>
                ) : (
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className='nav-item'>
                      <a className='nav-link active' aria-current='page' href={data.profile_path}>Profile</a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link active' aria-current='page' href={data.logout_path}>Logout</a>
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