let hotelName, hotelPhoto, proprietorPhone, locationSelect;

        document.getElementById("addHotel").addEventListener("click", function () {
            let inp1 = document.getElementById("hotelName");
            let inp2 = document.getElementById("hotelPhoto");
            let inp3 = document.getElementById("proprietorPhone");
            let inp4 = document.getElementById("locationSelect");


            hotelName = inp1.value;
            hotelPhoto = inp2.value;
            proprietorPhone = inp3.value;
            locationSelect = inp4.value;


            if (hotelName && hotelPhoto && proprietorPhone && locationSelect) {


                localStorage.setItem(`${proprietorPhone}`, JSON.stringify({
                    name: hotelName,
                    photoURL: hotelPhoto,
                    phone: proprietorPhone,
                    city: locationSelect
                }));






                Swal.fire({
                    title: "Good job!",
                    text: "Hotel is Added Successfully",
                    icon: "success"
                });

                inp1.value = "";
                inp2.value = "";
                inp3.value = "";
                inp4.value = "";
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Incomplete information...",
                    text: "Please Fill all Fields",
                });
            }
        });

        // let a = JSON.parse(localStorage.getItem("022"))
    // console.log(a);

