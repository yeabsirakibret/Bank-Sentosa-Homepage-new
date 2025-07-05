"use client";

import Banner from "@/components/Banner";
import { useTranslations, useMessages } from "next-intl";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ConsumerCredit() {
  const [activeTab, setActiveTab] = useState(0);
  const t = useTranslations("Global");
  const messages = useMessages();

  const tabs = [t("product_info_title"), t("requirements_title")];

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
            <h2 className="text-lg font-bold">{t("consumer_credit")}</h2>
            <p>{t("consumer_credit_paragraph_1")}</p>
            <p>{t("consumer_credit_paragraph_2")}</p>
            <p>{t("consumer_credit_paragraph_3")}</p>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded mt-2">
              {t("consumer_credit_cta")}
            </button>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            {messages.Global.consumer_credit_requirements_list.map(
              (reqObj: any, index: any) => {
                return (
                  <div key={index}>
                    <h2 className="mb-2 text-2xl font-bold text-gray-900 ">
                      {reqObj.title}
                    </h2>
                    <ul className="space-y-1 text-gray-500 list-disc list-inside ">
                      {reqObj.content.map((key: any) => (
                        <li key={key}>{key}</li>
                      ))}
                    </ul>
                  </div>
                );
              }
            )}
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
        imageSrc="/banner_7.png"
        altText="Main banner"
        heading={t("realize_needs_heading")}
        subheading={t("realize_needs_subheading")}
        objectPosition="object-bottom" // optional default object-top
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
