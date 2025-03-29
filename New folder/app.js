
const showContainer = document.querySelector(".show_two");
const data_2 = JSON.parse(localStorage.getItem("dataList")) || [];
const citySelect = document.getElementById("locatn");

document.getElementById("searchByLocationBTN").addEventListener("click", () => {

    if (!(citySelect.value == '')) {


        showContainer.innerHTML = "";
        const filteredData = data_2.filter(hotel => hotel.locationSelect === citySelect.value);

        if (filteredData.length === 0) {
            showContainer.innerHTML = "<p >No hotels found for the selected location.</p>";
            return;
        }

        filteredData.forEach(element => {
            const card = document.createElement("div");
            card.className = "hotel-card";
            card.innerHTML = `
  <img src="${element.hotelPhoto}" alt="${element.hotelName}" class="hotel-image">
  <div class="hotel-details">
    <h3 class="hotel-name">${element.hotelName}</h3>
    <p class="hotel-info"><strong>Location:</strong> ${element.locationSelect}</p>
    <p class="hotel-info"><strong>Contact:</strong> ${element.proprietorPhone}</p>
  </div>
`;
            showContainer.appendChild(card);
        });

    }
    else {
        Swal.fire({
            icon: "error",
            title: "Location not Choosed!",
            text: "Please Select any City",
        });
    }


});
