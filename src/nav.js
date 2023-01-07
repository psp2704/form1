import React from "react";
function Nav() {
  return (
    <ul class="nav nav-tabs bg-light ">
      <li class="nav-item">
        <a
          class="nav-link active"
          aria-current="page"
          href="https://www.youtube.com/"
        >
          Active
        </a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="https://www.youtube.com/"
          role="button"
          aria-expanded="false"
        >
          Dropdown
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="https://www.youtube.com/">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="https://www.youtube.com/">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="https://www.youtube.com/">
              Something else here
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="https://www.youtube.com/">
              Separated link
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.youtube.com/">
          Link
        </a>
      </li>
    </ul>
  );
}

export default Nav;
