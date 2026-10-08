export default function GenreFilter({ genres, selectedGenre, onSelectGenre }) {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
      <button 
        style={{ padding: '8px 12px', background: selectedGenre === '' ? '#007bff' : '#eee', color: selectedGenre === '' ? '#fff' : '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        onClick={() => onSelectGenre('')}
      >
        Tất cả
      </button>
      {genres.map(genre => (
        <button
          key={genre}
          style={{ padding: '8px 12px', background: selectedGenre === genre ? '#007bff' : '#eee', color: selectedGenre === genre ? '#fff' : '#000', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          onClick={() => onSelectGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}