import { useState } from 'react';
import { initialBooks } from './data/books';
import Header from './components/Header';
import Section from './components/Section';
import GenreFilter from './components/GenreFilter';
import BookList from './components/BookList';
import Footer from './components/Footer';

export default function App() {
  const [books] = useState(initialBooks);
  const [favorites, setFavorites] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  // Lấy danh sách thể loại không trùng lặp
  const genres = Array.from(new Set(books.map(b => b.genre)));

  // Hàm toggle yêu thích
  const handleToggleFav = (bookId) => {
    setFavorites(prev => 
      prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]
    );
  };

  // Lọc sách theo thể loại
  const filteredBooks = selectedGenre 
    ? books.filter(b => b.genre === selectedGenre)
    : books;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Header favCount={favorites.length} />

      <Section title="Lọc Theo Thể Loại">
        <GenreFilter 
          genres={genres} 
          selectedGenre={selectedGenre} 
          onSelectGenre={setSelectedGenre} 
        />
      </Section>

      <Section title="Danh Sách Sách">
        <BookList 
          books={filteredBooks} 
          favorites={favorites} 
          onToggleFav={handleToggleFav} 
        />
      </Section>

      <Footer />
    </div>
  );
}