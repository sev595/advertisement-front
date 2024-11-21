import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsListPage from './pages/NewsListPage';
import NewsDetailPage from './pages/NewsDetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/news" replace />} />
            <Route path="/news" element={<NewsListPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;