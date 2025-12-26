let question_counter = -1;
let current_question = null;

let current_subject = "mathsadv";

const data = String.raw`
{
    "mathsadv": [
        {
    "Question": "What is the derivative of $xe^x$?",
    "A": "$(x+1)e^{x}$",
    "B": "$xe^x$",
    "C": "$e^x$",
    "D": "$x^2e^{x-1}$",
    "Correct": "A"
  },
  {
    "Question": "In how many ways can 7 people be chosen from a group of 16 and then arranged in a circle?",
    "A": "$\\frac{15!}{9!}$",
    "B": "$\\frac{15!}{(9!\\times7!)}$",
    "C": "$\\frac{16!}{9!}$",
    "D": "$\\frac{16!}{(9!\\times7!)}$",
    "Correct": "D"
  },
  {
    "Question": "How many ways can 5 people be arranged in a line?",
    "A": "5",
    "B": "5!",
    "C": "10!",
    "D": "10",
    "Correct": "B"
  },
  {
    "Question": "How many ways can the letters of the word 'Mathematics' be arranged?",
    "A": "11!",
    "B": "$\\frac{11!}{2!}$",
    "C": "$\\frac{11!}{(2!\\times2!)}$",
    "D": "$\\frac{11!}{(2!\\times2!\\times2!)}$",
    "Correct": "D"
  },
  {
    "Question": "From a group of 11 prefects, how many ways can 2 captains and 2 vice captains be chosen?",
    "A": "1980",
    "B": "24",
    "C": "7920",
    "D": "3025",
    "Correct": "A"
  },
  {
    "Question": "To become the president of the surgical society, Christian needs to have the most votes out of all candidates. There are 7 candidates for president and the surgical society has 676 members. What is the smallest number of votes Christian must recieve to be president if all the the members only vote once?",
    "A": "96",
    "B": "95",
    "C": "97",
    "D": "98",
    "Correct": "D"
  },
  {
    "Question": "A bag contains 5 blue, 6 green and 7 red marbles. If Markus takes a marble out one at a time without looking, what is the smallest number of marbles that must be taken from the bag in order that at least 4 marbles of the same colour? ",
    "A": "4",
    "B": "9",
    "C": "10",
    "D": "12",
    "Correct": "C"
  },
  {
    "Question": "16 people, consisting of 8 doubles tennis partners enters a local competition. Only 4 sets of partners are chosen to attend the celebration dinner, where they are seated around a circular table. In how many ways can the doubles partners be selected and seated around the circular table if the partners must sit together?",
    "A": "$^8C_4 \\times 3! \\times (2!)^3$",
    "B": "$^8C_4 \\times 3! \\times (2!)^4$",
    "C": "$^{16}C_8 \\times 3! \\times (2!)^3$",
    "D": "$^{16}C_8 \\times 3! \\times (2!)^4$",
    "Correct": "B"
  },
  {
    "Question": "In how many ways can 6 people from a group of 15 be chosen and arranged in a circle? ",
    "A": "$\\frac{14!}{8!}$",
    "B": "$\\frac{14!}{8!\\times6}$",
    "C": "$\\frac{15!}{9!}$",
    "D": "$\\frac{15!}{(9!\\times6)}$",
    "Correct": "D"
  },
  {
    "Question": "The numbers 2,4,5,6,8,10,12,16,40 are written on separate cards and placed in a bag. What is the smallest number of cards we need to take from the bag to make sure we get at least 1 pair of numbers that have a product of 80?",
    "A": "6",
    "B": "7",
    "C": "4",
    "D": "5",
    "Correct": "B"
  },
  {
    "Question": "The angle θ satisfies $sinθ = \\frac{5}{13}$, where $\\frac{\\pi}{2}<θ<\\pi$. What is the value of $sin2θ$?",
    "A": "$\\frac{10}{13}$",
    "B": "$\\frac{-10}{13}$",
    "C": "$\\frac{120}{169}$",
    "D": "$\\frac{-120}{169}$",
    "Correct": "D"
  },
  {
    "Question": "The number of solutions to the equation $(sin^2 (x)-1)(tan^2 (x)-1) = 0$ in the domain $[0,2\\pi]$ is:",
    "A": "2",
    "B": "4",
    "C": "6",
    "D": "8",
    "Correct": "B"
  },
  {
    "Question": "By considering that $cos(3x) = cos(2x+x)$, how many positive values of x are there for $cos 3x + 2cosx = 0$ over the domain $[-2\\pi, 2\\pi]$?",
    "A": "2",
    "B": "4",
    "C": "6",
    "D": "8",
    "Correct": "C"
  },
  {
    "Question": "Which of the following expressions is equivalent to $3cosx - \\sqrt{3} sinx$?",
    "A": "$2\\sqrt{3} (x - \\frac{\\pi}{3})$",
    "B": "$2\\sqrt{3} (x + \\frac{\\pi}{3})$",
    "C": "$2\\sqrt{3} (x - \\frac{\\pi}{6})$",
    "D": "$2\\sqrt{3} (x+\\frac{\\pi}{6})$",
    "Correct": "D"
  },
  {
    "Question": "Which of the following expressions is equivalent to $2sin(\\frac{6x}{7}cos(\\frac{2x}{3}$?",
    "A": "$sin(\\frac{32x}{21})+sin(\\frac{4x}{21})$",
    "B": "$sin(\\frac{32x}{21}-sin(\\frac{4x}{21})$",
    "C": "$cos(\\frac{32x}{21}-sin(\\frac{4x}{21})$",
    "D": "$sin(\\frac{32x}{21}-cos(\\frac{4x}{21})$",
    "Correct": "A"
  },
  {
    "Question": "The equation $2x^3 - 4x^2 + 5x + 1 = $0 has roots $a, b, c$. What is the value of $\\frac{1}{a} + \\frac{1}{b} +\\frac{1}{c} $?",
    "A": "5",
    "B": "-5",
    "C": "$\\frac{1}{5}$",
    "D": "$-\\frac{1}{5}$",
    "Correct": "B"
  },
  {
    "Question": "When the polynomial $P(x)$ is dvided by $(x+2)(x-5)$ the remainder is $3x-6$. What is the remainder when $P(x)$ is divided by $(x+2)$?",
    "A": "-2",
    "B": "-7",
    "C": "-12",
    "D": "-28",
    "Correct": "C"
  },
  {
    "Question": "The polynomial $P(x)$ has a degree of 8. When $P(x)$ is divided by another polynomial $Q(x)$, the remainder is $x^4 + 3x + 10$ . Which of the following is true regarding the degree of the polynomial $H(x) = [P(x)Q(x)]^3$?",
    "A": "The degree could be 36, 39, 42, 45 or 48",
    "B": "The degree could be 33, 36, 39, 42 or 45",
    "C": "The degree could be 39, 42, 45 or 48",
    "D": "The degree could be 42, 45, 48 or 51",
    "Correct": "C"
  },
  {
    "Question": "The quadratic equation $63x^2 - 89x + 30$ has roots a and b. What is the value of $a^2 + b^2$?",
    "A": "$\\frac{4141}{3969}$",
    "B": "$\\frac{7921}{3969}$",
    "C": "$\\frac{5831}{3969}$",
    "D": "$\\frac{2491}{3969}$",
    "Correct": "A"
  },
  {
    "Question": "Which group of 3 numbers could be the roots of the polynomial equation $x^3 + ax^2 -41x + 42 = 0$?",
    "A": "2,3,7",
    "B": "1,-6,7",
    "C": "-1,-2,21",
    "D": "-1,-3,-14",
    "Correct": "B"
  }
    ],
    "mathsext1": [
        {
            "Question":"Coming soon!",
            "A":"",
            "B":"",
            "C": "",
            "D":"",
            "Correct": "C"
        }
    ],
    "mathsext2": [
        {
            "Question":"Coming soon!",
            "A":"",
            "B":"",
            "C": "",
            "D":"",
            "Correct": "C"
        }
    ],
    "physics": [
        {
            "Question":"Coming soon!",
            "A":"",
            "B":"",
            "C": "",
            "D":"",
            "Correct": "C"
        }
    ],
    "chemistry": [
        {
            "Question":"Coming soon!",
            "A":"",
            "B":"",
            "C": "",
            "D":"",
            "Correct": "C"
        }
    ],
    "engineering": [
        {
            "Question":"Coming soon!",
            "A":"",
            "B":"",
            "C": "",
            "D":"",
            "Correct": "C"
        }
    ]
}
`;
const json = JSON.parse(data);

function new_question()
{
    question_counter++;
    if (question_counter == Object.keys(json[current_subject]).length)
    {
        question_counter = 0;
    }

    current_question = json[current_subject][question_counter.toString()];

    document.getElementById("question").innerHTML = (question_counter + 1) + ". &nbsp;" + current_question.Question;

    document.getElementById("answer-a-content").innerHTML = current_question.A;
    document.getElementById("answer-b-content").innerHTML = current_question.B;
    document.getElementById("answer-c-content").innerHTML = current_question.C;
    document.getElementById("answer-d-content").innerHTML = current_question.D;

    MathJax.typeset();

    document.getElementById("a-div").style.backgroundColor = null;
    document.getElementById("a-div").style.borderColor = null;
    
    document.getElementById("b-div").style.backgroundColor = null;
    document.getElementById("b-div").style.borderColor = null;
    
    document.getElementById("c-div").style.backgroundColor = null;
    document.getElementById("c-div").style.borderColor = null;
    
    document.getElementById("d-div").style.backgroundColor = null;
    document.getElementById("d-div").style.borderColor = null;
}

function check_answer()
{
    selected = "";
    div = null;

    if (document.getElementById("answer-a-input").checked) { selected = "A"; div = document.getElementById("a-div"); }
    else if (document.getElementById("answer-b-input").checked) { selected = "B"; div = document.getElementById("b-div"); }
    else if (document.getElementById("answer-c-input").checked) { selected = "C"; div = document.getElementById("c-div"); }
    else if (document.getElementById("answer-d-input").checked) { selected = "D"; div = document.getElementById("d-div"); }

    if (selected == current_question.Correct)
    {
        div.style.borderColor = "#198754";
        div.style.backgroundColor = "#a9efce";
    }
    else
    {
        div.style.borderColor = "#dc3545";
        div.style.backgroundColor = "#ec939c";
    }
}

function change_subject(subject)
{
    current_subject = subject;
    question_counter = -1;
    new_question();
}

new_question();