
import { useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"; 
import Table from "../Components/Table.tsx";
import User from "../utils/user.ts"; 
import CheckBoxTree from "../Components/CheckBox/CheckBoxTree.tsx";
import Swal from 'sweetalert2'
const Home: React.FC = () => {
     const navigate = useNavigate(); 
     const [userData, setUserData] = useState<User[]>([]); 
     const formData = sessionStorage.getItem("formData"); 
    
    useEffect(()=>{
      if(formData===null){ 
       navigate("/"); 
       Swal.fire("Please Fill The Details First!");
      }
    }) 

    useEffect(()=>{
        getUseData(); 
    }, [])

    const getUseData= async()=>{
         const res  = await fetch("https://jsonplaceholder.typicode.com/users"); 
         const data = await res.json(); 
         setUserData(data)
    
    }

  return (
    <div>
     <Table data={userData}/>
     <CheckBoxTree/>
      
    </div>
  )
}

export default Home