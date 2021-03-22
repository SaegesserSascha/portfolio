import React, { useEffect, useState } from "react";
import "../navigation.scss";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function NavigationToggler({ collapser }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleCollapser() {
    setIsCollapsed(!isCollapsed);
  }

  useEffect(() => {
    collapser(isCollapsed);
  }, [isCollapsed, collapser]);

  return (
    <li onClick={handleCollapser}>
      <div>
        {isCollapsed ? <MdNavigateNext size={56} /> : <MdNavigateBefore size={56} />}
      </div>
    </li>
  );
}