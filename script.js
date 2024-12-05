// Store user profile data
let userProfile = {};

// Login / Register Toggle
document.getElementById('registerSwitch').addEventListener('click', () => {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

// Handle Registration
document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Save user credentials (in a real app, send this to the backend)
    userProfile.email = email;
    userProfile.password = password;

    alert("Registration successful! Please set up your profile.");
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('profile-setup').style.display = 'block';
});

// Handle Login
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check login credentials
    if (email === userProfile.email && password === userProfile.password) {
        alert("Login successful!");
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-features').style.display = 'block';
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

// Handle Profile Setup
document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    userProfile.age = document.getElementById('age').value;
    userProfile.gender = document.getElementById('gender').value;
    userProfile.height = document.getElementById('height').value;
    userProfile.weight = document.getElementById('weight').value;

    alert("Profile setup complete!");
    document.getElementById('profile-setup').style.display = 'none';
    document.getElementById('main-features').style.display = 'block';
});

// Main Feature Navigation Functions
function showWorkoutCustomization() {
    document.getElementById('main-features').style.display = 'none';
    document.getElementById('workout-customization').style.display = 'block';
}

function showMealPlanning() {
    document.getElementById('main-features').style.display = 'none';
    document.getElementById('meal-planning').style.display = 'block';
}

function showVirtualCoaching() {
    document.getElementById('main-features').style.display = 'none';
    document.getElementById('virtual-coaching').style.display = 'block';
}

function showChallenges() {
    alert("Challenges feature coming soon!");
}

function showAnalytics() {
    alert("Analytics feature coming soon!");
}

function showMeditation() {
    alert("Meditation feature coming soon!");
}

function showMarketplace() {
    alert("Marketplace feature coming soon!");
}

// Back to Main Features
function backToMain() {
    document.getElementById('meal-planning').style.display = 'none';
    document.getElementById('workout-customization').style.display = 'none';
    document.getElementById('virtual-coaching').style.display = 'none';
    document.getElementById('main-features').style.display = 'block';
}

// Meal Plan Generation
function generateMealPlan() {
    const goal = document.getElementById('mealGoal').value;
    const restrictions = document.getElementById('dietaryRestrictions').value;

    const plan = `Your meal plan for ${goal} with ${restrictions} diet: 
    A balanced mix of proteins, carbs, and healthy fats tailored to your goal.`;
    document.getElementById('mealPlan').textContent = plan;
}

// Workout Plan Generation
function generateWorkoutPlan() {
    const goal = document.getElementById('workoutGoal').value;
    const level = document.getElementById('workoutLevel').value;
    const equipment = document.getElementById('workoutEquipment').value;

    const plan = `Your workout plan for ${goal} at ${level} level with ${equipment} equipment:
    Includes exercises focused on strength, endurance, and flexibility.`;
    document.getElementById('workoutPlan').textContent = plan;
}

// Virtual Coaching Plan Generation
function generatePlan() {
    const goal = document.getElementById('fitnessGoal').value;
    const level = document.getElementById('fitnessLevel').value;
    const equipment = document.getElementById('equipment').value;

    const plan = `Your personalized fitness plan for ${goal} at ${level} level with ${equipment} equipment:
    Structured sessions designed to help you achieve your goals effectively.`;
    document.getElementById('workoutPlan').textContent = plan;
}

// Complete Workout
function completeWorkout() {
    const feedback = "Good job! You've completed your workout for the day!";
    document.getElementById('feedback').textContent = feedback;
}
