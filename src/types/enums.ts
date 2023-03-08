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
  Divorced = 'Divorcé(e)',
  Widowed = 'Veuf(ve)',
}

export enum Education {
  None = 'Non diplômé(e)',
  Bac = 'Baccalauréat',
  Superior = 'Études supérieures',
}

export enum LodgingType {
  House = 'Maison',
  Apartment = 'Appartement',
}

export enum Location {
  City = 'Ville',
  Countryside = 'Campagne',
}

export enum WarningTypes {
  Info = 'info',
  Error = 'error',
}

export enum LocalStorageKeys {
  Censuses = 'censuses',
  LastUpdate = 'lastUpdate',
}

export enum Queries {
  Censuses = 'censuses',
  Joke = 'joke',
}
