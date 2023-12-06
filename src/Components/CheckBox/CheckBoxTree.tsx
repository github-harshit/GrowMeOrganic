
import departmentData from "../../utils/data.ts"; 
import { Department } from "../../utils/data.ts";

import {FormGroup} from "@mui/material"; 
import CheckBox from './CheckBox.tsx';



const CheckBoxTree: React.FC = () => {

  return (
    <div>
    <FormGroup>
      {departmentData.map((departmentObj: Department, index: number) => (
        <CheckBox
          key={index}
          department={departmentObj.departMent}
          subDepartments={departmentObj.sub_departments || [] }
         
         
        />
      ))}
    </FormGroup>
        
    </div>
  )
}

export default CheckBoxTree