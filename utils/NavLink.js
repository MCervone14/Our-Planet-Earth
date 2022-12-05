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

function NavLink({ href, exact, children, ...props }) {
  const { pathname, asPath } = useRouter();

  const isActive = exact ? pathname === href : asPath === href;

  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

export { NavLink };
