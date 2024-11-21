import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import Pagination from '../components/Pagination';
import type { NewsResponse } from '../types/news';
import { fetchNews } from '../services/newsApi';

export default function NewsListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [news, setNews] = useState<NewsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const currentPage = Number(searchParams.get('page')) || 1;
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const data = await fetchNews(currentPage, searchQuery);
        setNews(data);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [currentPage, searchQuery]);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString(), ...(searchQuery && { search: searchQuery }) });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news?.data.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
      
      {news && (
        <Pagination
          currentPage={news.currentPage}
          totalPages={news.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}