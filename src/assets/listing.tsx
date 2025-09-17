import {
  Mail,
  Instagram,
  MessageCircle
} from 'lucide-react';
import {
  email,
  whatsappNumber,
  instagramHandle,
  handleEmailClickOnContactUs,
  handleWhatsAppClickOnContactUs,
  handleInstagramClickOnContactUs
} from '../components/misc';
import { Product } from './interfaces';
/* IMAGES */
import yatiAvatar from './images/team/yati.jpg';
import isyqiAvatar from './images/team/isyqi.jpg';
import amirahAvatar from './images/team/amirah.jpg';
import kalimanAvatar from './images/team/kaliman.jpg';
import etengahAvatar from './images/team/etengah.jpg';
import christineAvatar from './images/team/christine.jpg';

export const teamMembers = [
  {
    name: "Noor Zawatil Isyqi Binti Saiful Bahri",
    role: "TEAM.CEO",
    avatar: isyqiAvatar,
    initials: "IS",
    assignmentInsight: "TEAM.CEO_INSIGHT",
    keyStrengths: ["STRATEGIC_VISION", "TEAM_LEADERSHIP", "BUSINESS_DEVELOPMENT"]
  },
  {
    name: "Norhayati Binti Yahya",
    role: "TEAM.COO",
    avatar: yatiAvatar,
    initials: "YY",
    assignmentInsight: "TEAM.COO_INSIGHT",
    keyStrengths: ["STRATEGIC_PLANNING", "OPERATIONAL_EFFICIENCY", "CREATIVE_CRITICAL_THINKING"]
  },
  {
    name: "Etengah Bin Ebung",
    role: "TEAM.MARKETING_BRANDING_MANAGER",
    avatar: etengahAvatar,
    initials: "EE",
    assignmentInsight: "TEAM.MARKETING_BRANDING_MANAGER_INSIGHT",
    keyStrengths: ["SOCIAL_MEDIA_STRATEGY", "BRAND_COMMUNICATIONS", "CUSTOMER_ENGAGEMENT"]
  },
  {
    name: "Christine Bernadette A/P Francis",
    role: "TEAM.SALES_MANAGER", 
    avatar: christineAvatar,
    initials: "CB",
    assignmentInsight: "TEAM.SALES_MANAGER_INSIGHT",
    keyStrengths: ["CUSTOMER_RELATIONS", "SALES_STRATEGY", "MARKET_ANALYSIS"]
  },
  {
    name: "Nurkaliman Bin Mohamed Hamden",
    role: "TEAM.FINANCE_DATA_ANALYST", 
    avatar: kalimanAvatar,
    initials: "NM",
    assignmentInsight: "TEAM.FINANCE_DATA_ANALYST_INSIGHT",
    keyStrengths: ["FINANCIAL_PLANNING", "DATA_ANALYSIS", "PERFORMANCE_TRACKING"]
  },
  {
    name: "Amirah Farah Diyana Binti Mohd Razali",
    role: "TEAM.TECH_WEBSITE_DEVELOPER", 
    avatar: amirahAvatar,
    initials: "AF",
    assignmentInsight: "TEAM.TECH_WEBSITE_DEVELOPER_INSIGHT",
    keyStrengths: ["TECHNICAL_PROFICIENCY", "PROBLEM_SOLVING", "DETAIL_ORIENTED"]
  }
];

export const products_list: Product[] = [
  {
    id: '0',
    name: 'Wetty Mini Wet Wipes',
    description: '(DESCRIPTION ABOUT PRODUCT)',
    price: 9999.99,
    image: undefined,
    category: '(WHAT CATEGORY)'
  },
  {
    id: '1',
    name: 'Wetty Wet Tissues 80pcs',
    description: '(DESCRIPTION ABOUT PRODUCT)',
    price: 9999.99,
    image: undefined,
    category: '(WHAT CATEGORY)'
  },
  {
    id: '2',
    name: 'Wetty Sport Wipes 20s',
    description: '(DESCRIPTION ABOUT PRODUCT)',
    price: 9999.99,
    image: undefined,
    category: '(WHAT CATEGORY)'
  },
  {
    id: '3',
    name: 'Wetty Exfoliating Facial Wipes 20s',
    description: '(DESCRIPTION ABOUT PRODUCT)',
    price: 9999.99,
    image: undefined,
    category: '(WHAT CATEGORY)'
  },
  {
    id: '4',
    name: 'Hope Organic Premium Coconut Nectar Granules Sugar (400g)',
    description: '(DESCRIPTION ABOUT PRODUCT)',
    price: 9999.99,
    image: undefined,
    category: '(WHAT CATEGORY)'
  }
]

export const businessHours = [
  { day: "MONDAY_FRIDAY", hours: "9-6" },
  { day: "SATURDAY", hours: "10-4" },
  { day: "SUNDAY", hours: "CLOSED" }
]

export const contactMethods = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp",
    description: "QUICK_RESPONSE",
    contact: whatsappNumber,
    action: handleWhatsAppClickOnContactUs,
    color: "text-green-600",
    bgColor: "bg-green-50",
    responseTime: "USUALLY_IN_AN_HOUR"
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    title: "Instagram DM",
    description: "CONNECT_WITH_US_ON_SM",
    contact: instagramHandle,
    action: handleInstagramClickOnContactUs,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    responseTime: "USUALLY_IN_4_HOUR"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "EMAIL",
    description: "FOR_DETAILED_INQUIRIES",
    contact: email,
    action: handleEmailClickOnContactUs,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    responseTime: "USUALLY_IN_24_HOURS"
  }
]