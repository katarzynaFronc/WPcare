// ----- burger menu -----

document.querySelector(".header__nav-button-menu")?.addEventListener("click", () => {
  const nav: HTMLElement | null = document.querySelector("#HeaderNav");
  const btn: HTMLElement | null = document.querySelector(".header__nav-button-menu");

  if (nav && btn) {
    nav.classList.toggle("header__nav-visible");
    btn.classList.toggle("clicked");
  }
});

// ----- variants -----

export interface variantProps {
  image: string;
  name: string;
  price: string;
  amount: string;
  currency: string;
  period: string;
  space: string;
  domain: string;
  disc: string;
  offers: string;
  support: string;
}
export interface variantsListProps {
  variants: variantProps[];
}

export const variants = [
  {
    image: "./public/Group_126.png",
    name: "Fiat 126p",
    price: "99zł",
    period: " /Monthly",
    space: "10GB Space",
    domain: "1 Free Domain",
    disc: "300GB SSD Disc",
    offers: "Special Offers",
    support: "Unlimited Support",
  },
  {
    image: "./public/Group_135.png",
    name: "Ekspres",
    price: "99zł",
    period: " /Monthly",
    space: "10GB Space",
    domain: "1 Free Domain",
    disc: "300GB SSD Disc",
    offers: "Special Offers",
    support: "Unlimited Support",
  },
  {
    image: "./public/Group_60.png",
    name: "Rakieta",
    price: "99zł",
    period: " /Monthly",
    space: "10GB Space",
    domain: "1 Free Domain",
    disc: "300GB SSD Disc",
    offers: "Special Offers",
    support: "Unlimited Support",
  },
  {
    image: "./public/Group_134.png",
    name: "Torpeda",
    price: "99zł",
    period: " /Monthly",
    space: "10GB Space",
    domain: "1 Free Domain",
    disc: "300GB SSD Disc",
    offers: "Special Offers",
    support: "Unlimited Support",
  },
  {
    image: "./public/Group_62.png",
    name: "Kosmos",
    price: "99zł",
    period: " /Monthly",
    space: "10GB Space",
    domain: "1 Free Domain",
    disc: "300GB SSD Disc",
    offers: "Special Offers",
    support: "Unlimited Support",
  },
];

const variantsContainer = document.getElementById("variantsContainer");

// for (let variant of variants) {
//   let price = variant.price;
//   let amount = price.slice(0, -2);
//   let currency = price.slice(-2);
// }

// if (variantsContainer) {
//   variants.forEach((variant, index) => {
//     const newElement = document.createElement("div");
//     const imgElement = document.createElement("img");
//     const nameElement = document.createElement("h4");
//     const lineElement = document.createElement("hr");
//     const costElement = document.createElement("div");
//     const amountElement = document.createElement("span");
//     const currencyElement = document.createElement("sup");
//     const periodElement = document.createElement("p");
//     const spaceElement = document.createElement("p");
//     const domainElement = document.createElement("p");
//     const discElement = document.createElement("p");
//     const offersElement = document.createElement("p");
//     const supportElement = document.createElement("p");
//     const buttonElement = document.createElement("button");

//     imgElement.src = variant.image;
//     nameElement.textContent = variant.name;

//     amountElement.textContent = amount;
//     currencyElement.textContent = currency;
//     periodElement.textContent = variant.period;
//     spaceElement.textContent = variant.space;
//     domainElement.textContent = variant.domain;
//     discElement.textContent = variant.disc;
//     offersElement.textContent = variant.offers;
//     supportElement.textContent = variant.support;

//     buttonElement.textContent = "Zobacz więcej";

//     newElement.classList.add("section__variants-card");
//     imgElement.classList.add("section__variants-img");
//     nameElement.classList.add("section__variants-name");
//     lineElement.classList.add("section__variants-line");
//     costElement.classList.add("section__variants-cost");
//     amountElement.classList.add("section__variants-amount");
//     currencyElement.classList.add("section__variants-currency");
//     periodElement.classList.add("section__variants-period");
//     spaceElement.classList.add("section__variants-card-p");
//     domainElement.classList.add("section__variants-card-p");
//     discElement.classList.add("section__variants-card-p");
//     offersElement.classList.add("section__variants-card-p");
//     supportElement.classList.add("section__variants-card-p");
//     buttonElement.classList.add("section__variants-button");

//     if (window.innerWidth <= 960 && index !== variants.length - 1) {
//       newElement.appendChild(imgElement);
//       newElement.appendChild(nameElement);
//       newElement.appendChild(buttonElement);
//       newElement.appendChild(lineElement);
//       variantsContainer.appendChild(newElement);
//     } else if (window.innerWidth <= 960) {
//       newElement.appendChild(imgElement);
//       newElement.appendChild(nameElement);
//       newElement.appendChild(buttonElement);
//       variantsContainer.appendChild(newElement);
//     } else {
//       newElement.appendChild(imgElement);
//       newElement.appendChild(nameElement);
//       newElement.appendChild(lineElement);
//       newElement.appendChild(costElement);
//       newElement.appendChild(amountElement);
//       newElement.appendChild(currencyElement);
//       costElement.appendChild(periodElement);
//       newElement.appendChild(spaceElement);
//       newElement.appendChild(domainElement);
//       newElement.appendChild(discElement);
//       newElement.appendChild(offersElement);
//       newElement.appendChild(supportElement);
//       newElement.appendChild(buttonElement);
//       variantsContainer.appendChild(newElement);
//     }
//   });
// } else {
//   console.error("variantsContainer is null");
// }

// for (let variant of variants) {

variants.forEach((variant, index) => {
  let price = variant.price;
  let amount = price.slice(0, -2);
  let currency = price.slice(-2);

  if (variantsContainer) {
    const newElement = document.createElement("div");
    const imgElement = document.createElement("img");
    const nameElement = document.createElement("h4");
    const lineElement = document.createElement("hr");
    const costElement = document.createElement("div");
    const amountElement = document.createElement("span");
    const currencyElement = document.createElement("sup");
    const periodElement = document.createElement("p");
    const spaceElement = document.createElement("p");
    const domainElement = document.createElement("p");
    const discElement = document.createElement("p");
    const offersElement = document.createElement("p");
    const supportElement = document.createElement("p");
    const buttonElement = document.createElement("button");

    imgElement.src = variant.image;
    nameElement.textContent = variant.name;
    amountElement.textContent = amount;
    currencyElement.textContent = currency;
    periodElement.textContent = variant.period;
    spaceElement.textContent = variant.space;
    domainElement.textContent = variant.domain;
    discElement.textContent = variant.disc;
    offersElement.textContent = variant.offers;
    supportElement.textContent = variant.support;

    buttonElement.textContent = "Zobacz więcej";

    newElement.classList.add("section__variants-card");
    imgElement.classList.add("section__variants-img");
    nameElement.classList.add("section__variants-name");
    lineElement.classList.add("section__variants-line");
    costElement.classList.add("section__variants-cost");
    amountElement.classList.add("section__variants-amount");
    currencyElement.classList.add("section__variants-currency");
    periodElement.classList.add("section__variants-period");
    spaceElement.classList.add("section__variants-card-p");
    domainElement.classList.add("section__variants-card-p");
    discElement.classList.add("section__variants-card-p");
    offersElement.classList.add("section__variants-card-p");
    supportElement.classList.add("section__variants-card-p");
    buttonElement.classList.add("section__variants-button");

    if (window.innerWidth <= 960 && index !== variants.length - 1) {
      newElement.appendChild(imgElement);
      newElement.appendChild(nameElement);
      newElement.appendChild(buttonElement);
      newElement.appendChild(lineElement);
      variantsContainer.appendChild(newElement);
    } else if (window.innerWidth <= 960) {
      newElement.appendChild(imgElement);
      newElement.appendChild(nameElement);
      newElement.appendChild(buttonElement);
      variantsContainer.appendChild(newElement);
    } else {
      newElement.appendChild(imgElement);
      newElement.appendChild(nameElement);
      newElement.appendChild(lineElement);
      newElement.appendChild(costElement);
      costElement.appendChild(amountElement);
      costElement.appendChild(currencyElement);
      costElement.appendChild(periodElement);
      newElement.appendChild(spaceElement);
      newElement.appendChild(domainElement);
      newElement.appendChild(discElement);
      newElement.appendChild(offersElement);
      newElement.appendChild(supportElement);
      newElement.appendChild(buttonElement);
      variantsContainer.appendChild(newElement);
    }
  } else {
    console.error("variantsContainer is null");
  }
});

// ----- slider -----

const slider: HTMLInputElement | null = document.querySelector("#slider");
const clientsContainer: HTMLElement | null = document.querySelector(".section__clients-container");

slider?.addEventListener("input", (event: Event) => {
  const target = event.target as HTMLInputElement;
  const scrollAmount = Number(target.value);

  (clientsContainer as HTMLElement).scrollLeft = scrollAmount;
});
