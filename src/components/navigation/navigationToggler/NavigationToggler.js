import React, { useEffect, useState } from "react";
import "../navigation.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useLocation } from "react-router";

export default function NavigationToggler({ collapser }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { width } = useWindowDimensions();
  const BREAKPOINT_SMALL = 576;
  const ICONSIZE_LARGE = 56;
  const ICONSIZE_SMALL = 42;
  const location = useLocation();

  function toggleMenu() {
    setIsCollapsed(!isCollapsed);
  }

  useEffect(() => {
    collapser(isCollapsed);
  }, [isCollapsed, collapser]);

  useEffect(() => {
    if (width < BREAKPOINT_SMALL) {
      setIsCollapsed(true);
    }
  }, [location])

  function getInflateIcon() {
    if (width >= BREAKPOINT_SMALL) {
      return <MdNavigateNext size={ICONSIZE_LARGE} />
    }
    return <AiOutlineMenu size={ICONSIZE_SMALL} />
  }

  function getCollapseIcon() {
    if (width >= BREAKPOINT_SMALL) {
      return <MdNavigateBefore size={ICONSIZE_LARGE} />
    }
    return <AiOutlineClose size={ICONSIZE_SMALL} />
  }

  return (
    <li onClick={toggleMenu} className="main-nav-collapser">
      <div>
        {isCollapsed ? getInflateIcon() : getCollapseIcon()}
      </div>
    </li>
  );
}