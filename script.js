const dateInput = document.getElementById('date');
const calculate = document.getElementById('calculate');
const ageResult = document.getElementById('ageResult');

calculate.addEventListener('click', () => {
    const userDate = new Date(dateInput.value);
    const currentDate = new Date();

    if (!dateInput.value) {
        ageResult.textContent = "Please select a valid date.";
        return;
    }

    const birthYear = userDate.getFullYear();
    const birthMonth = userDate.getMonth();
    const birthDay = userDate.getDate();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;

    if (ageDays < 0) {
        ageDays += new Date(currentYear, currentMonth, 0).getDate();
        ageMonths--;
    }

    if (ageMonths < 0) {
        ageMonths += 12;
        ageYears--;
    }

    ageResult.textContent = `You are ${ageYears} years, ${ageMonths} months and ${ageDays} days old.`;
});