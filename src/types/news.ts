export interface NewsItem {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  date: string;
  createdDate:string;
  subTitle:string;
  mainImage:{
    url:string
  }
}

export interface NewsResponse {
  data: NewsItem[];
  totalPages: number;
  currentPage: number;
}