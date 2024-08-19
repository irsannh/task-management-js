// file ini digunakan untuk mengurus business logic dan mengelola data CRUD

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const isDuplicate = this.users.some(
      (user) => user.username.toLowerCase() === userData.username.toLowerCase(),
    );

    if (isDuplicate) {
      return {
        success: false,
        message: 'Akun tidak bisa dibuat. Username Sudah Ada!',
      };
    } else {
      if (userData.password.length < 8) {
        return {
          success: false,
          message: 'Password kurang dari 8 karakter',
        };
      }
      const newUser = {
        id: Date.now(),
        ...userData,
      };

      this.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(this.users));

      return {
        success: true,
        message: 'Akun berhasil dibuat!',
      };
    }
  }

  signInUser(usernameByInput, passwordByInput) {
    console.log(usernameByInput);

    const userExists = this.users.find(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase(),
    );

    if (userExists) {
      if (userExists.password === passwordByInput) {
        return {
          success: true,
          username,
        };
      } else {
        return {
          success: false,
          message: 'Password salah!',
        };
      }
    } else {
      return {
        success: false,
        message: 'Username tidak ditemukan!',
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  }
}
