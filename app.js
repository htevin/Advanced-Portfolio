let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20
let isQuoteHidden = false
let quoteBox = document.querySelector('.quoteBox')
// 

document.addEventListener('DOMContentLoaded', function () {
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote-text');
    const quoteButton = document.getElementById('quote-button');

    const quotes = [
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off.",
        "When to use iterative development? You should use iterative development only on projects that you want to succeed.",
        "In order to be irreplaceable, one must always be different",
        "First, solve the problem. Then, write the code.",
        "Ruby is rubbish! PHP is phpantastic!",
        "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
        "Optimism is an occupational hazard of programming: feedback is the treatment",
        "Java is to JavaScript what car is to Carpet.",
        "Experience is the name everyone gives to their mistakes.",
        "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
        "Experience is the name everyone gives to their mistakes.",
        "Fix the cause, not the symptom.",
        "Make it work, make it right, make it fast.",
        "Code is like humor. When you have to explain it, it’s bad.",
        "There are only two kinds of languages: the ones people complain about and the ones nobody uses."
    ];

    quoteButton.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteText.textContent = randomQuote;
    });
});

// 

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}


function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"

    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function toggleQuote(){
   quoteBox.classList.toggle('hide')
}






function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
  emailjs
      .sendForm(
          `service_w1r3cg7`,
          `template_fdi512l`,
          event.target,
          `HGlR_1v5wi0lcO_Bi`
      ).then (() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible"
      }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. please contact me directly on tevinhamilton@yahoo.com "
        )
      }) 

}



function toggleModal() {
    
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

// 
