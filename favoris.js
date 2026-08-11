// =======================================
// WorkFlow - Favoris
// =======================================

let favoris = JSON.parse(
    localStorage.getItem("favoris")
) || [];


const listeFavoris = document.getElementById("listeFavoris");


afficherFavoris();


// =======================================
// Afficher les favoris
// =======================================

function afficherFavoris(){

    listeFavoris.innerHTML = "";


    if(favoris.length === 0){

        listeFavoris.innerHTML = `
            <p>⭐ Aucune citation enregistrée.</p>
        `;

        return;

    }


    favoris.forEach(function(favori,index){

        const carte = document.createElement("div");

        carte.className = "carte-citation";


        carte.innerHTML = `

            <p>${favori.texte}</p>

            <h3>${favori.auteur}</h3>

            <button onclick="supprimerFavori(${index})">

                🗑️ Supprimer

            </button>

        `;


        listeFavoris.appendChild(carte);

    });

}



// =======================================
// Supprimer un favori
// =======================================

function supprimerFavori(index){

    favoris.splice(index,1);

    localStorage.setItem(

        "favoris",

        JSON.stringify(favoris)

    );

    afficherFavoris();

}