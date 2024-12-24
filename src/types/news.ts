export interface NewsItem {
  id: number;
  title: string;
  description: INewsDescription[]

  imageUrl: string;
  date: string;
  createdDate: string;
  subTitle: string;
  documentId: string;
  mainImage: {
    url: string
  }
  view:string
  advertisement: string,
  cardImageUrl:string
}

export interface INewsDescription {
  type: string;
  text?: string;
  children?: INewsDescription[];
  code?: boolean
  url?: string
}
export interface NewsResponse {
  data: NewsItem[];
  totalPages: number;
  currentPage: number;
}

export type NewsDescriptionType = 'text' | 'link' 