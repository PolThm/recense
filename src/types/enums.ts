export enum Routes {
  Home = '/',
  NewCensus = '/new-census',
  MyArchives = '/my-archives',
  Statistics = '/statistics',
}

export enum FormSteps {
  Landing = 0,
  Contact = 1,
  Profile = 2,
  Lodging = 3,
  Summary = 4,
}

export enum Gender {
  Male = 'Homme',
  Female = 'Femme',
  Other = 'Autre',
}

export enum Situation {
  Single = 'Célibataire',
  Married = 'Marié(e)',
  divorced = 'Divorcé(e)',
  Widowed = 'Veuf(ve)',
}

export enum Education {
  None = 'Non diplômé',
  Bac = 'Baccalauréat',
  Superior = 'Études supérieurs',
}

export enum LodgingType {
  House = 'Maison',
  Apartment = 'Appartement',
}

export enum LodgingLocation {
  City = 'Ville',
  Countryside = 'Campagne',
}
