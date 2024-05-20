import { IoCallOutline,IoLocationOutline,IoBusinessSharp,IoAccessibility } from "react-icons/io5";
import { LiaConnectdevelop } from "react-icons/lia";
import { MdOutlineDatasetLinked,MdElectricScooter,MdOutlineAlternateEmail,
         MdDraw,MdLaptopChromebook } from "react-icons/md";
import { AiOutlineSolution} from "react-icons/ai";
import { CgTrack } from "react-icons/cg";
import { IoMdAnalytics } from "react-icons/io";
import { FaServer } from "react-icons/fa6";
import { GiGrandPiano } from "react-icons/gi";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaCreditCard,FaYoutube,FaFacebook,FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { profile2, profile3,profile4,profile5} from "./assets";

export const menus = [
    {name:"Home",routeId:'hero'},
    {name:"Categories",routeId:'categories'},
    {name:"About Us",routeId:'about-us'},
    {name:"Courses",routeId:'courses'},
    {name:"Pricing",routeId:'pricing'},
    {name:"Contact",routeId:'contact'},
];

export const categories = [
  {
    name:"Development",
    icon:<LiaConnectdevelop/>,
    courseCount:45,
  },
  {
    name:"Marketing",
    icon:<IoMdAnalytics/>,
    courseCount:340,
  },
  {
    name:"Business",
    icon:<IoBusinessSharp/>,
    courseCount:121,
  },
  {
    name:"IT and Software",
    icon:<FaServer/>,
    courseCount:401,
  },
  {
    name:"Music",
    icon:<GiGrandPiano/>,
    courseCount:187,
  },
  {
    name:"Design",
    icon:<MdDraw/>,
    courseCount:70,
  },
];

export const about = [
    {
        title:"Easily Accessible",
        icon:<IoAccessibility/>,
        color:"var(--color-primary)",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
        title:"Flexible study time",
        icon:<TfiAlarmClock/>,
        color:"orange",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
        title:"More affordable cost",
        icon:<FaCreditCard/>,
        color:"blueviolet",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
        title:"Fun learning experience",
        icon:<MdLaptopChromebook/>,
        color:"var(--color-success)",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
]

export const courses = [
  {
    title: "Web Development Courses",
    image: "https://www.webhopers.in/uploads/1/web-development-course-in-panchkula.png",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi atque delectus repudiandae? Ducimus qui provident dolores alias obcaecati dolorum ipsam sapiente fuga, consectetur dolorem unde expedita itaque optio possimus neque.`,
  },
  {
    title: "Python training",
    image: "https://www.upshottechnologies.in/images/course/python-training-courses.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi atque delectus repudiandae? Ducimus qui provident dolores alias obcaecati dolorum ipsam sapiente fuga, consectetur dolorem unde expedita itaque optio possimus neque.`,
  },
  {
    title: "Data analysis - Complete beginner to advanced",
    image: "https://files.selar.co/product-images/2023/products/mesuullogic/data-analysis-visualizati-selar.co-64a05dd69b6e3.JPG",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi atque delectus repudiandae? Ducimus qui provident dolores alias obcaecati dolorum ipsam sapiente fuga, consectetur dolorem unde expedita itaque optio possimus neque.`,
  },
  {
    title: "Complete digital marketing course",
    image: "https://cdn2.hubspot.net/hubfs/53/online-marketing-courses.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi atque delectus repudiandae? Ducimus qui provident dolores alias obcaecati dolorum ipsam sapiente fuga, consectetur dolorem unde expedita itaque optio possimus neque.`,
  },
  {
    title: "Best online sql course",
    image: "https://hackr.io/blog/best-sql-courses/og-image",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi atque delectus repudiandae? Ducimus qui provident dolores alias obcaecati dolorum ipsam sapiente fuga, consectetur dolorem unde expedita itaque optio possimus neque.`,
  },
  {
    title: "Excel for beginners - Complete course",
    image: "https://i.ytimg.com/vi/wbJcJCkBcMg/maxresdefault.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi atque delectus repudiandae? Ducimus qui provident dolores alias obcaecati dolorum ipsam sapiente fuga, consectetur dolorem unde expedita itaque optio possimus neque.`,
  },
]

export const pricing = [
  {
    name:'Basic',
    price:"₦1,500",
    benefits:[
       "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
       "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
       "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      ]
  },
  {
    name:'Favourite',
    price:"₦55,000",
    benefits:[
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
     ]
  },
  {
    name:'Enterprise',
    price:"₦95,000",
    benefits:[
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", 
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
     ]
  },
]

export const services = [
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Automated Manufacturing",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Robotic Process Automation",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"AI-Powered Analytics",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Autonomous Vehicles",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Personalized Healthcare Solutions",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Smart Home Systems",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
]

export const whyChooseUs = [
    {
        name:"Innovative and Flexible Learning Environment",
        icon:<MdElectricScooter/>,
        description:`At our online school, we leverage the latest educational technology to 
                     create an engaging and interactive learning experience. Our flexible 
                     scheduling options allow you to study at your own pace, making it easier 
                     to balance education with other commitments.`,
    },
    {
        name:"Expert Instructors",
        icon:<AiOutlineSolution/>,
        description:`Our team of highly qualified instructors brings years of 
                     experience and expertise to each course. We offer a wide range of subjects 
                     and specialized programs that cater to various interests and career aspirations.`,
    },
    {
        name:"Supportive Community and Resources",
        icon:<CgTrack/>,
        description:`Joining our online school means becoming part of a supportive and 
                     vibrant community. We provide extensive resources, including academic 
                     advising, career counseling, and technical support, to ensure you have 
                     everything you need to succeed. `,
    },
]

export const testimonial = [
    {
      image:profile2,
      name:'Samuel Eze',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
    },
    {
      image:profile3,
      name:'Emmanuel Joseph',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
    },
    {
      image:profile4,
      name:'Gloria Chiwendu',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
    },
    {
      image:profile5,
      name:'Precious Stone',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
    }
  
];

export const socialHandles = [
    {
      name:"Facebook",
      icon:<FaFacebook/>,
      link:"",
    },
    {
      name:"Twitter",
      icon:<FaTwitter/>,
      link:"",
    },
    {
      name:"LinkedIn",
      icon:<CiLinkedin/>,
      link:"",
    },
    {
      name:"Youtube",
      icon:<FaYoutube/>,
      link:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
    },
];

export const footer = [
    {
      group:"Explore",
      routes:[
        {name:"Home",routeId:'hero'},
        {name:"Categories",routeId:'categories'},
        {name:"About Us",routeId:'about-us'},
        {name:"Courses",routeId:'courses'},
        {name:"Pricing",routeId:'pricing'},
        {name:"Contact",routeId:'contact'},
      ]
    },
    {
      group:"Others",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
      group:"Contacts",
      routes:[
        {
          name:"mradinuba@gmail.com",
          icon:<MdOutlineAlternateEmail />,
        },
        {
          name:"+2347039681695",
          icon:<IoCallOutline/>,
        },
        {
          name:"Gwarinpa, Abuja, Nigeria",
          icon:<IoLocationOutline/>,
        },
      ]
    },
]