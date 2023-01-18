import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ExpandMore } from '@mui/icons-material'
import { tokens } from '../../theme'

const FAQ = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions page"/>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Lorem ipsum dolor sit amet?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus laudantium debitis eius sunt quasi, inventore voluptates sit, dolor perferendis esse ducimus maiores at labore. Quo accusantium veritatis accusamus magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus laudantium debitis eius sunt quasi, inventore voluptates sit, dolor perferendis esse ducimus maiores at labore. Quo accusantium veritatis accusamus magnam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Lorem ipsum dolor sit amet?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus laudantium debitis eius sunt quasi, inventore voluptates sit, dolor perferendis esse ducimus maiores at labore. Quo accusantium veritatis accusamus magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus laudantium debitis eius sunt quasi, inventore voluptates sit, dolor perferendis esse ducimus maiores at labore. Quo accusantium veritatis accusamus magnam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Lorem ipsum dolor sit amet?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus laudantium debitis eius sunt quasi, inventore voluptates sit, dolor perferendis esse ducimus maiores at labore. Quo accusantium veritatis accusamus magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus laudantium debitis eius sunt quasi, inventore voluptates sit, dolor perferendis esse ducimus maiores at labore. Quo accusantium veritatis accusamus magnam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Lorem ipsum dolor sit amet?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus laudantium debitis eius sunt quasi, inventore voluptates sit, dolor perferendis esse ducimus maiores at labore. Quo accusantium veritatis accusamus magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus laudantium debitis eius sunt quasi, inventore voluptates sit, dolor perferendis esse ducimus maiores at labore. Quo accusantium veritatis accusamus magnam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ
