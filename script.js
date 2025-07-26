function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        alert('Login Successful!');
        window.location.href = 'index.html';
        return false;
    } else {
        alert('Invalid credentials');
        return false;
    }
}
