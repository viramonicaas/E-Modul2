window.onload = function() {
    setTimeout(function() {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 1200); 
};

function showModule(moduleId) {
    var modules = document.querySelectorAll('section');
    modules.forEach(function(mod) {
        mod.classList.remove('active');
    });
    document.getElementById(moduleId).classList.add('active');
}

function showQuiz() {
    document.getElementById('quiz').style.display = 'block';
}

function submitQuiz1() {
    let score = 0;
    const totalQuestions = 2;
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value == "1") {
        score++;
    }

    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value == "3") {
        score++;
    }

    document.getElementById('quiz-result').innerText = `Anda mendapatkan ${score} dari ${totalQuestions} soal.`;
}

function submitQuiz2() {
    let score = 0;
    const totalQuestions = 3;

    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value == "1") {
        score++;
    }

    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value == "2") {
        score++;
    }

    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value == "1") {
        score++;
    }


    document.getElementById('quiz-result').innerText = `Anda mendapatkan ${score} dari ${totalQuestions} soal.`;
}

function submitQuiz3() {
    let score = 0;
    const totalQuestions = 3;


    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value == "2") {
        score++;
    }

    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value == "2") {
        score++;
    }

    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value == "4") {
        score++;
    }

    document.getElementById('quiz-result').innerText = `Anda mendapatkan ${score} dari ${totalQuestions} soal.`;
}

function submitQuiz4() {
    let score = 0;
    const totalQuestions = 3;

    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value == "2") {
        score++;
    }

    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value == "3") {
        score++;
    }

    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value == "3") {
        score++;
    }

    document.getElementById('quiz-result').innerText = `Anda mendapatkan ${score} dari ${totalQuestions} soal.`;
}


window.onload = function() {
    setTimeout(function() {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 1200); 
};

function showModule(moduleId) {
    var modules = document.querySelectorAll('section');
    modules.forEach(function(mod) {
        mod.classList.remove('active');
    });
    document.getElementById(moduleId).classList.add('active');
}

function showQuiz() {
    const quiz = document.getElementById('quiz');
    const toggleButton = document.getElementById('toggle-quiz');

    if (quiz.style.display === 'none' || quiz.style.display === '') {
        quiz.style.display = 'block';
        toggleButton.innerText = 'Sembunyikan Kuis';
    } else {
        quiz.style.display = 'none';
        toggleButton.innerText = 'Tampilkan Kuis';
    }
}
