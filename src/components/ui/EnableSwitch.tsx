import { Switch } from "@mui/material"

const EnableSwitch = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <div className="flex items-center gap-2 place-content-end md:w-[65%]">
        <span>Enrolled</span>
        <div className=""><Switch {...label} size="small" defaultChecked /></div>

    </div>
  )
}

export default EnableSwitch
