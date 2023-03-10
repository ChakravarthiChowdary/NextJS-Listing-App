import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
      <a className="navbar-brand" href="#">
        Next JS Todo App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link
            className={`nav-item nav-link ${pathname === "/" && "active"}`}
            href={"/"}
          >
            Home <span className="sr-only">(current)</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
