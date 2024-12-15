import { Link } from 'react-router-dom';
import type { NewsItem } from '../types/news';

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Link to={`/news/${news.documentId}`} className="group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
        <div className="aspect-video overflow-hidden">
          <img
            src={`${import.meta.env.VITE_API_URL}${news?.mainImage?.url}`}
            alt={news?.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {news?.title}
          </h2>
          <p className="text-gray-600 line-clamp-3">
            {news?.subTitle}
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {new Date(news?.createdDate).toLocaleDateString()}
          </div>
        </div>
      </article>
    </Link>
  );
}