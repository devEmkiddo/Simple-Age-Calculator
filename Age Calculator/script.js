function calculate(){
    const birthYear = document.getElementById('ageInput');
    const results = document.getElementById('results');
    const presentYear = 2023;

    const getAge = presentYear - birthYear.value;
    results.innerHTML = `You are ${getAge} years old`;

}