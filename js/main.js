const survey = {
    question: "Where Are You From?",
    options: ["UK", "USA", "Canada"]
}

let count = 0;

const surveyOptions = document.querySelector(".survey-options");
const surveyQuestion = document.querySelector(".survey-question");
const optionA = document.querySelector(".a");
const optionB = document.querySelector(".b");
const optionC = document.querySelector(".c");
const nextBtn = document.querySelector(".next");




const selected = (e) => {
    if (count == 0) {
        surveyQuestion.textContent = survey.question;
        optionA.lastChild.textContent = survey.options[0];
        optionB.lastChild.textContent = survey.options[1];
        optionC.lastChild.textContent = survey.options[2];
        document.querySelector("form").reset();
        count++;
    }
    else {
        document.querySelector("form").reset();
        document.querySelector(".survey").innerHTML = '<h1>Analysing Your Results<marquee>...        ...      ...</marquee></h1><p>Please Do Not Leave This Page';
        count = 0;
        setTimeout(() => {
            window.location.href = "https://afflat3b3.com/lnk.asp?o=18215&c=918277&a=547220&k=2750627D5760CBA678E981CBDBFE1664&l=19487&s1=Gtest"
        },500);
    }
}


surveyOptions.addEventListener('click', selected);
nextBtn.addEventListener('click', selected);


const hidden = document.querySelector(".hidden");
const toggle = document.querySelector("a.toggle");

toggle.addEventListener('click', (e) => {
    e.preventDefault;
    if(!hidden.classList.contains("show")) {
        hidden.classList.add("show");
        toggle.textContent = "...less";
    }
    else {
        hidden.classList.remove("show");
        toggle.textContent = "...more";
    } 
});
