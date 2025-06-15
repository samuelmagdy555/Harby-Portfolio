document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    // Initialize EmailJS with your public key
    emailjs.init("ifia5V15nF5ft_dz6"); // You'll get this from EmailJS

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Show loading state
        const submitButton = contactForm.querySelector('input[type="submit"]');
        const originalButtonText = submitButton.value;
        submitButton.value = 'Sending...';
        submitButton.disabled = true;

        try {
            // Send email using EmailJS
            const response = await emailjs.send("service_xah9583", "template_5vykj0c", {
                from_name: name,
                from_email: email,
                phone: phone,
                message: message,
                to_name: "Samuel",
            });
            
            if (response.status === 200) {
                // Show success message
                alert('Message sent successfully!');
                contactForm.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            // Show error message
            alert('Failed to send message. Please try again later.');
            console.error('Error:', error);
        } finally {
            // Reset button state
            submitButton.value = originalButtonText;
            submitButton.disabled = false;
        }
    });
}); 