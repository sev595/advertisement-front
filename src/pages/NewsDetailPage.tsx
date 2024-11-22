import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { NewsItem } from '../types/news';
import { fetchNewsById } from '../services/newsApi';

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNewsDetail = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        const data = await fetchNewsById(id);
        setNews(data);
      } catch (error) {
        console.error('Failed to fetch news detail:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNewsDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">News article not found</p>
      </div>
    );
  }

    console.log(2222,news);
    
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{news.title}</h1>
      
      <div className="text-gray-500 mb-8">
        {new Date(news.createdDate).toLocaleDateString()}
      </div>
      
      <div className="aspect-video mb-8 rounded-lg overflow-hidden">
        <img
            src={`http://localhost:1337/${news.mainImage.url}`}
            alt={news.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p className="whitespace-pre-wrap">{news.content}</p>
      </div>
    </article>
  );
}