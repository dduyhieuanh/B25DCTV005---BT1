export default function BookCard({ book, isFav, onToggleFav }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3 style={{ color: '#007bff', marginBottom: '8px' }}>{book.title}</h3>
        <p>Tác giả: {book.author}</p>
        <p>Thể loại: {book.genre}</p>
        <p>Năm XB: {book.year}</p>
      </div>
      <button 
        onClick={() => onToggleFav(book.id)}
        style={{ marginTop: '10px', padding: '8px', background: isFav ? '#ff9800' : '#ffc107', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        {isFav ? '❤️ Đã thích' : '🤍 Yêu thích'}
      </button>
    </div>
  );
}