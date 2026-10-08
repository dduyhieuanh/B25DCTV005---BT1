let books = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const bookGrid = document.getElementById('book-grid');
const statusBar = document.getElementById('status-bar');
const favCountEl = document.getElementById('fav-count');
const genreSelect = document.getElementById('genre-select');
const searchInput = document.getElementById('search-input');
const form = document.getElementById('add-book-form');

// 1. Tải danh sách sách
async function fetchBooks() {
  try {
    statusBar.textContent = "Đang tải...";
    const res = await fetch('./books.json');
    if (!res.ok) throw new Error("Không thể kết nối đến máy chủ");
    books = await res.json();
    
    initGenreOptions();
    renderBooks();
  } catch (err) {
    statusBar.textContent = `Lỗi: ${err.message}`;
  }
}

// Tạo danh sách thể loại bằng Set
function initGenreOptions() {
  const genres = new Set(books.map(b => b.genre));
  genres.forEach(genre => {
    const opt = document.createElement('option');
    opt.value = genre;
    opt.textContent = genre;
    genreSelect.appendChild(opt);
  });
}

// 2. Hiển thị sách & lọc
function renderBooks() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedGenre = genreSelect.value;

  const filtered = books.filter(book => {
    const matchName = book.title.toLowerCase().includes(searchTerm);
    const matchGenre = selectedGenre === '' || book.genre === selectedGenre;
    return matchName && matchGenre;
  });

  statusBar.textContent = `Đang hiển thị ${filtered.length} / ${books.length} cuốn`;
  bookGrid.innerHTML = '';

  filtered.forEach(book => {
    const isFav = favorites.includes(book.id);
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = book.id;

    const titleEl = document.createElement('h3');
    titleEl.textContent = book.title;

    const authorEl = document.createElement('p');
    authorEl.textContent = `Tác giả: ${book.author}`;

    const genreEl = document.createElement('p');
    genreEl.textContent = `Thể loại: ${book.genre}`;

    const yearEl = document.createElement('p');
    yearEl.textContent = `Năm XB: ${book.year}`;

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const favBtn = document.createElement('button');
    favBtn.className = `btn-fav ${isFav ? 'active' : ''}`;
    favBtn.textContent = isFav ? '❤️ Đã thích' : '🤍 Yêu thích';

    const delBtn = document.createElement('button');
    delBtn.className = 'btn-delete';
    delBtn.textContent = 'Xóa';

    actions.append(favBtn, delBtn);
    card.append(titleEl, authorEl, genreEl, yearEl, actions);
    bookGrid.appendChild(card);
  });

  updateFavCount();
}

// 3. Event Delegation cho nút Yêu thích và Xóa
bookGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;
  const bookId = card.dataset.id;

  if (e.target.classList.contains('btn-fav')) {
    if (favorites.includes(bookId)) {
      favorites = favorites.filter(id => id !== bookId);
    } else {
      favorites.push(bookId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderBooks();
  }

  if (e.target.classList.contains('btn-delete')) {
    if (confirm('Bạn có chắc chắn muốn xóa cuốn sách này?')) {
      books = books.filter(b => b.id !== bookId);
      favorites = favorites.filter(id => id !== bookId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      renderBooks();
    }
  }
});

function updateFavCount() {
  favCountEl.textContent = favorites.length;
}

// Lọc sự kiện gõ/chọn
searchInput.addEventListener('input', renderBooks);
genreSelect.addEventListener('change', renderBooks);

// 4. Validate Form & Thêm sách
const inputs = {
  title: document.getElementById('title'),
  author: document.getElementById('author'),
  genre: document.getElementById('genre'),
  year: document.getElementById('year')
};

function validateField(name, value) {
  let error = '';
  const currentYear = new Date().getFullYear();

  if (name === 'title') {
    if (!value.trim()) error = 'Tên sách không được để trống';
    else if (value.trim().length < 3) error = 'Tên sách phải từ 3 ký tự trở lên';
  }
  if (name === 'author') {
    if (!value.trim()) error = 'Tác giả là bắt buộc';
  }
  if (name === 'genre') {
    if (!value) error = 'Vui lòng chọn thể loại';
  }
  if (name === 'year') {
    const yearVal = Number(value);
    if (!value) error = 'Năm xuất bản là bắt buộc';
    else if (yearVal < 1900 || yearVal > currentYear) error = `Năm từ 1900 đến ${currentYear}`;
  }

  document.getElementById(`error-${name}`).textContent = error;
  return error === '';
}

Object.keys(inputs).forEach(key => {
  inputs[key].addEventListener('input', () => validateField(key, inputs[key].value));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  Object.keys(inputs).forEach(key => {
    const valid = validateField(key, inputs[key].value);
    if (!valid) isValid = false;
  });

  if (isValid) {
    const newBook = {
      id: Date.now().toString(),
      title: inputs.title.value.trim(),
      author: inputs.author.value.trim(),
      genre: inputs.genre.value,
      year: Number(inputs.year.value)
    };

    books.unshift(newBook); // Thêm lên đầu danh sách
    renderBooks();
    form.reset();
  }
});

// Chạy khởi tạo
fetchBooks();