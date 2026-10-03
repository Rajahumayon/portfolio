/* ==================== SERVICES MODAL ==================== */

const modalViews = document.querySelectorAll('.services-modal');
const modalBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');


/* Open Modal */

const modal = function (modalClick) {

    if (modalViews[modalClick]) {

        modalViews[modalClick].classList.add('active-modal');

    }

};


/* View More Buttons */

modalBtns.forEach((modalBtn, i) => {

    modalBtn.addEventListener('click', () => {

        modal(i);

    });

});


/* Close Modal */

modalCloses.forEach((modalClose) => {

    modalClose.addEventListener('click', () => {

        modalViews.forEach((modalView) => {

            modalView.classList.remove('active-modal');

        });

    });

});


/* Close Modal When Clicking Outside */

modalViews.forEach((modalView) => {

    modalView.addEventListener('click', (event) => {

        if (event.target === modalView) {

            modalView.classList.remove('active-modal');

        }

    });

});


/* ==================== CONTACT FORM ==================== */

document.addEventListener('DOMContentLoaded', () => {

    const contactForm =
        document.getElementById('contactForm');


    if (contactForm) {

        contactForm.addEventListener('submit', function (e) {

            e.preventDefault();


            const clientName =
                this.username.value.trim();

            const clientEmail =
                this.useremail.value.trim();

            const projectDetails =
                this.projectdetails.value.trim();


            const subject =
                encodeURIComponent(
                    "New Project Inquiry from Portfolio"
                );


            const body =
                encodeURIComponent(

                    `Client Name: ${clientName}\n` +

                    `Client Email: ${clientEmail}\n\n` +

                    `Project Overview:\n${projectDetails}`

                );


            const gmailUrl =
                `https://mail.google.com/mail/?view=cm&fs=1&to=humayonraja6@gmail.com&su=${subject}&body=${body}`;


            window.open(
                gmailUrl,
                '_blank'
            );

        });

    }

});