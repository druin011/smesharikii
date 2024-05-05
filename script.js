window.onload = function (){
    let result = {} ;
    let step = 0 ;

    function showQuestion (questionNumber){
        document.querySelector(".question").innerHTML = quiz[step]['q'];
        let answer = '';
        for (let key in quiz[step]['a']){
            answer += `<li data-v="${key}"class="answer-variant">${quiz[step]['a'][key]}</li>` ;
        }
        document.querySelector('.answer').innerHTML = answer;
    }

    document.onclick = function(event) { 
        event.stopPropagation();
        if (event.target.classList.contains('answer-variant') && step < quiz.length){
            // console.log(even.target);
            if (result[event.target.dataset.v] != undefined) {
                result[event.target.dataset.v]++;
            }
            else {
                result[event.target.dataset.v] = 0
            }
            step++;
            if (step == quiz.length){
                document.querySelector('.question').remove();
                document.querySelector('.answer').remove();
                showResult();
            }
            else {
                showQuestion(step)
            }
        }
        console.log(result);
    }

    function showResult(){
        let key = Object.keys(result).reduce(function(a,b){
            return result[a] > result[b] ? a : b;
        });
        console.log(key);

        let div = document.createElement('div');
        div.classList.add('result')
        div.innerHTML = answers[key]['description'];
        document.querySelector('main').appendChild(div);
    }

    showQuestion(step);
}

let img = document.querySelector(`img`)

img.addEventListener('mousemove', function(e)) {
    let dx = e.pageX = window.innerWidth / 2
    let angleX = 20 * dx / window.innerWidth / 2
    block.style.transform = `rotateX($(angleY)deg)  rotateY($(angleX)deg)`
}

