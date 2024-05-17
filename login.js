document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Retrieve the users from local storage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Find the user
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    // Login successful
    document.getElementById('message').textContent = 'Login successful';
    // Redirect to the budget page
    window.location.href = 'budget.html';
  } else {
    // Login unsuccessful
    document.getElementById('message').textContent = 'Invalid email or password';
  }
});

/*document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const formData = new FormData(this);
    const email = formData.get('email');
    const password = formData.get('password');
  
    try {
      const response = await fetch('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (response.ok) {
        // Login successful
        document.getElementById('message').textContent = 'Login successful';
        // Redirect to another page or perform additional actions as needed
        window.location.href = '/budget.html';
      } else {
        // Login unsuccessful
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      // Error occurred
      document.getElementById('message').textContent = 'Login unsuccessful';
    }
  }); */
  