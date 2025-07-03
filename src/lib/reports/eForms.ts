export interface EForm {
  filename: string;
  url: string;
  size: number; // in bytes
}

export const eForms: EForm[] = [
  {
    filename: "Formulir Data Perorangan",
    url: "https://banksentosa.co.id/assets/download/Formulir%20data%20perorangan.pdf",
    size: 0.5
  },
  {
    filename: "Formulir Data Perusahaan",
    url: "https://banksentosa.co.id/assets/download/Formulir%20data%20perusahaan.pdf",
    size: 0.4
  },
  {
    filename: "Formulir Pembukaan Rekening",
    url: "https://banksentosa.co.id/assets/download/Formulir%20Pembukaan%20rekening_rev2.pdf",
    size: 0.3
  }
];
