import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const Register = () => {
    const {CreateUser} = useAuth()
    const {
        handleSubmit,
        register, 
        watch,
        formState: {errors}
    } = useForm()
    const handleRegister = (data)=>{
        const email = data.email
        const password = data.password
        CreateUser(email, password)

    }
    return (
        <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit(handleRegister)}  className="card-body">
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                            
                        <input type="text" name="Name"  placeholder="Enter Your Name"className="input input-bordered border border-gray-300" {...register('name' ,{required: true})} />
                        {
                            errors.name && ( 
                                <p className='text-red-500 text-sm font-light'>Name is required</p>
                            )
                        }
                       
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered border border-gray-300"{...register("email", {required: true})} />
                        {
                          errors.email && ( 
                              <p className='text-red-500 text-sm font-light'>Email is required</p>
                            )
                        } 
                        
                    </div>
                    <div className="form-control relative">
                    <label className="label">
                        <span className=" label-text text-xl font-semibold">Password</span>
                    </label>
                  
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className= "input input-bordered border border-gray-300"
                        {...register("password", {
                        required: "Password is required.",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long.",
                        },
                        pattern: {
                            value: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/,
                            message:
                            "Password must include uppercase, lowercase, a number, and a special character.",
                        },
                        })}
                        
                    />
                    {
                    errors.password && <p className='text-red-500'>{
                        errors.password.message
                    }</p>
                    }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Confirm Password</span>
                        </label>
                        <input type='password' 
                        name='confirm-password' 
                        placeholder="confirm-password" 
                        className= "input input-bordered border border-gray-300" 
                        {...register("confirmPassword", {
                            required: true ,
                            validate:(value)=>{
                                if(watch("password") != value){
                                    return "Your password don't match"
                                }
                            }
                        } )}
                        /> 
                          {
                            errors.confirmPassword &&(
                                <p className='text-red-500 text-sm font-light'>Both password must match</p>
                            )
                        }           
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Role</span>
                        </label>
                        <select className="select w-full input input-bordered border border-gray-300" 
                        {...register('role', {required: true})} 
                        >
                            <option value='patient'>Patient</option>
                            <option value='staff'>Staff</option>
                          </select>
                            {
                                errors.role &&(
                                    <p className='text-red-500 text-sm font-light'>You have to select a role</p>
                                )
                            }
                    </div>
                    
                    <div className="form-control mt-6">
                    <button type='submit' className=" w-full border-2 mr-4  px-4  rounded-lg py-3 bg-gray-800 text-white  font-semibold">Register</button>
                    </div>
                    <label className="label mt-4">
                        <a className="label-text-alt text-lg text-gray-500">Already have an account? Please <Link to='/login' className="underline text-gray-800 font-semibold">Login</Link></a>
                    </label>
             </form>
        </div>
    );
};

export default Register;