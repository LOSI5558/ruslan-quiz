// Quiz data
const questions = [
    {
        question: "Как ты реагируешь, когда кто-то занял твоё место?",
        answers: [
            { text: "Начну пинать ногами это чучело", type: "angry" },
            { text: "Щас бы заточить что то...", type: "hungry" },
            { text: "Начну говорить что я дитя солнца", type: "smart" },
            { text: "уйду, потому что слабый", type: "normal" }
        ]
    },
    {
        question: "Что ты делаешь первым делом утром?",
        answers: [
            { text: "злюсь, потому что нужно идти в шарагу", type: "angry" },
            { text: "Закажу ка пожрать", type: "hungry" },
            { text: "Засвечусь как солнце", type: "smart" },
            { text: "Сразу зайду в чат вога и напишу хуйню", type: "normal" }
        ]
    },
    {
        question: "Тебе предложили решить сложную задачу. Твои действия?",
        answers: [
            { text: "Кто ты такой мне что то предлагать?", type: "angry" },
            { text: "съем задачу", type: "hungry" },
            { text: "напишу целую лекцию которая не имеет смысла", type: "smart" },
            { text: "бля, загуглю", type: "normal" }
        ]
    },
    {
        question: "Как ты проводишь выходные?",
        answers: [
            { text: "ебанная клеш рояль нахуй", type: "angry" },
            { text: "лежу на диване что бы не тратить силы", type: "hungry" },
            { text: "высираю опять хуйню в чат", type: "smart" },
            { text: "смотрю ютуб, листаю тики токи", type: "normal" }
        ]
    },
    {
        question: "Что ты закажешь в кафе?",
        answers: [
            { text: "закажу официанта", type: "angry" },
            { text: "Вкуснейшую пиццу", type: "hungry" },
            { text: "ебанных броколей", type: "smart" },
            { text: "ало нахуй у Руслана нету денег", type: "normal" }
        ]
    },
    {
        question: "Друг попросил у тебя денег в долг. Что скажешь?",
        answers: [
            { text: "Иди нахуй", type: "angry" },
            { text: "У меня ток на дошик осталось , сори", type: "hungry" },
            { text: "коинами вернешь", type: "smart" },
            { text: "денег нет СУКА", type: "normal" }
        ]
    },
    {
        question: "Как ты ведёшь себя в очереди?",
        answers: [
            { text: "ворчу как ебанный дед", type: "angry" },
            { text: "толкаю что бы быстрее пробили мою хуйню", type: "hungry" },
            { text: "стою и впитываю так как я боюсь всех", type: "smart" },
            { text: "у меня нет денег, я не стою в очереди", type: "normal" }
        ]
    },
    {
        question: "Какой у тебя любимый фильм?",
        answers: [
            { text: "я анимээээшник", type: "angry" },
            { text: "где есть хавчик", type: "hungry" },
            { text: "про солнце", type: "smart" },
            { text: "я не смотрю нихуя", type: "normal" }
        ]
    },
    {
        question: "Тебя попросили выступить перед аудиторией. Твоя реакция?",
        answers: [
            { text: "агрессивно ворчать и плакать", type: "angry" },
            { text: "Можно после обеда?", type: "hungry" },
            { text: "съебались , псы", type: "smart" },
            { text: "ЭУАУУА (звуки макаки)", type: "normal" }
        ]
    },
    {
        question: "Что для тебя самое важное в жизни?",
        answers: [
            { text: "деп в казик+коины", type: "angry" },
            { text: "вкусность", type: "hungry" },
            { text: "ебанные, длинные философские сообщения", type: "smart" },
            { text: "Xd Xd", type: "normal" }
        ]
    }
];

// Add silly answers to each question
questions.forEach(q => {
    const sillyAnswers = [
        "Я хуй знает что тут писать",
        "Спрошу у рыбки в аквариуме",
        "Притворюсь деревом",
        "Начну разговаривать с потолком",
        "Буду бегать кругами и кричать 'банан!'",
        "Позвоню инопланетянам",
        "Оденусь в костюм курицы",
        "Сделаю вид, что я невидимый",
        "Начну искать ответ под диваном",
        "Спрошу у своей тени"
    ];
    const randomSilly = sillyAnswers[Math.floor(Math.random() * sillyAnswers.length)];
    q.answers.push({ text: randomSilly, type: "silly" });
    // Shuffle answers
    q.answers = q.answers.sort(() => Math.random() - 0.5);
});

const results = {
    angry: {
        emoji: "😠",
        title: "Злой Руслан",
        description: "Ты злой Руслан, пиздец анлак",
        color: "angry"
    },
    hungry: {
        emoji: "🍔",
        title: "Голодный Руслан",
        description: "Как говорит Руслан, заточить бы щас вкусность!",
        color: "hungry"
    },
    smart: {
        emoji: "🧠",
        title: "Умный Руслан",
        description: "такого не видел, миф",
        color: "smart"
    },
    normal: {
        emoji: "😐",
        title: "Обычный Руслан",
        description: "базовый Руслан, обычный, глуповатый, как обучно",
        color: "normal"
    },
    silly: {
        emoji: "🤪",
        title: "Глупый Руслан",
        description: "Этот пельмень еще тупее чем мой холодильник, похуй",
        color: "silly"
    }
};

// App state
let currentQuestion = 0;
let scores = {
    angry: 0,
    hungry: 0,
    smart: 0,
    normal: 0,
    silly: 0
};

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const resultEmoji = document.getElementById('result-emoji');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultPercent = document.getElementById('result-percent');

// Initialize Telegram WebApp
let tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
    document.body.classList.add('tg-theme');
}

// Show screen helper
function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// Render question
function renderQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;

    answersContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D', 'E'];

    question.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerHTML = `
            <span class="answer-letter">${letters[index]}</span>
            <span class="answer-text">${answer.text}</span>
        `;
        btn.addEventListener('click', () => selectAnswer(answer.type, btn));
        answersContainer.appendChild(btn);
    });

    progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    progressText.textContent = `${currentQuestion + 1} / ${questions.length}`;
}

// Handle answer selection
function selectAnswer(type, btn) {
    // Visual feedback
    document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    // Update score
    scores[type]++;

    // Next question or show result
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            showResult();
        }
    }, 300);
}

// Calculate and show result
function showResult() {
    // Find the type with highest score
    let maxScore = 0;
    let resultType = 'normal';

    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultType = type;
        }
    }

    const result = results[resultType];
    const percent = Math.round((maxScore / questions.length) * 100);

    resultEmoji.textContent = result.emoji;
    resultTitle.textContent = result.title;
    resultTitle.className = `result-title ${result.color}`;
    resultDescription.textContent = result.description;
    resultPercent.textContent = `${percent}%`;

    showScreen(resultScreen);

    // Haptic feedback on Telegram
    if (tg?.HapticFeedback) {
        tg.HapticFeedback.notificationOccurred('success');
    }
}

// Reset quiz
function resetQuiz() {
    currentQuestion = 0;
    scores = { angry: 0, hungry: 0, smart: 0, normal: 0, silly: 0 };
    renderQuestion();
    showScreen(quizScreen);
}

// Share result
function shareResult() {
    const resultType = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    const result = results[resultType];
    const shareText = `${result.emoji} Я — ${result.title}! Пройди тест "Какой ты Руслан?" и узнай свой тип!`;

    if (tg) {
        tg.shareUrl ? tg.shareUrl(window.location.href, shareText) : null;
    } else {
        if (navigator.share) {
            navigator.share({
                title: 'Какой ты Руслан?',
                text: shareText,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(shareText);
            alert('Результат скопирован!');
        }
    }
}

// Event listeners
startBtn.addEventListener('click', () => {
    renderQuestion();
    showScreen(quizScreen);
    if (tg?.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('light');
    }
});

restartBtn.addEventListener('click', resetQuiz);
shareBtn.addEventListener('click', shareResult);

// Back button handling for Telegram
if (tg?.BackButton) {
    tg.BackButton.onClick(() => {
        if (quizScreen.classList.contains('active')) {
            if (currentQuestion > 0) {
                currentQuestion--;
                renderQuestion();
            } else {
                showScreen(startScreen);
                tg.BackButton.hide();
            }
        } else if (resultScreen.classList.contains('active')) {
            resetQuiz();
        }
    });

    // Show/hide back button based on screen
    const observer = new MutationObserver(() => {
        if (startScreen.classList.contains('active')) {
            tg.BackButton.hide();
        } else {
            tg.BackButton.show();
        }
    });

    observer.observe(startScreen, { attributes: true, attributeFilter: ['class'] });
    observer.observe(quizScreen, { attributes: true, attributeFilter: ['class'] });
    observer.observe(resultScreen, { attributes: true, attributeFilter: ['class'] });
}
