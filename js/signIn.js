// file ini untuk penghubung antara UI HTML dan Model User

document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');
  const userManager = new User();

  userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const usernameByInput = document.getElementById('username').value;
    const passwordByInput = document.getElementById('password').value;

    const result = userManager.signInUser(usernameByInput, passwordByInput);

    if (result.success) {
      localStorage.setItem('usernameLoggedIn', usernameByInput);
      return (window.location.href = '../tasks.html');
    } else {
      alert(result.message);
    }
  });
});
