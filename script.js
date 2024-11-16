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
    document.getElementById('quiz').style.display = 'block'; // Tampilkan kuis
}

function submitQuiz1() {
    let score = 0;
    const totalQuestions = 2;

    // Cek jawaban untuk pertanyaan 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value == "1") { // 3 adalah jawaban yang benar
        score++;
    }

    // Cek jawaban untuk pertanyaan 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value == "3") { // 8°C adalah jawaban yang benar
        score++;
    }

    // Tampilkan hasil
    document.getElementById('quiz-result').innerText = `Anda mendapatkan ${score} dari ${totalQuestions} soal.`;
}

function submitQuiz2() {
    let score = 0;
    const totalQuestions = 3;

    // Cek jawaban untuk pertanyaan 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value == "1") { // 3 adalah jawaban yang benar
        score++;
    }

    // Cek jawaban untuk pertanyaan 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value == "2") { // 4 adalah jawaban yang benar
        score++;
    }

    // Cek jawaban untuk pertanyaan 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value == "1") { // 6x adalah jawaban yang benar
        score++;
    }

    // Tampilkan hasil
    document.getElementById('quiz-result').innerText = `Anda mendapatkan ${score} dari ${totalQuestions} soal.`;
}

function submitQuiz3() {
    let score = 0;
    const totalQuestions = 3;

    // Cek jawaban untuk pertanyaan 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value == "2") { // 3 adalah jawaban yang benar
        score++;
    }

    // Cek jawaban untuk pertanyaan 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value == "2") { // 4 adalah jawaban yang benar
        score++;
    }

    // Cek jawaban untuk pertanyaan 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value == "4") { // 6x adalah jawaban yang benar
        score++;
    }

    // Tampilkan hasil
    document.getElementById('quiz-result').innerText = `Anda mendapatkan ${score} dari ${totalQuestions} soal.`;
}

function submitQuiz4() {
    let score = 0;
    const totalQuestions = 3;

    // Cek jawaban untuk pertanyaan 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value == "2") { // 8 adalah jawaban yang benar
        score++;
    }

    // Cek jawaban untuk pertanyaan 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value == "3") { // 7 adalah jawaban yang benar
        score++;
    }

    // Cek jawaban untuk pertanyaan 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value == "2") { // 81 adalah jawaban yang benar
        score++;
    }

    // Tampilkan hasil
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
    const toggleButton = document.getElementById('toggle-quiz'); // Pastikan ID tombol sesuai

    if (quiz.style.display === 'none' || quiz.style.display === '') {
        quiz.style.display = 'block'; // Tampilkan kuis
        toggleButton.innerText = 'Sembunyikan Kuis'; // Ubah teks tombol
    } else {
        quiz.style.display = 'none'; // Sembunyikan kuis
        toggleButton.innerText = 'Tampilkan Kuis'; // Ubah teks tombol
    }
}

// Fungsi submitQuiz1, submitQuiz2, submitQuiz3, submitQuiz4 tetap sama
// ...
