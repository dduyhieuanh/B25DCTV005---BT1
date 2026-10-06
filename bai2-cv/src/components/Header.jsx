function Header({ name, job }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <h2>{job}</h2>
      <p>
        Xin chào! Đây là CV cá nhân của tôi.
      </p>
    </header>
  );
}

export default Header;