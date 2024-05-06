import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';



const SignUp = () => {

  const {createUser}=useContext(AuthContext);




    const handleSignUp = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
        })
        .catch(error=>{
          console.log(error);
        })
    }



  return (
    <div className="hero min-h-screen bg-base-200 mb-10">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className=" w-1/2 mx-auto">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-center mb-5">
            Already have an account please {" "}
            <Link className="text-orange-700 font-black" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
