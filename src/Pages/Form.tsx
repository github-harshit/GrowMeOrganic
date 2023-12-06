import {useState} from 'react'; 
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
 import {TextField} from "@mui/material"; 
 import {Button} from "@mui/material"; 
 import {Box} from "@mui/material"; 
 import {useNavigate} from "react-router-dom"

 const Form: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sessionStorage.setItem('formData', JSON.stringify(formData));
    navigate('/home');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Box padding={2} textAlign={'center'} marginTop={20}>
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>
            Sign Up Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              type="text"
              name="name"
              fullWidth
              margin="normal"
              value={formData.name}
              color='secondary'
              onChange={handleInputChange}
            />
            <TextField
              label="Phone"
              type="tel"
              name="phone"
              fullWidth
              margin="normal"
              value={formData.phone}
              color='secondary'
              onChange={handleInputChange}
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              fullWidth
              margin="normal"
              value={formData.email}
              color='secondary'
              onChange={handleInputChange}
            />
            <Button style= {{cursor: "pointer", marginTop: "20px"}}  type="submit" size= "medium"  variant="contained" color="secondary" >
              Submit
            </Button>
          </form>
        </Container>
      </Box>
    </div>
  );
};

export default Form;