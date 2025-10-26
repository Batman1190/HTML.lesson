// Global variables
let currentLesson = 1;
let completedLessons = new Set();
const totalLessons = 5;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    updateProgress();
    updateNavigationButtons();
});

// Lesson navigation
function showLesson(lessonNumber) {
    // Hide all lessons
    document.querySelectorAll('.lesson').forEach(lesson => {
        lesson.classList.remove('active');
    });
    
    // Show selected lesson
    document.getElementById('lesson' + lessonNumber).classList.add('active');
    
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lesson="${lessonNumber}"]`).classList.add('active');
    
    currentLesson = lessonNumber;
    updateNavigationButtons();
}

// Navigation button listeners
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lessonNum = parseInt(this.getAttribute('data-lesson'));
        showLesson(lessonNum);
    });
});

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
    
    let isCorrect = false;
    let message = '';
    
    switch(lessonNumber) {
        case 1:
            // Check for <h1>Hello World!</h1>
            isCorrect = input.toLowerCase().replace(/\s+/g, '') === '<h1>helloworld!</h1>';
            message = isCorrect 
                ? '🎉 Perfect! You created your first HTML heading!' 
                : '❌ Not quite! Make sure to use &lt;h1&gt; and &lt;/h1&gt; tags with "Hello World!" in between.';
            break;
            
        case 2:
            // Check for <p>I am learning HTML!</p>
            isCorrect = input.toLowerCase().replace(/\s+/g, '') === '<p>iamlearninghtml!</p>';
            message = isCorrect 
                ? '🎉 Awesome! You made a perfect paragraph!' 
                : '❌ Try again! Use &lt;p&gt; and &lt;/p&gt; tags with "I am learning HTML!" in between.';
            break;
            
        case 3:
            // Check for <h2>My Awesome Website</h2>
            isCorrect = input.toLowerCase().replace(/\s+/g, '') === '<h2>myawesomewebsite</h2>';
            message = isCorrect 
                ? '🎉 Fantastic! Your heading looks great!' 
                : '❌ Almost there! Use &lt;h2&gt; and &lt;/h2&gt; tags with "My Awesome Website" in between.';
            break;
            
        case 4:
            // Check for list with Dogs and Cats
            const normalized = input.toLowerCase().replace(/\s+/g, '');
            const hasUl = normalized.includes('<ul>') && normalized.includes('</ul>');
            const hasDogs = normalized.includes('<li>dogs</li>');
            const hasCats = normalized.includes('<li>cats</li>');
            isCorrect = hasUl && hasDogs && hasCats;
            message = isCorrect 
                ? '🎉 Excellent! You created a perfect list!' 
                : '❌ Keep trying! Remember to use &lt;ul&gt;, two &lt;li&gt; tags for "Dogs" and "Cats", and close with &lt;/ul&gt;.';
            break;
            
        case 5:
            // Check for image tag
            const hasImg = input.includes('<img');
            const hasSrc = input.includes('src="https://via.placeholder.com/150"') || 
                          input.includes("src='https://via.placeholder.com/150'");
            const hasAlt = input.includes('alt="A placeholder image"') || 
                          input.includes("alt='A placeholder image'");
            isCorrect = hasImg && hasSrc && hasAlt;
            message = isCorrect 
                ? '🎉 Amazing! You added an image perfectly!' 
                : '❌ Good try! Make sure to include &lt;img with src="https://via.placeholder.com/150" and alt="A placeholder image"&gt;';
            break;
    }
    
    // Show feedback
    feedback.className = 'feedback show ' + (isCorrect ? 'success' : 'error');
    feedback.textContent = message;
    
    // Show preview if correct
    if (isCorrect) {
        preview.innerHTML = input;
        preview.classList.add('show');
        
        // Mark lesson as completed
        completedLessons.add(lessonNumber);
        updateProgress();
        
        // Update navigation button styling
        const navBtn = document.querySelector(`[data-lesson="${lessonNumber}"]`);
        if (navBtn) {
            navBtn.classList.add('completed');
        }
        
        // Show celebration modal
        setTimeout(() => {
            showCelebration();
        }, 500);
    } else {
        preview.classList.remove('show');
    }
}

// Update progress bar
function updateProgress() {
    const progressPercent = (completedLessons.size / totalLessons) * 100;
    document.getElementById('progressFill').style.width = progressPercent + '%';
    document.getElementById('progressText').textContent = Math.round(progressPercent) + '%';
}

// Show celebration modal
function showCelebration() {
    const modal = document.getElementById('celebrationModal');
    modal.classList.add('show');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('celebrationModal');
    modal.classList.remove('show');
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('celebrationModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Easter egg: Keyboard shortcut for next/previous lesson
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextLesson();
    } else if (event.key === 'ArrowLeft') {
        previousLesson();
    }
});

// Encourage kids with console messages
console.log('%c🌟 Welcome to HTML Adventure! 🌟', 'font-size: 20px; color: #f5576c; font-weight: bold;');
console.log('%cYou are doing awesome! Keep learning! 🚀', 'font-size: 16px; color: #764ba2;');

// Auto-save progress to localStorage
function saveProgress() {
    localStorage.setItem('htmlAdventureProgress', JSON.stringify({
        currentLesson: currentLesson,
        completedLessons: Array.from(completedLessons)
    }));
}

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('htmlAdventureProgress');
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

// Save progress when lessons are completed
const originalCheckAnswer = checkAnswer;
checkAnswer = function(lessonNumber) {
    originalCheckAnswer(lessonNumber);
    saveProgress();
};

// Load progress on page load
window.addEventListener('load', loadProgress);
