import BookCard from './BookCard';

export default function BookList({ books, favorites, onToggleFav }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
      {books.map(book => (
        <BookCard 
          key={book.id} 
          book={book} 
          isFav={favorites.includes(book.id)} 
          onToggleFav={onToggleFav} 
        />
      ))}
    </div>
  );
}