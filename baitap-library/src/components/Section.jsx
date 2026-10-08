export default function Section({ title, children }) {
  return (
    <section style={{ margin: '20px 0' }}>
      {title && <h2 style={{ marginBottom: '10px' }}>{title}</h2>}
      {children}
    </section>
  );
}