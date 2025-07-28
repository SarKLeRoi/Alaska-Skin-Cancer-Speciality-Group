/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Use Next.js's Link for navigation
import Logo from "./Logo";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [click, setClick] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleClick = () => setClick(!click);

  const handleSubMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };
  useEffect(() => {
    let lastScrollY = 0;

    function handleScroll() {
      const scrollY = window.scrollY;

      // Use `requestAnimationFrame` for better performance
      requestAnimationFrame(() => {
        if (scrollY > 100 && lastScrollY <= 100) {
          setIsSticky(true);
        } else if (scrollY <= 100 && lastScrollY > 100) {
          setIsSticky(false);
        }
        lastScrollY = scrollY;
      });
    }

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add or remove a class to the body element based on the click state
    if (click) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [click]);
  return (
    <div className={`navbar ${isSticky ? "sticky-scroll" : ""}`}>
      <div className="mobile-navbar">
        <Logo />
        <div className="mobile-menu-icon" onClick={handleClick}>
          {click ? (
            // Render the X icon when the mobile menu is open
            <div className="close-icon" onClick={handleClick}>
              &#10005;
            </div>
          ) : (
            // Render the hamburger icon when the mobile menu is closed
            <div className="menu-icon">
              <div className="menu-text">MENU</div>
              <div className="hamburger-icon">&#9776;</div>
            </div>
          )}
        </div>
      </div>

      {/* Render the mobile menu items */}
      {click && (
        <div className={`mobile-menu ${click ? "open" : ""}`}>
          <ul>
            <li>
              <Link legacyBehavior href="/">
                <a style={{ padding: 0 }} className="navbar-mobile-items">
                  HOME
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a style={{ padding: 0 }} className="navbar-mobile-items">
                  ABOUT
                </a>
              </Link>
            </li>
            <li onClick={() => handleSubMenu("skinCancer")}>
              <span className="navbar-mobile-items">Skin Cancer</span>
              {activeMenu === "skinCancer" && (
                <ul className="submenu">
                  <li>
                    <Link href="/skinCancer">Overview</Link>
                  </li>
                </ul>
              )}
            </li>
            <li onClick={() => handleSubMenu("treatmentOptions")}>
              <span className="navbar-mobile-items">Treatment Options</span>
              {activeMenu === "treatmentOptions" && (
                <ul className="submenu">
                  <li>
                    <Link href="/treatmentOptions">Overview</Link>
                  </li>
                </ul>
              )}
            </li>
            <li onClick={() => handleSubMenu("gallery")}>
              <span href="/gallery" className="navbar-mobile-items">
                Gallery
              </span>
              {activeMenu === "gallery" && (
                <ul className="submenu">
                  <li>
                    <Link href="/body">Overview</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link legacyBehavior href="/contact">
                <a style={{ padding: 0 }} className="navbar-mobile-items">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          {/* <div className="additional-logos">
            <div className="contact-link">
              <a href="/contact" className="contact-link">
                907-357-2332
              </a>
            </div>
          </div> */}
        </div>
      )}
      <ul className={`desktop-menu ${click ? "hidden" : ""}`}>
        <li>
          <Link className="main-title" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="main-title" href="/about">
            About
          </Link>
        </li>
        <li className="dropdown">
          <Link className="main-title" href="/face">
            Skin Cancer
          </Link>
          {/* <div className="dropdown-content">
              <Link href="/face/brow-lift">Brow Lift</Link>
            </div> */}
        </li>
        <li className="dropdown">
          <Link className="main-title" href="/breast">
            Treatment Options
          </Link>
          <div className="dropdown-content">
            {/* <Link href="/breast/reduction">Breast Reduction</Link> */}
          </div>
        </li>
        <li className="dropdown">
          <Link className="main-title" href="/body">
            Gallery
          </Link>
          <div className="dropdown-content">
            {/* <Link href="/body/arms">Arm Lift</Link> */}
          </div>
        </li>
        <li>
          <Link className="main-title" href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
