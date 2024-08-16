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
      };
    } else {
      const newUser = {
        id: Date.now(),
        ...userData,
      };

      this.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(this.users));

      return {
        success: true,
      };
    }
  }

  signInUser(usernameByInput) {
    console.log(usernameByInput);

    const userExists = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase(),
    );

    if (userExists) {
      return {
        success: true,
        username,
      };
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
