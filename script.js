// =======================================
// WorkFlow V3 - SCRIPT
// =======================================


// Liste des citations

const citations = [
    {
    texte: "« Chaque petit progrès construit un grand avenir. »",
    auteur: "WorkFlow",
    categorie: "💪 Motivation"
},

{
    texte: "« La discipline transforme les rêves en réalité. »",
    auteur: "WorkFlow",
    categorie: "🔥 Discipline"
},

{
    texte: "« Le succès appartient à ceux qui continuent malgré les difficultés. »",
    auteur: "WorkFlow",
    categorie: "🏆 Succès"
},

{
    texte: "« Apprendre aujourd'hui, c'est préparer la réussite de demain. »",
    auteur: "WorkFlow",
    categorie: "📚 Sagesse"
},

{
    texte: "« Chaque journée est une nouvelle occasion de devenir meilleur. »",
    auteur: "WorkFlow",
    categorie: "🌟 Réalité"
},
    {
        texte:"« L'homme ne vit pas seulement pour vivre ; il vit pour savoir pourquoi il vit. »",
        auteur:"WorkFlow"
    },

    {
        texte:"« Le succès commence par la volonté d'essayer. »",
        auteur:"WorkFlow"
    },

    {
        texte:"« Chaque jour est une nouvelle chance de devenir meilleur. »",
        auteur:"WorkFlow"
    },

    {
        texte:"« La connaissance est une lumière qui guide le chemin. »",
        auteur:"WorkFlow"
    },

    {
        texte:"« Les grandes réussites commencent par de petits pas. »",
        auteur:"WorkFlow"
    },

    {
        texte:"« Croire en soi est le premier pas vers la réussite. »",
        auteur:"WorkFlow"
    },

    {
        texte:"« La discipline transforme les rêves en réalité. »",
        auteur:"WorkFlow"
    },

    {
        texte:"« Chaque difficulté est une occasion de grandir. »",
        auteur:"WorkFlow"
    }

];


// Variables

let nombreLikes = Number(localStorage.getItem("likes")) || 0;

let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

let derniereCitation = -1;


// Afficher les likes au chargement

document.getElementById("likes").textContent = nombreLikes;

document.getElementById("totalLikes").textContent = nombreLikes;

document.getElementById("totalCitations").textContent = citations.length;

document.getElementById("totalFavoris").textContent = favoris.length;



// =======================================
// Nouvelle citation
// =======================================


function nouvelleCitation(){

    let nombre;


    do{

        nombre = Math.floor(Math.random()*citations.length);

    }
    while(nombre === derniereCitation);


    derniereCitation = nombre;


    const citationElement = document.getElementById("citation");
const auteurElement = document.getElementById("auteur");


citationElement.style.opacity = 0;
auteurElement.style.opacity = 0;


setTimeout(function(){

    citationElement.textContent =
    citations[nombre].texte;


    auteurElement.textContent =
    "— " + citations[nombre].auteur;


    citationElement.style.opacity = 1;
    auteurElement.style.opacity = 1;


},300);
}

// =======================================
// LIKES
// =======================================


function ajouterLike(){

    nombreLikes++;


    document.getElementById("likes").textContent = nombreLikes;

    document.getElementById("totalLikes").textContent = nombreLikes;


    localStorage.setItem(
        "likes",
        nombreLikes
    );

}



// =======================================
// FAVORIS
// =======================================


function ajouterFavori(){

    const citation =
    document.getElementById("citation").textContent;


    const auteur =
    document.getElementById("auteur").textContent;



    const favori = {

        texte:citation,

        auteur:auteur

    };



    const existe = favoris.some(

        f => f.texte === citation

    );



    if(!existe){


        favoris.push(favori);


        localStorage.setItem(

            "favoris",

            JSON.stringify(favoris)

        );


        document.getElementById("totalFavoris").textContent =
        favoris.length;


        alert("⭐ Citation ajoutée aux favoris !");


    }

    else{


        alert("⚠️ Cette citation est déjà dans vos favoris.");

    }

}




// =======================================
// COPIER
// =======================================


function copierCitation(){


    const texte =
    document.getElementById("citation").textContent;



    navigator.clipboard.writeText(texte);



    alert("📋 Citation copiée !");


}




// =======================================
// PARTAGER
// =======================================


function partagerCitation(){


    const texte =
    document.getElementById("citation").textContent;



    if(navigator.share){


        navigator.share({

            title:"WorkFlow",

            text:texte

        });


    }

    else{


        alert("📤 Partage non disponible sur cet appareil.");

    }


}

// =======================================
// COMMENTAIRES
// =======================================


function ajouterCommentaire(){


    const commentaire = prompt(
        "💬 Écris ton commentaire :"
    );



    if(commentaire && commentaire.trim() !== ""){


        const nouveauCommentaire =
        document.createElement("p");



        nouveauCommentaire.textContent =
        "💬 " + commentaire;



        document.getElementById(
            "listeCommentaires"
        ).appendChild(nouveauCommentaire);


    }


}




// =======================================
// RECHERCHE
// =======================================


function rechercherCitation(){


    const recherche =
    document.getElementById("recherche")
    .value
    .toLowerCase();



    const resultat =
    citations.find(

        citation =>

        citation.texte
        .toLowerCase()
        .includes(recherche)

    );



    if(resultat){


        document.getElementById("citation")
        .textContent =
        resultat.texte;



        document.getElementById("auteur")
        .textContent =
        "— " + resultat.auteur;


    }

    else{


        alert("❌ Aucune citation trouvée.");

    }


}




// =======================================
// CATEGORIES
// =======================================


function afficherCategorie(categorie){


    alert(
        "📂 Catégorie sélectionnée : "
        + categorie
    );


}



// =======================================
// NEWSLETTER
// =======================================


function inscriptionNewsletter(){


    const email =
    document.getElementById("email").value;



    if(email.trim() !== ""){


        alert(
            "✅ Inscription réussie : "
            + email
        );


    }

    else{


        alert(
            "⚠️ Entre ton adresse e-mail."
        );


    }


}

// =======================================
// CHARGEMENT AUTOMATIQUE
// =======================================


window.addEventListener("load", function(){


    // Afficher une citation automatiquement

    nouvelleCitation();



    // Actualiser les statistiques


    document.getElementById("totalLikes").textContent =
    nombreLikes;



    document.getElementById("totalFavoris").textContent =
    favoris.length;



});




// =======================================
// SAUVEGARDE FAVORIS
// =======================================


function mettreAJourFavoris(){


    localStorage.setItem(

        "favoris",

        JSON.stringify(favoris)

    );


    document.getElementById("totalFavoris").textContent =
    favoris.length;


}




// =======================================
// PROTECTION SI ELEMENT ABSENT
// =======================================


function verifierElement(id){


    const element =
    document.getElementById(id);



    if(!element){

        console.log(
            "Élément manquant : " + id
        );

        return false;

    }


    return true;

}