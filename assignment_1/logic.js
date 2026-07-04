const btn = document.querySelector('.btn');
const nameInp = document.getElementById('name');
const ageInp = document.getElementById('age');
const courseInp = document.getElementById('course');
const studentCard = document.getElementById('student-card');

btn.addEventListener('click', () => {
    const name = nameInp.value.trim();
    const age = ageInp.value.trim();
    const course = courseInp.value.trim();

    if (name ==="" || age === "" || course === "") {
        alert('Please fill in all fields.');
        return;
    }

studentCard.innerHTML = `
    <div class="card">
        <h2>Student Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Course:</strong> ${course}</p>
        <button class="close-btn" onclick="closeCard()">Close</button>
    </div>
`;

});
function closeCard() {
    studentCard.innerHTML = "";
}