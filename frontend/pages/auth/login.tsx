import Welcome from "../../public/auth/welcome.svg";
import WithGoogle from "../../public/auth/continue-google.svg";

const RightContent = () => {
  return (
    <div>
      <div className="border-b-4 pb-3 border-indigo-500">
        <h5>Login</h5>
      </div>
      <form className="w-full max-w-sm">
        <div className="md:items-center mb-6 pt-5">
          <div>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Email"
            />
          </div>
          <div className="mt-5">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="password"
              value="Jane Doe"
            />
          </div>
          <div className="items-center pt-5">
            <button className="bg-blue-700 px-5 py-2 hover:bg-blue-800 text-white rounded ">
              Login
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
         <span>Don't have an account ?</span><a className="ml-2 text-blue" href="#">Sign up</a>    
        </div>
      </div>
    </div>
  );
};


const LeftComponent=()=>{
    return(
    <div className="md:items-center">
      <div className="mt-16">
         <img src={Welcome.src} className="mt-5"/> 
      </div>
      <div className="text-white mt-10">
          <h4 className="font-bold">Welcome to B-Purse !</h4>
          <p className="mt-2 font-light">B-purse is an online platform to manage budget transation in a given organization.</p>
      </div>
      </div>
    )
}
const LoginPage = () => (
    <div className="grid grid-cols-2">
        <div className="bg-blue-700 p-5 min-h-screen">
            <LeftComponent />
        </div>
        <div className="bg-white p-5">
            <RightContent />
        </div>
    </div>
);

export default LoginPage;
