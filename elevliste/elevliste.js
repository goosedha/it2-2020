// @ts-check
class Elev {
    fornavn = "";
    etternavn = "";
    adresse = "";
    klasse = "";
    kontaktlerar = "";
}

const elevListe = [];



function setup() {
    const divElever = document.getElementById("elever");
    const divFunnet = document.getElementById("funnet");
    // forklarer vs-code at inpFornavn osv  er et HTMLInputElement, ikke et vanlig HTMLElement
    // slipper da å skrive // @ts-ignore alle plasser hvor jeg bruker .value
    const inpFornavn =      /**  @type {HTMLInputElement} */ (document.getElementById("fornavn"));
    const inpEtternavn =    /**  @type {HTMLInputElement} */ (document.getElementById("etternavn"));
    const inpAdresse =      /**  @type {HTMLInputElement} */ (document.getElementById("adresse"));
    const inpKlasse =       /**  @type {HTMLInputElement} */ (document.getElementById("klasse"));
    const inpKontaktlerar = /**  @type {HTMLInputElement} */ (document.getElementById("kontaktlerar"));
    const inpLetefelt =     /**  @type {HTMLInputElement} */ (document.getElementById("letefelt"));

    const btnLagre = document.getElementById("lagre");
    btnLagre.addEventListener("click", lagreElev);

    const btnFinn = document.getElementById("finn");
    btnFinn.addEventListener("click", finnElev);

    function finnElev() {
        const navn = inpLetefelt.value;
        const elev = _finnElev(navn);
        if (elev) {
            divFunnet.innerHTML =
                elev.fornavn + " "
                + elev.adresse + "<br>";
        }
    }

    /**
     * Søker etter elev med .navn === navn
     * @param {string} navn
     * @returns {null|object}  null dersom ingen funnet
     */
    function _finnElev(navn) {
        const antall = elevListe.length;
        for (let i = 0; i < antall; i += 1) {
            const elev = elevListe[i];
            if (elev.etternavn.includes(navn)) {
                return elev;
            }
        }
        return null;
    }

    function lagreElev() {
        const fornavn = inpFornavn.value;
        const etternavn = inpEtternavn.value;
        const adresse = inpAdresse.value;
        const klasse = inpKlasse.value;
        const kontaktlerar = inpKontaktlerar.value;
        // må ha minst gyldig fornavn
        if (fornavn === "") {
            alert("Skriv ett gyldig navn");
            return;
        }
        const elev = new Elev();
        elev.fornavn = fornavn;
        elev.etternavn = etternavn;
        elev.adresse = adresse;
        elev.klasse = klasse;
        elev.kontaktlerar = kontaktlerar;
        elevListe.push(elev);
        visElever();
    }

    /**
     * 
     */
    function visElever() {
        let s = "";
        const antall = elevListe.length;
        // lager en liste med elever
        for (let i = 0; i < antall; i += 1) {
            const elev = elevListe[i];
            s += elev.fornavn + " " + elev.etternavn + "<br>";
        }
        divElever.innerHTML = s;
    }
}