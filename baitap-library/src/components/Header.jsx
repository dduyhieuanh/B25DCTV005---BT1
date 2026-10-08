export default function Header({ favCount }) {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', background: '#007bff', color: 'white', borderRadius: '8px' }}>
      <h1>Thư Viện Lớp Học (React)</h1>
      <div>Sách yêu thích: <strong>{favCount}</strong></div>
    </header>
  );
}