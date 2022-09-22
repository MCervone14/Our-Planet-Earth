import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <Link href="/" passHref>
            <h2 className="logo">Our Mother Earth</h2>
          </Link>
        </div>
        <Link href="/" passHref>
          <h5>Home</h5>
        </Link>
        <Link href="/articles" passHref>
          <h5>Articles</h5>
        </Link>
        <Link href="/authors" passHref>
          <h5>Authors</h5>
        </Link>
      </div>
    </header>
  );
};

export default Header;
