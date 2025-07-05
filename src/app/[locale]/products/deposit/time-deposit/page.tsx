"use client";

import Banner from "@/components/Banner";
import { Divide } from "lucide-react";
import { useTranslations, useMessages } from "next-intl";
import { useState } from "react";


export default function TimeDeposit() {
  const [activeTab, setActiveTab] = useState(0);
  const t =  useTranslations("Global");

  const messages = useMessages();
  
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
            <h2 className="text-lg font-bold">{t("maxima_deposit_title")}</h2>
            <p>{t("maxima_deposit_paragraph_1")}</p>
            <p>{t("maxima_deposit_paragraph_2")}</p>
            <hr className="border-gray-300" />
            <h2 className="text-lg font-bold">{t("interest_rate_title")}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: t.raw("interest_rate_description"),
              }}
            />

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded mt-2">
              {t("open_deposit_cta")}
            </button>
          </div>
        );
      case 1:
        return (
          <div className="space-y-7">
            <div className="flex items-center justify-start gap-4 md:gap-10">
              <img src="/icons/growth2.png" className="w-24 h-24" />
              <p className="text-lg font-bold">{t("benefit_high_interest")}</p>
            </div>

            <div className="flex items-center justify-start gap-4 md:gap-10">
              <img src="/icons/investment.png" className="w-24 h-24" />
              <p className="text-lg font-bold">{t("benefit_aro")}</p>
            </div>

            <div className="flex items-center justify-start gap-4 md:gap-10">
              <img src="/icons/transfer-money.png" className="w-24 h-24" />
              <p className="text-lg font-bold">
                {t("benefit_interest_options")}
              </p>
            </div>

            <div className="flex items-center justify-start gap-4 md:gap-10">
              <img src="/icons/customer-service.png" className="w-24 h-24" />
              <p className="text-lg font-bold">
                {t("benefit_personal_service")}
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            {messages.Global.deposit_requirements_list.map(
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
        imageSrc="/coin-wooden-table.png"
        altText="Main banner"
        heading={t("investment_heading")}
        subheading={t("investment_subheading")}
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
