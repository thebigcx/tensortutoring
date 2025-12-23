let question_counter = -1;
let current_question = null;

const data = String.raw`
    [
        {
            "Question":"What is the derivative of $xe^x$?",
            "A":"$(x+1)e^{x}$",
            "B":"$xe^x$",
            "C":"$e^x$",
            "D":"$x^2e^{x-1}$",
            "Correct": "A"
        },
        {
            "Question":"What is the result of a weak acid - strong base neutralisation?",
            "A":"Weak acid",
            "B":"Strong acid",
            "C":"Weak base",
            "D":"Strong base",
            "Correct": "C"
        }
    ]
`;
const json = JSON.parse(data);

function new_question()
{
    question_counter++;
    if (question_counter == Object.keys(json).length)
    {
        question_counter = 0;
    }

    current_question = json[question_counter.toString()];

    document.getElementById("question").innerHTML = current_question.Question;

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

new_question();