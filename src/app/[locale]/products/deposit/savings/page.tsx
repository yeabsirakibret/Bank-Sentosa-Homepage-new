"use client";

import Banner from "@/components/Banner";
import { useTranslations, useMessages } from "next-intl";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";


export default function Savings() {
  const [activeTab, setActiveTab] = useState(0);
  const t =  useTranslations("Global");

  const messages = useMessages();
  
  const tabs = [
    t("product_info_title"),
    t("why_smart_saving_title"),
    t("requirements_title"),
  ];

  const router = useRouter();
  const searchParams = useSearchParams();

  // Handle URL parameter changes
  useEffect(() => {
    const tabParam = searchParams.get("currentTab");
    if (tabParam) {
      const tabIndex = parseInt(tabParam);
      if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex < tabs.length) {
        setActiveTab(tabIndex);
      }
    }
  }, [searchParams, tabs.length]);

  // Update URL when tab changes
  const handleTabChange = (index: number) => {
    setActiveTab(index);
    router.replace(`?currentTab=${index}`, { scroll: false });
  };

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
        return (
          <div className="space-y-7">
            <div className="flex items-center justify-start gap-4 md:gap-10">
              <img src="/icons/shield.png" className="w-24 h-24" />
              <p className="text-lg font-bold">{t("benefit_insured")}</p>
            </div>

            <div className="flex items-center justify-start gap-4 md:gap-10">
              <img src="/icons/growth.png" className="w-24 h-24" />
              <p className="text-lg font-bold">{t("benefit_interest")}</p>
            </div>

            <div className="flex items-center justify-start gap-4 md:gap-10">
              <img src="/icons/money.png" className="w-24 h-24" />
              <p className="text-lg font-bold">{t("benefit_admin_fee")}</p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 ">
              {t("important_info_title")}
            </h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside ">
              {messages.Global.individual_requirements.map((key: any) => (
                <li key={key}>{key}</li>
              ))}
            </ul>

            <h2 className="mb-2 text-2xl font-bold text-gray-900 ">
              {t("individual_customer_type_title")}
            </h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside ">
              {messages.Global.individual_customer_documents.map((key: any) => (
                <li key={key}>{key}</li>
              ))}
            </ul>

            <h2 className="mb-2 text-2xl font-bold text-gray-900 ">
              {t("company_customer_type_title")}
            </h2>
            <ul className="space-y-1 text-gray-500 list-disc list-inside ">
              {messages.Global.company_customer_documents.map((key: any) => (
                <li key={key}>{key}</li>
              ))}
            </ul>
          </div>
        );
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
              onClick={() => handleTabChange(index)}
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
