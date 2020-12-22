function openMenu() {
    var menu = document.querySelector(".menu-list");
    var mob = document.querySelector(".mob");
    var ham = document.getElementById("menu-ham")
    var section = document.querySelectorAll("section");
    var symptomsgrid = document.querySelector(".symptomsgrid");
    var symptom = document.querySelector(".symptom");
    var registry = document.querySelector(".registry-form");
    var modal = document.querySelectorAll(".codesend");
    var prod = document.querySelector(".prod-sect");
    if (menu) {
        menu.classList.replace("menu-list", "mob");
        registry.style.display = "none";
        for (var i = 0; i < section.length; i++) {
            if (section[i].classList.contains("symptomsgrid")) {
                if (getComputedStyle(symptomsgrid).display === "flex") {
                    symptomsgrid.style.display = "none";
                } else {
                    if (getComputedStyle(symptom).display === "flex") {
                        symptom.style.display = "none";
                    }
                }
            } else {
                for (i = 0; i < section.length; i++) {
                    section[i].classList.add("d-none");
                }
            }
        }
        if (modal)
            for (var s = 0; s < modal.length; s++) {
                modal[s].style.display = "none";
            }
    } else if (mob) {
        mob.classList.replace("mob", "menu-list");
        for (var i = 0; i < section.length; i++) {
            if (section[i].classList.contains("symptomsgrid")) {
                symptomsgrid.style.display = "flex"
            } else {
                for (i = 0; i < section.length; i++) {
                    section[i].classList.remove("d-none");
                }
            }
        }
    }
    if (ham.src.match("ham")) {
        ham.src = "imgs/header/close-nav.png";

    } else {
        ham.src = "imgs/header/ham.png";

    }
}

function openCountry() {
    var country = document.querySelector(".country-block");
    var mob = document.querySelector(".mob");
    if (country.style.display === "flex") {
        country.style.display = "none";
        mob.classList.remove("margin");
    } else {
        country.style.display = "flex";
        mob.classList.add("margin");
    }
}

function openCountryD() {
    var country = document.querySelector(".country-block-d");
    if (country.style.display === "flex") {
        country.style.display = "none"
    } else {
        country.style.display = "flex"
    }
}

function openRegAlert() {
    var openfromsite = "alert";
    openRegister(openfromsite);
}

function openRegister(openfromsite) {
    var mod = document.querySelector(".registry-form");
    var alertext = document.querySelector(".registry-alert p");
    var section = document.querySelectorAll("section");
    var symptomsgrid = document.querySelector(".symptomsgrid");
    var symptom = document.querySelector(".symptom");
    var mob = document.querySelector(".mob");
    var modal = document.querySelectorAll(".codesend");
    var alertmobtext = document.querySelector(".alert-mob p");
    if (!mob) {
        for (var i = 0; i < section.length; i++) {
            if (!section[i].classList.contains("registry-form")) {
                if (section[i].classList.contains("symptomsgrid")) {
                    if (getComputedStyle(symptomsgrid).display === "flex") {
                        symptomsgrid.style.display = "none";
                    } else {
                        if (getComputedStyle(symptom).display === "flex") {
                            symptom.style.display = "none";
                        }
                    }
                } else {
                    for (i = 0; i < section.length; i++) {
                        section[i].classList.add("d-none");
                    }
                }
            }
        }
        for (var i = 0; i < modal.length; i++) {
            modal[i].style.display = "none";
        }
        mod.style.display = "flex";
        if (openfromsite === "alert") {
            if (screen.width > 900) {
                alertext.style.display = "flex";
            } else {
                alertmobtext.style.display = "flex";
            }
        } else {
            alertext.style.display = "none";
            alertmobtext.style.display = "none";
        }
    } else { return }
}

function closeRegAlert() {
    var closefromsite = "prod"
    closeReg(closefromsite)
}

function closeReg(closefromsite) {
    var mod = document.querySelector(".registry-form");
    var section = document.querySelectorAll("section");
    var symptomsgrid = document.querySelector(".symptomsgrid");
    var symptom = document.querySelector(".symptom");
    mod.style.display = "none";
    for (var i = 0; i < section.length; i++) {
        if (section[i].classList.contains("symptomsgrid")) {
            symptomsgrid.style.display = "flex";
            symptom.style.display = "none";
            return
        } else {
            section[i].classList.remove("d-none")
            return
        }
    }

}

function openProdAlert() {
    var fromsite = "prod";
    openRegister(fromsite);
}

function openAlertReg(fromsite) {
    var mod = document.querySelector(".registry-form");
    var alertext = document.querySelector(".registry-alert p");
    var clsalert = document.querySelector(".close-reg");
    mod.style.display = "flex";
    alertext.style.display = "flex";
    clsalert.classList.add("closealert");
    if (fromsite === "prod") {
        var product = document.querySelector(".prod-sect")
        var cod = document.querySelector("#generate-code");
        product.style.display = "none";
        cod.style.display = "none"
        if (screen.width <= 900) {
            var alert = document.querySelector(".alert-mob p").style.display = "flex";
        }
    }
}

function closeProAlert() {
    var closesite = "prod"
    closeAlertReg(closesite)
}

function closeAlertReg(closesite) {
    var mod = document.querySelector(".registry-form");
    var alertext = document.querySelector(".registry-alert p");
    var clsalert = document.querySelector(".close-reg");
    mod.style.display = "none";
    alertext.style.display = "none";
    clsalert.classList.remove("closealert");
    if (closesite === "prod") {
        var product = document.querySelector(".prod-sect")
        product.style.display = "block";
    }
}

function goBack() {
    window.history.back();
}