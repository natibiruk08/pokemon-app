function Navbar() {
  return (
    <div className="navbar bg-gray-800 backdrop-blur-sm sticky top-0 z-10">
      <div className="navbar-start">
        {/* Filter */}

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Normal</a>
            </li>
            <li>
              <a>Poison</a>
            </li>
            <li>
              <a>Flying</a>
            </li>
          </ul>
        </div>

        {/* Sort by name */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <h3>A-Z</h3>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Ascending</a>
            </li>
            <li>
              <a>Descending</a>
            </li>
            <li>
              <a>none</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Pokemon-App</a>
      </div>
      <div className="navbar-end">
        <button className="flex items-center gap-2 pr-4 btn btn-ghost ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="gold"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 20s8-4 8-10A5.87 5.87 0 0012 5.13 5.87 5.87 0 004 10c0 6 8 10 8 10z"
            />
          </svg>
          <h3 className="capitalize">Favorites</h3>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
