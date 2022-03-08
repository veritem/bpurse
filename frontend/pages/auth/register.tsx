import Team from "../../public/auth/team.svg";
import WithGoogle from "../../public/auth/continue-g-signup.svg";

const RightContent = () => {
  return (
    <div>
      <div className="border-b-4 pb-3 border-indigo-500">
        <h1 className="font-bold">Create free account</h1>
      </div>
      <form className="w-full max-w-sm">
        <div className="md:items-center mb-6 pt-5">
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Full name"
            />
          </div>
          <div className="mt-5">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-email"
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div className="mt-5">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-organization"
              type="text"
              placeholder="School OR organization"
            />
          </div>

          <div className="mt-5">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="password"
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <div className="mt-5">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <div className="items-center pt-5">
            <button className="bg-blue-700 px-5 py-2 hover:bg-blue-800 text-white rounded ">
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <div className="mt-3 items-center">
        <div className="border-b-4 border-gray-500">
            
        </div>
        <div className="-mt-8 font-bold w-1/12 p-3 rounded-full text-black bg-gray-500 ml-52">
           OR
        </div>
        <div className="mt-7 pl-5">
         <button className="border-rounded"><img src={WithGoogle.src}/></button> 
        </div>
        <div className="mt-4">
         <span>Already have an account, ?</span><a className="ml-2 text-blue" href="#">Sign in</a>    
        </div>
      </div>
    </div>
  );
};


const LeftComponent=()=>{
    return(
    <div className="md:items-center">
      <div className="mt-16">
         <img src={Team.src} className="mt-5"/> 
      </div>
      <div className="text-white mt-10">
          <h4 className="font-bold">Get your free account today !</h4>
          <p className="mt-2 font-light">want to manage your budget with our loosing data get your account.</p>
      </div>
      </div>
    )
}
const RegisterPage =() =>{
    return(
        <div className="grid grid-cols-2">
        <div className="bg-blue-700 p-5 min-h-screen">
            <LeftComponent />
        </div>
        <div className="bg-white p-5 items-center justify-center min-h-screen">
            <RightContent />
        </div>
    </div>
    )
}

export default RegisterPage;