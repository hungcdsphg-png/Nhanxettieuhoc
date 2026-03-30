
export interface StudentRecord {
  stt: number;
  maHocSinh: string;
  hoTen: string;
  ngaySinh: string;
  diem: number;
  mucDo: string; // T: Hoàn thành tốt, H: Hoàn thành, C: Chưa hoàn thành
  maNhanXet: string;
  noiDung: string;
  isProcessing?: boolean;
}

export const KHOI_LOP = [
  "Khối 1",
  "Khối 2",
  "Khối 3",
  "Khối 4",
  "Khối 5"
];

export const MON_HOC_TIEU_HOC = [
  "Tiếng Việt",
  "Toán",
  "Ngoại ngữ",
  "Đạo đức",
  "Tự nhiên xã hội",
  "Lịch sử và Địa lý",
  "Khoa học",
  "TH-CN (Tin học)",
  "TH-CN (Công nghệ)",
  "Giáo dục thể chất",
  "Nghệ thuật (Âm nhạc)",
  "Nghệ thuật (Mỹ thuật)",
  "Hoạt động trải nghiệm"
];

export const getSubjectAbbr = (subject: string): string => {
  const mapping: Record<string, string> = {
    "Tiếng Việt": "TV",
    "Toán": "T",
    "Ngoại ngữ": "NN",
    "Đạo đức": "DD",
    "Tự nhiên xã hội": "TNXH",
    "Lịch sử và Địa lý": "LSDL",
    "Khoa học": "KH",
    "TH-CN (Tin học)": "TH",
    "TH-CN (Công nghệ)": "CN",
    "Giáo dục thể chất": "GDTC",
    "Nghệ thuật (Âm nhạc)": "AN",
    "Nghệ thuật (Mỹ thuật)": "MT",
    "Hoạt động trải nghiệm": "HDTN"
  };
  return mapping[subject] || "MH";
};
