let currentq = -1;

const data = String.raw`
    {
        "0" : {
            "Question":"What is the result of a weak acid - strong base neutralisation?",
            "A":"Weak acid $\\frac{2}{3}$",
            "B":"Strong acid",
            "C":"Weak base",
            "D":"Strong base"
        }
    }
`;
const json = JSON.parse(data);

function new_question()
{
    currentq++;

    question = json[currentq.toString()];

    document.getElementById("question").innerHTML = question.Question;

    document.getElementById("answer-a-content").innerHTML = question.A;
    document.getElementById("answer-b-content").innerHTML = question.B;
    document.getElementById("answer-c-content").innerHTML = question.C;
    document.getElementById("answer-d-content").innerHTML = question.D;

    console.log(MathJax);
    MathJax.typeset();

}

new_question();