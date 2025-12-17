// Quiz data
const questions = [
    {
        question: "Как ты реагируешь, когда кто-то занял твоё место?",
        answers: [
            { text: "Начинаю громко возмущаться", type: "angry" },
            { text: "Думаю: 'Ну ладно, пойду поем'", type: "hungry" },
            { text: "Вежливо объясняю ситуацию", type: "smart" },
            { text: "Просто сажусь на другое место", type: "normal" }
        ]
    },
    {
        question: "Что ты делаешь первым делом утром?",
        answers: [
            { text: "Злюсь на будильник", type: "angry" },
            { text: "Бегу к холодильнику", type: "hungry" },
            { text: "Планирую свой день", type: "smart" },
            { text: "Иду умываться как все", type: "normal" }
        ]
    },
    {
        question: "Тебе предложили решить сложную задачу. Твои действия?",
        answers: [
            { text: "Кто вообще это придумал?!", type: "angry" },
            { text: "Сначала перекушу, потом подумаю", type: "hungry" },
            { text: "С удовольствием возьмусь!", type: "smart" },
            { text: "Попробую, но без фанатизма", type: "normal" }
        ]
    },
    {
        question: "Как ты проводишь выходные?",
        answers: [
            { text: "Всё раздражает, лежу дома", type: "angry" },
            { text: "Хожу по кафе и ресторанам", type: "hungry" },
            { text: "Читаю книги и развиваюсь", type: "smart" },
            { text: "Как обычно, ничего особенного", type: "normal" }
        ]
    },
    {
        question: "Что ты закажешь в кафе?",
        answers: [
            { text: "Буду ругаться с официантом", type: "angry" },
            { text: "ВСЁ МЕНЮ!", type: "hungry" },
            { text: "Что-то полезное для мозга", type: "smart" },
            { text: "Обычный кофе с круассаном", type: "normal" }
        ]
    },
    {
        question: "Друг попросил у тебя денег в долг. Что скажешь?",
        answers: [
            { text: "Ещё чего! Никаких долгов!", type: "angry" },
            { text: "Только если купишь мне еды", type: "hungry" },
            { text: "Давай обсудим условия", type: "smart" },
            { text: "Ну ладно, держи", type: "normal" }
        ]
    },
    {
        question: "Как ты ведёшь себя в очереди?",
        answers: [
            { text: "Постоянно ворчу и тороплю всех", type: "angry" },
            { text: "Представляю, что буду есть дома", type: "hungry" },
            { text: "Спокойно жду и читаю статьи", type: "smart" },
            { text: "Просто стою и жду", type: "normal" }
        ]
    },
    {
        question: "Какой у тебя любимый фильм?",
        answers: [
            { text: "Боевики с драками!", type: "angry" },
            { text: "Кулинарные шоу", type: "hungry" },
            { text: "Документалки и научная фантастика", type: "smart" },
            { text: "Не знаю, смотрю что попадётся", type: "normal" }
        ]
    },
    {
        question: "Тебя попросили выступить перед аудиторией. Твоя реакция?",
        answers: [
            { text: "Да кто вы такие вообще?!", type: "angry" },
            { text: "Можно после обеда?", type: "hungry" },
            { text: "Отлично! Люблю делиться знаниями", type: "smart" },
            { text: "Ну... попробую", type: "normal" }
        ]
    },
    {
        question: "Что для тебя самое важное в жизни?",
        answers: [
            { text: "Чтобы никто не раздражал!", type: "angry" },
            { text: "Вкусная еда каждый день", type: "hungry" },
            { text: "Знания и саморазвитие", type: "smart" },
            { text: "Стабильность и покой", type: "normal" }
        ]
    }
];

// Add silly answers to each question
questions.forEach(q => {
    const sillyAnswers = [
        "Надену на голову кастрюлю и буду танцевать",
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
        description: "Ты вспыльчивый и эмоциональный! Тебя легко вывести из себя, но зато ты всегда говоришь правду в лицо. Твоя страсть — двигатель прогресса!",
        color: "angry"
    },
    hungry: {
        emoji: "🍔",
        title: "Голодный Руслан",
        description: "Еда — твоя главная страсть! Ты знаешь все рестораны в городе и готов на всё ради вкусного обеда. Путь к твоему сердцу точно лежит через желудок!",
        color: "hungry"
    },
    smart: {
        emoji: "🧠",
        title: "Умный Руслан",
        description: "Ты настоящий интеллектуал! Любишь решать сложные задачи, читать книги и развиваться. Друзья часто обращаются к тебе за советом!",
        color: "smart"
    },
    normal: {
        emoji: "😐",
        title: "Обычный Руслан",
        description: "Ты спокойный и уравновешенный человек. Не любишь крайности и предпочитаешь стабильность. Надёжный друг и отличный собеседник!",
        color: "normal"
    },
    silly: {
        emoji: "🤪",
        title: "Глупый Руслан",
        description: "Ты — душа компании! Твой юмор и нестандартное мышление делают жизнь ярче. Кто сказал, что нужно быть серьёзным? Только не ты!",
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
