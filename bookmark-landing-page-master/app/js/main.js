// tabs
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  const tabsContent = document.querySelectorAll('.tabs__content');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tabs__btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach((el) => {
          el.classList.remove('tabs__btn--active');
        });
        document
          .querySelector(`[data-tabs-path="${tabsPath}"]`)
          .classList.add('tabs__btn--active');
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach((el) => {
      el.classList.remove('tabs__content--active');
    });
    document
      .querySelector(`[data-tabs-target="${path}"]`)
      .classList.add('tabs__content--active');
  };

  // accordion
  const accordions = document.querySelectorAll('.accordion__item');

  accordions.forEach((el) => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const title = self.querySelector('.accordion__title');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open');
      title.classList.toggle('open');

      // if open accordion
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });

  // burger menu
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu__list');
  const menuItem = [...document.querySelectorAll('.menu__item')];
  const logoTitle = document.querySelector('.header__logo-title');
  const body = document.body;

  const changeHeader = () => {
    if (burger.classList.contains('burger-open')) {
      logoTitle.style.fill = '#fff';
      burger.src = './assets/svg/icon-close.svg';
    } else {
      logoTitle.style.fill = '#242946';
      burger.src = './assets/svg/icon-hamburger.svg';
    }
  };

  const interactionMenu = () => {
    if (burger.classList.contains('burger-open')) {
      burger.classList.remove('burger-open');
      menu.classList.remove('menu-open');
      body.classList.remove('overflow-hidden');
    } else {
      burger.classList.add('burger-open');
      menu.classList.add('menu-open');
      body.classList.add('overflow-hidden');
    }
  };

  burger.addEventListener('click', () => {
    interactionMenu();
    changeHeader();
  });

  menuItem.map((link) => {
    link.addEventListener('click', () => {
      interactionMenu();
      changeHeader();
    });
  });
});
