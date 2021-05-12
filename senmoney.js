var tabNumero = ["777536462", "771301845", "771361048", "776362737"];
var tabSoldes = ["500000", "400000", "90000", "34000"];
var tabCodes = ["0000", "1111", "2222", "3333"];
var NrbeNUm = tabNumero.length;
var NumCournt;
let datas = [];
var rep;
var client;
const url = (choice) => {

        let uri = '';
        if (choice == 'fr') {
            uri = './Donnees_fr.txt'
        }break
        if (choice == 'en') {
            uri = './Donnees_En.txt'
        }break
        if (choice == 'wo') {
            uri = "./Donnees_Wo.txt"
        }break

        return uri
    }
    
const fileLangue = (path) => {
    $(function() {
        jQuery.get(path, function(data) {
            datas = data.split(';')



        })

    });
};
const getlang = (lang) => {
    const path = url(lang)
    fileLangue(path)
    document.getElementById('choix').style.display = 'none';
    document.getElementById('menu').style.display = '';
}

function setNumCournt() {
    NumCournt = document.getElementById('num').value;
}

function main() {
    menu()
}

function menu() {

    rep = window.prompt(
        datas[0] + '\n' +
        datas[1] + '\n' +
        datas[2] + '\n' +
        datas[3] + '\n' +
        datas[4] + '\n' +
        datas[5] + '\n'

    );
    if (rep == '1') {
        afficherSolde();
    }

    if (rep == '2') {
        transfertArgent();
    }
    if (rep == '3') {
        PaiementFacture();

    }
    if (rep == '4') {
        Options();
    }

}

function getCode() {
    var codeCournt;
    var code = window.prompt(datas[6]);
    for (var i = 0; i < tabNumero.length; i++) {

        if (NumCournt == tabNumero[i]) {
            if (code == tabCodes[i]) {
                codeCournt = tabCodes[i];
                break

            } else {
                var choix = window.confirm(datas[7]);
                if (choix == true) {
                    menu();
                }
            }

        }
    }
    return true;
}

function afficherSolde() {



    if (NumCournt == null) {

        alert(datas[8]);
    } else {
        var isGetCode = getCode()
    }
    for (var i = 0; i < tabNumero.length; i++) {
        if (NumCournt == tabNumero[i]) {
            alert(datas[9] + tabSoldes[i]);
        }
    }

}


function verifNumero() {
    client = prompt(datas[10]);

    for (var i = 0; i < tabNumero.length; i++) {
        if (NumCournt == client) {
            alert(datas[11]);
            menu();

        }
        if (client == tabNumero[i]) {
            break
        }
        if (tabNumero.length - 1 == i && client != tabNumero[i]) {

            alert(datas[12]);
            menu();
        }

    }

    return true;
}

function getSoldcli() {
    var solde;
    for (var i = 0; i < tabNumero.length; i++) {
        if (client == tabNumero[i]) {
            solde = tabSoldes[i];
            break
        }

    }
    return Number.parseInt(solde);
}

function setSoldcli(soldeactu) {
    var solde = prompt(datas[13]);
    if (Number.parseInt(solde) > 0) {

        return { soldeTotal: Number.parseInt(solde) + Number.parseInt(soldeactu), soldeTrans: Number.parseInt(solde) };
    } else {
        alert(datas[14]);
        menu();

    }

}

function transfertArgent() {
    var monttrans;

    verifNumero();
    var soleBenef = getSoldcli();
    var newsole = setSoldcli(soleBenef);
    getCode();

    if (window.confirm(datas[15] + newsole.soldeTrans + datas[16] + client)) {

        for (var i = 0; i < tabNumero.length; i++) {
            if (client == tabNumero[i]) {
                tabSoldes[i] = '' + newsole.soldeTotal;
                console.log(tabSoldes);

            }

        }
    } else {
        menu();
    }

}
