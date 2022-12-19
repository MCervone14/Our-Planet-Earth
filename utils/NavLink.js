import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

NavLink.propTypes = {
  href: PropTypes.any.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};

const colorKey = {
  "cry of the earth": "#86efac",
  "cry of the poor": "#fdba74",
  "ecological economics": "#d8b4fe",
  "ecological education": "#fca5a5",
  "ecological spirituality": "#67e8f9",
  "simple lifestyles": "#fde047",
  "community involvement": "#f9a8d4",
};

function NavLink({ href, exact, children, ...props }) {
  const { pathname, asPath } = useRouter();

  const isActive = exact ? pathname === href : asPath === href;

  if (isActive) {
    props.className += " active";
  }

  return (
    <Link
      style={{
        backgroundColor: `${
          props.className.includes("active")
            ? ""
            : colorKey[children.toLowerCase()]
        }`,
      }}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}

export { NavLink };
