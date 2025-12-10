document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        const question = faq.querySelector('.faq-question');

        question.addEventListener('click', () => {
            faq.classList.toggle('active');
            const answer = faq.querySelector('.faq-answer');
            if (faq.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });
});