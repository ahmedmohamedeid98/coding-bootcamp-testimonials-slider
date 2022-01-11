class Student {
    constructor(id, imageUrl, quote, name, job) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.quote = quote;
        this.name = name;
        this.job = job;
    }
};

const students = [
    new Student(
        1, './images/image-john.jpg',
          "“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”",
          "John Tarkpor", "Junior Front-end Developer"),
    new Student(
        1, './images/image-tanya.jpg',
        "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
        "Tanya Sinclair", "UX Engineer")
];

const prev      = document.getElementById("prev");
const next      = document.getElementById("next");
const quote     = document.getElementById("quote-txt");
const _name     = document.getElementById("name");
const _job      = document.getElementById("job");
const img       = document.getElementById("std-img");

// init ui with first student data
publishData(0); 

var currentIndex = 0;
const len = students.length;

// listeners
prev.addEventListener("click", (_) => {
    currentIndex = (currentIndex + len - 1) % len;
    publishData(currentIndex);
});

next.addEventListener("click", (_) => {
    currentIndex = (currentIndex + 1) % len;
    publishData(currentIndex);
});


// publish data to ui
function publishData(index) {
    quote.textContent = students[index].quote;
    _name.textContent = students[index].name;
    _job.textContent  = students[index].job;
    img.src = students[index].imageUrl;
}