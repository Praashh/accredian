import { useForm, SubmitHandler } from "react-hook-form"
import Button from '@mui/material/Button';
import { Snackbar, TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useState } from "react";


interface IFormInput {
  name: string
  email: string;
  password: string
  confirmPass: string
}

export default function SignUp() {
//   const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
//   const { setAuthStatus, setEmail, setName } = useAuth()
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data.password !== data.confirmPass) {
      setMessage("passoword doesn't match")
      setOpen(!open)
    } else {
      try {
        // console.log("trying....");
        // const newUser = await authService.createUserAccount(data)
        // console.log(newUser);
        // setOpen(!open)
        // setMessage("User Created Successfully!");
        // setAuthStatus(true)
        // setName(data.name)
        // setEmail(data.email)
        // router.push('/')
        console.log(data);
      } catch (error) {

      }
    }
  }

  function handleClose() {
    setOpen(!open);
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