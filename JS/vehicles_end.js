

const username = document.getElementById('vehicles-username');
const saveScoreBtn = document.getElementById('vehicles-saveScoreBtn');
const finalScore = document.getElementById('vehicles-finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('vehicles-highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('vehicles-highScores', JSON.stringify(highScores));
    window.location.assign('/');
};
