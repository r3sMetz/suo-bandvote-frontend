import Link from 'next/link';

const Navbar = () => (
  <nav>
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
  </nav>
);

export default Navbar;
