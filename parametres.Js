// =======================================
// WorkFlow - Paramètres
// =======================================


// Changer le thème

function changerTheme(){


    document.body.classList.toggle("clair");


    localStorage.setItem(

        "theme",

        document.body.classList.contains("clair")
        ? "clair"
        : "sombre"

    );


}



// Supprimer les données

function supprimerDonnees(){


    const confirmation =
    confirm(
        "⚠️ Supprimer toutes tes citations favorites et tes likes ?"
    );



    if(confirmation){


        localStorage.removeItem("favoris");

        localStorage.removeItem("likes");


        alert(
            "✅ Données supprimées."
        );


    }


}



// Charger le thème sauvegardé

window.addEventListener("load", function(){


    const theme =
    localStorage.getItem("theme");



    if(theme === "clair"){


        document.body.classList.add("clair");


    }


});