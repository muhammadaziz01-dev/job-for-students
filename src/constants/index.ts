import DashbordIcon from "../assets/icons/dashbord-icon.svg";
import ChatIcon from "../assets/icons/chat-icon.svg";
import StudentsIcon from "../assets/icons/student-icon.svg";
import EventsIcon from "../assets/icons/microphone-icon.svg";
import SettingsIcon from "../assets/icons/setting-icon.svg";
import {type IsidebarItems} from '../types'

export const sidebarItems :IsidebarItems[] = [{
    title: "Dashbord",
    icon: DashbordIcon,
    to: "/dashbord"
  },
  {
    title: "Chat",
    icon: ChatIcon,
    to: "/chat"
  },
  {
    title: "Talabalar",
    icon: StudentsIcon,
    to: "/students"
  },
  {
    title: "Tadbirlar",
    icon: EventsIcon,
    to: "/events"
  },
  {
    title: "Sozlamalar",
    icon: SettingsIcon,
    to: "/settings"
  }

]