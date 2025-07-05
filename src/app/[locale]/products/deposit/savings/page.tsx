"use client";

import { useState } from "react";


export default function Savings() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = ["Informasi Produk", "Mengapa Tabungan Pintar ?", "Persyaratan"];

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Tabungan Pintar</h2>
            <p>
              Tabungan Pintar dari Bank Sentosa hadir sebagai solusi menabung
              yang mudah, aman, dan sesuai kebutuhan kamu. Dengan proses
              pembukaan rekening yang praktis, setoran awal yang terjangkau,
              produk ini cocok untuk kamu yang ingin mulai kebiasaan menabung
              yang lebih baik—baik pelajar, pekerja, maupun keluarga. Semua
              transaksi juga bisa dilakukan dengan nyaman melalui layanan
              digital atau langsung di kantor kami.
            </p>
            <p>
              Tak hanya itu, Tabungan Pintar dilengkapi dengan suku bunga yang
              kompetitif, sehingga dana kamu dapat bertumbuh seiring waktu.
              Dengan perlindungan dari Lembaga Penjamin Simpanan (LPS), kamu
              bisa menabung dengan tenang tanpa rasa khawatir. Lebih dari
              sekadar menyimpan uang, Tabungan Pintar membantu kamu membangun
              fondasi keuangan yang kuat untuk masa depan—karena menabung adalah
              langkah awal menuju impian yang lebih besar.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded mt-2">
              Mulai Menabung
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
      <div
        className="bg-cover bg-center h-64 md:h-80 flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/banner_1.jpg')",
        }}
      >
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold">
            Langkah Aman untuk <br />
            Masa Depan Finansial Anda
          </h1>
        </div>
      </div>

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
