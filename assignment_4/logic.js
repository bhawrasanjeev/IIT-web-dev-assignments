let loadBtn = document.getElementById("loadBtn");
let userList = document.getElementById("userList");

function loadUsers() {

    userList.innerHTML = "<li>Loading...</li>";

    fetch("https://jsonplaceholder.typicode.com/users")

        .then((response) => {

            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            return response.json();

        })

        .then((users) => {

            userList.innerHTML = "";

            users.forEach((user) => {

                let li = document.createElement("li");

                li.innerHTML = `
                    <h3>${user.name}</h3>
                    <p>Email : ${user.email}</p>
                    <p>Phone : ${user.phone}</p>
                    <p>Website : ${user.website}</p>
                `;

                userList.appendChild(li);

            });

        })

        .catch((error) => {

            userList.innerHTML = `
                <li>${error.message}</li>
            `;

        });

}

loadBtn.addEventListener("click", loadUsers);