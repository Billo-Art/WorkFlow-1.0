// ======================================================
// WorkFlow Assistant IA
// Version Premium
// ======================================================

// Zone de discussion

const chatBox = document.getElementById("chatBox");

const input = document.getElementById("question");

const boutonEnvoyer = document.getElementById("envoyer");

const typing = document.getElementById("typingIndicator");

const boutonNouvelleConversation =
document.getElementById("nouvelleConversation");

// Historique

let conversation = JSON.parse(

    localStorage.getItem("workflowConversation")

) || [];

// ============================================
// Ajouter un message
// ============================================

function ajouterMessage(auteur, texte){

    const message = document.createElement("div");

    message.className =
    auteur === "user"
    ? "message user"
    : "message ia";

    message.innerHTML = `

        <div class="message-avatar">

            ${auteur === "user" ? "👤" : "🤖"}

        </div>

        <div class="message-bulle">

            <h4>

                ${auteur === "user"
                ? "Toi"
                : "Assistant IA"}

            </h4>

            <p>${texte}</p>

            <span class="heure">

                ${heureActuelle()}

            </span>

        </div>

    `;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;

}
// ============================================
// Heure actuelle
// ============================================

function heureActuelle(){

    const maintenant = new Date();

    return maintenant.toLocaleTimeString("fr-FR",{

        hour:"2-digit",

        minute:"2-digit"

    });

}

// ============================================
// Sauvegarder
// ============================================

function sauvegarderConversation(){

    localStorage.setItem(

        "workflowConversation",

        JSON.stringify(conversation)

    );

}

// ============================================
// Envoyer un message
// ============================================

function envoyerMessage(){

    const texte = input.value.trim();

    if(texte === "") return;

    ajouterMessage("user", texte);

    conversation.push({

        auteur:"user",

        texte:texte

    });

    sauvegarderConversation();

    input.value = "";

    typing.style.display = "flex";

    setTimeout(function(){

        typing.style.display = "none";

        const reponse = reponseIA(texte);

        ajouterMessage("ia", reponse);

        conversation.push({

            auteur:"ia",

            texte:reponse

        });

        sauvegarderConversation();

    },1200);

}

// ============================================
// Bouton Envoyer
// ============================================

boutonEnvoyer.addEventListener(

    "click",

    envoyerMessage

);

// ============================================
// Touche Entrée
// ============================================

input.addEventListener(

    "keydown",

    function(e){

        if(e.key==="Enter"){

            envoyerMessage();

        }

    }

);

// ============================================
// Réponses de l'Assistant IA
// ============================================

function reponseIA(message){

    const texte = message.toLowerCase();

    if(texte.includes("bonjour") || texte.includes("salut")){

        return "👋 Bonjour ! Je suis l'Assistant IA de WorkFlow. Comment puis-je t'aider aujourd'hui ?";

    }

    if(texte.includes("ça va") || texte.includes("ca va")){

        return "😊 Je vais très bien, merci ! J'espère que toi aussi.";

    }

    if(texte.includes("merci")){

        return "❤️ Avec plaisir ! Je suis là pour t'aider.";

    }

    if(texte.includes("citation")){

        return "🌟 La discipline transforme les rêves en réalité.";

    }

    if(texte.includes("informatique")){

        return "💻 L'informatique est un domaine immense : programmation, réseaux, cybersécurité, IA, développement web et bien plus.";

    }

    if(texte.includes("html")){

        return "📄 HTML permet de construire la structure d'une page web.";

    }

    if(texte.includes("css")){

        return "🎨 CSS sert à rendre un site beau avec les couleurs, les animations et la mise en page.";

    }

    if(texte.includes("javascript")){

        return "⚡ JavaScript rend un site interactif : boutons, animations, IA, jeux et bien plus.";

    }

    if(texte.includes("workflow")){

        return "🚀 WorkFlow est ton projet. Ensemble, nous le faisons évoluer vers une application moderne.";

    }

    if(texte.includes("openai") || texte.includes("chatgpt")){

        return "🤖 ChatGPT est développé par OpenAI et peut aider à programmer, apprendre et résoudre des problèmes.";

    }

    return "🤖 Je comprends ton message. Cette version de WorkFlow IA est en cours de développement et deviendra encore plus intelligente.";
}
// ============================================
// Charger l'historique
// ============================================

function chargerConversation(){

    chatBox.innerHTML = "";

    conversation.forEach(function(message){

        ajouterMessage(

            message.auteur,

            message.texte

        );

    });

}

// ============================================
// Nouvelle conversation
// ============================================

boutonNouvelleConversation.addEventListener(

    "click",

    function(){

        if(confirm(

            "🗑️ Voulez-vous vraiment supprimer la conversation ?"

        )){

            conversation = [];

            sauvegarderConversation();

            chatBox.innerHTML = "";

            ajouterMessage(

                "ia",

                "👋 Bonjour ! La conversation a été réinitialisée. Comment puis-je t'aider ?"

            );

        }

    }

);

// ============================================
// Chargement automatique
// ============================================

window.addEventListener(

    "load",

    function(){

        if(conversation.length > 0){

            chargerConversation();

        }

    }

);

// ============================================
// Boutons de suggestions
// ============================================

const suggestions = document.querySelectorAll(".suggestion");

suggestions.forEach(function(bouton){

    bouton.addEventListener(

        "click",

        function(){

            input.value = bouton.textContent.trim();

            envoyerMessage();

        }

    );

});

// ============================================
// Focus automatique
// ============================================

window.addEventListener(

    "load",

    function(){

        input.focus();

    }

);

// ============================================
// Animation du bouton Envoyer
// ============================================

input.addEventListener(

    "input",

    function(){

        if(input.value.trim() !== ""){

            boutonEnvoyer.style.opacity = "1";

            boutonEnvoyer.style.transform = "scale(1.05)";

        }

        else{

            boutonEnvoyer.style.opacity = ".8";

            boutonEnvoyer.style.transform = "scale(1)";

        }

    }

);

// ============================================
// Défilement automatique
// ============================================

function descendreChat(){

    chatBox.scrollTop = chatBox.scrollHeight;

}

// ============================================
// Afficher le message de bienvenue
// ============================================

if(conversation.length === 0){

    ajouterMessage(

        "ia",

        "👋 Bonjour ! Je suis l'Assistant IA de WorkFlow. Pose-moi une question sur l'informatique, les études, la motivation ou ton projet WorkFlow."

    );

}

// ============================================
// Sécurisation
// ============================================

if(!chatBox){

    console.error(

        "Erreur : élément #chatBox introuvable."

    );

}

if(!input){

    console.error(

        "Erreur : élément #question introuvable."

    );

}

if(!boutonEnvoyer){

    console.error(

        "Erreur : élément #envoyer introuvable."

    );

}

// ============================================
// Démarrage
// ============================================

document.addEventListener(

    "DOMContentLoaded",

    function(){

        if(input){

            input.focus();

        }

        descendreChat();

    }

);

console.log(

    "✅ WorkFlow Assistant IA chargé avec succès."

);