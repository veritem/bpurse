import Welcome from "../../public/auth/welcome.svg";
import WithGoogle from "../../public/auth/continue-google.svg";

const RightContent = () => {
  return (
    <div>
      <div className="border-b-2 pb-3 border-indigo-500 items-center flex justify-center">
        <h5 className="font-bold text-xl">Login</h5>
      </div>
      <form className="w-full max-w-sm">
        <div className="md:items-center mb-6 pt-5">
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mt-5">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="items-center flex justify-center pt-5">
            <button className="bg-blue-700 px-5 py-2 hover:bg-blue-800 text-white rounded ">
              Login
            </button>
          </div>
        </div>
      </form>
      <div className="mt-3 items-center">
        <div className="border-b-4 border-gray-500">
            
        </div>
    
        <div className="mt-4">
         <span>Don't have an account ?</span><a className="ml-2 text-blue" href="#">Sign up</a>    
        </div>
      </div>
    </div>
  );
};


const LeftComponent=()=>{
    return(
    <div className="md:items-center">
      <div className="mt-3">
         <img src={Welcome.src}/> 
      </div>
      <div className="text-white  mt-5">
          <h4 className="font-bold items-center justify-center flex text-xl">Welcome to B-Purse !</h4>
          <p className="mt-2 font-light">B-purse is an online platform to manage budget transation in a given organization.</p>
      </div>
      </div>
    )
}
const LoginPage = () => (
    <div className="grid grid-cols-2">
        <div className="bg-blue-700 p-5 min-h-screen w-1/1">
            <LeftComponent />
        </div>
        <div className="bg-white p-5 min-h-screen flex justify-center items-center">
            <RightContent />
        </div>
    </div>
);

export default LoginPage;
