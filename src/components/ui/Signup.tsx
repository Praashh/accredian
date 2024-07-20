import { useForm, SubmitHandler } from "react-hook-form"
import Button from '@mui/material/Button';
import { Snackbar, TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useState } from "react";
import useAuth from "../../context/UseAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";


interface IFormInput {
  name: string
  email: string;
  password: string
  confirmPass: string
}

export default function SignUp() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const { setAuthStatus, setEmail, setName } = useAuth()
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data.password !== data.confirmPass) {
      setMessage("passoword doesn't match")
      setOpen(!open)
    } else {
      try {
        console.log(data)
        console.log("trying....");
        const newUser = await createUserAccount(data)
        console.log(newUser);
        setOpen(!open)
        setMessage("User Created Successfully!");
        setAuthStatus(true)
        setName(data.name)
        setEmail(data.email)
        console.log(data);
      } catch (error) {

      }
    }
  }
  function handleClose() {
    setOpen(!open);
  }
  async function createUserAccount(data:any) {
      const res = await axios.post(import.meta.env.VITE_BACKEND_URL + 'api/v1/user/register', {
        name:data.name,
        email:data.email,
        password:data.password

      });

      if(res.status === 201){
        navigate('/')
      }else{
        alert("user creation failed!");
        console.log(res.data);
        
      }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <TextField
            required
            id="outlined-required"
            className="bg-white w-full"
            placeholder="name"
            {...register("name")}
          />
          <TextField
            required
            id="outlined-required"
            className="bg-white w-full"
            placeholder="Email-id"
            {...register("email")}
          />
          <TextField
            required
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            placeholder="Enter Your Password"
            className="bg-white w-full"
            {...register("password")}
          />
          <TextField
            required
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            placeholder="Confirm Your Password"
            className="bg-white w-full"
            {...register("confirmPass")}
          />
          <Button variant="contained" type="submit" className="w-full">SIGN UP</Button>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            onClose={handleClose}
            message={message}
          />
        </Stack>
      </form>
    </div>
  )
}