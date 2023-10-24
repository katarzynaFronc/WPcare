// ----- variants -----

export interface variantProps {
  image: string;
  name: string;
  price: string;
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
if (variantsContainer) {
  variants.forEach((variant) => {
    const newElement = document.createElement("div");
    const imgElement = document.createElement("img");
    const nameElement = document.createElement("h4");
    const lineElement = document.createElement("hr");
    const costElement = document.createElement("div");
    const priceElement = document.createElement("span");
    const periodElement = document.createElement("p");
    const spaceElement = document.createElement("p");
    const domainElement = document.createElement("p");
    const discElement = document.createElement("p");
    const offersElement = document.createElement("p");
    const supportElement = document.createElement("p");
    const buttonElement = document.createElement("button");

    imgElement.src = variant.image;
    nameElement.textContent = variant.name;

    priceElement.textContent = variant.price;
    periodElement.textContent = variant.period;
    spaceElement.textContent = variant.space;
    domainElement.textContent = variant.domain;
    discElement.textContent = variant.disc;
    offersElement.textContent = variant.offers;
    supportElement.textContent = variant.support;

    buttonElement.textContent = "Zobacz więcej";

    newElement.classList.add("section__variants-card");
    nameElement.classList.add("section__variants-name");
    lineElement.classList.add("section__variants-line");
    costElement.classList.add("section__variants-cost");
    priceElement.classList.add("section__variants-price");
    periodElement.classList.add("section__variants-period");
    spaceElement.classList.add("section__variants-card-p");
    domainElement.classList.add("section__variants-card-p");
    discElement.classList.add("section__variants-card-p");
    offersElement.classList.add("section__variants-card-p");
    supportElement.classList.add("section__variants-card-p");
    buttonElement.classList.add("section__variants-button");

    newElement.appendChild(imgElement);
    newElement.appendChild(nameElement);
    newElement.appendChild(lineElement);
    newElement.appendChild(costElement);
    costElement.appendChild(priceElement);
    costElement.appendChild(periodElement);
    newElement.appendChild(spaceElement);
    newElement.appendChild(domainElement);
    newElement.appendChild(discElement);
    newElement.appendChild(offersElement);
    newElement.appendChild(supportElement);
    newElement.appendChild(buttonElement);
    variantsContainer.appendChild(newElement);
  });
} else {
  console.error("variantsContainer is null");
}
