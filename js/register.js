document.addEventListener('invalid', (function() {
    return function(e) {
        e.preventDefault();
        validateForm();
    };
})(), true);

document.addEventListener(onchange, function(focus) {
    if (document.querySelector("select") !== "") {
        this.focus();
    }
});

function validateForm() {
    var name = document.forms["registryForm"]["name"].value;
    var lastname = document.forms["registryForm"]["lastname"].value;
    var gender = document.forms["registryForm"]["gender"].value;
    var idtypecc = document.forms["registryForm"]["CC"];
    var idtypece = document.forms["registryForm"]["CE"];
    var idnumber = document.forms["registryForm"]["idnumber"].value;
    var email = document.forms["registryForm"]["email"].value;
    var celphone = document.forms["registryForm"]["celphone"].value;
    var tyc = document.forms["registryForm"]["tyc"];
    var legalage = document.forms["registryForm"]["legalage"];
    var textformat = /^[a-zA-Z][a-zA-Z\s]*$/;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var errormesage = document.getElementsByClassName("errormesage");
    var errorgender = document.querySelector("#errorgender");
    var errortypeid = document.querySelector("#erroridtype");
    var textfield = document.querySelectorAll(".textfield");
    var selecttext = document.querySelector(".select");
    var checkterms = document.querySelectorAll(".checkterms");
    var idtype = document.querySelectorAll(".idtype");
    var count = 0;
    var toValidate = [name, lastname, idnumber, email, celphone];
    debugger
    // NOT EMPTY VALIDATION
    if (gender === "") {
        selecttext.classList.add("error");
        errorgender.innerHTML = "Seleccione el género"
            ++count
    } else {
        selecttext.classList.remove("error");
        errorgender.innerHTML = "&nbsp"
    }
    if (idtypecc.checked == false && idtypece.checked == false) {
        for (i = 0; i < idtype.length; i++) {
            idtype[i].classList.add("check-idtype");
            errortypeid.innerHTML = "Selecciones el tipo de documento"
                ++count
        }
    } else {
        for (i = 0; i < idtype.length; i++) {
            idtype[i].classList.remove("check-idtype");
            errortypeid.innerHTML = "&nbsp"
        }
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
    for (var i = 0; i < toValidate.length; i++) {
        if (toValidate[i] == "") {
            errormesage[i].innerHTML = "Campo obligatorio";
            textfield[i].classList.add("error");
            ++count
        }
        //TEXT FORMAT VALIDATION
        else if (i === 0) {
            if (textformat.test(name) == false) {
                errormesage[i].innerHTML = "Solo caracteres A-Z";
                textfield[i].classList.add("error");
                ++count
            } else {
                errormesage[i].innerHTML = "&nbsp";
                textfield[i].classList.remove("error");
            }
        }
        //TEXT FORMAT VALIDATION
        else if (i === 1) {
            if (textformat.test(lastname) == false) {
                errormesage[i].innerHTML = "Solo caracteres A-Z";
                textfield[i].classList.add("error");
                ++count
            } else {
                errormesage[i].innerHTML = "&nbsp";
                textfield[i].classList.remove("error");
            }
        }
        //ID LENGHT VALIDATION
        else if (i === 2) {
            if (idnumber.length < 7 || idnumber.length > 10) {
                errormesage[i].innerHTML = "Debe tener entre 7 y 10 números";
                textfield[i].classList.add("error");
                ++count
            } else {
                errormesage[i].innerHTML = "&nbsp";
                textfield[i].classList.remove("error");
            }
        }
        //EMAIL FORMAT VALIDATION
        else if (i === 3) {
            if (mailformat.test(email) == false) {
                errormesage[3].innerHTML = "Correo invalido";
                textfield[3].classList.add("error");
                ++count
            } else {
                errormesage[3].innerHTML = "&nbsp";
                textfield[3].classList.remove("error");
            }
        }
        //CELPHONE LENGHT VALIDATION
        else if (i === 4) {
            if (celphone.length !== 10) {
                errormesage[4].innerHTML = "Debe tener 10 números";
                textfield[4].classList.add("error");
                ++count
            } else {
                errormesage[4].innerHTML = "&nbsp";
                textfield[4].classList.remove("error");

            }
        } else {
            errormesage[i].innerHTML = "&nbsp";
            textfield[i].classList.remove("error");
        }
    }
    if (count > 0) {
        return false
    } else {
        return true
    }
}