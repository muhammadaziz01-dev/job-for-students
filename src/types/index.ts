export interface LoginUserData {
  login: string
  password: string
}

export interface Password {
  password: string
  confirmPassword: string
}

export interface Unversity {
  universityName: string
  universityDescription: string
}

export interface Contact{
  email: string,
  phone: string,
  webSite: string,
  telegram: string,
}

export interface IsidebarItems {
   title: string;
   icon: string;
   to:string;
}
