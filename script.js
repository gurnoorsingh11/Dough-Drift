const IMAGES = {
  pizza: 'assets/pizza.jpg',
  burger: 'assets/burger.jpg',
  pasta: 'assets/pasta.jpg',
  fries: 'assets/fries.jpg',
  shake: 'assets/shake.jpg',
  dessert: 'assets/dessert.jpg',
  spread: 'assets/spread.jpg',
  hero: 'assets/hero-pizza.jpg',
  beverage: 'assets/beverage.jpg'
};


/* =========================================================
   WHAT WE COOK
========================================================= */

const COOK = [
  {
    id: 'pizza',
    name: 'Signature Pizzas',
    desc: 'Hand-tossed dough, bubbling cheese and bold toppings.',
    img: IMAGES.pizza,
    label: 'Fresh from the oven'
  },
  {
    id: 'burger',
    name: 'Gourmet Burgers',
    desc: 'Crispy patties, melty cheese and house sauces.',
    img: IMAGES.burger,
    label: 'Loaded & juicy'
  },
  {
    id: 'shakes',
    name: 'Cold Coffee & Shakes',
    desc: 'Thick, frosted, blended-to-order indulgence.',
    img: IMAGES.shake,
    label: 'Chilled cravings'
  },
  {
    id: 'pasta',
    name: 'Creamy Pasta',
    desc: 'Comforting sauces, herbs and al dente pasta.',
    img: IMAGES.pasta,
    label: 'Made to order'
  },
  {
    id: 'fries',
    name: 'Crispy Fries',
    desc: 'Golden, seasoned and dangerously addictive.',
    img: IMAGES.fries,
    label: 'Perfect side'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    desc: 'Sweet finishes for every kind of craving.',
    img: IMAGES.dessert,
    label: 'Save room'
  }
];


/* =========================================================
   MENU DATA
========================================================= */

const MENU = {

  Pizza: [
    ['Queen Margarita', null, { R: 109, M: 209, L: 309 }, '100% mozzarella cheese — classic and comforting.', 'Bestseller'],
    ['Cheese & Corn', null, { R: 109, M: 209, L: 309 }, 'Golden corn and mozzarella cheese.'],
    ['Spicy Triple Tango', null, { R: 109, M: 209, L: 309 }, 'Golden corn, jalapeño and red paprika.', 'Spicy'],
    ['Garden Party', null, { R: 109, M: 209, L: 309 }, 'Fresh onion and capsicum on cheese.'],
    ['Mexican Bite', null, { R: 109, M: 209, L: 309 }, 'Onion, jalapeño, red paprika and black olives.'],
    ['Veggie Lover', null, { R: 209, M: 349, L: 449 }, 'Onion, capsicum, tomato, mushroom and black olives.'],
    ['Makhni Touch', null, { R: 209, M: 349, L: 449 }, 'Onion, capsicum, paneer and creamy makhni sauce.', 'Signature'],
    ['Tandoori Paneer', null, { R: 209, M: 349, L: 449 }, 'Capsicum, paneer, red paprika and tandoori spice.'],
    ['Desi Veg Pizza', null, { R: 209, M: 349, L: 449 }, 'Onion, capsicum, red paprika and aloo patty.'],
    ['Farmhouse Pizza', null, { R: 179, M: 279, L: 379 }, 'Onion, capsicum, mushroom and tomato.', 'Bestseller'],
    ['Crunchy Veg', null, { R: 179, M: 279, L: 379 }, 'Corn, capsicum, onion and black olives.'],
    ['Country Feast', null, { R: 179, M: 279, L: 379 }, 'Onion, capsicum and tomato with mozzarella.'],
    ['Paneer Deluxe', null, { R: 299, M: 399, L: 499 }, 'Onion, capsicum, paneer, red paprika and black olives.'],
    ['Paneer Paradise', null, { R: 299, M: 399, L: 499 }, 'Onion, capsicum, sweet corn, paneer and jalapeño.', 'Chef’s Pick'],
    ['Peri Peri Paneer', null, { R: 299, M: 399, L: 499 }, 'Onion, capsicum and paneer with peri peri sauce.', 'Spicy'],
    ['Overloaded Pizza', null, { R: 299, M: 399, L: 499 }, 'All vegetables, loaded to the edge.'],
    ['Five Star', null, { R: 349, M: 449, L: 549 }, 'Any five toppings of your choice.'],
    ['Dough Drift Special', null, { R: 349, M: 449, L: 549 }, 'Onion, capsicum, tomato, mushroom, olives, jalapeño and peri peri paneer.', 'Signature'],
    ['Five Paper', null, { R: 349, M: 449, L: 549 }, 'Tomato, jalapeño, mushroom and paneer with harissa sauce.'],
    ['Smoky Special Paneer', null, { R: 349, M: 449, L: 549 }, 'Onion, capsicum, paneer, black olives and extra cheese.']
  ],

  Burger: [
    ['Classic Burger', 49, null, 'Crisp patty, fresh veggies and house sauce.'],
    ['Aloo Patty Burger', 59, null, 'Spiced aloo patty, chutney and slaw.'],
    ['Mexican Burger', 69, null, 'Zesty Mexican-style burger with jalapeños.', 'Spicy'],
    ['Paneer Cheese Burger', 79, null, 'Grilled paneer, melted cheese and veggies.', 'Bestseller']
  ],

  Pasta: [
    ['White Sauce Pasta', 109, null, 'Creamy béchamel, herbs and black pepper.'],
    ['Red Sauce Pasta', 109, null, 'Slow-cooked tomato, garlic and basil.'],
    ['Mix Sauce Pasta', 129, null, 'The best of red and white — creamy tomato.', 'Bestseller'],
    ['Makhni Sauce Pasta', 149, null, 'Rich, buttery makhni sauce with a desi twist.', 'Chef’s Pick']
  ],

  Sandwich: [
    ['Veg Sandwich', 49, null, 'Fresh veggies, chutney and buttered toast.'],
    ['Paneer Sandwich', 79, null, 'Spiced paneer, onion and capsicum.'],
    ['Tandoori Sandwich', 89, null, 'Tandoori mayo, veggies and grilled bread.', 'Bestseller'],
    ['Mexican Sandwich', 89, null, 'Jalapeño, corn, cheese and Mexican spice.', 'Spicy']
  ],

  'Garlic Bread & Wraps': [
    ['Plain Garlic Bread', 79, null, 'Fresh baked, buttery garlic goodness.'],
    ['Stuff Garlic Bread', 89, null, 'Stuffed with cheese and herbs.', 'Bestseller'],
    ['Jalapeño Garlic Bread', 99, null, 'Cheesy garlic bread with a spicy kick.', 'Spicy'],
    ['Paneer Cheese Garlic Bread', 109, null, 'Paneer, mozzarella and garlic butter.'],
    ['Veggie Wrap', 79, null, 'Fresh veggies rolled with sauces.'],
    ['Aloo Tikki Wrap', 89, null, 'Crisp aloo tikki, chutneys and veggies.'],
    ['Paneer Wrap', 99, null, 'Spiced paneer, onions and mint chutney.'],
    ['Mexican Wrap', 99, null, 'Beans, corn, jalapeño and salsa.', 'Spicy']
  ],

  Tacos: [
    ['Veggie Taco', 89, null, 'Crisp shell, fresh veggies and salsa.'],
    ['Zesty Paneer Taco', 109, null, 'Zesty paneer filling with crunch.', 'Bestseller'],
    ['Aloo Patty Taco', 109, null, 'Aloo patty crumble, chutneys and slaw.']
  ],

  Fries: [
    ['Classic Fries', 79, null, 'Crisp, golden, sea-salted.'],
    ['Peri Peri Fries', 89, null, 'Tossed in fiery peri peri.', 'Spicy'],
    ['Cheese Fries', 99, null, 'Loaded with cheese sauce.', 'Bestseller']
  ],

  Calzone: [
    ['Veg Calzone', 79, null, 'Folded pizza pocket with veggies.'],
    ['Cheese Calzone', 179, null, 'Molten cheese-filled calzone.'],
    ['Paneer Calzone', 249, null, 'Spiced paneer inside a crispy fold.', 'Chef’s Pick']
  ],

  Maggie: [
    ['Veg Maggie', 59, null, 'Classic masala Maggie with veggies.'],
    ['Paneer Maggie', 79, null, 'Masala Maggie topped with paneer.'],
    ['Tandoori Maggie', 79, null, 'Smoky tandoori twist on Maggie.'],
    ['Cheese Maggie', 99, null, 'Ooey-gooey cheese-loaded Maggie.', 'Bestseller']
  ],

  Shakes: [
    ['Vanilla Shake', 90, null, 'Classic creamy vanilla.'],
    ['Strawberry Shake', 109, null, 'Fresh strawberry, thick and pink.'],
    ['Chocolate Shake', 99, null, 'Rich chocolate, whipped cream.', 'Bestseller'],
    ['Caramel Shake', 109, null, 'Buttery caramel, silky smooth.'],
    ['Butterscotch Shake', 109, null, 'Butterscotch crunch in every sip.'],
    ['Oreo Shake', 129, null, 'Oreo, vanilla and chocolate drizzle.'],
    ['Kit-Kat Shake', 129, null, 'Kit-Kat blended into a thick shake.', 'Chef’s Pick']
  ],

  Refreshers: [
    ['Classic Mojito', 49, null, 'Mint, lime and soda over crushed ice.'],
    ['Masala Mojito', 99, null, 'Mint mojito with Indian masala twist.'],
    ['Green Apple', 69, null, 'Crisp green apple cooler.'],
    ['Blue Lagoon', 69, null, 'Cool blue citrus refresher.'],
    ['Tangy Mango', 79, null, 'Sweet and tangy mango refresher.', 'Bestseller']
  ],

  Desserts: [
    ['Chocolate Brownie', 99, null, 'Warm chocolate brownie for a rich finish.', 'Bestseller'],
    ['Brownie with Ice Cream', 149, null, 'Warm brownie paired with creamy ice cream.'],
    ['Choco Lava', 129, null, 'Molten chocolate centre, warm and gooey.'],
    ['Ice Cream Sundae', 119, null, 'Classic sundae with chocolate drizzle.']
  ]
};


/* =========================================================
   GLOBAL MENU STATE
========================================================= */

const CATS = Object.keys(MENU);
let active = 'Pizza';


/* =========================================================
   HELPERS
========================================================= */

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);


/* Escape text before putting menu data into HTML */
function escapeHTML(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


/* Convert What We Cook IDs to actual menu categories */
function slugCategory(id) {

  const map = {
    pizza: 'Pizza',
    burger: 'Burger',
    pasta: 'Pasta',
    shakes: 'Shakes',
    fries: 'Fries',
    desserts: 'Desserts'
  };

  return map[id] || id;
}


/* =========================================================
   WHAT WE COOK
========================================================= */

function renderCook() {

  const cookGrid = $('#cookGrid');

  if (!cookGrid) return;

  cookGrid.innerHTML = COOK.map((c, i) => `
    <article class="cook-card reveal ${i < 2 ? '' : 'delay-1'}">

      <div class="cook-image">
        <img
          src="${c.img}"
          alt="${escapeHTML(c.name)}"
          loading="lazy"
        >
      </div>

      <div class="cook-body">

        <small>${escapeHTML(c.label.toUpperCase())}</small>

        <h3>${escapeHTML(c.name)}</h3>

        <p>${escapeHTML(c.desc)}</p>

        <a
          href="#menu"
          class="cook-order"
          data-category="${escapeHTML(c.id)}"
        >
          Order Now <span>↗</span>
        </a>

      </div>

    </article>
  `).join('');

  $$('.cook-order').forEach(link => {

    link.addEventListener('click', event => {

      event.preventDefault();

      setCategory(
        slugCategory(link.dataset.category),
        true
      );

    });

  });
}


/* =========================================================
   MENU CATEGORY TABS
========================================================= */

function renderTabs() {

  const categoryTabs = $('#categoryTabs');

  if (!categoryTabs) return;

  const allCategories = ['All', ...CATS];

  categoryTabs.innerHTML = allCategories.map(category => {

    const categoryValue =
      category === 'All' ? 'all' : category;

    const isActive =
      (active === 'all' && category === 'All') ||
      active === category;

    return `
      <button
        type="button"
        class="${isActive ? 'active' : ''}"
        data-cat="${escapeHTML(categoryValue)}"
      >
        ${escapeHTML(category)}
      </button>
    `;

  }).join('');

  $$('[data-cat]').forEach(button => {

    button.addEventListener('click', () => {

      setCategory(
        button.dataset.cat,
        false
      );

    });

  });
}


/* =========================================================
   MENU CARD GENERATOR
========================================================= */

function createMenuCard(item, category) {

  const name = item[0];
  const singlePrice = item[1];
  const sizes = item[2];
  const description = item[3];
  const tag = item[4];


  /* Pizza-style R / M / L pricing */
  let sizeHTML = '';

  if (
    sizes &&
    typeof sizes === 'object' &&
    !Array.isArray(sizes)
  ) {

    sizeHTML = Object.entries(sizes)
      .map(([size, price]) => `
        <span class="size">
          <small>${escapeHTML(size)}</small>
          <b>₹${escapeHTML(price)}</b>
        </span>
      `)
      .join('');
  }


  /* Single-price dishes */
  let priceHTML = '';

  if (
    singlePrice !== null &&
    singlePrice !== undefined &&
    singlePrice !== ''
  ) {

    priceHTML = `
      <span class="price">
        ₹${escapeHTML(singlePrice)}
      </span>
    `;
  }


  const tagHTML = tag
    ? `<span class="tag">${escapeHTML(tag)}</span>`
    : '';


  /*
    IMPORTANT:
    Every dish ALWAYS gets the same .menu-item wrapper.
    This prevents the "name only / empty space" issue.
  */

  return `
    <article
      class="menu-item"
      data-category="${escapeHTML(category)}"
    >

      <span
        class="veg-dot"
        aria-label="Vegetarian"
      ></span>

      <div class="menu-main">

        <div class="menu-top">

          <h3>
            ${escapeHTML(name)}
          </h3>

          ${priceHTML}

        </div>

        <p class="menu-desc">
          ${escapeHTML(description)}
        </p>

        ${
          sizeHTML
            ? `<div class="sizes">${sizeHTML}</div>`
            : ''
        }

        ${tagHTML}

      </div>

    </article>
  `;
}


/* =========================================================
   MENU RENDERING
========================================================= */

function renderMenu() {

  const menuGrid = $('#menuGrid');
  const menuSearch = $('#menuSearch');
  const menuContext = $('#menuContext');

  if (!menuGrid) return;


  const query = menuSearch
    ? menuSearch.value.trim().toLowerCase()
    : '';


  /*
    If All is selected:
    render every category separately.
  */

  const groups =
    active === 'all'
      ? CATS.map(category => [
          category,
          MENU[category]
        ])
      : [
          [
            active,
            MENU[active] || []
          ]
        ];


  let total = 0;

  let html = '';


  groups.forEach(([category, items]) => {

    /*
      Filter by:
      - dish name
      - description
      - category
    */

    const found = items.filter(item => {

      const searchableText = [
        item[0],
        item[3],
        category
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);

    });


    if (!found.length) return;


    total += found.length;


    /*
      Category heading in All view
    */

    if (active === 'all') {

      html += `
        <div class="menu-group-title">
          <span>${escapeHTML(category)}</span>
          <i></i>
        </div>
      `;

    }


    /*
      Generate EVERY card using the same function.
    */

    html += found
      .map(item => createMenuCard(item, category))
      .join('');

  });


  /*
    Empty search state
  */

  if (!html) {

    html = `
      <div
        class="menu-empty"
        style="
          grid-column:1/-1;
          text-align:center;
          padding:50px;
          color:#77716c;
        "
      >
        No dishes matched your search.
      </div>
    `;

  }


  menuGrid.innerHTML = html;


  /*
    Update result count
  */

  if (menuContext) {

    menuContext.textContent =
      active === 'all'
        ? `Showing the full menu · ${total} dishes`
        : `Showing ${active} · ${total} ${
            total === 1 ? 'dish' : 'dishes'
          }`;

  }


  /*
    Force browser to treat all generated cards
    as fresh DOM elements.
  */

  requestAnimationFrame(() => {

    menuGrid
      .querySelectorAll('.menu-item')
      .forEach(card => {

        card.style.display = '';

      });

  });

}


/* =========================================================
   CHANGE CATEGORY
========================================================= */

function setCategory(category, scroll = false) {

  active = category;

  const search = $('#menuSearch');

  if (search) {
    search.value = '';
  }

  renderTabs();
  renderMenu();


  if (scroll) {

    const menuSection = document.querySelector('#menu');

    if (menuSection) {

      menuSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }


    setTimeout(() => {

      const activeButton = document.querySelector(
        `[data-cat="${CSS.escape(category)}"]`
      );

      activeButton?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });

    }, 450);

  }

}


/* =========================================================
   GALLERY
========================================================= */

function renderGallery() {

  const galleryGrid = $('#galleryGrid');

  if (!galleryGrid) return;


  const images = [
    ['pizza', 'tall'],
    ['burger', ''],
    ['shake', ''],
    ['pasta', ''],
    ['dessert', 'tall'],
    ['fries', ''],
    ['spread', 'wide']
  ];


  galleryGrid.innerHTML = images.map(([key, className]) => `

    <button
      type="button"
      class="gallery-item ${className}"
      data-img="${IMAGES[key]}"
    >

      <img
        src="${IMAGES[key]}"
        alt="Dough Drift ${escapeHTML(key)}"
        loading="lazy"
      >

    </button>

  `).join('');


  $$('.gallery-item').forEach(button => {

    button.addEventListener('click', () => {

      const lightbox = $('#lightbox');
      const lightboxImage = $('#lightbox img');

      if (!lightbox || !lightboxImage) return;

      lightboxImage.src = button.dataset.img;

      lightbox.classList.add('open');

    });

  });

}


/* =========================================================
   OFFERS
========================================================= */

function renderOffers() {

  const offersGrid = $('#offersGrid');

  if (!offersGrid) return;


  const offers = [

    [
      '₹150',
      'Burger Combo',
      'Burger + Fries + Small Coke.'
    ],

    [
      '₹179',
      'Pizza & Burger Combo',
      'Double Topping Pizza + Burger + Small Coke.'
    ],

    [
      '₹249',
      'Twin Pizza Combo',
      '2 Double Topping Pizzas + Garlic Bread + Coke.'
    ],

    [
      '₹299',
      'Feast Combo',
      'Medium Pizza + Double Topping Pizza + Any Side + Coke.'
    ],

    [
      '₹399',
      'Party Combo',
      'Large Pizza + Double Topping Pizza + Pasta + Coke.'
    ]

  ];


  offersGrid.innerHTML = offers.map(offer => `

    <article class="offer reveal">

      <small>LIMITED</small>

      <b>${escapeHTML(offer[0])}</b>

      <strong>
        ${escapeHTML(offer[1])}
      </strong>

      <p>
        ${escapeHTML(offer[2])}
      </p>

    </article>

  `).join('');

}


/* =========================================================
   TOAST
========================================================= */

function toast(message) {

  const toastElement = $('#toast');

  if (!toastElement) return;

  toastElement.textContent = message;

  toastElement.classList.add('show');

  setTimeout(() => {

    toastElement.classList.remove('show');

  }, 2800);

}


/* =========================================================
   MENU SEARCH
========================================================= */

const menuSearch = $('#menuSearch');

if (menuSearch) {

  menuSearch.addEventListener(
    'input',
    renderMenu
  );

}


/* =========================================================
   HAMBURGER MENU
========================================================= */

const hamburger = $('#hamburger');

if (hamburger) {

  hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('open');

    hamburger.setAttribute(
      'aria-expanded',
      hamburger.classList.contains('open')
    );


    const mobilePanel = $('#mobilePanel');

    if (mobilePanel) {

      mobilePanel.classList.toggle('open');

    }

  });

}


$$('#mobilePanel a').forEach(link => {

  link.addEventListener('click', () => {

    hamburger?.classList.remove('open');

    hamburger?.setAttribute(
      'aria-expanded',
      'false'
    );

    $('#mobilePanel')?.classList.remove('open');

  });

});


/* =========================================================
   BACK TO TOP
========================================================= */

const topFloat = $('#topFloat');

if (topFloat) {

  topFloat.addEventListener('click', () => {

    scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  });

}


/* =========================================================
   LIGHTBOX CLOSE
========================================================= */

const lightbox = $('#lightbox');

if (lightbox) {

  lightbox.addEventListener('click', event => {

    if (
      event.target.id === 'lightbox' ||
      event.target.tagName === 'BUTTON'
    ) {

      lightbox.classList.remove('open');

    }

  });

}


/* =========================================================
   BOOKING → WHATSAPP
========================================================= */

const bookingForm = $('#bookingForm');

if (bookingForm) {

  bookingForm.addEventListener('submit', event => {

    event.preventDefault();


    const name = $('#guestName')?.value || '';
    const phone = $('#guestPhone')?.value || '';
    const date = $('#guestDate')?.value || '';
    const time = $('#guestTime')?.value || '';
    const guests = $('#guestCount')?.value || '';
    const note = $('#guestNote')?.value || 'None';


    const message =
      `Hi Dough Drift, I'd like to reserve a table.%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Date: ${encodeURIComponent(date)}%0A` +
      `Time: ${encodeURIComponent(time)}%0A` +
      `Guests: ${encodeURIComponent(guests)}%0A` +
      `Special request: ${encodeURIComponent(note)}`;


    window.open(
      `https://wa.me/919988102588?text=${message}`,
      '_blank'
    );


    toast(
      'Opening WhatsApp with your reservation details…'
    );

  });

}


/* =========================================================
   NEWSLETTER
========================================================= */

const subscribeForm = $('#subscribeForm');

if (subscribeForm) {

  subscribeForm.addEventListener('submit', event => {

    event.preventDefault();

    toast(
      'Thanks — you’re on the list!'
    );

    event.target.reset();

  });

}


/* =========================================================
   HEADER + TOP BUTTON
========================================================= */

window.addEventListener('scroll', () => {

  $('#header')?.classList.toggle(
    'scrolled',
    scrollY > 35
  );


  $('#topFloat')?.classList.toggle(
    'show',
    scrollY > 650
  );

});


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

        }

      });

    },
    {
      threshold: 0.08
    }
  );


function observe() {

  $$('.reveal').forEach(element => {

    observer.observe(element);

  });

}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

renderCook();

renderTabs();

renderMenu();

renderGallery();

renderOffers();

if ($('#year')) {

  $('#year').textContent =
    new Date().getFullYear();

}

observe();