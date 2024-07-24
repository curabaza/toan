const quizData = [
    {
        question: "Thủ đô của Việt Nam là gì?",
        choices: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Huế"],
        correct: "Hà Nội"
    },
    {
        question: "3 + 5 bằng bao nhiêu?",
        choices: ["5", "8", "7", "9"],
        correct: "8"
    },
    {
        question: "Tác giả của truyện 'Dế Mèn phiêu lưu ký' là ai?",
        choices: ["Nguyễn Nhật Ánh", "Tô Hoài", "Võ Quảng", "Nguyễn Huy Tưởng"],
        correct: "Tô Hoài"
    },
    {
        question: "Quốc kỳ của Việt Nam có màu gì?",
        choices: ["Xanh", "Đỏ", "Vàng", "Trắng"],
        correct: "Đỏ"
    },
    {
        question: "2 x 6 bằng bao nhiêu?",
        choices: ["12", "14", "16", "10"],
        correct: "12"
    },
    {
        question: "Nhà văn Nam Cao sinh năm nào?",
        choices: ["1915", "1917", "1919", "1921"],
        correct: "1917"
    },
    {
        question: "Nhà Nguyễn Tấn Phát có bao nhiêu người?",
        choices: ["1", "2", "3", "5"],
        correct: "5"
    },
    {
        question: "Nguyễn Tấn Đạt sinh năm nào?",
        choices: ["2015", "2013", "2017", "2002"],
        correct: "2015"
    },
    {
        question: "Nguyễn Tấn Phát sinh năm nào?",
        choices: ["2015", "2013", "2017", "2002"],
        correct: "2013"
    },
    {
        question: "Nguyễn Tấn Thành sinh năm nào?",
        choices: ["2024", "2013", "2023", "2002"],
        correct: "2023"
    },
    {
        question: "Từ nhà đến trường là 40km thì từ trường đến UBND tỉnh Quảng Ngãi là bao nhiêu ? biết tổng quảng đường là 100km",
        choices: ["80km", "60km", "70km", "50km"],
        correct: "60km"
    },
    {
        question: "Dưới thời vua nào diện tích nước Việt Nam lớn nhất?",
        choices: ["vua Quang Trung", "vua Gia Long", "vua Minh Mạng", "vua Thành Thái"],
        correct: "vua Minh Mạng"
    },
    {
        question: "có một đàng voi bị hư tai một con chết hỏi còn bao nhiêu con?",
        choices: ["24", "35", "13", "23"],
        correct: "23"
    },
    {
        question: "0101 là gì?",
        choices: ["là bật tắt", "mã số", "cơ số", "số tử"],
        correct: "là bật tắt"
    }
    
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const label = document.createElement("label");
        label.classList.add("choice");

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "choice";
        input.value = choice;

        label.appendChild(input);
        label.appendChild(document.createTextNode(choice));
        choicesContainer.appendChild(label);
    });
    document.getElementById("result").innerText = "";
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("next").style.display = "none";
}

function checkAnswer() {
    const choices = document.getElementsByName("choice");
    let selectedChoice;
    for (const choice of choices) {
        if (choice.checked) {
            selectedChoice = choice.value;
            break;
        }
    }

    const result = document.getElementById("result");
    if (selectedChoice === quizData[currentQuestionIndex].correct) {
        correctAnswers++;
        result.innerText = "Chính xác! Bạn đã trả lời đúng.";
        result.style.color = "green";
    } else {
        result.innerText = "ngu quá !";
        result.style.color = "red";
    }
    document.getElementById("submit").style.display = "none";
    document.getElementById("next").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        const quiz = document.getElementById("quiz");
        if (correctAnswers === quizData.length) {
            quiz.innerHTML = "<h2>Chúc mừng bạn đã nhận được 20k của mít!</h2>";
        } else {
            quiz.innerHTML = `<h2>Bạn đã trả lời đúng ${correctAnswers}/${quizData.length} câu. chúc bạn may mắng lần sau :))))!</h2>`;
        }
    }
}

window.onload = loadQuestion;
