"use client";

import { useEffect, useState } from "react";
import localFont from "next/font/local";
import { useTranslations } from "next-intl";
import { CopyIcon, FileIcon, FolderOpenIcon } from "lucide-react";

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

interface EFormFile {
  filename: string;
  url: string;
  size: string;
}

export default function EForm() {
  const [files, setFiles] = useState<EFormFile[]>([]);
  const t = useTranslations("Global");

  useEffect(() => {
    async function fetchFiles() {
      const res = await fetch("/api/report/e-form");
      const json = await res.json();
      setFiles(json.data);
    }

    fetchFiles();
  }, []);

  return (
    <div className={`${plusJakartaFont.className} w-full flex flex-col`}>
      {/* Header */}
      <div className="p-8 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl">
        <h1 className="text-3xl">{t("download_e-form")}</h1>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full my-10 sm:my-16">
        <div className="overflow-hidden shadow ring-1 ring-black/5 rounded-xl">
          {/* Desktop Table */}
          <table className="hidden sm:table min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gradient-to-r from-blue-50 to-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                >
                  {t("file_name")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-sm font-semibold text-gray-900"
                >
                  {t("file_size")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-center text-sm font-semibold text-gray-900"
                >
                  
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {files.map((file, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <FileIcon className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="truncate max-w-xs">{file.filename}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-center text-gray-500">
                    {file.size} MB
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-center">
                    <div className="flex justify-center space-x-2">
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                      >
                        {t("view_download")}
                      </a>
                     
                    </div>
                  </td>
                </tr>
              ))}
              {files.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-8 text-center text-sm text-gray-500"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <FolderOpenIcon className="h-10 w-10 text-gray-300 mb-2" />
                      {t("no_files")}
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div className="sm:hidden space-y-3 py-3 px-4">
            {files.length > 0 ? (
              files.map((file, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-xs border border-gray-100"
                >
                  <div className="flex flex-col items-center justify-between">
                    <div className="flex items-center truncate">
                      <FileIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-900 truncate">
                        {file.filename}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      {file.size} MB
                    </span>
                  </div>
                  <div className="mt-3 flex justify-end space-x-2">
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-2.5 py-1.5 border border-transparent font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      {t("view_download")}
                    </a>
                    
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-xs border border-gray-100 text-center">
                <FolderOpenIcon className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">{t("no_files")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
