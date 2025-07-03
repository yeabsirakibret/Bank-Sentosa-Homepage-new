export interface FinancialReport {
  filename: string;
  url: string;
  year_period: string; // e.g. "2025 I"
}

export const financialStatements: FinancialReport[] = [
  {
    filename: "Laporan Neraca",
    url: "https://banksentosa.co.id/assets/pdf/2025/Laporan%20Neraca%20-%202025%20TW%20I.pdf",
    year_period: "2025 - I"
  },
  {
    filename: "Laporan Laba Rugi",
    url: "https://banksentosa.co.id/assets/pdf/2025/Laporan%20Laba%20Rugi%20-%202025%20TW%20I.pdf",
    year_period: "2025 - I"
  },
  {
    filename: "Laporan Neraca",
    url: "https://banksentosa.co.id/assets/pdf/2024/Laporan%20Neraca%20-%202024%20TW%20IV.pdf",
    year_period: "2024 - IV"
  },
  {
    filename: "Laporan Laba Rugi",
    url: "https://banksentosa.co.id/assets/pdf/2024/Laporan%20Laba%20Rugi%20-%202024%20TW%20IV.pdf",
    year_period: "2024 - IV"
  },
  {
    filename: "Laporan Neraca",
    url: "https://banksentosa.co.id/assets/pdf/2024/Laporan%20Neraca%20-%202024%20TW%20III.pdf",
    year_period: "2024 - III"
  },
  {
    filename: "Laporan Laba Rugi",
    url: "https://banksentosa.co.id/assets/pdf/2024/Laporan%20Laba%20Rugi%20-%202024%20TW%20III.pdf",
    year_period: "2024 - III"
  }
];
