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
    <style jsx>{`
      background: black;
      color: white;
      li {
        list-style-type: none;
        display: inline-block;
        padding: 0 15px;
      }
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
  </nav>
);

export default Navbar;
