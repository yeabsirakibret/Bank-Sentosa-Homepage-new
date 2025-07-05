"use client";

import Banner from "@/components/Banner";
import { useTranslations } from "next-intl";
import { useState } from "react";


export default function Savings() {
  const [activeTab, setActiveTab] = useState(0);
  const t =  useTranslations("Global");
  
  const tabs = [
    t("product_info_title"),
    t("why_smart_saving_title"),
    t("requirements_title"),
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-bold">{t("smart_saving_title")}</h2>
            <p>{t("smart_saving_paragraph_1")}</p>
            <p>{t("smart_saving_paragraph_2")}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded mt-2">
              {t("smart_saving_cta")}
            </button>
          </div>
        );
      case 1:
        return <p>Alasan memilih Tabungan Pintar akan ditampilkan di sini.</p>;
      case 2:
        return <p>Persyaratan pembukaan tabungan akan ditampilkan di sini.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        imageSrc="/banner_4.png"
        altText="Main banner"
        heading={t("secure_step_heading")}
        subheading={t("secure_step_subheading")}
        objectPosition="object-center" // optional default object-top
      />

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`whitespace-nowrap px-4 py-2 text-sm md:text-base font-medium ${
                activeTab === index
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
