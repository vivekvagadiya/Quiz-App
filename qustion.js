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
    }
]
// console.log('global')
function loadQuestion() {
    let html = '';

    question.map((item, index) => {
        console.log(item);
        html += `
        <div >
        <div class="question-set-${item.id}" ${index}>
        <p class="question-para">${item.quest}</p>
        <input type="radio" data-q-id=${item.id} data-question-option=${item.op1} name="option-id-${item.id}" <span>${item.op1}</span><br>
        <input type="radio" data-q-id=${item.id} data-question-option=${item.op2} name="option-id-${item.id}" <span>${item.op2}</span><br>
        <input type="radio" data-q-id=${item.id} data-question-option=${item.op3} name="option-id-${item.id}" <span>${item.op3}</span><br>
        <input type="radio" data-q-id=${item.id} data-question-option=${item.op4} name="option-id-${item.id}" <span>${item.op4}</span><br>
    </div>
     <div data-question-id=${item.id}>
        <button class="btn" onclick="selectOption(${item.id})">submit</button>
        <button>next</button>
    </div>
    </div>
        `
    });

    document.querySelector('.show').innerHTML = html;
}
loadQuestion();

function selectOption(id) {
    document.querySelectorAll(`.question-set-${id} input`).forEach((item) => {
        if (item.checked === true) {
            let getId = item.dataset.qId;
            let getOption = item.dataset.questionOption;
            console.log(getOption)
            // console.log('selected')
            let getQuestion = question.find(findItem => findItem.id === getId);
            console.log(getQuestion)
            if (item.checked === true) {
                console.log(getOption === getQuestion.ans)
                // console.log(typeof getId)
            }
        }
    })
}


// function selectOption() {
//     document.querySelectorAll('.question-set input').forEach((item) => {
//         if (item.checked === true) {
//             let getId = item.dataset.qId;
//             let getOption = item.dataset.questionOption;
//             console.log(getOption)
//             // console.log('selected')
//             let getQuestion = question.find(findItem => findItem.id === getId);
//             console.log(getQuestion)
//             if (item.checked === true) {
//                 console.log(getOption === getQuestion.ans)
//                 // console.log(typeof getId)
//             }
//         }
//     })
// }


// selectOption();