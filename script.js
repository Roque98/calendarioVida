function generateCalendar() {
    const dob = new Date(document.getElementById('dob').value);
    if (isNaN(dob)) {
        alert('Please enter a valid date');
        return;
    }

    const today = new Date();
    const ageInWeeks = Math.floor((today - dob) / (1000 * 60 * 60 * 24 * 7));
    const totalWeeks = 52 * 60; // Assuming a lifespan of 60 years

    const calendar = document.getElementById('calendar');
    calendar.innerHTML = ''; // Clear previous calendar

    for (let i = 0; i < totalWeeks; i++) {
        const weekDiv = document.createElement('div');
        weekDiv.className = 'week' + (i < ageInWeeks ? ' lived' : '');
        calendar.appendChild(weekDiv);

        if ((i + 1) % 52 === 0) {
            const yearLabel = document.createElement('div');
            yearLabel.className = 'year-label';
            yearLabel.textContent = (i + 1) / 52;
            calendar.appendChild(yearLabel);
        }
    }
}
