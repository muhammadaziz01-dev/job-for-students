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

export interface Istudents{
  id: number,
    name: string,
    course: number ,
    jobStatus:string,
    color: string,
}


export interface IDashStatusCardData {
  id:number;
  title: string;
  description:string;
  count: number;
  color: string;
  backgroundColor: string;
  increase: number;
  decrease: number;
  icon: string;
}

export interface IChatCompaniaData {
  id: number;
  name: string;
  lastMessag: string;
  avatar: string;
  lastMessageTimestamp: string;
  unread: boolean;
  unreadCount: number;
  online: boolean;
  isTyping: boolean;
  lastActivity: string;
  icon1: string;
  icon2: string;
}
