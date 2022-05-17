export interface Activity {
  name: string;
  hours: number;
  description: string;
  thoughts: string;
  url: string;
}

export class Category {
  theme: string;
  private activities: Activity[];

  constructor(theme: string, activities: Activity[]) {
    this.theme = theme;
    this.activities = activities;
  }

  get_activities() {
    return [...this.activities];
  }

  get real_hours() {
    return this.activities.map((a) => a.hours).reduce((a, b) => a + b);
  }
  get hours() {
    return Math.min(this.real_hours, 10);
  }
}

export const categories = [
  new Category("Capture The Flag", [
    {
      name: "Cyber Security Challenge Belgium",
      description: "CTF organisé pour les étudiants belge par la défense",
      thoughts: `
        Le CSCBE est un chouette évennement qui m'a demander beaucoup de réflexions, de logique.
        C'est aussi un moment où j'ai pu rencontrer d'autres personnes ayant la même passion, mais aussi des personnes dont c'est leur travail.
        J'ai appris énormément sur la cyber-sécurité, tout en m'amusant.
      `,
      url: "src/assets/cscbe.jpg",
      hours: 30,
    },
    {
      name: "CTEPHEC",
      description: "CTF organisé à l'EPHEC par des étudiants de 3ème année",
      thoughts: `
        Le tout premier CTF auquel j'ai participé. L'évenement m'a permis de m'initier à la cyber-sécurité, dont j'ai retenu beaucoup de choses.
        J'ai appris à regarder les problèmes sous d'autres angles et d'ainsi trouver la solution plus éfficacement.
      `,
      url: "src/assets/cteph.jpg",
      hours: 15,
    },
  ]),
  new Category("Conférences", [
    {
      name: "Dev Day",
      description:
        "Le Dev Day est un évenement annuel créé par les déveleppeurs, pour les développeurs",
      thoughts: `
        Le DevDay m'a non seulement appris à mieux utiliser mon éditeur de texte, mais aussi à travailler plus intélligemment et plus éfficacement.
        J'ai également pris connaissance des nouvelles technologies, que j'ai pu utiliser lors de mes différents projets.
      `,
      url: "src/assets/devday.jpg",
      hours: 10,
    },
  ]),
  new Category("Hackathon", [
    {
      name: "Hacktoberfest",
      description:
        "Hacktoberfest est un hackaton annuel célebrant l'Open Source en encourageant la contribution aux programmes Open Source",
      thoughts: `
        L'Hacktoberfest m'a permis de contribuer à des projets Open-Source, mais j'ai également appris à utiliser des outils de collaborations.
        J'ai fait connaissance avec des communautés de Softwares Open-Source, avec lesquelles j'ai discuté. Ces échanges fûrent enrichissants,
        j'ai beaucoup appris sur l'Open Source et les outils permettant d'y contribuer.
      `,
      url: "src/assets/hacktoberfest.jpg",
      hours: 10,
    },
  ]),
  new Category("Developpement", [
    {
      name: "CodinGame",
      description:
        "Plateforme proposant des challenges de programmation pour améliorer ses compétances de dev",
      thoughts: `
        CodinGame m'a permis de beaucoup pratique la programmation tout au long de mon cursus.
        J'ai non seulement appris des langages de programmation, mais je me suis également entraîné intellectuellement à résoudre des problèmes avec du code.
      `,
      url: "src/assets/codingame.jpg",
      hours: 80,
    },
  ]),
  new Category("Formations", [
    {
      name: "Python Core",
      description:
        "Cours Python apprennant en profondeur le langage de façon interactive",
      thoughts: `
        J'ai pris ce cours Python avant d'avoir les cours de l'EPHEC sur le sujet. J'y ai appris les bases du langage,
        mais aussi des fonctionnalitées avancées Python qui me sont utiles tous les jours lorsque je programme.
      `,
      url: "src/assets/python.pdf",
      hours: 10,
    },
  ]),
  new Category("Data Science", [
    {
      name: "Data Science",
      description: "Apprentissage du Data Science sur OpenClassRoom",
      thoughts: `
        Ce cours m'a permis d'apprendre d'avantage sur les librairies utilisées dans la data sciences.
        J'ai appris à utiliser ces libraires très utiles, et trouver des applications au-delà de la sciences des données.
      `,
      url: "src/assets/python_data.jpg",
      hours: 10,
    },
  ]),
];
