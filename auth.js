// Check if user is authenticated
if (sessionStorage.getItem('authenticated') !== 'true') {
    // Redirect to home page if not authenticated
    window.location.href = 'index.html';
}
