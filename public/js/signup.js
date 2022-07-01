async function signUpFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value;

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            function replaceLocation() {
                document.location.replace('/dashboard')
            }
            setTimeout(replaceLocation, 500);
        } else {
            alert('Failed to sign up.');
        };
    } else {
        alert("Please enter a username, email, and password");
    }
};

document.querySelector('.signup-form').addEventListener('submit', signUpFormHandler);