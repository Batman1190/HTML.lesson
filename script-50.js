// Global variables
let currentLesson = 1;
let completedLessons = new Set();
const totalLessons = TOTAL_LESSONS;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    generateLessonNavigation();
    generateLessons();
    loadProgress();
    updateProgress();
    updateNavigationButtons();
    setupEventListeners();
});

// Generate lesson navigation buttons
function generateLessonNavigation() {
    const nav = document.getElementById('lessonNav');
    for (let i = 1; i <= totalLessons; i++) {
        const btn = document.createElement('button');
        btn.className = 'nav-btn' + (i === 1 ? ' active' : '');
        btn.setAttribute('data-lesson', i);
        btn.textContent = i;
        btn.onclick = () => showLesson(i);
        nav.appendChild(btn);
    }
}

// Generate all lesson content
function generateLessons() {
    const container = document.getElementById('lessonsContainer');
    lessons.forEach((lesson, index) => {
        const lessonDiv = document.createElement('div');
        lessonDiv.className = 'lesson' + (index === 0 ? ' active' : '');
        lessonDiv.id = 'lesson' + lesson.id;
        
        lessonDiv.innerHTML = `
            <div class="lesson-header">
                <span class="category-badge">${lesson.category}</span>
                <h2>${lesson.title}</h2>
            </div>
            
            <div class="explanation">
                ${lesson.explanation}
            </div>
            
            <div class="exercise">
                <h3>🎯 Exercise ${lesson.id}:</h3>
                <p>${lesson.exercise}</p>
                <div class="code-example">
                    <code>${lessonAnswers[lesson.id]}</code>
                </div>
                <button class="hint-btn" onclick="showHint(${lesson.id})">💡 Need Help?</button>
                <div class="hint" id="hint${lesson.id}">
                    <strong>Hint:</strong> ${lessonHints[lesson.id]}
                </div>
                <textarea class="code-input" id="input${lesson.id}" placeholder="Type your code here..."></textarea>
                <button class="check-btn" onclick="checkAnswer(${lesson.id})">Check Answer ✓</button>
                <div class="feedback" id="feedback${lesson.id}"></div>
                <div class="preview" id="preview${lesson.id}"></div>
            </div>
        `;
        
        container.appendChild(lessonDiv);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search box
    document.getElementById('searchBox').addEventListener('input', filterLessons);
    
    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', filterLessons);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') nextLesson();
        else if (event.key === 'ArrowLeft') previousLesson();
    });
}

// Filter lessons by search and category
function filterLessons() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const lessonId = parseInt(btn.getAttribute('data-lesson'));
        const lesson = lessons[lessonId - 1];
        
        const matchesSearch = lesson.title.toLowerCase().includes(searchTerm) || 
                            lesson.explanation.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || lesson.category === category;
        
        if (matchesSearch && matchesCategory) {
            btn.style.display = 'inline-block';
        } else {
            btn.style.display = 'none';
        }
    });
}

// Show specific lesson
function showLesson(lessonNumber) {
    // Hide all lessons
    document.querySelectorAll('.lesson').forEach(lesson => {
        lesson.classList.remove('active');
    });
    
    // Show selected lesson
    const lessonEl = document.getElementById('lesson' + lessonNumber);
    if (lessonEl) {
        lessonEl.classList.add('active');
        
        // Update navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lesson="${lessonNumber}"]`).classList.add('active');
        
        currentLesson = lessonNumber;
        document.getElementById('currentLessonNum').textContent = lessonNumber;
        updateNavigationButtons();
        
        // Scroll to top
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

// Previous lesson
function previousLesson() {
    if (currentLesson > 1) {
        showLesson(currentLesson - 1);
    }
}

// Next lesson
function nextLesson() {
    if (currentLesson < totalLessons) {
        showLesson(currentLesson + 1);
    }
}

// Update navigation buttons state
function updateNavigationButtons() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    prevBtn.disabled = currentLesson === 1;
    nextBtn.disabled = currentLesson === totalLessons;
}

// Show hint function
function showHint(lessonNumber) {
    const hint = document.getElementById('hint' + lessonNumber);
    hint.classList.toggle('show');
}

// Check answer function
function checkAnswer(lessonNumber) {
    const input = document.getElementById('input' + lessonNumber).value.trim();
    const feedback = document.getElementById('feedback' + lessonNumber);
    const preview = document.getElementById('preview' + lessonNumber);
    
    const correctAnswer = lessonAnswers[lessonNumber];
    const normalizedInput = input.replace(/\s+/g, ' ').trim().toLowerCase();
    const normalizedAnswer = correctAnswer.replace(/\s+/g, ' ').trim().toLowerCase();
    
    const isCorrect = normalizedInput === normalizedAnswer;
    
    // Show feedback
    feedback.className = 'feedback show ' + (isCorrect ? 'success' : 'error');
    feedback.textContent = isCorrect 
        ? '🎉 Perfect! You got it right!' 
        : '❌ Not quite! Check the hint and try again. Make sure your code matches exactly!';
    
    // Show preview if correct
    if (isCorrect) {
        preview.innerHTML = input;
        preview.classList.add('show');
        
        // Mark lesson as completed
        if (!completedLessons.has(lessonNumber)) {
            completedLessons.add(lessonNumber);
            updateProgress();
            saveProgress();
            
            // Update navigation button styling
            const navBtn = document.querySelector(`[data-lesson="${lessonNumber}"]`);
            if (navBtn) {
                navBtn.classList.add('completed');
            }
            
            // Show celebration modal
            setTimeout(() => {
                showCelebration(lessonNumber);
            }, 500);
        }
    } else {
        preview.classList.remove('show');
    }
}

// Update progress bar
function updateProgress() {
    const progressPercent = (completedLessons.size / totalLessons) * 100;
    document.getElementById('progressFill').style.width = progressPercent + '%';
    document.getElementById('progressText').textContent = `${completedLessons.size}/${totalLessons} lessons completed`;
    
    // Check if all lessons completed
    if (completedLessons.size === totalLessons) {
        setTimeout(() => {
            showCompletionModal();
        }, 1000);
    }
}

// Show celebration modal
function showCelebration(lessonNumber) {
    const modal = document.getElementById('celebrationModal');
    const message = document.getElementById('celebrationMessage');
    
    const messages = [
        "You're a natural! 🌟",
        "Fantastic work! 🎨",
        "You're getting really good at this! 💪",
        "Keep up the amazing work! 🚀",
        "You're on fire! 🔥",
        "Brilliant! You're learning so fast! ⚡"
    ];
    
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
    modal.classList.add('show');
}

// Show completion modal
function showCompletionModal() {
    const modal = document.getElementById('completionModal');
    modal.classList.add('show');
    
    // Confetti effect (text based)
    console.log('%c🎊🎉 CONGRATULATIONS! 🎉🎊', 'font-size: 30px; color: #f5576c; font-weight: bold;');
    console.log('%cYou completed all 50 HTML lessons!', 'font-size: 20px; color: #764ba2;');
}

// Close modal
function closeModal() {
    document.getElementById('celebrationModal').classList.remove('show');
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('celebrationModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('htmlAdventureProgress50', JSON.stringify({
        currentLesson: currentLesson,
        completedLessons: Array.from(completedLessons)
    }));
}

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('htmlAdventureProgress50');
    if (saved) {
        const data = JSON.parse(saved);
        currentLesson = data.currentLesson || 1;
        completedLessons = new Set(data.completedLessons || []);
        
        showLesson(currentLesson);
        updateProgress();
        
        // Update completed lesson buttons
        completedLessons.forEach(lessonNum => {
            const navBtn = document.querySelector(`[data-lesson="${lessonNum}"]`);
            if (navBtn) {
                navBtn.classList.add('completed');
            }
        });
    }
}

// Console easter eggs
console.log('%c🌟 Welcome to HTML Adventure - 50 Lessons! 🌟', 'font-size: 20px; color: #f5576c; font-weight: bold;');
console.log('%cYou are doing awesome! Keep learning! 🚀', 'font-size: 16px; color: #764ba2;');
console.log('%cTip: Use ← → arrow keys to navigate between lessons!', 'font-size: 14px; color: #43e97b;');
