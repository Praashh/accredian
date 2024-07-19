import { Link } from 'react-router-dom'
import SignUp from '../ui/Signup'
import img from "../../assets/signup.png"
const SignupWrapper = () => {
    return (
        <div className="px-4 py-7 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-center w-full md:w-[100%] min-h-screen ">
            <section className="flex flex-col gap-5 items-center w-full md:w-[70%]">
                <h1 className='text-3xl'>Hello Please Create Your Account!</h1>
                {/* <AuthMessage message="create your account" /> */}
                <div className='w-full md:w-1/2'>
                    <SignUp />
                </div>
                <span>OR</span>
                {/* <OAuth /> */}
                <span>Already have an Account? <Link to={"/login"} className="text-[#1F64FF]">LOGIN</Link></span>
            </section>
            <section className='hidden md:block -ml-40'>
                <div>
                   <img src={img} alt='@img'/>
                </div>
            </section>
        </div>
    )
}

export default SignupWrapper