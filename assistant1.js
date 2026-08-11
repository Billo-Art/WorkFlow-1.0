const abreviations = {
    "cv": "ca va",
    "bjr": "bonjour",
    "slt": "salut",
    "oky": "ok",
    "oki": "ok",
    "mnt": "maintenant",
    "tkt": "t'inquiete",
    "jsp": "je sais pas",
    "mdr": "rire"
};
const assistantIA = [

{
    question: "bonjour",
    reponse: "Bonjour 👋 ! Bienvenue sur WorkFlow."
},

{
    question: "comment réussir",
    reponse: "Le succès commence par la discipline et la persévérance."
},

{
    question: "merci",
    reponse: "Avec plaisir 😊 !"
},
{
    question: "qui es tu",
    reponse: "Je suis l'assistant IA de WorkFlow. Je suis là pour répondre à tes questions et t'encourager."
},

{
    question: "workflow",
    reponse: "WorkFlow est une application qui propose des citations inspirantes et un assistant IA."
},

{
    question: "bonne nuit",
    reponse: "Bonne nuit 🌙 ! Repose-toi bien et à demain."
},

{
    question: "bonjour",
    reponse: "Bonjour 👋 ! Heureux de te revoir sur WorkFlow."
},

{
    question: "bonsoir",
    reponse: "Bonsoir 🌙 ! Comment puis-je t'aider ?"
},

{
    question: "salut",
    reponse: "Salut 👋 ! Que puis-je faire pour toi aujourd'hui ?"
},

{
    question: "merci",
    reponse: "Avec plaisir 😊 !"

},

{
    question: "comment reussir",
    reponse: "Le succès vient de la discipline, de la patience et du travail régulier."
},

{
    question: "je suis triste",
    reponse: "Les moments difficiles passent. Continue d'avancer, un pas à la fois. ❤️"
},

{
    question: "motive moi",
    reponse: "N'abandonne jamais. Chaque petit effort d'aujourd'hui construit ton avenir. 🚀"
},
{
    question: "comment travailler",
    reponse: "Travaille avec régularité. Même 30 minutes par jour font une grande différence."
},

{
    question: "je suis fatigue",
    reponse: "Repose-toi un peu puis reprends. Le repos fait aussi partie de la réussite."
},

{
    question: "je veux apprendre",
    reponse: "Excellent choix ! Apprendre chaque jour te rapproche de tes objectifs."
},

{
    question: "comment apprendre",
    reponse: "Lis, pratique et sois patient. La progression vient avec la régularité."
},

{
    question: "donne moi une citation",
    reponse: "« Le succès appartient à ceux qui n'abandonnent jamais. »"
},

{
    question: "je suis heureux",
    reponse: "C'est une excellente nouvelle ! Continue à profiter de cette énergie positive. 😊"
},

{
    question: "qui a cree workflow",
    reponse: "WorkFlow a été créé par Mohamed Baldé."
},

{
    question: "quel est ton nom",
    reponse: "Je suis l'Assistant IA de WorkFlow."
},

{
    question: "bonne chance",
    reponse: "Merci ! Je te souhaite aussi beaucoup de réussite. 🍀"
},

{
    question: "au revoir",
    reponse: "Au revoir 👋 ! À bientôt sur WorkFlow."
},
{
    question: "comment devenir riche",
    reponse: "Commence par acquérir des compétences, travaille régulièrement et gère bien ton argent."
},

{
    question: "je suis perdu",
    reponse: "Prends le temps de définir un objectif. Un petit pas aujourd'hui vaut mieux que rester immobile."
},

{
    question: "je manque de motivation",
    reponse: "La discipline est plus forte que la motivation. Commence, même si tu n'en as pas envie."
},

{
    question: "comment avoir confiance en soi",
    reponse: "La confiance se construit en agissant et en progressant chaque jour."
},

{
    question: "qui est mohamed balde",
    reponse: "Mohamed Baldé est le créateur de WorkFlow."
},

{
    question: "quelle heure est il",
    reponse: "Je ne peux pas encore voir l'heure de ton appareil."
},

{
    question: "comment etre heureux",
    reponse: "Apprécie les petites choses, prends soin de toi et continue d'avancer."
},

{
    question: "je veux abandonner",
    reponse: "N'abandonne pas. Les plus grandes réussites arrivent souvent après les moments difficiles."
},

{
    question: "que fais tu",
    reponse: "Je réponds à tes questions et je t'accompagne sur WorkFlow."
},

{
    question: "bonne journee",
    reponse: "Merci ! Je te souhaite une excellente journée. ☀️"
},
{
    question: "bon apres midi",
    reponse: "Bon après-midi ! Continue à avancer vers tes objectifs."
},

{
    question: "bon weekend",
    reponse: "Bon week-end ! Profite-en pour te reposer et apprendre de nouvelles choses."
},

{
    question: "comment coder",
    reponse: "Commence par apprendre HTML, CSS et JavaScript, puis pratique régulièrement."
},

{
    question: "pourquoi apprendre",
    reponse: "Apprendre te permet de développer tes compétences et d'ouvrir de nouvelles opportunités."
},

{
    question: "je veux devenir developpeur",
    reponse: "Continue à pratiquer chaque jour. Chaque projet te fera progresser."
},

{
    question: "combien de citations",
    reponse: "WorkFlow contient plusieurs citations inspirantes et de nouvelles seront ajoutées régulièrement."
},

{
    question: "tu es intelligent",
    reponse: "Merci 😊 ! Je fais de mon mieux pour t'aider."
},

{
    question: "qui est ton createur",
    reponse: "L'assistant IA fait partie du projet WorkFlow créé par Mohamed Baldé."
},

{
    question: "je suis stresse",
    reponse: "Prends une pause, respire calmement et avance une étape à la fois."
},

{
    question: "aide moi",
    reponse: "Bien sûr ! Pose-moi ta question et je ferai de mon mieux pour t'aider."
},
{
    question: "je veux reussir",
    reponse: "La réussite demande de la discipline, de la patience et beaucoup de travail."
},

{
    question: "comment devenir meilleur",
    reponse: "Progresse un peu chaque jour. Les petits efforts produisent de grands résultats."
},

{
    question: "je suis fatigue de travailler",
    reponse: "Accorde-toi une pause, puis reprends avec énergie. L'équilibre est important."
},

{
    question: "quel est le secret du succes",
    reponse: "Le secret du succès est de ne jamais abandonner malgré les difficultés."
},

{
    question: "je veux changer ma vie",
    reponse: "Le changement commence par une décision, puis par de petites actions répétées."
},

{
    question: "donne moi un conseil",
    reponse: "Ne compare pas ton début au milieu du parcours des autres."
},

{
    question: "je peux y arriver",
    reponse: "Oui ! Avec de la persévérance et du travail, tu peux atteindre tes objectifs."
},

{
    question: "je suis decourage",
    reponse: "Le découragement est temporaire. Continue d'avancer, même à petits pas."
},

{
    question: "comment etre discipline",
    reponse: "Crée une routine et respecte-la chaque jour, même quand tu n'es pas motivé."
},

{
    question: "je veux etre heureux",
    reponse: "Cherche un équilibre entre tes objectifs, ta santé et les personnes qui comptent pour toi."
},

{
    question: "que signifie workflow",
    reponse: "WorkFlow représente l'idée d'avancer, de créer et de progresser chaque jour."
},

{
    question: "pourquoi travailler",
    reponse: "Le travail permet d'apprendre, de progresser et de construire son avenir."
},

{
    question: "je veux apprendre le code",
    reponse: "Commence par HTML, CSS et JavaScript, puis réalise de petits projets."
},

{
    question: "quel langage apprendre",
    reponse: "Pour le web, commence par HTML, CSS et JavaScript."
},

{
    question: "je veux creer un site",
    reponse: "Excellent choix ! Commence par une page simple, puis ajoute des fonctionnalités progressivement."
},

{
    question: "combien de temps pour apprendre",
    reponse: "Cela dépend de ta pratique. La régularité est plus importante que la vitesse."
},

{
    question: "je suis debutant",
    reponse: "Tout expert a commencé débutant. Continue à apprendre chaque jour."
},

{
    question: "comment rester motive",
    reponse: "Rappelle-toi pourquoi tu as commencé et avance un jour à la fois."
},

{
    question: "qui peut utiliser workflow",
    reponse: "Tout le monde peut utiliser WorkFlow pour trouver de l'inspiration et apprendre."
},

{
    question: "a bientot",
    reponse: "À bientôt 👋 ! Reviens quand tu veux, je serai là pour t'aider."
},
{
    question: "je suis heureux aujourd hui",
    reponse: "Je suis content pour toi 😊. Continue à profiter de cette belle énergie."
},

{
    question: "je suis en colere",
    reponse: "Prends quelques instants pour te calmer avant de prendre une décision."
},

{
    question: "comment gagner de l argent",
    reponse: "Développe des compétences utiles, travaille sérieusement et saisis les bonnes opportunités."
},

{
    question: "je veux creer une application",
    reponse: "Commence par un petit projet, puis ajoute des fonctionnalités progressivement."
},

{
    question: "quel est ton but",
    reponse: "Mon but est de répondre à tes questions et de t'aider à progresser."
},

{
    question: "je suis motive",
    reponse: "Excellent ! Utilise cette motivation pour passer à l'action dès maintenant."
},

{
    question: "comment devenir fort",
    reponse: "La force se construit grâce à la discipline, aux efforts et à la persévérance."
},

{
    question: "je veux etudier",
    reponse: "Très bonne décision ! Chaque heure d'étude est un investissement pour ton avenir."
},

{
    question: "bonne continuation",
    reponse: "Merci 😊 ! Je te souhaite également une excellente continuation."
},

{
    question: "comment atteindre mes objectifs",
    reponse: "Fixe un objectif clair, établis un plan et avance un peu chaque jour."
},
{
    question: "je veux devenir riche un jour",
    reponse: "Commence par apprendre, travailler intelligemment et gérer ton argent avec sagesse."
},

{
    question: "comment creer une entreprise",
    reponse: "Identifie un besoin, prépare un projet solide et avance étape par étape."
},

{
    question: "je suis fatigue mentalement",
    reponse: "Prends du temps pour te reposer. Ton bien-être est essentiel."
},

{
    question: "je veux etre le meilleur",
    reponse: "Cherche à devenir meilleur que la personne que tu étais hier."
},

{
    question: "quelle est la devise de workflow",
    reponse: "La devise de WorkFlow est : Créer, Développer, Réussir."
},

{
    question: "je crois en moi",
    reponse: "C'est une excellente base. Continue à agir avec confiance et persévérance."
},

{
    question: "je veux progresser",
    reponse: "Chaque petit progrès compte. Continue sans abandonner."
},

{
    question: "merci pour ton aide",
    reponse: "Avec grand plaisir 😊 ! Je suis toujours là pour t'aider."
},

{
    question: "que puis je faire aujourd hui",
    reponse: "Choisis une tâche importante et termine-la avant de passer à la suivante."
},

{
    question: "a demain",
    reponse: "À demain 👋 ! Passe une excellente journée."
},

{
    question: "je veux devenir ingenieur",
    reponse: "Travaille sérieusement, apprends les bases et pratique régulièrement."
},

{
    question: "je veux devenir informaticien",
    reponse: "Continue à apprendre la programmation et réalise des projets personnels."
},

{
    question: "je veux apprendre javascript",
    reponse: "Après HTML et CSS, JavaScript est un excellent choix pour créer des sites interactifs."
},

{
    question: "je veux apprendre html",
    reponse: "HTML est la base de toutes les pages web. Continue à pratiquer."
},

{
    question: "je veux apprendre css",
    reponse: "CSS permet de rendre un site beau et agréable à utiliser."
},

{
    question: "comment creer un projet",
    reponse: "Commence petit, ajoute des fonctionnalités progressivement et teste souvent."
},

{
    question: "quel est le meilleur conseil",
    reponse: "N'arrête jamais d'apprendre. Les connaissances sont un investissement pour toute la vie."
},

{
    question: "je veux etre fort mentalement",
    reponse: "La force mentale se construit en affrontant les difficultés avec calme et persévérance."
},

{
    question: "bonne soiree",
    reponse: "Bonne soirée 🌙 ! J'espère que ta journée s'est bien passée."
},

{
    question: "merci workflow",
    reponse: "Avec plaisir 😊 ! Merci d'utiliser WorkFlow."
},
{
    question: "qui est le createur de workflow",
    reponse: "Le créateur de WorkFlow est Mohamed Baldé."
},

{
    question: "pourquoi ne pas abandonner",
    reponse: "Parce que chaque effort te rapproche un peu plus de ton objectif."
},

{
    question: "comment rester concentre",
    reponse: "Élimine les distractions et concentre-toi sur une seule tâche à la fois."
},

{
    question: "je veux apprendre tous les jours",
    reponse: "C'est une excellente habitude. Même quelques minutes par jour font la différence."
},

{
    question: "comment organiser ma journee",
    reponse: "Prépare une liste de tâches et commence par la plus importante."
},

{
    question: "je veux changer",
    reponse: "Le changement commence aujourd'hui, avec une première petite action."
},

{
    question: "que faire quand j echoue",
    reponse: "Analyse ce qui n'a pas fonctionné, apprends de tes erreurs et recommence."
},

{
    question: "je crois en mon avenir",
    reponse: "Continue à avancer avec confiance. Ton avenir se construit chaque jour."
},

{
    question: "je veux reussir dans la vie",
    reponse: "Fixe-toi des objectifs, travaille avec discipline et ne cesse jamais d'apprendre."
},

{
    question: "au revoir workflow",
    reponse: "Au revoir 👋 ! Merci d'avoir utilisé WorkFlow. À très bientôt !"
}

];