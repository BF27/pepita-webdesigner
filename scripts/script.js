//Utils

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
function createOrderDate(tomorrow) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const orderDateEl = createEl("div", { className: "order__sub-title" });
  const fullDate = new Date();
  if (tomorrow) {
    fullDate.setDate(fullDate.getDate() + 1);
  }
  const day = fullDate.getDate();
  const month = months[fullDate.getMonth()];
  const year = fullDate.getFullYear();

  const dateEl = createEl("span", {
    className: "order__date",
    innerText: `${month} ${day}, ${year}`,
  });
  const openingEl = createEl("span", {
    className: "order__opening",
    innerText: "Open 10:30am-5:30pm",
  });

  orderDateEl.append(dateEl, openingEl);
  return orderDateEl;
}

function createCounter(item) {
  const counterEl = createEl("span", { className: "list-item__counter" });
  const plusBtnEl = createEl("button", {
    id: `${item}-plus`,
    className: "counter-btn plus-btn",
    innerText: "+",
  });
  const minusBtnEl = createEl("button", {
    id: `${item}-minus`,
    className: "counter-btn minus-btn",
    innerText: "-",
  });
  const numberEl = createEl("span", {
    id: `${item}-number`,
    className: "counter-number",
    innerText: 0,
  });

  counterEl.append(minusBtnEl, numberEl, plusBtnEl);
  return counterEl;
}

function createTicketListItem(name, sub) {
  const ticketListItemEl = createEl("div", { className: "list-item" });
  const titlesEl = createEl("div", { className: "list-item__titles" });

  const nameEl = createEl("span", {
    className: "list-item__name",
    innerText: name,
  });
  titlesEl.append(nameEl);
  if (sub) {
    const subEl = createEl("span", {
      className: "list-item__sub",
      innerText: sub,
    });
    titlesEl.append(subEl);
  }
  const counterEl = createCounter(name.toLowerCase());

  ticketListItemEl.append(titlesEl, counterEl);
  return ticketListItemEl;
}

function createTotalPrice() {
  const totalPriceContEl = createEl("div", { className: "total-price" });
  const titleEl = createEl("span", {
    className: "total-price__title",
    innerText: "Total",
  });
  const totalValueEl = createEl("span", {
    className: "total-price__value",
    innerText: "$0",
  });

  totalPriceContEl.append(titleEl, totalValueEl);
  return totalPriceContEl;
}

function createTicketsList() {
  const ticketListsEl = createEl("div", { className: "tickets-page__list" });
  const adultsItemEl = createTicketListItem("Adults");
  const seniorsItemEl = createTicketListItem("Seniors", "65+ with ID");
  const studentsItemEl = createTicketListItem("Students", "With ID");

  ticketListsEl.append(adultsItemEl, seniorsItemEl, studentsItemEl);
  return ticketListsEl;
}

function createOrderSection() {
  const sectionEl = createEl("section", { className: "order" });
  const headerEl = createOrderHeader();
  const subTitleEl = createOrderDate(true);
  const orderTopEl = createEl("div", { className: "order__top" });
  const orderBottomEl = createEl("div", { className: "order__bottom" });

  const listEl = createTicketsList();
  const totalPriceEl = createTotalPrice();
  const orderBtnEl = createOrderBtn();

  orderTopEl.append(headerEl, subTitleEl);
  orderBottomEl.append(listEl, totalPriceEl, orderBtnEl);
  sectionEl.append(orderTopEl, orderBottomEl);
  return sectionEl;
}

function createOrderHeader() {
  const headerEl = createEl("header", { className: "order__header row" });
  const todayTitleEl = createEl("h4", {
    className: "order__title col text-center",
    innerText: "Today",
  });
  const tomorrowTitleEl = createEl("h4", {
    className: "order__title col text-center active",
    innerText: "Tomorrow",
  });
  const otherTitleEl = createEl("h4", {
    className: "order__title col text-center",
    innerText: "Other",
  });

  headerEl.append(todayTitleEl, tomorrowTitleEl, otherTitleEl);
  return headerEl;
}

function createTicketsHeader() {
  const headerEl = createEl("header", { className: "tickets-page__header" });
  const headingEl = createEl("h3", {
    className: "tickets-page__title",
    innerHTML: `Skip the Line.<br class="d-sm-none" />
    Purchase Tickets.`,
  });
  const subHeadingEl = createEl("p", {
    className: "tickets-page__sub-title",
    innerText:
      "All exhibitions, audio tours, and films included in the price of admission.",
  });

  headerEl.append(headingEl, subHeadingEl);
  return headerEl;
}

function createOrderBtn() {
  const orderBtnContEl = createEl("div", { className: "order-btn-container" });
  const orderBtnEl = createEl("button", {
    className: "order-btn",
    innerText: "Continue to Payment",
  });

  orderBtnContEl.append(orderBtnEl);
  return orderBtnContEl;
}

function createTicketsPage() {
  const ticketsPageEl = createEl("main", { className: "tickets-page" });
  const ticketsHeaderEl = createTicketsHeader();
  const orderSectionEl = createOrderSection();

  ticketsPageEl.append(
    ticketsHeaderEl,
    orderSectionEl,
  );
  return ticketsPageEl;
}

function countTotalPrice() {
  const adultTicketsEl = document.querySelector("#adults-number");
  const adultTicketsValue = Number(adultTicketsEl.innerText);

  const seniorTicketsEl = document.querySelector("#seniors-number");
  const seniorTicketsValue = Number(seniorTicketsEl.innerText);

  const studentsTicketsEl = document.querySelector("#students-number");
  const studentsTicketsValue = Number(studentsTicketsEl.innerText);

  const totalPrice =
    adultTicketsValue * 8 + (seniorTicketsValue + studentsTicketsValue) * 4;

  return totalPrice;
}

//Handlers
function handleMenuClick() {
  const navBtnEl = document.querySelector(".nav-btn");
  const offcanvasNavEl = document.querySelector(".offcanvas-nav");

  navBtnEl.addEventListener("click", () => {
    offcanvasNavEl.classList.toggle("active");
  });
}

function handlePageChange() {
  const offcanvasNavEl = document.querySelector(".offcanvas-nav");

  const collectionLinkEl = document.querySelector(".nav-to-collections");
  collectionLinkEl.addEventListener("click", () => {
    offcanvasNavEl.classList.remove("active");
    renderMain("collections");
  });

  const ticketsLinkEl = document.querySelector(".nav-to-tickets");
  ticketsLinkEl.addEventListener("click", () => {
    offcanvasNavEl.classList.remove("active");
    renderMain("tickets");
  });
}

function handleOrderDateChange() {
  const dates = document.querySelectorAll(".order__title");
  const orderDateEl = document.querySelector(".order__sub-title");

  dates.forEach((date) => {
    date.addEventListener("click", (event) => {
      const activeDate = document.querySelector(".order__title.active");
      const dateValue = event.target.innerText;
      orderDateEl.innerHTML = "";
      if (dateValue === "Today") {
        orderDateEl.append(createOrderDate());
      } else if (dateValue === "Tomorrow") {
        orderDateEl.append(createOrderDate(true));
      }
      activeDate.classList.remove("active");
      event.target.classList.add("active");
    });
  });
}

function handleTicketCounter() {
  const plusBtns = document.querySelectorAll(".plus-btn");
  const minusBtns = document.querySelectorAll(".minus-btn");
  const totalPriceEl = document.querySelector(".total-price__value");

  plusBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const valueId = e.target.id.split("-")[0];
      const numEl = document.querySelector(`#${valueId}-number`);
      let value = Number(numEl.innerText);

      value++;
      if (value !== 0) {
        numEl.classList.add("active");
      }
      numEl.innerText = value;
      totalPriceEl.innerText = `$${countTotalPrice()}`;
    });
  });

  minusBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const valueId = e.target.id.split("-")[0];
      const numEl = document.querySelector(`#${valueId}-number`);
      let value = Number(numEl.innerText);

      value--;
      if (value === 0) {
        numEl.classList.remove("active");
      } else if (value < 0) {
        value = 0;
      }
      numEl.innerText = value;
      totalPriceEl.innerText = `$${countTotalPrice()}`;
    });
  });
}

function initHandlers() {
  handleMenuClick();
  handlePageChange();
}

function renderMain(page) {
  const wrapperEl = document.querySelector(".wrapper");
  const titleEl = document.querySelector(".page-header__title");

  wrapperEl.innerHTML = "";

  if (page === "collections") {
    titleEl.innerText = "Collections";
    wrapperEl.append(createCollectionsPage());
  } else if (page === "tickets") {
    titleEl.innerText = "Plan Your Visit";
    wrapperEl.append(createTicketsPage());
    handleOrderDateChange();
    handleTicketCounter(); 
  }
}

function main() {
  renderMain("collections");
  initHandlers();
}

main();
