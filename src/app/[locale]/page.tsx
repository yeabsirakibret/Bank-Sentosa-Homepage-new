import { CloudDownload } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("Global");
  return (
    <div className="relative">
      {/* Image with welcome text overlay - made more compact */}
      <div className="relative w-full h-[50vh] min-h-[400px] max-h-[500px]">
        <img
          src="/banner_3.jpg"
          className="w-full h-full object-cover"
          alt="Bank banner"
        />
        {/* Welcome text overlay - adjusted positioning */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center px-4">
            {t("welcome_message")}!
          </h1>
        </div>
      </div>

      {/* Announcement section below */}
      <div className="container mx-auto">
        <p className="text-center text-base mx-5 md:mx-24 my-8 md:my-10">
          {t("name_change_announcement")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-24 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-2xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
          <h1 className="uppercase">{t("formerly")}</h1>
          <p className="font-bold uppercase text-center">
            PT. BANK PERKREDITAN RAKYAT KARYA PRIMA SENTOSA
          </p>
          <p className="font-light text-sm mt-2 text-center">
            {t("abbreviated")}
          </p>
          <p className="font-bold uppercase text-center">
            PT. BPR KARYA PRIMA SENTOSA
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-2xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
          <h1 className="uppercase">{t("new_name")}</h1>
          <p className="font-bold uppercase text-center">
            PT. BANK PEREKONOMIAN RAKYAT KARYA PRIMA SENTOSA
          </p>
          <p className="font-light text-sm mt-2 text-center">
            {t("abbreviated")}
          </p>
          <p className="font-bold uppercase text-center">
            PT. BPR KARYA PRIMA SENTOSA
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 relative w-full min-h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat flex flex-col items-center md:flex-row md:items-end md:justify-around">
        {/* Image container - moved to top on mobile */}
        <div className="w-full flex justify-center md:justify-end md:block md:w-auto mt-8 md:mt-0 order-1 md:order-2">
          <img
            src="/app_sc_1.png"
            className="w-full max-w-xs md:max-w-none md:h-[36rem] max-h-60 md:max-h-none object-contain mx-auto md:mr-12 lg:mr-24 transform hover:scale-105 transition-transform duration-500"
            alt="App Screenshot"
          />
        </div>

        {/* Text container - moved to bottom on mobile */}
        <div className="relative z-10 text-white px-6 pb-8 md:px-8 md:pb-24 max-w-2xl flex flex-col items-start order-2 md:order-1">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-snug text-left">
            {t("get_convenience")}
          </h1>

          <a
            href="https://play.google.com/store/apps/details?id=id.bank.sentosa"
            target="_blank"
            className="bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl w-fit transform hover:scale-105 flex gap-2 items-center"
          >
            <CloudDownload className="w-4 h-4" />
            {t("download")}
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>
    </div>
  );
}
