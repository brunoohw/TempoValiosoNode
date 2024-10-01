var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');
var question_nine = document.getElementById('question-9');
var question_ten = document.getElementById('question-10');

function storeAnswers(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function(event){
    storeAnswers(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswers(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswers(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswers(4, event)
})
question_five.addEventListener('click', function(event){
    storeAnswers(5, event)
})
question_six.addEventListener('click', function(event){
    storeAnswers(6, event)
})
question_seven.addEventListener('click', function(event){
    storeAnswers(7, event)
})
question_eight.addEventListener('click', function(event){
    storeAnswers(8, event)
})
question_nine.addEventListener('click', function(event){
    storeAnswers(9, event)
})
question_ten.addEventListener('click', function(event){
    storeAnswers(10, event)
})

function totalScore() {
    let total_score = 0;
    for (let i = 1; i <= 10; i++) {
        if (answers['question' + i] !== undefined) {
            total_score += answers['question' + i];
        }
    }
    return total_score;
}

function getInfoBasedOnScore(){
    if(totalScore() >= 25){
        var score_info = "Você está procastinando muito!"
        var result_quest= '<p class="result_text">lorem a ur adipisicing elit. Magni magnam, pariatur beatae ipsum omnis totam iusto maxime aut earum quod saepe, unde voluptates. Dolore dolorum, ipsum reprehenderit iusto an<strong>imi ex. Lorem ipsum</strong> dolor sit <br>amet consectetur adipisicing elit. Accusamus illo assumenda nisi modi deserunt. Distinctio magni quibusdam, veniam earum sit eum impedit reiciendis animi, sint tempor</p>'
    } else if(totalScore() > 15 ){
        var score_info = "Você está procrastinando médio "
        var result_quest = '<p class="result_text">lorem a ur adipisicing elit. Magni magnam, pariatur beatae ipsum omnis totam iusto maxime aut earum quod saepe, unde voluptates. Dolore dolorum, ipsum reprehenderit iusto an<strong>imi ex. Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Accusamus illo assumenda nisi modi deserunt. Distinctio magni quibusdam, veniam earum sit eum impedit reiciendis animi, sint tempor</p>'
    } else if(totalScore() <= 15 ) {
        var score_info = "Você está procrastinando pouco!"
        var result_quest = '<p class="result_text">lorem a ur adipisicing elit. Magni magnam, pariatur beatae ipsum omnis totam iusto maxime aut earum quod saepe, unde voluptates. Dolore dolorum, ipsum reprehenderit iusto an<strong>imi ex. Lorem ipsum</strong> dolor sit <br>amet consectetur adipisicing elit. Accusamus illo assumenda nisi modi deserunt. Distinctio magni quibusdam, veniam earum sit eum impedit reiciendis animi, sint tempor</p>'
    }

    return { score_info, result_quest };
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');
var submit10 = document.getElementById('submit10');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none"; 
}

function validateQuestion(question_number) {
    const selectedAnswer = answers['question' + question_number];
    if (selectedAnswer === undefined) {
        document.getElementById('question-' + question_number + '-error').style.display = 'block';
        return false;
    }
    document.getElementById('question-' + question_number + '-error').style.display = 'none';
    return true;
}

submit1.addEventListener('click', function(){
    if (validateQuestion(1)) {
        nextQuestion(2);
        growProgressBar('15%');
    }
})
submit2.addEventListener('click', function(){
    if (validateQuestion(2)) {
        nextQuestion(3);
        growProgressBar('20%');
    }
})
submit3.addEventListener('click', function(){
    if (validateQuestion(3)) {
        nextQuestion(4);
        growProgressBar('30%');
    }
})
submit4.addEventListener('click', function(){
    if (validateQuestion(4)) {
        nextQuestion(5);
        growProgressBar('40%');
    }
})
submit5.addEventListener('click', function(){
    if (validateQuestion(5)) {
        nextQuestion(6);
        growProgressBar('50%');
    }
})
submit6.addEventListener('click', function(){
    if (validateQuestion(6)) {
        nextQuestion(7);
        growProgressBar('60%');
    }
})
submit7.addEventListener('click', function(){
    if (validateQuestion(7)) {
        nextQuestion(8);
        growProgressBar('70%');
    }
})
submit8.addEventListener('click', function(){
    if (validateQuestion(8)) {
        nextQuestion(9);
        growProgressBar('80%');
    }
})
submit9.addEventListener('click', function(){
    if (validateQuestion(9)) {
        nextQuestion(10);
        growProgressBar('90%');
    }
})

submit10.addEventListener('click', function(){
    if (validateQuestion(10)) { // Garantir que a questão 10 foi respondida
        growProgressBar('100%');
        const { score_info, result_quest } = getInfoBasedOnScore();
        //document.getElementById("printtotalscore").innerHTML = totalScore(); Exibir a pontuação total//
        document.getElementById("printscoreinfo").innerHTML = score_info; // Exibir a mensagem com base na pontuação
        document.getElementById("printresultquest").innerHTML = result_quest; // Exibir a descrição detalhada

        // Ocultar a última questão e mostrar a tela de resultados
        document.getElementById('question-10').style.display = 'none';
        document.getElementById('question-11').style.display = 'block';
    }
});

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}

ScrollReveal().reveal('.questions_box', {
    origin: 'left',
    duration: 1500,
    distance: '15%'
});

ScrollReveal().reveal('.two-thirds.column', {
    origin: 'left',
    duration: 1500,
    distance: '15%'
});


