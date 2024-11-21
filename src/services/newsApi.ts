import { mockNews } from '../data/mockNews';
import type { NewsResponse } from '../types/news';

const ITEMS_PER_PAGE = 3;

export async function fetchNews(page: number, search: string): Promise<NewsResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  let filteredNews = [...mockNews];
  
  // Apply search filter
  if (search) {
    const searchLower = search.toLowerCase();
    filteredNews = filteredNews.filter(
      news =>
        news.title.toLowerCase().includes(searchLower) ||
        news.description.toLowerCase().includes(searchLower)
    );
  }

  // Calculate pagination
  const totalItems = filteredNews.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  
  return {
    data: filteredNews.slice(startIndex, endIndex),
    totalPages,
    currentPage: page
  };
}

export async function fetchNewsById(id: string): Promise<NewsResponse['data'][0] | null> {
  // Simulate API delay
  
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const news = mockNews.find(item => item.id === parseInt(id));
  return news || null;
}