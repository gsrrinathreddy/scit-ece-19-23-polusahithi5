
import * as React from 'react';
import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import axios from 'axios';
import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';

export default function Certifications(){

    const [loader,setLoader] = useState(true);
    const [certifications,setCertifications] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Certifications')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setCertifications(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
                    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Certifications1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Gyan 2023
           Technical quiz 1st prize
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Certifications2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Advitiya 2023
           speed typing
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Certification3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            -Advitiya 2023
            Teasure hunt 1st prize
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
  }
