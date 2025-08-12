/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link"; // Use Next.js's Link for navigation
import Logo from "./Logo";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [click, setClick] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [focusedDropdown, setFocusedDropdown] = useState(null);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleClick = () => {
    setClick(!click);
    setActiveMenu(null); // Close all submenus when toggling main menu
  };

  const handleSubMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  // Keyboard navigation handlers
  const handleKeyDown = (event, action, menuName = null) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (action === "toggle") {
        handleClick();
      } else if (action === "submenu") {
        handleSubMenu(menuName);
      }
    } else if (event.key === "Escape") {
      if (click) {
        setClick(false);
        setActiveMenu(null);
        menuButtonRef.current?.focus();
      } else if (activeMenu) {
        setActiveMenu(null);
      }
    }
  };

  // Handle dropdown focus for desktop
  const handleDropdownFocus = (menuName) => {
    setFocusedDropdown(menuName);
  };

  const handleDropdownBlur = () => {
    // Small delay to allow focus to move to dropdown content
    setTimeout(() => {
      setFocusedDropdown(null);
    }, 150);
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
      // Focus management for mobile menu
      setTimeout(() => {
        mobileMenuRef.current?.focus();
      }, 100);
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [click]);

  return (
    <nav
      className={`navbar ${isSticky ? "sticky-scroll" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mobile-navbar">
        <Logo />
        <div
          ref={menuButtonRef}
          className="mobile-menu-icon"
          onClick={handleClick}
          onKeyDown={(e) => handleKeyDown(e, "toggle")}
          aria-expanded={click}
          aria-controls="mobile-menu"
          aria-label={click ? "Close main menu" : "Open main menu"}
          role="button"
          tabIndex="0"
        >
          {click ? (
            // Render the X icon when the mobile menu is open
            <div className="close-icon" aria-hidden="true">
              &#10005;
            </div>
          ) : (
            // Render the hamburger icon when the mobile menu is closed
            <div className="menu-icon">
              <div className="menu-text" aria-hidden="true">
                MENU
              </div>
              <div className="hamburger-icon" aria-hidden="true">
                &#9776;
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Render the mobile menu items */}
      {click && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className={`mobile-menu ${click ? "open" : ""}`}
          role="menu"
          aria-labelledby="mobile-menu-button"
          tabIndex="-1"
        >
          <ul role="none">
            <li role="none">
              <Link legacyBehavior href="/">
                <a
                  style={{ padding: 0 }}
                  className="navbar-mobile-items"
                  role="menuitem"
                  onClick={() => setClick(false)}
                >
                  HOME
                </a>
              </Link>
            </li>
            <li role="none" onClick={() => handleSubMenu("about")}>
              <span
                onKeyDown={(e) => handleKeyDown(e, "submenu", "about")}
                className={`navbar-mobile-items ${
                  activeMenu === "about" ? "active-submenu" : ""
                }`}
                aria-expanded={activeMenu === "about"}
                aria-haspopup="true"
                aria-controls="about-submenu"
                role="menuitem"
                tabIndex="0"
              >
                About
              </span>
              {activeMenu === "about" && (
                <ul
                  id="about-submenu"
                  className="submenu"
                  role="menu"
                  aria-labelledby="about-menu-button"
                >
                  <li role="none">
                    <Link
                      href="/about"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      Overview
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href="/about/clinic"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      About The Clinic
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href="/about/group"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      About The Group
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href="/about/providers"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      About The Providers
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li role="none" onClick={() => handleSubMenu("skinCancer")}>
              <span
                onKeyDown={(e) => handleKeyDown(e, "submenu", "skinCancer")}
                className={`navbar-mobile-items ${
                  activeMenu === "skinCancer" ? "active-submenu" : ""
                }`}
                aria-expanded={activeMenu === "skinCancer"}
                aria-haspopup="true"
                aria-controls="skin-cancer-submenu"
                role="menuitem"
                tabIndex="0"
              >
                Skin Cancer
              </span>
              {activeMenu === "skinCancer" && (
                <ul
                  id="skin-cancer-submenu"
                  className="submenu"
                  role="menu"
                  aria-labelledby="skin-cancer-menu-button"
                >
                  <li role="none">
                    <Link
                      href="/skinCancer"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      Overview
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href="/skinCancer/atypicalLesions"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      Atypical Lesions
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href="/skinCancer/basalCellCarcinoma"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      Basal Cell Carcinoma
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href="/skinCancer/melanoma"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      Melanoma In Situ
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href="/skinCancer/squamosCellCarcinoma"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      Squamous Cell Carcinoma (SCC)
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li role="none" onClick={() => handleSubMenu("treatmentOptions")}>
              <span
                onKeyDown={(e) =>
                  handleKeyDown(e, "submenu", "treatmentOptions")
                }
                className={`navbar-mobile-items ${
                  activeMenu === "treatmentOptions" ? "active-submenu" : ""
                }`}
                aria-expanded={activeMenu === "treatmentOptions"}
                aria-haspopup="true"
                aria-controls="treatment-options-submenu"
                role="menuitem"
                tabIndex="0"
              >
                Treatment Options
              </span>
              {activeMenu === "treatmentOptions" && (
                <ul
                  id="treatment-options-submenu"
                  className="submenu"
                  role="menu"
                  aria-labelledby="treatment-options-menu-button"
                >
                  <li role="none">
                    <Link
                      href="/treatmentOptions"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      Overview
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href="/treatmentOptions/MohsMicrographicSurgery"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      Mohs Micrographic Surgery
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href="/treatmentOptions/MohsReconstruction"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      Mohs Reconstruction
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href="/treatmentOptions/radiationTherapy"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      Radiation Therapy
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li role="none" onClick={() => handleSubMenu("gallery")}>
              <span
                onKeyDown={(e) => handleKeyDown(e, "submenu", "gallery")}
                className={`navbar-mobile-items ${
                  activeMenu === "gallery" ? "active-submenu" : ""
                }`}
                aria-expanded={activeMenu === "gallery"}
                aria-haspopup="true"
                aria-controls="gallery-submenu"
                role="menuitem"
                tabIndex="0"
              >
                Gallery
              </span>
              {activeMenu === "gallery" && (
                <ul
                  id="gallery-submenu"
                  className="submenu"
                  role="menu"
                  aria-labelledby="gallery-menu-button"
                >
                  <li role="none">
                    <Link
                      href="/gallery"
                      role="menuitem"
                      onClick={() => setClick(false)}
                    >
                      Overview
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li role="none">
              <Link legacyBehavior href="/contact">
                <a
                  style={{ padding: 0 }}
                  className="navbar-mobile-items"
                  role="menuitem"
                  onClick={() => setClick(false)}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
      <ul
        className={`desktop-menu ${click ? "hidden" : ""}`}
        role="menubar"
        aria-label="Desktop navigation menu"
      >
        <li role="none">
          <Link className="main-title" href="/" role="menuitem" tabIndex="0">
            Home
          </Link>
        </li>
        <li
          className="dropdown"
          role="none"
          onMouseEnter={() => handleDropdownFocus("about")}
          onMouseLeave={handleDropdownBlur}
        >
          <Link
            className="main-title"
            href="/about"
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={focusedDropdown === "about"}
            tabIndex="0"
          >
            About
          </Link>
          <div
            className="dropdown-content"
            role="menu"
            aria-labelledby="about-dropdown"
            aria-hidden={focusedDropdown !== "about"}
          >
            <Link
              href="/about/group"
              role="menuitem"
              tabIndex={focusedDropdown === "about" ? "0" : "-1"}
            >
              About The Group
            </Link>
            <Link
              href="/about/clinic"
              role="menuitem"
              tabIndex={focusedDropdown === "about" ? "0" : "-1"}
            >
              About The Clinic
            </Link>
            <Link
              href="/about/providers"
              role="menuitem"
              tabIndex={focusedDropdown === "about" ? "0" : "-1"}
            >
              About The Providers
            </Link>
          </div>
        </li>
        <li
          className="dropdown"
          role="none"
          onMouseEnter={() => handleDropdownFocus("skinCancer")}
          onMouseLeave={handleDropdownBlur}
        >
          <Link
            className="main-title"
            href="/skinCancer"
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={focusedDropdown === "skinCancer"}
            tabIndex="0"
          >
            Skin Cancer
          </Link>
          <div
            className="dropdown-content"
            role="menu"
            aria-labelledby="skin-cancer-dropdown"
            aria-hidden={focusedDropdown !== "skinCancer"}
          >
            <Link
              href="/skinCancer/atypicalLesions"
              role="menuitem"
              tabIndex={focusedDropdown === "skinCancer" ? "0" : "-1"}
            >
              Atypical Lesions
            </Link>
            <Link
              href="/skinCancer/basalCellCarcinoma"
              role="menuitem"
              tabIndex={focusedDropdown === "skinCancer" ? "0" : "-1"}
            >
              Basal Cell Carcinoma
            </Link>
            <Link
              href="/skinCancer/melanoma"
              role="menuitem"
              tabIndex={focusedDropdown === "skinCancer" ? "0" : "-1"}
            >
              Melanoma In Situ
            </Link>
            <Link
              href="/skinCancer/squamosCellCarcinoma"
              role="menuitem"
              tabIndex={focusedDropdown === "skinCancer" ? "0" : "-1"}
            >
              Squamous Cell Carcinoma (SCC)
            </Link>
          </div>
        </li>
        <li
          className="dropdown"
          role="none"
          onMouseEnter={() => handleDropdownFocus("treatmentOptions")}
          onMouseLeave={handleDropdownBlur}
        >
          <Link
            className="main-title"
            href="/treatmentOptions"
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={focusedDropdown === "treatmentOptions"}
            tabIndex="0"
          >
            Treatment Options
          </Link>
          <div
            className="dropdown-content"
            role="menu"
            aria-labelledby="treatment-options-dropdown"
            aria-hidden={focusedDropdown !== "treatmentOptions"}
          >
            <Link
              href="/treatmentOptions/MohsMicrographicSurgery"
              role="menuitem"
              tabIndex={focusedDropdown === "treatmentOptions" ? "0" : "-1"}
            >
              Mohs Micrographic Surgery
            </Link>
            <Link
              href="/treatmentOptions/MohsReconstruction"
              role="menuitem"
              tabIndex={focusedDropdown === "treatmentOptions" ? "0" : "-1"}
            >
              Mohs Reconstruction
            </Link>
            <Link
              href="/treatmentOptions/radiationTherapy"
              role="menuitem"
              tabIndex={focusedDropdown === "treatmentOptions" ? "0" : "-1"}
            >
              Radiation Therapy
            </Link>
          </div>
        </li>
        <li
          className="dropdown"
          role="none"
          onMouseEnter={() => handleDropdownFocus("gallery")}
          onMouseLeave={handleDropdownBlur}
        >
          <Link
            className="main-title"
            href="/gallery"
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={focusedDropdown === "gallery"}
            tabIndex="0"
          >
            Gallery
          </Link>
          <div
            className="dropdown-content"
            role="menu"
            aria-labelledby="gallery-dropdown"
            aria-hidden={focusedDropdown !== "gallery"}
          >
            {/* <Link href="/body/arms" role="menuitem" tabIndex={focusedDropdown === "gallery" ? "0" : "-1"}>Arm Lift</Link> */}
          </div>
        </li>
        <li role="none">
          <Link
            className="main-title"
            href="/contact"
            role="menuitem"
            tabIndex="0"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
