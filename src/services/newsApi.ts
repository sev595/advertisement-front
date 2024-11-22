import type { NewsResponse } from '../types/news';

// const ITEMS_PER_PAGE = 3;

// export async function fetchNews(page: number, search: string): Promise<NewsResponse> {
//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 800));

//   let filteredNews = [...mockNews];
  
//   // Apply search filter
//   if (search) {
//     const searchLower = search.toLowerCase();
//     filteredNews = filteredNews.filter(
//       news =>
//         news.title.toLowerCase().includes(searchLower) ||
//         news.description.toLowerCase().includes(searchLower)
//     );
//   }

//   // Calculate pagination
//   const totalItems = filteredNews.length;
//   const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
//   const startIndex = (page - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
  
//   return {
//     data: filteredNews.slice(startIndex, endIndex),
//     totalPages,
//     currentPage: page
//   };
// }

const ITEMS_PER_PAGE = 10; // Adjust this based on your pagination needs

export async function fetchNews(page: number, search: string): Promise<NewsResponse> {
  try {
    console.log(process.env);
    
    // Fetch data from the API
    const response = await fetch(`http://localhost:1337/api/all-posts?populate=*`);
    if (!response.ok) {
      throw new Error(`Error fetching news: ${response.statusText}`);
    }

    const apiData = await response.json();
    console.log("apiData",search);
    
    // Assuming the API returns an array of posts
    const filteredNews = apiData.data || [];

    // Apply search filter
    // if (search) {
    //   const searchLower = search.toLowerCase();
    //   filteredNews = filteredNews.filter(
    //     (news: { title: string; description: string }) =>
    //       news.title.toLowerCase().includes(searchLower) ||
    //       news.description.toLowerCase().includes(searchLower)
    //   );
    // }

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
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

export async function fetchNewsById(id: string): Promise<NewsResponse['data'][0] | null> {
  // Simulate API delay
  console.log(id);
  
  const response = await fetch(`http://localhost:1337/api/all-posts/${id}?populate=*`);
    if (!response.ok) {
      throw new Error(`Error fetching news: ${response.statusText}`);
    }
    const apiData = await response.json();
    return apiData.data
}