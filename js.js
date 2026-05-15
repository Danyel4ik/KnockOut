const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    burger.addEventListener('click', () => {
      burger.classList.toggle('burger--active');
      mobileMenu.classList.toggle('mobile-menu--active');
    });
    document.querySelectorAll('.mobile-menu__link').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('burger--active');
        mobileMenu.classList.remove('mobile-menu--active');
      });
    });

    // Хедер при скролле
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      header.classList.toggle('header--scrolled', window.scrollY > 50);
    });

    // Форма
    document.getElementById('contactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
      e.target.reset();
    });