# Projet-VR


1. Description projet: Ce projet VR a été créé dans le cadre du cours de Réalité Virtuelle donné par Isaac Pante. Ce travail a pour but de tester des animations (surtout des éléments 2D pour ne pas surcharger), des sons et des lumières. La validation comprend cette scène ainsi que le modèle 3D inclus à l'intérieur de la scène.

2.Pour installer le projet, il faut mettre dans un seul dossier, les dossiers "Alvares", "PNG", "Sound" et "favicon_io". ainsi que le document HTML et JS. Le dossier "Références + Blender" comprend les fichiers permettant la création du modèle 3D, et le dossier "Step Modèls:VR", les images joints dans ce README.md.

3.Le script utilise principalement a-frame ainsi qu'un component miroir fonctionnant avec a-frame.

4. Pour les ressources utilisées:
   <Sections Crédits & Ressources

  Fichiers images et modèle 3D:
  Image de la lune par la NASA's Scientific Visualization Studio: https://svs.gsfc.nasa.gov/4720/
  Tous les fichiers png non mentionnés ainsi que le modèle 3D ont été créés expressément pour le projet.

  Sons & Musiques:
  Campagne son, sur le site de la Sonothèque: https://lasonotheque.org/campagne-s0097.html
  Magic in the air, par Geoff Harvey: https://pixabay.com/fr/music/titre-principal-magic-in-the-air-43177/-->
  Aquarium, de Saint Saëns, Abydos_Music : https://pixabay.com/fr/music/fantaisie-et-enfants-reveurs-aquarium-by-saint-saens-156733/

  Codes:
  Miroir component:
  Fern-aframe-components, par MRXZ: https://github.com/mrxz/fern-aframe-components/tree/main/mirror.
  Particule image component:
  A-Frame-Component-Image Particles, par Akbartus: https://github.com/akbartus/A-Frame-Component-Image-Particles.
  Physique:
  Aframe-physics-system, par n5ro: https://github.com/c-frame/aframe-physics-system.







4.
5. Certains éléments cliquables démarrent des musiques ou des sons. À l'origine, la scène devait faire office d'un jeu type fiction intéractive, mais je n'arrivais pas à mettre à jour les valeurs mis en textes.
Pour l'installation, il suffit d'avoir l'ensemble du dossier (doc HTML, JS, dossiers compris)

6. Scène
7. <img width="300" alt="Capture d’écran 2024-12-23 à 12 28 02" src="https://github.com/user-attachments/assets/1f19d853-3bec-4162-bbea-12b2a0f3394d" />





3. Modélisation 3D
La modélisation s'est faite sur Blender, en parallèle du code de la scène. Bien que les premiers essais ne soient pas inclus dans les documents, il s'agit de la troisième tentative de modélisation de l'objet.

En premier lieu, avant de se lancer à corps perdu dans Blender. Il fallait être sûr de ce que je comptais faire en tant que modèle et dans quel but. Comme explicité plus tôt, je n'ai pas pu faire d'élément d'intéraction au niveau du texte, ce qui empute en partie l'objectif de base. L'animation du modèle 3D était et est resté annexe.

<img width="300" alt="Alvarès" src="https://github.com/user-attachments/assets/38c801d7-6073-48c4-a941-0be03b498bba">
<img width="300" alt="Référence" src="https://github.com/user-attachments/assets/48335747-f40e-4927-af99-bf6a0bebbc61">
<img width="300" alt="Référence" src="https://github.com/user-attachments/assets/f96281ec-45ae-4ad9-a9c7-76d7f0f8b15d">


Par ailleurs, certains éléments ou détails n'ont pas été mis dans le modèle final, mais, dans les grandes lignes, ce n'est pas si grave.

Tout d'abord, la tête a été modélisée à partir d'une sphère assez dense en sommets. Cela permet d'éviter trop de complication pour faire les détails. Mise à part la partie concernant les cheveux et certains détails, tout a fait en symétrie sur l'axe des x, et en alternance entre le mode "sculpture" et "modélisation".

Par la suite, un croquis approximatif a été fait pour deviner les proportions que je devais atteindre avec les autres parties du corps. Pour les bras, les jambes et le tronc, deux cylindres ont été utilisés à chaque fois. À l'instar de la tête, des ajouts de sommets ont été nécessaires pour rendre la modification de l'objet plus souples. Quelques erreurs de symmétrie se sont créés, surtout aux bras à cette étape.

<img width="300" alt="Capture d’écran 2024-12-26 à 17.37.48" src="https://github.com/user-attachments/assets/90c55ec4-b0a8-4c7d-959a-e704ca01e50c">
<img width="300" alt="Capture d’écran 2024-12-26 à 17.38.01" src="https://github.com/user-attachments/assets/68a35b38-005f-4c0e-a668-14c82df90485">
<img width="300" alt="Capture d’écran 2024-12-30 à 12.10.52" src="https://github.com/user-attachments/assets/43f4fbce-185d-4291-a979-dbd734e5792b">

Par la suite vient l'étape des yeux et de la bouche. J'ai très vite mis de côté, puis abandonné la deuxième partie car je n'ai pas pu faire un bon rigging (qui sera expliqué à la toute fin). Quant aux yeux, un croquis a également été fait pour situer les choses. Les cils ont été fait dans un objet à part de la tête afin d'éviter de le modifier par inadvertance. Pour les yeux, j'ai d'abord voulu les faire directement sur l'objet contenant la tête, mais le rendu n'était pas concluant. De même qu'utiliser deux sphères rendaient l'ensemble étrange. Finalement, j'ai utilisé un plan en 2D et créer des orbites sur l'objet tête afin que ça matche mieux esthétiquement.
<img width="300" alt="Capture d’écran 2024-12-30 à 15.05.28" src="https://github.com/user-attachments/assets/544c0fa7-035e-4fdc-9e9c-5647a15829a2">


Un des essais infructueux:
<img width="300" alt="Capture d’écran 2024-12-31 à 23.59.14" src="https://github.com/user-attachments/assets/72119700-28bd-463b-b84e-8cf9b24f1fe8">

<img width="300" alt="Capture d’écran 2024-12-30 à 15 20 19" src="[https://github.com/user-attachments/assets/eb5f9cdc-80f7-4d54-bdfa-b1b2d7b6973b">
<img width="300" alt="Capture d’écran 2024-12-30 à 15 23 07" src="https://github.com/user-attachments/assets/25ba9a69-3811-4114-9e3b-adfc1c3a1a0e">

Une des versions presque définitif:
<img width="300" alt="CCapture d’écran 2025-01-07 à 15 17 38" src="https://github.com/user-attachments/assets/37540e2f-53d0-4402-82b2-fdf0f7d3c7e1">


Tous les éléments en lien avec la tenue ont été ajouté petit à petit et modélisé à part du modèle principal avant de fusionner les meshes en un seul objet. Le mode "peinture de sommets" a été utilisé pour coloriser tout le long du processus et aucune texture n'a été ajouté.

Concernant la partie en lien avec la tentative de rigging (squelette du modèle), il y a eu plusieurs complications. Tout d'abord, dans le mode "objet", "ajouter", puis "armature", j'ai mis le squelette par défaut "basic human".

<img width="300" alt="Capture d’écran 2025-01-08 à 16 26 16" src="https://github.com/user-attachments/assets/acb3968e-8880-4c5d-919f-55b1a1106d8b">

Après avoir aligné le squelette avec le modèle, il a fallu sélectionner l'objet 3D ainsi que le squelette pour les parenter avec des poids automatiques. Cependant, dû probablement aux éléments 3D sans lien avec le corps principal, cette étape a échoué. Il a donc fallu peindre manuellement les poids dans le mode dédié. C'était une étape nécessaire afin de retenter de parenter le squelette avec le modèle.

Peinture de poids, plus la zone est rouge, plus elle est sensible au mouvement.
<img width="523" alt="Capture d’écran 2025-01-15 à 16 38 59" src="https://github.com/user-attachments/assets/b75e5c30-2fe7-4ba4-8a66-94931038a3e7"/>

À partir de là, et une fois que le modèle suit les mouvements du squelette, on peut utiliser le rigging automatique ("generate rig" dans le sous-menu "données" de l'objet "metarig"). Techniquement, il fonctionne, mais il y a des éléments dont on ne souhaiterait aps qu'il bouge autant. Ce n'est que des suppositions, mais en complexifiant le rigging en prenant en compte les objets qui pendent (manteau, accessoires, cheveux, etc.), peut-être que ce souci pourrait être réglé. L'autre hypothèse est que certains éléments auraient dû être à part du modèle 3D principal afin de ne pas gêner certains mouvements.

![Uploading Enregistrement-de-l’écran-2025-01-15-à-16.44.45.gif…]()
<img width="616" alt="Capture d’écran 2025-01-14 à 01 36 51" src="https://github.com/user-attachments/assets/c48313a1-d6b6-45e0-9114-324d506af1b7" />
<img width="579" alt="Capture d’écran 2025-01-14 à 01 37 36" src="https://github.com/user-attachments/assets/b27c4a4c-5e15-4cb2-a146-6f98cc48f6e1" />
<img width="585" alt="Capture d’écran 2025-01-14 à 01 37 48" src="https://github.com/user-attachments/assets/035a9173-aae0-48fd-b5db-cb0d0b21a5e1" />
<img width="615" alt="Capture d’écran 2025-01-14 à 01 38 42" src="https://github.com/user-attachments/assets/1b57f938-bbce-4e3f-b24a-ab95e6a891b6" />

Avec plus de temps, peut-être que cela pourrait être corrigé, mais pour une première tentative, on va dire que c'est moins pire que cela pourrait être. 

4. Ce qui n'a pas pu ou pourrait être fait:
    


5. Section Copyright
