// file ini untuk penghubung antara UI HTML dan Model User

document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');
  const userManager = new User();

  userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userData = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
    };

    const result = userManager.saveUser(userData);

    if (result.success) {
      alert('Akun berhasil dibuat!');
      return (window.location.href = '../signin.html');
    } else {
      alert('Username sudah ada. Silakan buat akun dengan Username lain!');
    }
  });
});
