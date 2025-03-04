import { type Istudents } from "@/types"


// student list table
export const studentsList:Istudents[] =[
  {
    id: 1,
    name: 'Alisher Mo’minov Ne’mat o’g’li',
    course: 4 ,
    jobStatus: "Ishlamoqda",
    color: "#088CFC",
  },{
    id: 2,
    name: 'Alisher G’aniyev Ne’mat o’g’li',
    course: 4,
    jobStatus: "Loyihaviy ishlamoqda",
    color: "#C1A875",
  },
  {
    id: 3,
    name: 'Guli Naimova Akmal qizi',
    course: 2,
    jobStatus: "Ishsiz",
    color: "#F04248",
  },
  {
    id: 4,
    name: 'Tal’at Usmonov Kamol o’g’li',
    course: 2,
    jobStatus: "Ish qidirmoqda",
    color: "#25C196",
  },
  {
    id: 5,
    name: 'Muslima G’aniyeva Orif qizi',
    course: 4,
    jobStatus: "Passiv qidiruvda",
    color: "rgba(242, 187, 22, 0.75)",
  },
  {
    id: 6,
    name: 'Jamshid Talayev Kamol o’g’li',
    course: 4,
    jobStatus: "Ishsiz",
    color: "#F04248",
  },
  {
    id: 7,
    name: 'Mahmud Khamidov Kamol o’g’li',
    course: 3,
    jobStatus: "Loyihaviy ishlamoqda",
    color: "#C1A875",
  },
  {
    id: 8,
    name: 'Taimur G’alimov Akmal qizi',
    course: 3,
    jobStatus: "Ish qidirmoqda",
    color: "#25C196",
  },
  {
    id: 9,
    name: 'Mahmud Mammadov Kamol o’g’li',
    course: 2,
    jobStatus: "Ishlamoqda",
    color: "#088CFC",
  }


];
export const studentHeder:string[]=["Ism-Familiya", "Kurs", "Ish statusi", "Chat"];


// componi list table
export const componiList = [
  {
    id: 1,
    name: 'EPAM Uzbekistan',
    announcementsCount: 12,
    direction: "IT va dasturiy ta'minot",
  },
  {
    id: 2,
    name: 'UzAuto Motors',
    announcementsCount: 15,
    direction: "Avtomobilsozlik va ishlab chiqarish",
  },
  {
    id: 3,
    name: 'MyTaxi Uzbekistan',
    announcementsCount: 14,
    direction: "Transport va logistika",
  },
  {
    id: 4,
    name: 'UzCard',
    announcementsCount: 9,
    direction: "Moliya texnologiyalari (FinTech)",
  },
  {
    id: 5,
    name: 'Progress Solution Technologies',
    announcementsCount: 7,
    direction: "IT va dasturiy ta'minot",
  },
  {
    id: 6,
    name: 'Click Technologies',
    announcementsCount: 18,
    direction: "FinTech va elektron to‘lovlar",
  },

];

export const componiHeder :string[]=['Kompaniya nomi' , 'E’lonlar  soni' , 'Yo’nalish' , 'Chat']


