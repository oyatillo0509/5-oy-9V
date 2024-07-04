document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const countries = document.getElementById("countries");

  fetch("https://cars-pagination.onrender.com/all-countries")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      loader.style.display = "none";
      data.forEach(function (country) {
        const countryCard = document.createElement("div");
        countryCard.className = "country-card";

        const countryFlag = document.createElement("img");
        countryFlag.src = country.flag;
        countryCard.appendChild(countryFlag);

        const countryName = document.createElement("h2");
        countryName.textContent = country.country;
        countryCard.appendChild(countryName);

        const countryId = document.createElement("p");
        countryId.textContent = country.id;
        countryCard.appendChild(countryId);

        countries.appendChild(countryCard);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});
