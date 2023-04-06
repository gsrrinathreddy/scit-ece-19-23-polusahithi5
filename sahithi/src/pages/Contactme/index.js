import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Contactme(){
const [loader,setLoader] = useState(true);
    const [contactme,setContactme] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Contactme  ')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                 setContactme   (res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
     
    return(
        <>
<Typography>Name: Sahithi</Typography>
<Typography>Address:8-122 ganesh nagar</Typography>
<Typography>village Name:Devapur</Typography>
<Typography>District Name: Mancherial</Typography>
<Typography>State Name:Telangana</Typography>
<Typography>Country Name: India</Typography>
<Typography>Email: sahithipolu569@gmail.com</Typography>
<Typography>Phone No.: 9701205001</Typography>
        </>
        
    );
}