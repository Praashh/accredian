import { Link } from "react-router-dom"
type NavigationMenuProps = {
    title: string;
    link: string;
}
export const NavigationMenu = ({title, link}:NavigationMenuProps) => {
  return (
    <div    className="flex items-center text-md  duration-300 hover:underline">
    <Link
 
    to={link}
  >
    {title}
  </Link>
  </div>
  )
}

 