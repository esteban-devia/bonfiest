var slideIndexS = 1;
showSlidesS(slideIndexS);

function nextSlide(n) {
    showSlidesS(slideIndexS += n);
}

function openSymptoms(n) {
    var symptomSection = document.querySelector(".symptom");
    var symptomGrid = document.querySelector(".symptomsgrid");
    symptomSection.style.display = "flex";
    symptomGrid.style.display = "none";
    showSlidesS(slideIndexS = n);
}

function showSlidesS(n) {
    var i;
    var slidesS = document.getElementsByClassName("symp-desc");
    if (n > slidesS.length) {
        slideIndexS = 1
    }
    if (n < 1) {
        slideIndexS = slidesS.length
    }
    for (i = 0; i < slidesS.length; i++) {
        slidesS[i].style.display = "none";
    }
    slidesS[slideIndexS - 1].style.display = "flex";
}

function closeSymptoms() {
    var symptomSection = document.querySelector(".symptom");
    var symptomGrid = document.querySelector(".symptomsgrid");
    symptomGrid.style.display = "flex";
    symptomSection.style.display = "none";
}