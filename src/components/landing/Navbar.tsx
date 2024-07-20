import ProfileHeader from "../ui/ProfileHeader";
import { NavigationMenu } from "../ui/NavMenu";
import LeftNav from "../ui/LeftNav";

export default function Navbar() {
    return (
        <nav className="inset-x-0 sticky top-0 z-50 bg-white shadow-sm">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-14 items-center">
                    {/* LEft Nav */}
                    <LeftNav />
                    {/* Right Menu */}
                        <div className="flex gap-10 items-center"> 
                            <nav className="hidden md:flex gap-7">
                            <NavigationMenu title="Refer & Earn" link="/refer-and-earn" />
                            <NavigationMenu title="Resources" link="/resources" />
                            <NavigationMenu title="About us" link="/about-us" />
                        </nav>
                            <ProfileHeader />
                        </div>
                    </div>
            </div>
        </nav>
    );
}
