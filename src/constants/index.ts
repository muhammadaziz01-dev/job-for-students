import { type IsidebarItems } from '../types'
import Avatar1 from '@/assets/icons/avatr1.svg'
import Avatar2 from '@/assets/icons/avatr2.svg'
import Avatar3 from '@/assets/icons/avatr3.svg'

import AvatarComp0 from '@/assets/icons/avatrComp0.svg'
import AvatarComp1 from '@/assets/icons/avatrComp1.svg'
import AvatarComp2 from '@/assets/icons/avatrComp2.svg'
import AvatarComp3 from '@/assets/icons/avatrComp3.svg'

// aside date
export const sidebarItems: IsidebarItems[] = [
  {
    title: 'Dashbord',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M13.9914 3.19968L13.9916 3.19986L19.7516 7.2298C19.7516 7.22982 19.7516 7.22984 19.7516 7.22986C20.2208 7.55833 20.6651 8.0969 20.9925 8.72408C21.32 9.35129 21.5083 10.0244 21.5083 10.6002V17.3802C21.5083 19.654 19.6621 21.5002 17.3883 21.5002H6.60828C4.33583 21.5002 2.48828 19.6454 2.48828 17.3702V10.4702C2.48828 9.93574 2.65867 9.29667 2.95686 8.69105C3.25491 8.0857 3.65935 7.55706 4.0858 7.22443L4.0859 7.22435L9.09453 3.31542C9.09475 3.31525 9.09496 3.31508 9.09518 3.31491C10.432 2.27962 12.6011 2.22559 13.9914 3.19968ZM12.1485 16.6377L12.1509 16.6379C12.5065 16.6718 12.8544 16.5512 13.1118 16.2937L15.2465 14.1591C15.4659 14.4288 15.8009 14.6002 16.1783 14.6002C16.8444 14.6002 17.3783 14.0663 17.3783 13.4002V11.5402C17.3783 11.4148 17.3648 11.2496 17.288 11.0736C17.1665 10.7832 16.9299 10.5478 16.6387 10.4278L16.6227 10.4213L16.6064 10.4158C16.4873 10.3761 16.3411 10.3402 16.1783 10.3402H14.3183C13.6521 10.3402 13.1183 10.874 13.1183 11.5402C13.1183 11.9176 13.2896 12.2525 13.5594 12.472L12.4647 13.5667L11.7885 12.5591C11.5888 12.2398 11.2549 12.0557 10.9057 12.0224C10.5501 11.9886 10.2022 12.1092 9.94473 12.3666L6.96473 15.3466L6.96467 15.3466L6.95836 15.3531C6.50506 15.8232 6.49599 16.575 6.96473 17.0437C7.19335 17.2724 7.5027 17.3902 7.80828 17.3902C8.10805 17.3902 8.40936 17.2862 8.65183 17.0437L10.6019 15.0937L11.2811 16.1058C11.4703 16.3956 11.7922 16.6021 12.1485 16.6377Z" fill="currentColor" stroke="currentColor"/>
  </svg>`,
    to: '/dashbord',
  },
  {
    title: 'Chat',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18.4698 16.83L18.8598 19.99C18.9598 20.82 18.0698 21.4 17.3598 20.97L13.1698 18.48C12.7098 18.48 12.2599 18.45 11.8199 18.39C12.5599 17.52 12.9998 16.42 12.9998 15.23C12.9998 12.39 10.5398 10.09 7.49985 10.09C6.33985 10.09 5.26985 10.42 4.37985 11C4.34985 10.75 4.33984 10.5 4.33984 10.24C4.33984 5.68999 8.28985 2 13.1698 2C18.0498 2 21.9998 5.68999 21.9998 10.24C21.9998 12.94 20.6098 15.33 18.4698 16.83Z" stroke="currentColor"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13 15.2298C13 16.4198 12.56 17.5198 11.82 18.3898C10.83 19.5898 9.26 20.3598 7.5 20.3598L4.89 21.9098C4.45 22.1798 3.89 21.8098 3.95 21.2998L4.2 19.3298C2.86 18.3998 2 16.9098 2 15.2298C2 13.4698 2.94 11.9198 4.38 10.9998C5.27 10.4198 6.34 10.0898 7.5 10.0898C10.54 10.0898 13 12.3898 13 15.2298Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
    to: '/chat',
  },
  {
    title: 'Talabalar',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M10.0495 2.52979L4.02953 6.45979C2.09953 7.71979 2.09953 10.5398 4.02953 11.7998L10.0495 15.7298C11.1295 16.4398 12.9095 16.4398 13.9895 15.7298L19.9795 11.7998C21.8995 10.5398 21.8995 7.72979 19.9795 6.46979L13.9895 2.53979C12.9095 1.81979 11.1295 1.81979 10.0495 2.52979Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.63109 13.0801L5.62109 17.7701C5.62109 19.0401 6.60109 20.4001 7.80109 20.8001L10.9911 21.8601C11.5411 22.0401 12.4511 22.0401 13.0111 21.8601L16.2011 20.8001C17.4011 20.4001 18.3811 19.0401 18.3811 17.7701V13.1301" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.3984 15V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
    to: '/students',
  },
  {
    title: 'Tadbirlar',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.35156 9.6499V11.3499C4.35156 15.5699 7.78156 18.9999 12.0016 18.9999C16.2216 18.9999 19.6516 15.5699 19.6516 11.3499V9.6499" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.6094 6.43012C11.5094 6.10012 12.4894 6.10012 13.3894 6.43012" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.1992 8.54982C11.7292 8.40982 12.2792 8.40982 12.8092 8.54982" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 19V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
    to: '/events',
  },
  {
    title: 'Postlar',
    icon: ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.30001C8.46018 6.45001 8.70018 5.71001 9.00018 5.10001C10.1702 2.68001 12.1602 2.03001 15.5002 2.82001L17.1702 3.21001C21.3602 4.19001 22.6402 6.26001 21.6602 10.44Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.0584 19.3901C14.4384 19.8101 13.6584 20.1601 12.7084 20.4701L11.1284 20.9901C7.15839 22.2701 5.06839 21.2001 3.77839 17.2301L2.49839 13.2801C1.21839 9.3101 2.27839 7.2101 6.24839 5.9301L7.82839 5.4101C8.23839 5.2801 8.62839 5.1701 8.99839 5.1001C8.69839 5.7101 8.45839 6.4501 8.25839 7.3001L7.27839 11.4901C6.29839 15.6701 7.58839 17.7301 11.7584 18.7201L13.4384 19.1201C14.0184 19.2601 14.5584 19.3501 15.0584 19.3901Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.6406 8.52979L17.4906 9.75979" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M11.6602 12.3999L14.5602 13.1399" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
    `,
    to: '/posts',
  },
  {
    title: 'Vakansiya',
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M15.9983 22.7498H7.99827C3.37827 22.7498 2.51827 20.5998 2.29827 18.5098L1.54827 10.4998C1.43827 9.44977 1.40827 7.89977 2.44827 6.73977C3.34827 5.73977 4.83827 5.25977 6.99827 5.25977H16.9983C19.1683 5.25977 20.6583 5.74977 21.5483 6.73977C22.5883 7.89977 22.5583 9.44977 22.4483 10.5098L21.6983 18.4998C21.4783 20.5998 20.6183 22.7498 15.9983 22.7498ZM6.99827 6.74977C5.30827 6.74977 4.14827 7.07977 3.55827 7.73977C3.06827 8.27977 2.90827 9.10977 3.03827 10.3498L3.78827 18.3598C3.95827 19.9398 4.38827 21.2498 7.99827 21.2498H15.9983C19.5983 21.2498 20.0383 19.9398 20.2083 18.3498L20.9583 10.3598C21.0883 9.10977 20.9283 8.27977 20.4383 7.73977C19.8483 7.07977 18.6883 6.74977 16.9983 6.74977H6.99827Z" fill="currentColor"/>
<path d="M16 6.75C15.59 6.75 15.25 6.41 15.25 6V5.2C15.25 3.42 15.25 2.75 12.8 2.75H11.2C8.75 2.75 8.75 3.42 8.75 5.2V6C8.75 6.41 8.41 6.75 8 6.75C7.59 6.75 7.25 6.41 7.25 6V5.2C7.25 3.44 7.25 1.25 11.2 1.25H12.8C16.75 1.25 16.75 3.44 16.75 5.2V6C16.75 6.41 16.41 6.75 16 6.75Z" fill="currentColor"/>
<path d="M12 16.75C9.25 16.75 9.25 15.05 9.25 14.03V13C9.25 11.59 9.59 11.25 11 11.25H13C14.41 11.25 14.75 11.59 14.75 13V14C14.75 15.04 14.75 16.75 12 16.75ZM10.75 12.75C10.75 12.83 10.75 12.92 10.75 13V14.03C10.75 15.06 10.75 15.25 12 15.25C13.25 15.25 13.25 15.09 13.25 14.02V13C13.25 12.92 13.25 12.83 13.25 12.75C13.17 12.75 13.08 12.75 13 12.75H11C10.92 12.75 10.83 12.75 10.75 12.75Z" fill="currentColor"/>
<path d="M13.9995 14.7702C13.6295 14.7702 13.2995 14.4902 13.2595 14.1102C13.2095 13.7002 13.4995 13.3202 13.9095 13.2702C16.5495 12.9402 19.0795 11.9402 21.2095 10.3902C21.5395 10.1402 22.0095 10.2202 22.2595 10.5602C22.4995 10.8902 22.4295 11.3602 22.0895 11.6102C19.7495 13.3102 16.9895 14.4002 14.0895 14.7702C14.0595 14.7702 14.0295 14.7702 13.9995 14.7702Z" fill="currentColor"/>
<path d="M10.0007 14.7799C9.97072 14.7799 9.94072 14.7799 9.91072 14.7799C7.17072 14.4699 4.50072 13.4699 2.19072 11.8899C1.85072 11.6599 1.76072 11.1899 1.99072 10.8499C2.22072 10.5099 2.69072 10.4199 3.03072 10.6499C5.14072 12.0899 7.57072 12.9999 10.0707 13.2899C10.4807 13.3399 10.7807 13.7099 10.7307 14.1199C10.7007 14.4999 10.3807 14.7799 10.0007 14.7799Z" fill="currentColor"/>
</svg>
    `,
    to: '/vacancy',
  },
]

// moc date student list
export const chatStudentList = [
  {
    id: 1,
    name: 'Alisher Valiyev',
    lastMessag: 'Suhbat qalay o’tdi?',
    avatar: Avatar1,
    lastMessageTimestamp: '15:25',
    unread: true,
    unreadCount: 0,
    online: true,
    lastActivity: `15:40`,
    isTyping: true,
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.66454 10.1145L12.7925 3.98584L13.7359 4.92851L6.66454 11.9998L2.42188 7.75717L3.36454 6.81451L6.66454 10.1145Z" fill="currentColor"/>
            </svg>`,
    icons2: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.73597 9.17317L8.6773 10.1145L14.3213 4.47051L15.264 5.41317L8.6773 11.9998L4.43464 7.75717L5.3773 6.81451L6.79397 8.23117L7.73597 9.17251V9.17317ZM7.7373 7.28784L11.0386 3.98584L11.9786 4.92584L8.6773 8.22784L7.7373 7.28784ZM5.85264 11.0578L4.91064 11.9998L0.667969 7.75717L1.61064 6.81451L2.55264 7.75651L2.55197 7.75717L5.85264 11.0578Z" fill="currentColor"/>
          </svg>`,
  },
  {
    id: 2,
    name: 'Fikri Khan',
    lastMessag: 'Sizga yaxshi xabar yuborildi?',
    avatar: Avatar2,
    lastMessageTimestamp: '14:40',
    unread: true,
    unreadCount: 2,
    online: false,
    isTyping: false,
    lastActivity: `14:50`,
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.66454 10.1145L12.7925 3.98584L13.7359 4.92851L6.66454 11.9998L2.42188 7.75717L3.36454 6.81451L6.66454 10.1145Z" fill="currentColor"/>
            </svg>`,
    icons2: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
               <path d="M7.73597 9.17317L8.6773 10.1145L14.3213 4.47051L15.264 5.41317L8.6773 11.9998L4.43464 7.75717L5.3773 6.81451L6.79397 8.23117L7.73597 9.17251V9.17317ZM7.7373 7.28784L11.0386 3.98584L11.9786 4.92584L8.6773 8.22784L7.7373 7.28784ZM5.85264 11.0578L4.91064 11.9998L0.667969 7.75717L1.61064 6.81451L2.55264 7.75651L2.55197 7.75717L5.85264 11.0578Z" fill="currentColor"/>
             </svg>`,
  },
  {
    id: 3,
    name: 'Ximena Abdullayeva',
    lastMessag: 'Salom, menimizga yaxshi xabar yuborildi?',
    avatar: Avatar3,
    lastMessageTimestamp: '13:55',
    unread: false,
    unreadCount: 0,
    online: false,
    isTyping: false,
    lastActivity: `13:58`,
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.66454 10.1145L12.7925 3.98584L13.7359 4.92851L6.66454 11.9998L2.42188 7.75717L3.36454 6.81451L6.66454 10.1145Z" fill="currentColor"/>
            </svg>`,
    icons2: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.73597 9.17317L8.6773 10.1145L14.3213 4.47051L15.264 5.41317L8.6773 11.9998L4.43464 7.75717L5.3773 6.81451L6.79397 8.23117L7.73597 9.17251V9.17317ZM7.7373 7.28784L11.0386 3.98584L11.9786 4.92584L8.6773 8.22784L7.7373 7.28784ZM5.85264 11.0578L4.91064 11.9998L0.667969 7.75717L1.61064 6.81451L2.55264 7.75651L2.55197 7.75717L5.85264 11.0578Z" fill="currentColor"/>
          </svg>`,
  },
  {
    id: 4,
    name: 'Ruslan Temirbekov',
    lastMessag: 'Salom, sizga yaxshi xabar yuborildi?',
    avatar: Avatar2,
    lastMessageTimestamp: '12:30',
    unread: true,
    unreadCount: 1,
    online: false,
    isTyping: false,
    lastActivity: `12:35`,
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.66454 10.1145L12.7925 3.98584L13.7359 4.92851L6.66454 11.9998L2.42188 7.75717L3.36454 6.81451L6.66454 10.1145Z" fill="currentColor"/>
            </svg>`,
    icons2: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.73597 9.17317L8.6773 10.1145L14.3213 4.47051L15.264 5.41317L8.6773 11.9998L4.43464 7.75717L5.3773 6.81451L6.79397 8.23117L7.73597 9.17251V9.17317ZM7.7373 7.28784L11.0386 3.98584L11.9786 4.92584L8.6773 8.22784L7.7373 7.28784ZM5.85264 11.0578L4.91064 11.9998L0.667969 7.75717L1.61064 6.81451L2.55264 7.75651L2.55197 7.75717L5.85264 11.0578Z" fill="currentColor"/>
          </svg>`,
  },
  {
    id: 5,
    name: 'Naim Khan',
    lastMessag: 'Salom, sizga yaxshi xabar yuborildi?',
    avatar: Avatar1,
    lastMessageTimestamp: '11:15',
    unread: false,
    unreadCount: 0,
    online: false,
    isTyping: false,
    lastActivity: `11:20`,
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.66454 10.1145L12.7925 3.98584L13.7359 4.92851L6.66454 11.9998L2.42188 7.75717L3.36454 6.81451L6.66454 10.1145Z" fill="currentColor"/>
            </svg>`,
    icons2: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.73597 9.17317L8.6773 10.1145L14.3213 4.47051L15.264 5.41317L8.6773 11.9998L4.43464 7.75717L5.3773 6.81451L6.79397 8.23117L7.73597 9.17251V9.17317ZM7.7373 7.28784L11.0386 3.98584L11.9786 4.92584L8.6773 8.22784L7.7373 7.28784ZM5.85264 11.0578L4.91064 11.9998L0.667969 7.75717L1.61064 6.81451L2.55264 7.75651L2.55197 7.75717L5.85264 11.0578Z" fill="currentColor"/>
          </svg>`,
  },
  {
    id: 6,
    name: 'Fikri Khan',
    lastMessag: 'Sizga yaxshi xabar yuborildi?',
    avatar: Avatar2,
    lastMessageTimestamp: '14:40',
    unread: true,
    unreadCount: 0,
    online: false,
    isTyping: false,
    lastActivity: `14:50`,
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.66454 10.1145L12.7925 3.98584L13.7359 4.92851L6.66454 11.9998L2.42188 7.75717L3.36454 6.81451L6.66454 10.1145Z" fill="currentColor"/>
            </svg>`,
    icons2: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
               <path d="M7.73597 9.17317L8.6773 10.1145L14.3213 4.47051L15.264 5.41317L8.6773 11.9998L4.43464 7.75717L5.3773 6.81451L6.79397 8.23117L7.73597 9.17251V9.17317ZM7.7373 7.28784L11.0386 3.98584L11.9786 4.92584L8.6773 8.22784L7.7373 7.28784ZM5.85264 11.0578L4.91064 11.9998L0.667969 7.75717L1.61064 6.81451L2.55264 7.75651L2.55197 7.75717L5.85264 11.0578Z" fill="currentColor"/>
             </svg>`,
  },
]
// moc data componi list
export const chatcompaniaList = [
  {
    id: 1,
    name: 'Progress Solution',
    lastMessag: 'Nomzod ma’qul bo’ldimi?',
    avatar: AvatarComp0,
    lastMessageTimestamp: '16:45',
    unread: false,
    unreadCount: 0,
    online: false,
    lastActivity: `17:00`,
    isTyping: false,
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.66454 10.1145L12.7925 3.98584L13.7359 4.92851L6.66454 11.9998L2.42188 7.75717L3.36454 6.81451L6.66454 10.1145Z" fill="currentColor"/>
            </svg>`,
    icons2: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.73597 9.17317L8.6773 10.1145L14.3213 4.47051L15.264 5.41317L8.6773 11.9998L4.43464 7.75717L5.3773 6.81451L6.79397 8.23117L7.73597 9.17251V9.17317ZM7.7373 7.28784L11.0386 3.98584L11.9786 4.92584L8.6773 8.22784L7.7373 7.28784ZM5.85264 11.0578L4.91064 11.9998L0.667969 7.75717L1.61064 6.81451L2.55264 7.75651L2.55197 7.75717L5.85264 11.0578Z" fill="currentColor"/>
          </svg>`,
  },
  {
    id: 2,
    name: 'UIC Group',
    lastMessag: 'Hamkorlikdan hursandmiz!',
    avatar: AvatarComp1,
    lastMessageTimestamp: '14:40',
    unread: true,
    unreadCount: 2,
    online: true,
    isTyping: false,
    lastActivity: `14:50`,
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.66454 10.1145L12.7925 3.98584L13.7359 4.92851L6.66454 11.9998L2.42188 7.75717L3.36454 6.81451L6.66454 10.1145Z" fill="currentColor"/>
            </svg>`,
    icons2: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
               <path d="M7.73597 9.17317L8.6773 10.1145L14.3213 4.47051L15.264 5.41317L8.6773 11.9998L4.43464 7.75717L5.3773 6.81451L6.79397 8.23117L7.73597 9.17251V9.17317ZM7.7373 7.28784L11.0386 3.98584L11.9786 4.92584L8.6773 8.22784L7.7373 7.28784ZM5.85264 11.0578L4.91064 11.9998L0.667969 7.75717L1.61064 6.81451L2.55264 7.75651L2.55197 7.75717L5.85264 11.0578Z" fill="currentColor"/>
             </svg>`,
  },
  {
    id: 3,
    name: 'UzAuto Corporation',
    lastMessag: 'Sizlarga katta rahmat!',
    avatar: AvatarComp2,
    lastMessageTimestamp: '16:45',
    unread: false,
    unreadCount: 7,
    online: true,
    isTyping: false,
    lastActivity: `13:58`,
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.66454 10.1145L12.7925 3.98584L13.7359 4.92851L6.66454 11.9998L2.42188 7.75717L3.36454 6.81451L6.66454 10.1145Z" fill="currentColor"/>
            </svg>`,
    icons2: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.73597 9.17317L8.6773 10.1145L14.3213 4.47051L15.264 5.41317L8.6773 11.9998L4.43464 7.75717L5.3773 6.81451L6.79397 8.23117L7.73597 9.17251V9.17317ZM7.7373 7.28784L11.0386 3.98584L11.9786 4.92584L8.6773 8.22784L7.7373 7.28784ZM5.85264 11.0578L4.91064 11.9998L0.667969 7.75717L1.61064 6.81451L2.55264 7.75651L2.55197 7.75717L5.85264 11.0578Z" fill="currentColor"/>
          </svg>`,
  },
  {
    id: 4,
    name: 'Mastercard',
    lastMessag: 'Thaks sir🤩',
    avatar: AvatarComp3,
    lastMessageTimestamp: '12:30',
    unread: true,
    unreadCount: 0,
    online: false,
    isTyping: false,
    lastActivity: `12:35`,
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6.66454 10.1145L12.7925 3.98584L13.7359 4.92851L6.66454 11.9998L2.42188 7.75717L3.36454 6.81451L6.66454 10.1145Z" fill="currentColor"/>
            </svg>`,
    icons2: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.73597 9.17317L8.6773 10.1145L14.3213 4.47051L15.264 5.41317L8.6773 11.9998L4.43464 7.75717L5.3773 6.81451L6.79397 8.23117L7.73597 9.17251V9.17317ZM7.7373 7.28784L11.0386 3.98584L11.9786 4.92584L8.6773 8.22784L7.7373 7.28784ZM5.85264 11.0578L4.91064 11.9998L0.667969 7.75717L1.61064 6.81451L2.55264 7.75651L2.55197 7.75717L5.85264 11.0578Z" fill="currentColor"/>
          </svg>`,
  },
]

// Dashbord status card data
export const dashStatusCardData = [
  {
    id: 1,
    title: 'Jami talabalar',
    description: 'Ro’yxatdan o’tgan talabalar soni',
    count: 3267,
    color: '#FFF',
    backgroundColor: '#B79BFF',
    increase: 238,
    decrease: 0,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="79" height="25" viewBox="0 0 79 25" fill="none">
                <path d="M76.9956 6.09999H78.5V24.5L0.499999 24.5V18.5L2.75657 13.9402L3.6531 16.1802H4.70413L6.8062 13.9402L8.27764 16.1802L12.692 16.1804L15.0042 13.9403L16.2655 10.5797L18.1012 12.2602L19.756 13.9402L20.2728 16.5L21.3239 16.1802H22.6144L25.0214 8.34021L25.7736 10.5802L26.9771 8.34021L27.8797 12.2602L30.2867 5.54021L31.6406 8.34021H34.1981L36.906 2.74022L38.5608 5.54021L40.7401 3.86L43.3955 8.33999L45.1028 0.499999L46.3384 8.33999L54.5804 11.7L55.6334 9.45998H56.6865L59.0935 6.09999H61.5005L62.4031 9.45998L66.0137 2.73999L67.518 11.7L68.2702 8.33999H69.925L71.4294 0.499999L72.9338 7.21999L73.686 3.86H75.6417L76.9956 6.09999Z" fill="url(#paint0_linear_3697_18163)" fill-opacity="0.16"/>
                <path d="M78 6.09999H76.4956L75.1417 3.86H73.186L72.4338 7.21999L70.9294 0.499999L69.425 8.33999H67.7702L67.018 11.7L65.5137 2.73999L61.9031 9.45998L61.0005 6.09999H58.5935L56.1865 9.45998H55.1334L54.0804 11.7L45.8384 8.33999L44.6028 0.499999L42.8955 8.33999L40.2401 3.86L38.0608 5.54021L36.406 2.74022L33.6981 8.34021H31.1406L29.7867 5.54021L27.3797 12.2602L26.4771 8.34021L25.2736 10.5802L24.5214 8.34021L22.1144 16.1802H20.8239L19.7728 16.5L19.256 13.9402L17.6012 12.2602L15.7655 10.5797L14.5042 13.9403L12.192 16.1804L7.77764 16.1802L6.3062 13.9402L4.20413 16.1802H3.1531L2.25657 13.9402L0.499999 18.5" stroke="white" stroke-linecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear_3697_18163" x1="39.5" y1="24.5" x2="39.5" y2="0.499999" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0"/>
                    <stop offset="0.809892" stop-color="white"/>
                  </linearGradient>
                </defs>
              </svg>`,
  },
  {
    id: 2,
    title: 'Kompaniyalar',
    description: 'Jarayondagi kompaniyalar umumiy soni',
    count: 165,
    color: '#444655',
    backgroundColor: '#FFF',
    increase: 17,
    decrease: 0,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="79" height="25" viewBox="0 0 79 25" fill="none">
    <path d="M76.9956 6.09999H78.5V24.5L0.499999 24.5V18.5L2.75657 13.9402L3.6531 16.1802H4.70413L6.8062 13.9402L8.27764 16.1802L12.692 16.1804L15.0042 13.9403L16.2655 10.5797L18.1012 12.2602L19.756 13.9402L20.2728 16.5L21.3239 16.1802H22.6144L25.0214 8.34021L25.7736 10.5802L26.9771 8.34021L27.8797 12.2602L30.2867 5.54021L31.6406 8.34021H34.1981L36.906 2.74022L38.5608 5.54021L40.7401 3.86L43.3955 8.33999L45.1028 0.499999L46.3384 8.33999L54.5804 11.7L55.6334 9.45998H56.6865L59.0935 6.09999H61.5005L62.4031 9.45998L66.0137 2.73999L67.518 11.7L68.2702 8.33999H69.925L71.4294 0.499999L72.9338 7.21999L73.686 3.86H75.6417L76.9956 6.09999Z" fill="url(#paint0_linear_3697_18178)" fill-opacity="0.16"/>
    <path d="M78 6.09999H76.4956L75.1417 3.86H73.186L72.4338 7.21999L70.9294 0.499999L69.425 8.33999H67.7702L67.018 11.7L65.5137 2.73999L61.9031 9.45998L61.0005 6.09999H58.5935L56.1865 9.45998H55.1334L54.0804 11.7L45.8384 8.33999L44.6028 0.499999L42.8955 8.33999L40.2401 3.86L38.0608 5.54021L36.406 2.74022L33.6981 8.34021H31.1406L29.7867 5.54021L27.3797 12.2602L26.4771 8.34021L25.2736 10.5802L24.5214 8.34021L22.1144 16.1802H20.8239L19.7728 16.5L19.256 13.9402L17.6012 12.2602L15.7655 10.5797L14.5042 13.9403L12.192 16.1804L7.77764 16.1802L6.3062 13.9402L4.20413 16.1802H3.1531L2.25657 13.9402L0.499999 18.5" stroke="#B79BFF" stroke-linecap="round"/>
    <defs>
      <linearGradient id="paint0_linear_3697_18178" x1="39.5" y1="24.5" x2="39.5" y2="0.499999" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0"/>
        <stop offset="0.469" stop-color="#BDA5FF"/>
        <stop offset="1" stop-color="#B79BFF"/>
      </linearGradient>
    </defs>
  </svg>`,
  },
  {
    id: 3,
    title: 'Ish beruvchilar',
    description: 'Ish beruvchi kompaniyalar umumiy soni',
    count: 142,
    color: '#444655',
    backgroundColor: '#FFF',
    increase: 0,
    decrease: 14,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="79" height="25" viewBox="0 0 79 25" fill="none">
    <path d="M2.00438 6.09999H0.5L0.5 24.5L78.5 24.5V18.5L76.2434 13.9402L75.3469 16.1802H74.2959L72.1938 13.9402L70.7224 16.1802L66.308 16.1804L63.9958 13.9403L62.7345 10.5797L60.8988 12.2602L59.244 13.9402L58.7272 16.5L57.6761 16.1802H56.3856L53.9786 8.34021L53.2264 10.5802L52.0229 8.34021L51.1203 12.2602L48.7133 5.54021L47.3594 8.34021H44.8019L42.094 2.74022L40.4392 5.54021L38.2599 3.86L35.6045 8.33999L33.8972 0.499999L32.6616 8.33999L24.4196 11.7L23.3666 9.45998H22.3135L19.9065 6.09999H17.4995L16.5969 9.45998L12.9863 2.73999L11.482 11.7L10.7298 8.33999H9.07496L7.57058 0.499999L6.0662 7.21999L5.31401 3.86H3.35832L2.00438 6.09999Z" fill="url(#paint0_linear_3697_18191)" fill-opacity="0.16"/>
    <path d="M1 6.09999H2.50438L3.85832 3.86H5.81401L6.5662 7.21999L8.07058 0.499999L9.57496 8.33999H11.2298L11.982 11.7L13.4863 2.73999L17.0969 9.45998L17.9995 6.09999H20.4065L22.8135 9.45998H23.8666L24.9196 11.7L33.1616 8.33999L34.3972 0.499999L36.1045 8.33999L38.7599 3.86L40.9392 5.54021L42.594 2.74022L45.3019 8.34021H47.8594L49.2133 5.54021L51.6203 12.2602L52.5229 8.34021L53.7264 10.5802L54.4786 8.34021L56.8856 16.1802H58.1761L59.2272 16.5L59.744 13.9402L61.3988 12.2602L63.2345 10.5797L64.4958 13.9403L66.808 16.1804L71.2224 16.1802L72.6938 13.9402L74.7959 16.1802H75.8469L76.7434 13.9402L78.5 18.5" stroke="#B79BFF" stroke-linecap="round"/>
    <defs>
      <linearGradient id="paint0_linear_3697_18191" x1="39.5" y1="24.5" x2="39.5" y2="0.499999" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0"/>
        <stop offset="0.469" stop-color="#BDA5FF"/>
        <stop offset="1" stop-color="#B79BFF"/>
      </linearGradient>
    </defs>
  </svg>`,
  }
]
