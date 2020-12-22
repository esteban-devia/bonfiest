function openVideo() {
    var openV = document.querySelector(".video");
    openV.style.display = "block";
}

function closeVideo() {
    var closeV = document.querySelector(".video");
    closeV.style.display = "none";
    stopVideo(closeV);
}

function stopVideo(modal) {
    var currentIframe = modal.querySelector('.video iframe');
    currentIframe.src = currentIframe.src;
}

function openModal() {
    var mod = document.querySelector("#generate-code");
    var main = document.querySelector(".prod-sect");

    if (screen.width > 900) {
        mod.style.display = "flex";
        main.classList.add("d-none");
    } else {
        if (screen.height < 600) {
            mod.style.display = "contents";
        } else {
            main.classList.add("d-none");
        }
        mod.style.display = "flex";
    }
}

function closeModal() {
    var mod = document.querySelector("#generate-code");
    var main = document.querySelector(".prod-sect");
    mod.style.display = "none";
    main.classList.remove("d-none");
}