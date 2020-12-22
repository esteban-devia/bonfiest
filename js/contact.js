document.addEventListener('invalid', (function() {
    return function(e) {
        e.preventDefault();
        validateContactForm();
    };
})(), true);

function validateContactForm() {
    var name = document.forms["contactForm"]["contactName"].value;
    var lastname = document.forms["contactForm"]["contactLastname"].value;
    var email = document.forms["contactForm"]["contactEmail"].value;
    var celphone = document.forms["contactForm"]["contactCelphone"].value;
    var idtype = document.forms["contactForm"]["contactIdtype"].value;
    var idnumber = document.forms["contactForm"]["contactIdnumber"].value;
    var help = document.forms["contactForm"]["help"].value;
    var comment = document.forms["contactForm"]["comment"].value;
    var tyc = document.forms["contactForm"]["tycContact"];
    var legalage = document.forms["contactForm"]["legalageContact"];
    var textformat = /^[a-zA-Z][a-zA-Z\s]*$/;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var inputcontact = document.querySelectorAll(".textfieldcontact");
    var select = document.querySelectorAll(".selectcontact");
    var areafield = document.querySelector(".areatextfieldcontact");
    var errormesage = document.querySelectorAll(".errormesagecontact");
    var errorselect = document.querySelectorAll(".errorselectcontact");
    var errorcomment = document.querySelector(".errorcomment");
    var checkterms = document.querySelectorAll(".checkContactterms");
    var validateInput = [name, lastname, email, celphone, idnumber];
    var validateSelect = [idtype, help];
    var count = 0;
    // VALIDATES INPUT NOT EMPTY
    if (comment === "") {
        areafield.classList.add("error");
        errorcomment.innerHTML = "Campo obligatorio";
        ++count
    } else {
        areafield.classList.remove("error");
        errorcomment.innerHTML = "&nbsp;";
    }
    if (!tyc.checked) {
        checkterms[0].classList.add("error");
        ++count
    } else {
        checkterms[0].classList.remove("error");
    }
    if (!legalage.checked) {
        checkterms[1].classList.add("error");
        ++count
    } else {
        checkterms[1].classList.remove("error");
    }
    for (var i = 0; i < validateSelect.length; i++) {
        if (validateSelect[i] === "") {
            select[i].classList.add("error");
            errorselect[i].innerHTML = "Campo obligatorio";
            ++count
        } else {
            select[i].classList.remove("error");
            errorselect[i].innerHTML = "&nbsp;";
        }
    }
    for (var i = 0; i < validateInput.length; i++) {
        if (validateInput[i] === "") {
            inputcontact[i].classList.add("error")
            errormesage[i].innerHTML = "Campo obligatorio";
            ++count
        } else {
            if (i == 0) {
                if (textformat.test(name) == false) {
                    inputcontact[i].classList.add("error")
                    errormesage[i].innerHTML = "Solo caracteres A-Z";
                    ++count
                } else {
                    inputcontact[i].classList.remove("error");
                    errormesage[i].innerHTML = "&nbsp;";
                }
            }
            if (i == 1) {
                if (textformat.test(lastname) == false) {
                    inputcontact[i].classList.add("error")
                    errormesage[i].innerHTML = "Solo caracteres A-Z";
                    ++count
                } else {
                    inputcontact[i].classList.remove("error");
                    errormesage[i].innerHTML = "&nbsp;";
                }
            }
            if (i == 2) {
                if (mailformat.test(email) == false) {
                    errormesage[i].innerHTML = "Correo invalido";
                    inputcontact[i].classList.add("error");
                    ++count
                } else {
                    inputcontact[i].classList.remove("error");
                    errormesage[i].innerHTML = "&nbsp;";
                }
            } else if (i == 3) {
                if (celphone.length !== 10) {
                    errormesage[i].innerHTML = "Debe tener 10 números";
                    inputcontact[i].classList.add("error");
                    ++count
                } else {
                    inputcontact[i].classList.remove("error");
                    errormesage[i].innerHTML = "&nbsp;";
                }
            } else if (i == 4) {
                if (idnumber.length < 7 || idnumber.length > 10) {
                    errormesage[i].innerHTML = "Debe tener entre 7 y 10 números";
                    inputcontact[i].classList.add("error");
                    ++count
                } else {
                    inputcontact[i].classList.remove("error");
                    errormesage[i].innerHTML = "&nbsp;";
                }
            }

        }
    }
    if (count > 0) {
        return false
    } else {
        return true
    }

}