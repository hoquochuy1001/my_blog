import AnimationWrapper from "../common/page-animation";
import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import { Link } from 'react-router-dom';

const UserAuthForm = ({ type }) => {
    return (
        // Wraps the entire form with an animation component to add transition effects
        <AnimationWrapper keyValue={type}>
            <section className="h-cover flex items-center justify-center">
                <form className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                        {/* Dynamic heading based on form type (sign-in or sign-up) */}
                        {type == 'sign-in' ? 'Welcome back' : 'Join us today'}
                    </h1>

                    {/* Conditional rendering: Full Name input is only shown for sign-up */}
                    {type != 'sign-in' ? 
                        <InputBox 
                            name="fullname"
                            type="text"
                            placeholder="Full Name"
                            icon="fi-rr-user"
                        />
                        : ""
                    }

                    {/* Email input field */}
                    <InputBox 
                        name="email"
                        type="email"
                        placeholder="Email"
                        icon="fi-rr-envelope"
                    />

                    {/* Password input field */}
                    <InputBox 
                        name="password"
                        type="password"
                        placeholder="Password"
                        icon="fi-rr-key"
                    />

                    {/* Submit button with dynamic text based on form type */}
                    <button className="btn-dark center mt-14" type="submit">
                        {type.replace("-", " ")}
                    </button>
                    
                    {/* Horizontal line with "or" text for alternative sign-in methods */}
                    <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
                        <hr className="w-1/2 border-black"/>
                        <p>or</p>
                        <hr className="w-1/2 border-black"/>
                    </div>

                    {/* Button to continue with Google */}
                    <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
                        <img src={googleIcon} className="w-5" alt="Google Icon"/>
                        continue with google
                    </button>

                    {/* Conditional rendering: different links based on form type */}
                    {type == "sign-in" ? (
                        <p className="mt-6 text-dark-grey text-xl text-center">
                            Don't have an account?
                            <Link to="/signup" className="underline text-black text-xl ml-1">
                                Join us today
                            </Link>
                        </p>
                    ) : (
                        <p className="mt-6 text-dark-grey text-xl text-center">
                            Already a member?
                            <Link to="/signin" className="underline text-black text-xl ml-1">
                                Sign in here
                            </Link>
                        </p>
                    )}
                </form>
            </section>
        </AnimationWrapper>
    );
}

export default UserAuthForm;
