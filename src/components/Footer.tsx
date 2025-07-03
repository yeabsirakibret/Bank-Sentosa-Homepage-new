"use client";

import React from "react";
import { appVersion } from "@/lib/version";
import { useTranslations } from "next-intl";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations("Global");

  return (
    <footer className="w-full bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg">
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo and basic info */}
          <div className="flex-1 max-w-md">
            <img
              src="/sentosa_full_logo_white.png"
              alt="Sentosa Bank Logo"
              className="h-16 mb-4 hover:scale-105 transition-transform duration-300"
            />
            <p className="text-blue-100 mb-2">{t("head_office")}</p>
            <p className="text-blue-50 text-sm">
              Jl. Gading Serpong Boulevard No. M5-20, Kel. Curug Sangereng, Kec.
              Kelapa Dua, Kab. Tangerang, Banten - 15810
            </p>
          </div>

          {/* Contact information */}
          <div className="flex-1 max-w-sm">
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-blue-400 pb-2">
              {t("contact_us")}
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+622122225111"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+62 21 2222 5111</span>
              </a>
              <a
                href="mailto:info@banksentosa.co.id"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>info@banksentosa.co.id</span>
              </a>
            </div>
          </div>

          {/* Social media */}
          <div className="flex-1 max-w-sm">
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-blue-400 pb-2">
              {t("social_media")}
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors group"
              >
                <Instagram className="h-5 w-5 group-hover:text-pink-400 transition-colors" />
                <span>@banksentosa</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors group"
              >
                <Facebook className="h-5 w-5 group-hover:text-blue-300 transition-colors" />
                <span>BPR Sentosa</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors group"
              >
                <Linkedin className="h-5 w-5 group-hover:text-blue-300 transition-colors" />
                <span>BPR Sentosa</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-8 opacity-50"></div>

        {/* Legal links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100 text-sm text-center md:text-left">
            {t("disclaimer")}
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-blue-100 hover:text-white text-sm transition-colors"
            >
              {t("policy")}
            </a>
            <span className="text-blue-400">|</span>
            <a
              href="#"
              className="text-blue-100 hover:text-white text-sm transition-colors"
            >
              {t("terms_and_conditions")}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-blue-100 text-sm">
            &copy; {year} Bank Sentosa. All rights reserved.
          </p>
          <p className="text-blue-200 text-xs mt-1">
            Version: <span className="font-medium">{appVersion}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
