import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function AboutUs(){
const [loader,setLoader] = useState(true);
    const [aboutUs,setAboutUs] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/AboutUs')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutUs(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
    return(
        <>
<Typography>Name: Sahithi</Typography>
<Typography>Father Name: Satyanarayana</Typography>
<Typography>Mother Name: Latha sri</Typography>
<Typography>Email: sahithipolu569@gmail.com</Typography>
<Typography>Phone No.: 9701205001</Typography>
        </>
        
    );
}