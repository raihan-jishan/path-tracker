const NavItem = ({ path, label }) => {
  return (
    <li >
      <a
        href={path}
        className="block py-2 px-3  text-lg  rounded   md:p-0"
        aria-current="page"
      >
        {label}
      </a>
    </li>
  );
};

export default NavItem;
