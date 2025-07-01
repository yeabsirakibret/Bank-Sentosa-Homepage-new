"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import { Link } from "@/i18n/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("Global");
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";

  // Track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Define your navigation links here
  const navLinks = [
    // { href: '/', label: t('title') },
    { href: "/about", label: t("about_sentosa") },
    {
      href: "/products",
      label: t("products"),
      dropdown: [
        {
          label: t("deposit"),
          href: "/products/deposit",
          children: [
            {
              href: "/products/deposit/savings",
              label: t("savings"),
            },
            {
              href: "/products/deposit/time-deposit",
              label: t("time_deposit"),
            },
          ],
        },
        {
          label: t("loan"),
          href: "/products/loan",
          children: [
            {
              href: "/products/loan/working-capital",
              label: t("working_capital"),
            },
            {
              href: "/products/loan/investment-credit",
              label: t("investment_credit"),
            },
            {
              href: "/products/loan/consumer-credit",
              label: t("consumer_credit"),
            },
          ],
        },
      ],
    },
    {
      label: t("report"),
      href: "/report",
      dropdown: [
        {
          label: "",
          href: "/report",
          children: [
            {
              href: "/report/financial-report",
              label: t("financial_report"),
            },
            {
              href: "/report/governance-report",
              label: t("governance_report"),
            },
            {
              href: "/report/annual-report",
              label: t("annual_report"),
            },
          ],
        },
      ],
    },

    { href: "/e-form", label: t("e-form") },
  ];

  // Find the currently open dropdown's items
  const activeDropdown = navLinks.find(
    (link) => link.href === openDropdown && link.dropdown
  );

  // Handle mouse enter with delay for smoother UX
  const handleMouseEnter = (href: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(href);
    setIsVisible(true);
  };

  // Handle mouse leave with delay to prevent flickering
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setOpenDropdown(null);
      }, 150); // Wait for fade out animation
    }, 100);
  };

  // Keep dropdown open when hovering over it
  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  function renderDropdownItems(items: any[]) {
    return (
      <div className="flex flex-row gap-8 w-full items-start">
        {items.map((item) => (
          <div key={item.href} className="min-w-[160px]">
            {/* Parent label with same vertical spacing as first child */}
            <div className=" text-gray-900 px-2 py-1">
              {item.label}
            </div>

            {/* Children list */}
            <ul className="space-y-1">
              {item.children?.map((child: any) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="text-gray-700 font-bold hover:text-blue-600 px-2 py-1 rounded block transition-colors"
                  >
                    {child.label}
                  </Link>

                  {/* Sub-children */}
                  {child.children && (
                    <ul className="pl-4 space-y-1 mt-1">
                      {child.children.map((sub: any) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="text-gray-700 hover:text-blue-600 px-2 py-1 rounded block transition-colors"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  // Recursive mobile dropdown renderer
  function renderMobileDropdown(
    items: any[],
    closeMenu: () => void,
    level = 0
  ) {
    return items.map((item) => (
      <div key={item.href} className={level > 0 ? "ml-6" : ""}>
        {item.label.length > 0 && (
          <Link
            href={item.href}
            className={clsx(
              level === 0
                ? "block px-4 py-3 text-base font-medium rounded-lg transition-colors"
                : "block px-4 py-2 text-sm rounded-lg transition-colors",
              "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            )}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        )}
        {item.children && (
          <div className="ml-2 border-l border-gray-200 pl-2">
            {renderMobileDropdown(item.children, closeMenu, level + 1)}
          </div>
        )}
      </div>
    ));
  }

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="bg-white/95 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
        <nav className="container mx-auto flex items-center justify-between text-black px-6 lg:px-8">
          <Link href="/" className="text-lg font-bold flex-shrink-0">
            <img
              src="/sentosa_full_logo.png"
              alt="Sentosa Bank Logo"
              className="h-16 py-2 transition-transform hover:scale-105"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.dropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.href)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={clsx(
                        "group relative flex items-center px-4 py-6 text-base font-medium transition-all duration-200 ease-in-out",
                        isActive
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      )}
                    >
                      <span className="relative flex items-center">
                        {link.label}
                        <ChevronDown
                          className={clsx(
                            "ml-1 h-4 w-4 transition-transform duration-200",
                            openDropdown === link.href
                              ? "rotate-180"
                              : "rotate-0"
                          )}
                        />
                      </span>
                      {/* Active indicator */}
                      <div
                        className={clsx(
                          "absolute bottom-0 left-1/2 h-0.5 bg-blue-600 transition-all duration-200 ease-in-out",
                          isActive
                            ? "w-full -translate-x-1/2"
                            : "w-0 -translate-x-1/2 group-hover:w-full"
                        )}
                      />
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={clsx(
                    "group relative px-4 py-6 text-base font-medium transition-all duration-200 ease-in-out",
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  )}
                >
                  <span className="relative">
                    {link.label}
                    {/* Active indicator */}
                    <div
                      className={clsx(
                        "absolute -bottom-6 left-1/2 h-0.5 bg-blue-600 transition-all duration-200 ease-in-out",
                        isActive
                          ? "w-full -translate-x-1/2"
                          : "w-0 -translate-x-1/2 group-hover:w-full"
                      )}
                    />
                  </span>
                </Link>
              );
            })}
            <LocaleSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </nav>

        {activeDropdown && (
          <div
            className={clsx(
              "absolute left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-out",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            )}
            style={{ top: "100%" }}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto px-6 lg:px-8 py-5">
              {renderDropdownItems(activeDropdown?.dropdown ?? [])}
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="container mx-auto px-6 py-4 space-y-2">
              <div className="flex justify-end">
                <LocaleSwitcher />
              </div>
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.href} className="space-y-2">
                      <Link
                        href={link.href}
                        className="block px-4 py-3 text-base font-medium rounded-lg transition-colors text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                      <div className="ml-4 space-y-1">
                        {renderMobileDropdown(link.dropdown, () =>
                          setIsMobileMenuOpen(false)
                        )}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium rounded-lg transition-colors text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20"></div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
