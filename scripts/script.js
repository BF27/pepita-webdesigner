function createEl(tag, options) {
  const el = document.createElement(tag);

  if (options) {
    for (let key in options) {
      el[key] = options[key];
    }
  }

  return el;
}
// Collection Page
function createSearchBar() {
  const searchBarEl = createEl("header", { className: "search-bar" });
  const searchLabelEl = createEl("label", {
    className: "search-bar__label",
    htmlFor: "searchBarInput",
  });
  const searchInputEl = createEl("input", {
    id: "searchBarInput",
    className: "search-bar__input",
    type: "text",
    placeholder: "Explore the Collection",
  });
  const searchIconEl = createEl("span", {
    innerHTML: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M7.34315 14.6769C10.4673 17.8011 15.5327 17.8011 18.6569 14.6769C21.781 11.5527 21.781 6.48736 18.6569 3.36316C15.5327 0.238962 10.4673 0.238962 7.34315 3.36316C4.21895 6.48736 4.21895 11.5527 7.34315 14.6769ZM7.34315 14.6769L1.68629 20.3337"
          stroke="#FF473A"
          stroke-width="2"
          stroke-linecap="square"
        />
      </svg>`,
  });
  const advancedSearchEl = createEl("span", {
    className: "search-bar__advanced",
    innerText: "Advanced Search",
  });

  searchLabelEl.append(searchInputEl, searchIconEl);
  searchBarEl.append(searchLabelEl, advancedSearchEl);

  return searchBarEl;
}

function createCollectionCard(imgUrl, title, url) {
  const collectionCardEl = createEl("div", {
    className: "collections-section__card",
  });
  const collectionImgEl = createEl("img", {
    src: imgUrl,
    alt: `${title}_image`,
  });
  const collectionTitleEl = createEl("a", { innerText: title, href: url });

  collectionCardEl.append(collectionImgEl, collectionTitleEl);
  return collectionCardEl;
}

function createCollectionsSection() {
  const collections = [
    {
      title: "Decorative Arts & Crafts",
      imgUrl: "images/6b2fe6b9413a8a7c60710a766a252e9d.jpg",
      url: "#",
    },
    {
      title: "American Impressionism",
      imgUrl: "images/01de6b2a82a567ddfdce0c34f7ed3142.jpg",
      url: "#",
    },
    {
      title: "De Stijl",
      imgUrl: "images/5bf1058cfbfadd833124126bc6c05975.jpg",
      url: "#",
    },
    {
      title: "Cubism",
      imgUrl: "images/028eeccfb4aec127d7b28d21be7450b6.jpg",
      url: "#",
    },
    {
      title: "American",
      imgUrl: "images/b0e93ac5d836ba2a88295765067b5f89.jpg",
      url: "#",
    },
    {
      title: "Greek Antiquities",
      imgUrl: "images/dadabeec3dc30cad988b4ded19caed9f.jpg",
      url: "#",
    },
  ];
  const collectionsSectionEl = createEl("section", {
    className: "collections-section justify-content-md-between",
  });

  collections.forEach((collection) => {
    collectionsSectionEl.append(
      createCollectionCard(collection.imgUrl, collection.title, collection.url)
    );
  });

  return collectionsSectionEl;
}

function createCollectionsPage() {
  const collectionsPageEl = createEl("main", { className: "collections-page" });
  const searchBarEl = createSearchBar();
  const collectionSectionEl = createCollectionsSection();

  collectionsPageEl.append(searchBarEl, collectionSectionEl);
  return collectionsPageEl;
}

//Ticket Page

function createTicketsPage() {
  const ticketsPageEl = createEl("main", { className: "tickets-page" });

  return ticketsPageEl;
}

//Handlers
function handleMenuClick() {
  const navBtnEl = document.querySelector(".nav-btn");
  const offcanvasNavEl = document.querySelector(".offcanvas-nav");

  navBtnEl.addEventListener("click", () => {
    offcanvasNavEl.classList.toggle("active");
  });
}
function handleChangePage() {
  const collectionLinkEl = document.querySelector(".nav-to-collections");
  collectionLinkEl.addEventListener('click', ()=>{
    renderMain('collections')
  });

  const ticketsLinkEl = document.querySelector(".nav-to-tickets");
  ticketsLinkEl.addEventListener('click', ()=> {
    renderMain('tickets');
  })

}

function initHandlers() {
  handleMenuClick();
  handleChangePage();
}

function renderMain(page) {
  const wrapperEl = document.querySelector(".wrapper");

  wrapperEl.innerHTML = "";

  if (page === "collections") {
    wrapperEl.append(createCollectionsPage());
  } else if (page === "tickets") {
    wrapperEl.append(createTicketsPage());
  }
}

function main() {
  initHandlers();
  renderMain("collections");
}

main();
