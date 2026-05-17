/* ==================== SERVICES MODAL ==================== */
const modalViews = document.querySelectorAll('.services-modal'),
      modalBtns = document.querySelectorAll('.services-button'),
      modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/* ==================== PORTFOLIO CONTACT FORM (GMAIL REDIRECT) ==================== */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const clientName = this.username.value;
            const clientEmail = this.useremail.value;
            const projectDetails = this.projectdetails.value;

            const subject = encodeURIComponent("New Project Inquiry from Portfolio");
            const body = encodeURIComponent(
                `Client Name: ${clientName}\n` +
                `Client Email: ${clientEmail}\n\n` +
                `Project Overview:\n${projectDetails}`
            );

            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=humayonraja6@gmail.com&su=${subject}&body=${body}`;

            window.open(gmailUrl, '_blank');
        });
    }
});