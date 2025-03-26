let question = [
    {
        id: '1',
        quest: 'this is question 1',
        op1: 'a',
        op2: 'b',
        op3: 'c',
        op4: 'd',
        ans: 'a'
    },
    {
        id: '2',
        quest: 'this is question 2',
        op1: 'a',
        op2: 'b',
        op3: 'c',
        op4: 'd',
        ans: 'a'
    },
    {
        id: '3',
        quest: 'this is question 3',
        op1: 'a',
        op2: 'b',
        op3: 'c',
        op4: 'd',
        ans: 'a'
    },
    {
        id: '4',
        quest: 'this is question 4',
        op1: 'a',
        op2: 'b',
        op3: 'c',
        op4: 'd',
        ans: 'a'
    },
    {
        id: '5',
        quest: 'this is question 5',
        op1: 'a',
        op2: 'b',
        op3: 'c',
        op4: 'd',
        ans: 'a'
    },
    // {
    //     id: '6',
    //     quest: 'this is question 6',
    //     op1: 'a',
    //     op2: 'b',
    //     op3: 'c',
    //     op4: 'd',
    //     ans: 'a'
    // },
    // {
    //     id: '7',
    //     quest: 'this is question 7',
    //     op1: 'a',
    //     op2: 'b',
    //     op3: 'c',
    //     op4: 'd',
    //     ans: 'a'
    // },
    // {
    //     id: '8',
    //     quest: 'this is question 8',
    //     op1: 'a',
    //     op2: 'b',
    //     op3: 'c',
    //     op4: 'd',
    //     ans: 'a'
    // },
    // {
    //     id: '9',
    //     quest: 'this is question 9',
    //     op1: 'a',
    //     op2: 'b',
    //     op3: 'c',
    //     op4: 'd',
    //     ans: 'a'
    // },
    // {
    //     id: '10',
    //     quest: 'this is question 10',
    //     op1: 'a',
    //     op2: 'b',
    //     op3: 'c',
    //     op4: 'd',
    //     ans: 'a'
    // }
]
let score = 0;
let count = 0;
// console.log('global')
function loadQuestion(c) {
    let html = '';
    // let c=count;
    console.log(c);

    let quest = question[c];

    // quest.map((item, index) => {
        if (c === question.length) {
            review()
        }
        html = `
        <div >
        <p>Q${c + 1} out of ${question.length}</p>
        <div class="question-set-${quest.id}" >
        <p class="question-para">${quest.quest}</p>
        <input type="radio" data-q-id=${quest.id} data-question-option=${quest.op1} name="option-id-${quest.id}" <span>${quest.op1}</span><br>
        <input type="radio" data-q-id=${quest.id} data-question-option=${quest.op2} name="option-id-${quest.id}" <span>${quest.op2}</span><br>
        <input type="radio" data-q-id=${quest.id} data-question-option=${quest.op3} name="option-id-${quest.id}" <span>${quest.op3}</span><br>
        <input type="radio" data-q-id=${quest.id} data-question-option=${quest.op4} name="option-id-${quest.id}" <span>${quest.op4}</span><br>
        </div>
        <p class="score-show"></p>
        <div data-question-id=${quest.id} class="buttons">
        <button class="btn" onclick="selectOption(${quest.id})">submit</button>
        
        </div>
        </div>
        `
        document.querySelector('.show').innerHTML = html;
    // });

}
// <button class="next-btn" onclick="loadQuestion(${c+=1})">Next</button>
// <button class="pre-btn" onclick="handlePage('pre')">Previous</button>
function handlePage(string) {
    if (string === 'pre' && count > 0) {
        loadQuestion(count--)
    }
    if (string === "next" && count < question.length) {
        loadQuestion(count++)
    }
}
function selectOption(id) {
    document.querySelectorAll(`.question-set-${id} input`).forEach((item) => {
        if (item.checked === true) {
            let getId = item.dataset.qId;
            let getOption = item.dataset.questionOption;
            console.log(getOption)
            // console.log('selected')
            let getQuestion = question.find(findItem => findItem.id === getId);
            console.log(getQuestion)
            if (item.checked === true && getOption === getQuestion.ans) {
                score++;
                console.log(getOption === getQuestion.ans)
                console.log('score', score)
                // console.log(typeof getId)
            }
            if(count<question.length){
                loadQuestion(count += 1)
            }
            // document.querySelector('.score-show').innerHTML = 'Score is',score;
        }
    })
}

function startQuiz() {
    let start = document.querySelector('.start');
    start.addEventListener('click', () => {
        loadQuestion(0);
        start.remove();
    })
}
startQuiz();

function review() {
    if (score <= 2) {
        document.body.innerHTML = `
        <p>your score is ${score} </p>
        <p>Needs improvement</p>
        `
    }
    else {
        document.body.innerHTML = `
        <p>your score is ${score} </p>
        <p>very well performance</p>
        `
    }
}


// ${`<button onclick="loadQuestion(${c += 1})">Next</button>`
// }
// function loadQuestion() {
//     let html = '';

//     question.map((item, index) => {
//         console.log(item);
//         html += `
//         <div >
//         <div class="question-set-${item.id}" ${index}>
//         <p class="question-para">${item.quest}</p>
//         <input type="radio" data-q-id=${item.id} data-question-option=${item.op1} name="option-id-${item.id}" <span>${item.op1}</span><br>
//         <input type="radio" data-q-id=${item.id} data-question-option=${item.op2} name="option-id-${item.id}" <span>${item.op2}</span><br>
//         <input type="radio" data-q-id=${item.id} data-question-option=${item.op3} name="option-id-${item.id}" <span>${item.op3}</span><br>
//         <input type="radio" data-q-id=${item.id} data-question-option=${item.op4} name="option-id-${item.id}" <span>${item.op4}</span><br>
//     </div>
//      <div data-question-id=${item.id}>
//         <button class="btn" onclick="selectOption(${item.id})">submit</button>
//         <button>next</button>
//     </div>
//     </div>
//         `
//     });

//     document.querySelector('.show').innerHTML = html;
// }