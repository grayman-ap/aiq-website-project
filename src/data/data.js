import ConsultingNavContent from "../component/NavContent/ConsultingNavContent";
import ExploreNavContent from "../component/NavContent/ExploreNavContent";
import IndustryNavContent from "../component/NavContent/IndustryNavContent";
import LearnNavContent from "../component/NavContent/LearnNavContent";
import MoreNavContent from "../component/NavContent/MoreNavContent";
import ProductNavContent from "../component/NavContent/ProductNavContent";
import SolutionNavContent from "../component/NavContent/SolutionNavContent";
import SupportNavContent from "../component/NavContent/SupportNavContent";
import {FaAngleDown} from 'react-icons/fa'
import {TfiAngleDown} from 'react-icons/tfi'
import logoImage from '../data/asset/dia-logo.png'
import logoImage2 from '../data/asset/dsa-logo.png'
import logoImage3 from '../data/asset/naf-logo.png'
import img1 from './asset/pexels-spacex-586056.jpg'
export const navContent={
    navItem1:[
        {
            id: 1,
            name: 'Product',
            hadDropDown: true,
            icon: <TfiAngleDown />,
            content: <ProductNavContent/>,
            style:'icon'
        },
        
        {
            id: 2,
            name: 'Solutions',
            hadDropDown: true,
            icon: <TfiAngleDown />,
            content: <SolutionNavContent/>,
            style:'icon'
        },
        {
            id: 3,
            name: 'Consulting',
            hadDropDown: true,
            icon: <TfiAngleDown />,
            content: <ConsultingNavContent/>,
            style:'icon'
        },
        {
            id: 4,
            name: 'Support',
            hadDropDown: true,
            icon: <TfiAngleDown />,
            content: <SupportNavContent/>,
            style:'icon'
        },
        {
            id: 5,
            name: 'More',
            icon: <TfiAngleDown />,
            hadDropDown: true,
            content: <MoreNavContent/>,
            style:'icon'
        },
    ],
    navItem2:[
        {
            id: 10,
            name: 'Defence',
            url:'/defence'
        },
        {
            id: 6,
            name: 'Learn',
            hadDropDown: true,
            icon: <TfiAngleDown />,
            content: <LearnNavContent/>,
            style:'icon'
        },
        {
            id: 7,
            name: 'Industry Segments',
            hadDropDown: true,
            icon: <TfiAngleDown />,
            content: <IndustryNavContent/>,
            style:'icon'
        },
        {
            id: 8,
            name: 'Explore More',
            hadDropDown: true,
            icon: <TfiAngleDown />,
            content: <ExploreNavContent/>,
            style:'icon'
        },
    ],
}

export const  heroData=[
    {
        id:1,
        index:'01',
        link:'Case studies',
        url: '/case-studies'
    },
    {
        id:2,
        index:'02',
        link:'Solutions',
        url: '/solutions'
    },
    {
        id:3,
        index:'03',
        link:'Resources',
        url: '/resources'
    },
    {
        id:4,
        index:'04',
        link:'Get started',
        url: '/get-started'
    },
]

export const missionData = [
    {
        id:1,
        logo: logoImage
    },
    {
        id:1,
        logo: logoImage2
    },
    {
        id:1,
        logo: logoImage3
    },
]

export const ActionCardData=[
    {
        id: 1,
        image: img1,
        title:   'How we transformed the Geo-Spatial  System',
        content: 'Aiq transformed the geo  spatial in just a matter of week and  we  have been able  to come  up with some  new information',
        btn: 'Start your transformation ',
        btn2: 'Read more'
    },
    {
        id: 2,
        image: img1,
        title:   'How we transformed the Geo-Spatial  System',
        content: 'Aiq transformed the geo  spatial in just a matter of week and  we  have been able  to come  up with some  new information',
        btn: 'Start your transformation ',
        btn2: 'Read more'
    },
    {
        id: 3,
        image: img1,
        title:   'How we transformed the Geo-Spatial  System',
        content: 'Aiq transformed the geo  spatial in just a matter of week and  we  have been able  to come  up with some  new information',
        btn: 'Start your transformation ',
        btn2: 'Read more'
    },
    {
        id: 4,
        image: img1,
        title:   'How we transformed the Geo-Spatial  System',
        content: 'Aiq transformed the geo  spatial in just a matter of week and  we  have been able  to come  up with some  new information',
        btn: 'Start your transformation ',
        btn2: 'Read more'
    },
    {
        id: 5,
        image: img1,
        title:   'How we transformed the Geo-Spatial  System',
        content: 'Aiq transformed the geo  spatial in just a matter of week and  we  have been able  to come  up with some  new information',
        btn: 'Start your transformation ',
        btn2: 'Read more'
    },
    {
        id: 6,
        image: img1,
        title:   'How we transformed the Geo-Spatial  System',
        content: 'Aiq transformed the geo  spatial in just a matter of week and  we  have been able  to come  up with some  new information',
        btn: 'Start your transformation ',
        btn2: 'Read more'
    },
]