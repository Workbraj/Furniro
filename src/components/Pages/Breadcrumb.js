import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const previousPageRef = useRef(location.pathname);

  useEffect(() => {
    previousPageRef.current = location.pathname;
  }, [location.pathname]);

  const getBreadcrumbName = (pathname) => {
    const nameMap = {
      "/": "Home",
      "/shop": "Shop",
      "/about": "About",
      "/contact": "Contact",
    };
    return (
      nameMap[pathname] ||
      pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2)
    );
  };

  const pathnames = location.pathname.split("/").filter((x) => x);
  const previousPathnames = previousPageRef.current.split("/").filter((x) => x);

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <span key={to}>
            &gt; <Link to={to}>{getBreadcrumbName(to)}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
