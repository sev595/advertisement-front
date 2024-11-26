import { fetchData } from '../server/api';
import type { NewsResponse } from '../types/news';

const ITEMS_PER_PAGE = 10; // Adjust this based on your pagination needs

export async function fetchNews(page: number, search: string): Promise<NewsResponse> {

  try {
  console.log(2222,import.meta.env.VITE_BARIER_TOKEN);

    // Build the query string with pagination and optional search
    let queryString = `all-posts?populate=*&pagination[page]=${page}&pagination[pageSize]=${ITEMS_PER_PAGE}`;
    
    // Add search functionality if provided
    if (search) {
      const searchQuery = encodeURIComponent(search);
      queryString += `&filters[title][$containsi]=${searchQuery}`;
    }
    
    // Fetch data from the API
  const response = await fetchData(queryString)

    if (!response.ok) {
      throw new Error(`Error fetching news: ${response.statusText}`);
    }

    // Parse the API response
    const apiData = await response.json();
    
    // Extract necessary pagination info
    const data = apiData.data || [];
    const meta = apiData.meta?.pagination || { page: 1, pageCount: 1 };

    return {
      data, // Current page items
      totalPages: meta.pageCount, // Total number of pages
      currentPage: meta.page // Current page number
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}


export async function fetchNewsById(id: string): Promise<NewsResponse['data'][0] | null> {
  // Simulate API delay

  console.log(import.meta.env.VITE_BARIER_TOKEN);
  
  const queryString = `all-posts/${id}?populate=*`
  const response =await fetchData(queryString)
    
  if (!response.ok) {
      throw new Error(`Error fetching news: ${response.statusText}`);
    }
    const apiData = await response.json();
    return apiData.data
}