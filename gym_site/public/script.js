// ===================== NAVBAR FUNCTIONALITY =====================
// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===================== MODAL FUNCTIONALITY =====================
function openModal(type) {
  const modal = document.getElementById('authModal');
  const title = document.getElementById('modal-title');
  const form = document.getElementById('auth-form');

  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  if (type === 'login') {
    title.textContent = 'Login';
    form.innerHTML = `
      <div class="form-group">
        <input type="email" placeholder="Email" required>
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" required>
      </div>
      <button type="submit" class="submit-btn">Login</button>
      <div class="auth-switch">
        Don't have an account? <a href="#" onclick="openModal('register')">Register</a>
      </div>
    `;
  } else if (type === 'register') {
    title.textContent = 'Register';
    form.innerHTML = `
      <div class="form-group">
        <input type="text" placeholder="Full Name" required>
      </div>
      <div class="form-group">
        <input type="email" placeholder="Email" required>
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" required>
      </div>
      <button type="submit" class="submit-btn">Register</button>
      <div class="auth-switch">
        Already have an account? <a href="#" onclick="openModal('login')">Login</a>
      </div>
    `;
  }
}

function closeModal() {
  const modal = document.getElementById('authModal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Close modal if clicking outside of the modal content
window.addEventListener('click', (e) => {
  const modal = document.getElementById('authModal');
  if (e.target === modal) {
    closeModal();
  }
});
