let hotelName, hotelPhoto, proprietorPhone, locationSelect;
let container = document.querySelector(".show");




function show() {
    const container = document.querySelector(".show");
    container.innerHTML = "";
    let data = JSON.parse(localStorage.getItem("dataList")) || [];

    data.forEach((element, i) => {
        const card = document.createElement("div");
        card.className = "hotel-card";
        card.innerHTML = `
            <img src="${element.hotelPhoto}" alt="${element.hotelName}" class="hotel-image">
            <div class="hotel-details">
                <h3 class="hotel-name">${element.hotelName}</h3>
                <p class="hotel-info">
                    <strong>Location:</strong> ${element.locationSelect}
                </p>
                <p class="hotel-info">
                    <strong>Contact:</strong> ${element.proprietorPhone}
                </p>
                <div class="card-actions">
                    <button class="action-btn edit-btn" onclick="edit(${i})">Edit</button>
                    <button class="action-btn delete-btn" onclick="delet(${i})">Delete</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function add() {

    let inp1 = document.getElementById("hotelName");
    let inp2 = document.getElementById("hotelPhoto");
    let inp3 = document.getElementById("proprietorPhone");
    let inp4 = document.getElementById("locationSelect");


    hotelName = inp1.value;
    hotelPhoto = inp2.value;
    proprietorPhone = inp3.value;
    locationSelect = inp4.value;

    if (hotelName && hotelPhoto && proprietorPhone && locationSelect) {


        let all_inp = { hotelName, hotelPhoto, proprietorPhone, locationSelect };
        let data = JSON.parse(localStorage.getItem("dataList")) || [];
        data.push(all_inp);
        localStorage.setItem("dataList", JSON.stringify(data));

        Swal.fire({
            title: "Good job!",
            text: "Hotel is Added Successfully",
            icon: "success"
        });

        inp1.value = "";
        inp2.value = "";
        inp3.value = "";
        inp4.value = "";
        show()
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Incomplete information...",
            text: "Please Fill all Fields",
        });
    }

}

function delet(i) {

    let data = JSON.parse(localStorage.getItem("dataList"));
    data.splice(i, 1);
    localStorage.setItem("dataList", JSON.stringify(data));
    show()

}

async function edit(i) {

    let data = JSON.parse(localStorage.getItem("dataList"));


    const { value: formValues } = await Swal.fire({
        title: "Edit",
        html: `
          <input placeholder="Hotel Name" id="swal-input1" class="swal2-input">
          <input placeholder="Photo URL" id="swal-input2" class="swal2-input">
          <input placeholder="Owner Phone" id="swal-input3" class="swal2-input">
         
          <br><label for="swal-input4">Location</label>&nbsp;:&nbsp;<select required="" id="swal-input4" class="swal2-input" >
                   <option selected="" disabled="" value="">Select</option>
                   <option value="Karachi">Karachi</option>
                   <option value="Lahore">Lahore</option>
                   <option value="Islamabad">Islamabad</option>
                   <option value="Rawalpindi">Rawalpindi</option>
                   <option value="Faisalabad">Faisalabad</option>
                   <option value="Multan">Multan</option>
                   <option value="Hyderabad">Hyderabad</option>
                   <option value="Sialkot">Sialkot</option>
                   <option value="Peshawar">Peshawar</option>
                   <option value="Sukkur">Sukkur</option>
         </select>
        `,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value,
                document.getElementById("swal-input3").value,
                document.getElementById("swal-input4").value
            ];
        }
    });


    let inp1 = document.getElementById("swal-input1").value;
    let inp2 = document.getElementById("swal-input2").value;
    let inp3 = document.getElementById("swal-input3").value;
    let inp4 = document.getElementById("swal-input4").value;

    if (inp1 && inp2 && inp3 && inp4) {


        data[i].hotelName = inp1;
        data[i].hotelPhoto = inp2;
        data[i].proprietorPhone = inp3;
        data[i].locationSelect = inp4;


        localStorage.setItem("dataList", JSON.stringify(data));
        show()
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Incomplete information...",
            text: "Please Fill all Fields",
        });
    }
}


if (window.location.pathname.includes('index.html')) {
    show();
}




