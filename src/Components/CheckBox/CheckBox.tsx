import  {useState, useEffect} from 'react'; 
import { Checkbox } from '@mui/material';
import {FormControlLabel} from "@mui/material"; 
import {FormGroup} from "@mui/material"
import {Collapse} from '@mui/material';
import { IconButton } from '@mui/material';


const CheckBox = ({ department, subDepartments }) => {
    const [expanded, setExpanded] = useState(false);
    const [checked, setChecked] = useState(false);
    const initialSubDepartmentStates: Record<string, boolean> = {};
    subDepartments.forEach((subDepartment) => {
      initialSubDepartmentStates[subDepartment] = false;
    });
    const [subDepartmentStates, setSubDepartmentStates] = useState<Record<string, boolean>>(initialSubDepartmentStates);
 
    useEffect(()=>{
      if(checked){
        const initialSubDepartmentStates: Record<string, boolean> = {};
        subDepartments.forEach((subDepartment) => {
          initialSubDepartmentStates[subDepartment] = true;
        });
        setSubDepartmentStates(initialSubDepartmentStates);
      }
       
    }, [checked])

    useEffect(() => {
        let   res  = true; 
       for (const key in subDepartmentStates) {
          const value = subDepartmentStates[key];
            res = res  &&  value; 
         }
              if(res && subDepartments.length!==0){
                setChecked(true); 
                }
      }, [subDepartmentStates]);
      
  
    const handleDepartmentToggle = () => {
      setExpanded(!expanded);
    };
    
    const handleCheckBoxChange = () => {
          setChecked(!checked); 
      };
      
   
    const handleSubDepartmentCheckBoxChange = (subDepartment: string) => {
      setSubDepartmentStates((prevState) => ({
        ...prevState,
        [subDepartment]: !prevState[subDepartment],
      }));
    };
  
    return (
      <div>
        <div>
          <IconButton onClick={handleDepartmentToggle} style={{ marginRight: '20px' }}>
            {expanded ? '-' : '+'}
          </IconButton>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleCheckBoxChange} />}
            label={department}
          />
          <Collapse in={expanded}>
            <FormGroup>
              {subDepartments.map((subDepartment) => (
                <FormControlLabel
                  key={subDepartment}
                  control={
                    <Checkbox
                      checked={subDepartmentStates[subDepartment]}
                      onChange={() => handleSubDepartmentCheckBoxChange(subDepartment)}
                    />
                  }
                  label={subDepartment}
                />
              ))}
            </FormGroup>
          </Collapse>
        </div>
      </div>
    );
  };
  
  export default CheckBox;
  