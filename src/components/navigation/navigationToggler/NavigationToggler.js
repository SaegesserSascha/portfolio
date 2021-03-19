import React, { useEffect, useState } from "react";
import "../navigation.scss";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function NavigationToggler() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleToggler() {
    setIsCollapsed(!isCollapsed);
  }

  useEffect(() => {
    // TODO Change Navigation width and flex-direction based on isCollapsed state
  }, [isCollapsed]);

  return (
    <li onClick={handleToggler}>
      {isCollapsed ? <MdNavigateNext size={56} /> : <MdNavigateBefore size={56} />}
    </li>
  );
}