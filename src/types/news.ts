export interface NewsItem {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  date: string;
}

export interface NewsResponse {
  data: NewsItem[];
  totalPages: number;
  currentPage: number;
}