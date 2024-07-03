document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const formMessage = document.getElementById('form-message');

    if (urlParams.has('success')) {
        formMessage.textContent = 'Merci de nous avoir contacté, nous vous répondrons sous peu.';
        formMessage.style.color = 'green';
    } else if (urlParams.has('error')) {
        switch (urlParams.get('error')) {
        case 'invalid_email':
            formMessage.textContent = 'Adresse email invalide.';
            break;
        case 'email_failed':
            formMessage.textContent = 'Une erreur est survenue, veuillez réessayer plus tard.';
            break;
        case 'invalid_request':
            formMessage.textContent = 'Méthode de requête non autorisée.';
            break;
        default:
            formMessage.textContent = 'Une erreur inconnue est survenue.';
        }
        formMessage.style.color = 'red';
    }
});