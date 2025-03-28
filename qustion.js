let question = [
    {
        id: '1',
        quest: '1. Which of the following Greek Explorers is considered to have left the earliest account of India?',
        op1: 'Herodotus',
        op2: 'Ctesias',
        op3: 'Scylax',
        op4: 'Hippalus',
        ans: ['Scylax', 'Ctesias']
    },
    {
        id: '2',
        quest: '2. Which among the following two dynasties of the Northern India confronted with the Rashtrakutas?',
        op1: 'Varahmihira',
        op2: 'Aryabhatta',
        op3: 'Ramanujan',
        op4: 'Baudhayan',
        ans: ['Baudhayan']
    },
    {
        id: '3',
        quest: '3. Which King took the title of Vatapikonda?',
        op1: 'Narasimhavarman-I',
        op2: 'Simhavishnu',
        op3: 'Mahendravarman-I',
        op4: 'Nandivarman-II',
        ans: ['Mahendravarman-I', 'Nandivarman-II']
    },
    {
        id: '4',
        quest: '4. In which year, Ashoka invaded Kalinga?',
        op1: '261-BC',
        op2: '235-BC',
        op3: '285-BC',
        op4: '275-BC',
        ans: ['275-BC']
    },
    {
        id: '5',
        quest: '5. Which among the following rulers of the Chola Empire conquered the Maldives during his regime ?',
        op1: 'Raja Raja Chola I',
        op2: 'Rajendra Chola',
        op3: 'Kulothunga Chola I',
        op4: 'Vikrama Chola',
        ans: ['Vikrama', 'Kulothunga']
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
function loadQuestion(c) {
    let html = '';
    console.log(c);

    let quest = question[c];

    if (c === question.length) {
        review()
    }
    if (c < question.length) {

        html = `
        <p>Q${c + 1} out of ${question.length}</p>
        <div class="question-set-${quest.id}" >
        <p class="question-para">${quest.quest}</p>
        <input type="checkbox" data-q-id=${quest.id} data-question-option=${quest.op1} name="option-id-${quest.id}" <span>${quest.op1}</span><br>
        <input type="checkbox" data-q-id=${quest.id} data-question-option=${quest.op2} name="option-id-${quest.id}" <span>${quest.op2}</span><br>
        <input type="checkbox" data-q-id=${quest.id} data-question-option=${quest.op3} name="option-id-${quest.id}" <span>${quest.op3}</span><br>
        <input type="checkbox" data-q-id=${quest.id} data-question-option=${quest.op4} name="option-id-${quest.id}" <span>${quest.op4}</span><br>

        </div>
        <p class="score-show"></p>
        <div data-question-id=${quest.id} class="buttons">
        <button class="btn" onclick="selectOption(${quest.id})">${count === question.length - 1 ? 'submit' : 'next'}</button>
        
        </div>
        `
        document.querySelector('.show').innerHTML = html;
        // });
    }

}

function handlePage(string) {
    if (string === 'pre' && count > 0) {
        count--;
        loadQuestion(count)
    }
    if (string === "next" && count < question.length) {
        count++;
        loadQuestion(count)
    }
}
let selectedOptions = [];
function selectOption(id) {
    let passQuestion;
    document.querySelectorAll(`.question-set-${id} input`).forEach((item) => {
        if (item.checked === true) {
            let getId = item.dataset.qId;
            let getOption = item.dataset.questionOption;
            let getQuestion = question.find(findItem => findItem.id === getId);
            passQuestion = getQuestion

            selectedOptions.push(getOption)
        }
    })
    checkResult(selectedOptions, passQuestion)
    if (count < question.length) {
        count += 1;
        loadQuestion(count)
    }
}

function checkResult(res, getQuestion) {

    let array = [];
    console.log('selected option', res)
    console.log('ans array', getQuestion.ans)
    for (let i = 0; i < res.length; i++) {
        if (!getQuestion.ans.includes(res[i])) {
            console.log('wrong answer');
            array[i] = 'false'
        } else {
            array[i] = 'true';
        }
    }
    selectedOptions = [];
    if (!array.includes('false')) {
        score++;
    }
    // console.log(array)
    console.log('score', score)
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
    document.querySelector('.show').innerHTML = `
   <p>Your Score is ${score}</p>
   <p>${score <= 2 ? 'Needs Imorovements' : 'Well Score'}</p>
   `
}