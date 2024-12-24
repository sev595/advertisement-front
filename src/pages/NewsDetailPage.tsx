import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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

  if (loading) return <Loading />;
  if (!news) return <NewsNotFound />;

  const shareableLink = `${window.location.origin}/news/${id}`;
  const imageSrc = news?.cardImageUrl ? news?.cardImageUrl : `${import.meta.env.VITE_API_URL}${news?.mainImage?.url}`

  return (
    <>

      <div data-type="_mgwidget" data-widget-id="1716515">
      </div>
      {(function (w: string, q) { w[q] = w[q] || []; w[q].push(["_mgc.load"]) })(window, "_mgq")}



      {/* Open Graph Meta Tags for Facebook */}
      <Helmet>
        <title>{news?.title}</title>
        <meta property="og:title" content={news?.title} />
        <meta property="og:description" content={JSON.stringify(news?.description.slice(0, 150))} />
        <meta property="og:image" content={imageSrc} />
        <meta property="og:url" content={shareableLink} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="My News App" />
      </Helmet>

      {/* Render News Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{news?.title}</h1>
        <div className="text-gray-500 mb-8 flex gap-4">
          <div
            style={{
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '16px',
              color: '#333',
            }}
          >
            Views {news.view}
          </div>
          <div>{new Date(news?.createdDate || '').toLocaleDateString()}</div>
        </div>
        <div className="aspect-video mb-8 rounded-lg overflow-hidden">
          <img
            src={imageSrc}
            alt={news?.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: news?.advertisement }}></div>
        <div className="prose prose-lg max-w-none">
          <NewsDescription newsDescription={news?.description} />
        </div>
      </article>

      {/* Optionally Log the Generated Shareable Link */}
      {console.log('Shareable Link for Facebook:', shareableLink)}
    </>
  );
}
