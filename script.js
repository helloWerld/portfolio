//Open Education Information
const viewEduc = document.querySelector('.view-educ');
const education = document.querySelector('.education');
viewEduc.addEventListener('click', () => {
    if (education.style.display === 'inline') {
        education.style.display = 'none';
        viewEduc.innerText = 'View My Education';
    } else {
        education.style.display = 'inline';
        viewEduc.innerText = 'Close Education';
    }
});
