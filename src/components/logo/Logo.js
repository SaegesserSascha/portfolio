import "./logo.scss";
import React from "react";

export default function Logo({ isCollapsed }) {
  return (
    <section className={`logo-wrapper${isCollapsed ? "" : " logo-wrapper-inflated"}`}>
      <div>
        <img src="/images/logo_transparent.png" alt="logo" />
      </div>
      <h3>Portfolio</h3>
    </section>
  );
}