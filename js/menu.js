document.getElementById('dinosaur').addEventListener('click', function () {
    window.location.href = '../html/dinosaur.html';
});
document.getElementById('space').addEventListener('click', function () {
    window.location.href = '../html/space.html';
});
document.getElementById('animals').addEventListener('click', function () {
    window.location.href = '../html/animals.html';
});
document.getElementById('school_bus').addEventListener('click', function () {
    window.location.href = '../html/school_bus.html';
});
document.getElementById('user-profile').addEventListener('click', function (event) {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        const profilePic = document.querySelector('.profile');
        if (profilePic.style.display === 'none' || profilePic.style.display === '') {
            profilePic.style.display = 'flex';
        }
        else {
            profilePic.style.display = 'none';
        }
        event.stopPropagation(); // makes sure that the click doesn't spread to other elements
    }
});
document.getElementById('log_out').addEventListener('click', function () {
    localStorage.removeItem('loggedInUser');
    window.location.href = '../html/home.html';
});
document.getElementById('score').addEventListener('click', function () {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        const scoreDiv = document.querySelector('.scoreDivProfile');
        scoreDiv.style.display = 'flex';
        const points = loggedInUser.score || 0;
        document.getElementById('userPointsProfile').innerText = `הנקודות שלך הן: ${points}`;
    }
});







