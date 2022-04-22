import './Nav.css'
import React from 'react';

function Nav(props) {
  const { pages = [], setState, getState } = props;

  return (
    <nav>
      <h1>Chotan Sharma</h1>
      <ul>
        {pages.map(page => (
          <li className="nav-item" key={page.name}>
            <a
              href='#'
              onClick={() => setState(page)}
              className={
                getState.name === page.name ? 'nav-link active' : 'nav-link'
              }
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>

  );
}

export default Nav;