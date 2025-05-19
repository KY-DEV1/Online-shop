document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
            
            // Reset form
            this.reset();
        });
    }

    // Newsletter subscription
    const newsletterForm = document.querySelector('#newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type=""]').value;
            
            // Here you would typically send the email to a server
            console.log('Newsletter subscription:', email);
            
            // Show success message
            alert('Terima kasih telah berlangganan newsletter kami!');
            
            // Reset form
            this.reset();
        });
    }
});

function redirectToWhatsApp(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Format nomor (pastikan tanpa +, 0, atau 62 ganda)
    const formattedPhone = phone.replace(/^0/, 'https://wa.me/message/KHOP7SITKIBTO1').replace(/^\+/, 'https://wa.me/message/KHOP7SITKIBTO1').replace(/\D/g, 'https://wa.me/message/KHOP7SITKIBTO1');
    
    // Format pesan
    const fullMessage = `Halo, saya ${name}%0A%0A${message}%0A%0A*Subjek:* ${subject || 'Tidak ada subjek'}`;
    
    // Redirect ke WhatsApp
    window.open(`https://wa.me/${formattedPhone}?text=${fullMessage}`, '_blank');
}
