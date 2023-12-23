function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('Bem-Vindo(a)');
}
  // Simulando uma verificação de login simples
  if (username === 'user' && password === 'password') {
    loginMessage.style.color = '#2ecc71';
    loginMessage.textContent = 'Login successful!';
} else {
    loginMessage.style.color = '#e74c3c';
    loginMessage.textContent = 'Invalid username or password. Please try again.';
}