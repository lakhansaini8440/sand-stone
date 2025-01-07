const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);
    const action = "https://formspree.io/f/xjkvdnwz"; // Replace with your Formspree endpoint

    try {
        const response = await fetch(action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            form.reset(); // Clear the form
        } else {
            throw new Error('Error submitting form');
        }
    } catch (error) {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
});
