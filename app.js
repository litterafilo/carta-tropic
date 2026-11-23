const navList = document.getElementById('category-nav-list');
const sectionsContainer = document.getElementById('menu-sections');
const searchInput = document.getElementById('menu-search');
const clearSearchBtn = document.getElementById('clear-search');
const resetSearchBtn = document.getElementById('reset-search-btn');
const searchStatus = document.getElementById('search-status');
const emptyState = document.getElementById('empty-state');
const backToTopBtn = document.getElementById('back-to-top');

const photoModal = document.getElementById('photo-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');

function normalizeText(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function openPhotoModal(src, caption) {
  modalImg.src = src;
  modalImg.alt = caption;
  modalTitle.textContent = caption;
  photoModal.hidden = false;
  modalClose.focus();
}

function closePhotoModal() {
  photoModal.hidden = true;
  modalImg.src = '';
}

modalClose.addEventListener('click', closePhotoModal);
modalBackdrop.addEventListener('click', closePhotoModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !photoModal.hidden) {
    closePhotoModal();
  }
});

function createMenuRow(item) {
  const li = document.createElement('li');
  li.className = 'menu-row';

  const left = document.createElement('div');
  left.className = 'row-left';

  const name = document.createElement('span');
  name.className = 'row-name';
  name.textContent = item.name;
  left.appendChild(name);

  if (item.tag) {
    const stamp = document.createElement('span');
    stamp.className = 'row-stamp';
    stamp.textContent = item.tag;
    left.appendChild(stamp);
  }

  const dots = document.createElement('span');
  dots.className = 'row-dots';
  dots.setAttribute('aria-hidden', 'true');

  const price = document.createElement('span');
  price.className = 'row-price';
  price.textContent = item.price;

  li.appendChild(left);
  li.appendChild(dots);
  li.appendChild(price);
  return li;
}

function renderNav() {
  navList.innerHTML = '';
  MENU_CATEGORIES.forEach((cat, idx) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${cat.id}`;
    a.className = idx === 0 ? 'cat-pill is-active' : 'cat-pill';
    a.dataset.target = cat.id;
    a.textContent = cat.title;
    li.appendChild(a);
    navList.appendChild(li);
  });
}

function renderMenu(query = '') {
  const normQuery = normalizeText(query.trim());
  sectionsContainer.innerHTML = '';
  let totalMatches = 0;

  MENU_CATEGORIES.forEach((cat) => {
    const matches = (item) =>
      !normQuery ||
      normalizeText(item.name).includes(normQuery) ||
      normalizeText(cat.title).includes(normQuery);

    const filteredItems = cat.items.filter(matches);
    const filteredExtras = (cat.extras || []).filter(matches);
    const count = filteredItems.length + filteredExtras.length;

    if (count === 0) return;
    totalMatches += count;

    const section = document.createElement('section');
    section.id = cat.id;
    section.className = 'menu-section';
    section.setAttribute('aria-labelledby', `heading-${cat.id}`);

    const header = document.createElement('div');
    header.className = 'section-header';

    const h2 = document.createElement('h2');
    h2.id = `heading-${cat.id}`;
    h2.className = 'section-title';
    h2.textContent = cat.title;

    const countBadge = document.createElement('span');
    countBadge.className = 'section-count';
    countBadge.textContent = count === 1 ? '1 plato' : `${count} opciones`;

    header.appendChild(h2);
    header.appendChild(countBadge);
    section.appendChild(header);

    const contentWrap = document.createElement('div');
    contentWrap.className = !normQuery && cat.coverPhoto ? 'section-split' : 'section-single';

    const listCol = document.createElement('div');
    listCol.className = 'section-list-col';

    if (filteredItems.length > 0) {
      const list = document.createElement('ul');
      list.className = 'menu-list';
      filteredItems.forEach((item) => list.appendChild(createMenuRow(item)));
      listCol.appendChild(list);
    }

    if (filteredExtras.length > 0) {
      const extrasBlock = document.createElement('div');
      extrasBlock.className = 'extras-block';

      const subHeading = document.createElement('p');
      subHeading.className = 'extras-heading';
      subHeading.textContent = 'Suplementos y extras';
      extrasBlock.appendChild(subHeading);

      const extrasList = document.createElement('ul');
      extrasList.className = 'menu-list menu-list--extras';
      filteredExtras.forEach((item) => extrasList.appendChild(createMenuRow(item)));
      extrasBlock.appendChild(extrasList);

      listCol.appendChild(extrasBlock);
    }

    contentWrap.appendChild(listCol);

    // Foto completa sin recorte para que se vea bien directamente sin necesidad de ampliar
    if (!normQuery && cat.coverPhoto) {
      const figure = document.createElement('figure');
      figure.className = 'editorial-figure';

      const img = document.createElement('img');
      img.src = cat.coverPhoto;
      img.alt = cat.coverLabel;
      img.loading = 'lazy';

      const cap = document.createElement('figcaption');
      cap.className = 'editorial-caption';
      cap.textContent = cat.coverLabel;

      figure.appendChild(img);
      figure.appendChild(cap);
      contentWrap.appendChild(figure);
    }

    section.appendChild(contentWrap);
    sectionsContainer.appendChild(section);
  });

  if (normQuery) {
    searchStatus.hidden = false;
    searchStatus.textContent =
      totalMatches === 1
        ? `1 resultado para «${query.trim()}»`
        : `${totalMatches} resultados para «${query.trim()}»`;
  } else {
    searchStatus.hidden = true;
    searchStatus.textContent = '';
  }

  emptyState.hidden = totalMatches > 0;
  sectionsContainer.hidden = totalMatches === 0;
  observeSections();
}

let observer = null;

function setActivePill(id) {
  const pills = navList.querySelectorAll('.cat-pill');
  pills.forEach((pill) => {
    const active = pill.dataset.target === id;
    pill.classList.toggle('is-active', active);
    if (active) {
      pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  });
}

function observeSections() {
  if (observer) observer.disconnect();
  const sections = sectionsContainer.querySelectorAll('.menu-section');
  if (!sections.length) return;

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length > 0) {
        setActivePill(visible[0].target.id);
      }
    },
    {
      rootMargin: '-125px 0px -65% 0px',
      threshold: 0
    }
  );

  sections.forEach((sec) => observer.observe(sec));
}

searchInput.addEventListener('input', (e) => {
  const val = e.target.value;
  clearSearchBtn.hidden = val.length === 0;
  renderMenu(val);
});

function clearSearch() {
  searchInput.value = '';
  clearSearchBtn.hidden = true;
  renderMenu('');
  searchInput.focus();
}

clearSearchBtn.addEventListener('click', clearSearch);
resetSearchBtn.addEventListener('click', clearSearch);

window.addEventListener(
  'scroll',
  () => {
    backToTopBtn.hidden = window.scrollY < 450;
  },
  { passive: true }
);

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

renderNav();
renderMenu();
