import Button from '@mui/material/Button';

type ButtonProps = {
    title:string,
    varient:"contained" | "text" | "outlined"
}
const CustomButton = ({title, varient="contained"}:ButtonProps) => {
  return (
    <Button variant={varient}>{title}</Button>
  )
}

export default CustomButton
