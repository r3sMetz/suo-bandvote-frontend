import Link from 'next/link';

const Navbar = () => (
  <nav>
    <div className="container">
      <h1>
        <Link href="/">
          <a>SUO Bandvoting</a>
        </Link>
      </h1>
      <ul>
        <li>
          <Link href="/results">
            <a>Ergebnisse</a>
          </Link>
        </li>
        <li>
          <Link href="/bands">
            <a>Bands</a>
          </Link>
        </li>
      </ul>
    </div>
    <NavbarStyling />
  </nav>
);

const NavbarStyling = () => (
  <style jsx>{`
    nav {
      background: grey;
    }

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    a {
      color: white;
    }

    li {
      list-style-type: none;
      display: inline-block;
      padding: 0 15px;
    }

    li:last-child {
      padding-right: 0;
    }
  `}</style>
);

export default Navbar;
