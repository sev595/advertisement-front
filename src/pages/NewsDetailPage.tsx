import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { NewsItem } from '../types/news';
import { fetchNewsById } from '../services/newsApi';
import Loading from '../components/Loading';
import NewsNotFound from '../components/NewsNotFound';
import NewsDescription from '../components/NewsDescription';

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

  if (loading) return <Loading />
  if (!news) return <NewsNotFound />

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{news?.title}</h1>
      <div className="text-gray-500 mb-8">
        { new Date(news?.createdDate?news?.createdDate:"").toLocaleDateString()}
      </div>
      <div className="aspect-video mb-8 rounded-lg overflow-hidden">
        <img
          src={`${import.meta.env.VITE_API_URL}${news?.mainImage?.url}`}
          
          alt={news?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: news?.advertisement }}></div>
      <div className="prose prose-lg max-w-none">
        <NewsDescription newsDescription={news?.description} />
      </div>
    </article>
  );
}