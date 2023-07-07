import React from 'react'
import styled from 'styled-components'
import { padding } from '../data/style/font'
import {FiArrowRight} from 'react-icons/fi'
import { colors } from '../data/style/color'
export const CtaButton = ({title, className})=>{
    return(
        <Section>
            <Btn className={className}>{title}<FiArrowRight /></Btn>
        </Section>
    )
}

const Section = styled.section`

`
const Btn = styled.div`
padding:${padding.p10}px;
width:250px;
display:flex;
align-items:center;
gap:15px;
justify-content:space-between;
outline:none;
border:none;
font-family:'medium';
transition:all .2s ease;

&.bg{
    background-color:${colors.dark};
    color:${colors.white};
    &:hover{
        background-color:${colors.secondary}
    }
}

&.outline{
    border:1px solid ${colors.white};
    color:${colors.white};
    &:hover{
        background-color:${colors.white};
        color:${colors.black}
    }
}
`