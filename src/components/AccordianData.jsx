import Accordian from "./Accordian";
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


export default function AccordianData() {

    const [accordianData, setAccordianData] = useState([
        {
            title: " Can I Trial Video Before playing",
            id: "One",
            dec: 'lorem  cjhb Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the  folder during the build Only files inside the folder can be referenced from the HTML.'
        },
        {
            title: " what is a project",
            id: "Two",
            dec: 'lorem  cjhb Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the  folder during the build Only files inside the folder can be referenced from the HTML.'
        },
        {
            title: " Can I Trial Video Before playing",
            id: "Three",
            dec: 'lorem  cjhb Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the  folder during the build Only files inside the folder can be referenced from the HTML.'
        },
        {
            title: " Can I Trial Video Before playing",
            id: "Four",
            dec: 'lorem  cjhb Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the  folder during the build Only files inside the folder can be referenced from the HTML.'
        }
    ])
    return (
        <React.Fragment key={accordianData}>

            <h1 className='acc-heading'>faq</h1>
            {
                accordianData.map((acc, i) => {
                    return (
                        <Accordion key={i}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                {acc.title}
                            </AccordionSummary>
                            <AccordionDetails>
                                {acc.dec}
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
            {/* <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Accordion 1
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Accordion 2
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion> */}
        </ React.Fragment>
    )
}
