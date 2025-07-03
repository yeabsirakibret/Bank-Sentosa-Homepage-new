import { getTranslations } from "next-intl/server";
import Image from "next/image";
import localFont from "next/font/local";

const plusJakartaFont = localFont({
  src: "../../fonts/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-plus-jakarta",
  weight: "100 900",
});

const plusJakartaItalicFont = localFont({
  src: "../../fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf",
  variable: "--font-plus-jakarta-italic",
  weight: "100 900",
});

export default async function AboutPage() {
  const t = await getTranslations("Global");
  const managements = [
    {
      name: "Hariyanto",
      positionTitle: t("ceo"),
      pictureUrl: "/management-pics/hariyanto.jpeg",
    },
    {
      name: "Harjito",
      positionTitle: t("director"),
      pictureUrl: "/management-pics/harjito.png",
    },
    {
      name: "Lena Erdawati",
      positionTitle: t("commissioner"),
      pictureUrl: "/management-pics/lena.png",
    },
  ];

  return (
    <div>
      {/*History Area*/}
      <div className="mx-5 my-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="w-full">
            <p
              className={` ${plusJakartaFont} text-5xl md:text-7xl font-extrabold text-center p-2`}
            >
              {t("history_title")}
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 p-4">
            <p>{t("history_intro")}</p>
            <p>{t("history_origin")}</p>
            <p>{t("history_commitment")}</p>
            <p>{t("history_acquisition")}</p>
            <p>{t("history_new_chapter")}</p>
          </div>
        </div>
      </div>

      {/*Banner Area*/}
      <div className="relative w-full h-[50vh] min-h-[600px] max-h-[500px] my-10">
        <Image
          src="/sentosa_bank_pic_1.png"
          className="w-full h-full object-cover"
          fill={true}
          alt="Bank banner"
        />
      </div>

      {/*Mission And Vision Area*/}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 mx-5 md:mx-16 my-10">
        <div className="w-full flex items-center justify-center">
          <img src="/misi@300x.png" className="w-72" />
        </div>

        <div className="w-full flex flex-col gap-4 p-4">
          <div className="flex">
            <div>
              <p
                className={`${plusJakartaFont.className} text-4xl font-extrabold`}
              >
                {t("vision_title")}
              </p>
              <p>{t("vision_text")}</p>
            </div>
            <div className="hidden md:block">
              <img src="/visi@300x.png" className="w-72" />
            </div>
          </div>

          <div>
            <p
              className={`${plusJakartaFont.className} text-4xl font-extrabold`}
            >
              {t("mission_title")}
            </p>
            <div className="flex flex-col gap-4">
              <p>{t("mission_1")}</p>
              <p>{t("mission_2")}</p>
              <p>{t("mission_3")}</p>
              <p>{t("mission_4")}</p>
              <p>{t("mission_5")}</p>
            </div>
          </div>
        </div>
      </div>

      {/*Management Area*/}
      <div className="mx-5 md:mx-16 my-10 ">
        <div className="mb-5">
          <h1
            className={`${plusJakartaFont.className} text-center text-5xl font-extrabold `}
          >
            {t("management_title")}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {managements.map((management, index) => (
            <div key={index} className="group">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:scale-105  transition-transform duration-300  w-fit">
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-top" // Ensures full width coverage
                    src={management.pictureUrl}
                    alt=""
                    loading="lazy"
                  />
                </div>

                <div className="p-4 text-center space-y-1 min-w-[250px]">
                  <h3 className="text-xl font-bold text-gray-900 truncate">
                    {management.name}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {management.positionTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
