//Liste des fonctions dans l'ordre:
//1.Génération des étoiles
//2.Génération au hasard des arbres

//3.Tentative de code pour générer des événements de dialogues


//Fonction afin de généréer les étoiles
function créationEtoiles() {
  const étoiles = document.querySelector("#étoiles"); //id de l'entité a-sphere servant aux étoiles
  
  const radius = 100;
  const nombre = 3500;
  
  for (let i = 0; i < nombre; i++) {
    const étoileseule = document.createElement("a-sphere"); //On pourrait remplacer le a-sphere par un octaèdre ou une étoile en 3D
    const x = Math.random() * 2 - 1; // Initial 2 - 1 --> Augmenter distance visibilité 7-6
    const y = Math.random() * 2 - 1; // --> Augmenter distance visibilité 7-6
    const z = Math.random() * 2 - 1; // --> Augmenter distance visibilité 7-6

    const taille = Math.random() * 0.2 + 0.05; // Taille de l'étoile
    const lumière = Math.random() * 12; // Brillance de l'étoile

    étoileseule.setAttribute("position", {
      x: (x) * radius,
      y: (y) * radius,
      z: (z) * radius,
    });

    //Couleur au hasard
    function randomColorMaterial() {
    const matériaux = [
    { emissive: "cyan", emissiveIntensity: 0.8 },
    { emissive: "salmon", emissiveIntensity: 0.8 },
    { emissive: "pink", emissiveIntensity: 0.8 },        
    { emissive: "red", emissiveIntensity: 0.8 },
    { emissive: "yellow", emissiveIntensity: 0.8 },
    { emissive: "lightgreen", emissiveIntensity: 0.8 },
    { emissive: "royalblue", emissiveIntensity: 0.8 },
    { emissive: "orange", emissiveIntensity: 0.8 },
    { emissive: "green", emissiveIntensity: 0.8 },
    { emissive: "blue", emissiveIntensity: 0.8 },
    { emissive: "purple", emissiveIntensity: 0.8 },
    { emissive: "lightpurple", emissiveIntensity: 0.8 },
    { emissive: "white", emissiveIntensity: 0.8 }

    ];
    return matériaux[Math.floor(Math.random() * matériaux.length)];
    }

    //Attributs
    étoileseule.setAttribute("radius", taille);
    étoileseule.setAttribute("color",`#FFFFFF`);
    étoileseule.setAttribute("opacity", lumière);
    étoileseule.setAttribute("material", randomColorMaterial());

    étoiles.appendChild(étoileseule);
  }
}

// Appeler la fonction pour générer les étoiles
créationEtoiles();






//Arbres et verdures au hasard --> code similaire au précédent
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Liste des images PNG qu'on souhaite inclure.
//"PNG/Pétales.png",
const images = [
    "PNG/Arbrebleu.png",
    "PNG/Buisson.png",
    "PNG/Cerisier.png",
    "PNG/Cerisierpetit.png",
    "PNG/Fleursol.png",
    "PNG/nuge.png",
    "PNG/pink-cherry-blossom-tree-with-transparent-background-for-digital-design-and-art-png.png",
    "PNG/pngtree-bush-top-view-a-png-image_7109061.png",
    "PNG/pngtree-lilac-shrubs-png-image_8877161.png",
    "PNG/Rhodendindron.png",
    "PNG/Sapin.png",
    "PNG/Sapinvert.png",
    "PNG/Saulepleureur.png",
    "PNG/unnamed.png",
];

// Nombre d'images à afficher --> vu qu'ils se chevauchent facilement, en mettre moins est généralement mieux.
const nombrearbre = 50;

for (let i = 0; i < nombrearbre; i++) {
  const img1 = document.createElement("a-image");

  function getRandomColor() {
    const couleurs = ["pink", "blue", "cyan", "royalblue", "magenta", "purple"];
    const hasard = Math.floor(Math.random() * couleurs.length);
    return couleurs[hasard];
  }
  const hasardcouleur = getRandomColor();

  // Sélection d'images prises au hasard
  const source = images[getRandomInt(0, images.length - 1)];
  img1.setAttribute("src", `url(${source})`);
  
  const xPos = getRandomInt(-200, 200);
  const yPos = getRandomInt(0, 20); 
  const zPos = getRandomInt(500, -500);

  // Choix des attributs et position

    img1.setAttribute("position", `${xPos} ${yPos} ${zPos}`);

    img1.setAttribute("height", "60");
    img1.setAttribute("width", "60");
    img1.setAttribute("alt", "fond");
    img1.setAttribute("material", "roughness: 0.5; metalness: 0; opacity: 0.5");

    img1.setAttribute("rotation", "0 0 0"); //Pour la première image, la seconde aura 90 degrès de décalage
    img1.setAttribute("animation", "property : scale; to : 1.025 1 1.025; loop : true; dur : 1000; dir : alternate;");
    img1.setAttribute("color", hasardcouleur); 
    //img1.setAttribute("rotation", `${getRandomInt(0, 360)} ${getRandomInt(0, 360)} ${getRandomInt(0, 360)}`); --> si rotation était au hasard

  document.querySelector("#scene").appendChild(img1);

 // Suite avec la deuxième image
 const img2 = document.createElement("a-image");

 //Attributs et position
    img2.setAttribute("src", `url(${source})`);
    img2.setAttribute("position", `${xPos} ${yPos} ${zPos}`);
    img2.setAttribute("height", "60");
    img2.setAttribute("width", "60");
    img2.setAttribute("alt", "fond");
    img2.setAttribute("material", "roughness: 0.5; metalness: 0; opacity: 0.5"); 
    img2.setAttribute("rotation", "0 90 0");  // Rotation de 90 sur l'axe y.
    img2.setAttribute("animation", "property : scale; to : 1.025 1 1.025; loop : true; dur : 1000; dir : alternate;");
    img2.setAttribute("color", hasardcouleur); 

 // Ajouter la deuxième image à la scène
 document.querySelector("#scene").appendChild(img2);

}




//FONCTION QUI NE FONCTIONNE PAS

//Fonction afin de mettre à jour le texte
let cliqueTexte = "Texte initial"; // Le texte qui va se mettre à jour au fur et à mesure

const dynamicText = document.querySelector("#Dialogue");
const perso = document.querySelector("#Perso");

//Élément intéractifs et qui changent les dialogues
const moon = document.querySelector("#The lost Moon");

// Fonction pour mettre à jour le texte
const màj = () => {
    if (compteur == 0) {
    clique + 1;
    clique.setAttribute("value", "Mise à jour du texte" )
    dynamicText.setAttribute("value", cliqueTexte);
  } else {
    clique += 0; //N'ajoute plus de texte, mais à voir comment remettre à zéro:  ==0?
  }
    if (clique == 1) {
      clique.setAttribute("value", "Clic 1." ) //Bien vérifier variables "esthétiques" pour que toute la longueur du texte soit lisible.
    if (clique == 2) {
      clique.setAttribute("value", "Click 2.")
    }
    if (moon.attributes("on", "click")
      
      ) { //Si le joueur clique sur la lune et donc, démarre l'événement de son...
      clique == 5 //le clic vaut 5
      clique.setAttribute("value", "Click 5")
    }
    if (clique == 6) {
      clique.setAttribute("value", "Test click 6")
    }

    if (clique == 3) {
      clique.setAttribute("value", "Test click 3.")
    }

    else if (clickText == 4) {
      clique.setAttribute("value", "[Fin du dialogue]")
      clique == 0 //Remise à zéro du texte. --> se répète en boucle, mais à voir comment l'update après une action
    }
    }
}
perso.addEventListener("click", () => {
    màj();
});

