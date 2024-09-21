import { useContext, useState } from "react";
import userContext from "../../Context/UserContext";
import { Link } from "react-router-dom";


const SignIn = () => {

    const [phoneNo, setPhoneNo] = useState("");
    const [password, setPassword] = useState("");

    const {getCurrentUser} = useContext(userContext);

    const loginData = {phoneNo, password};

    

    const handleSubmit = (e) => {
        e.preventDefault();

        getCurrentUser(loginData);

        console.log(phoneNo, password);

        setPhoneNo("");
        setPassword("");
    };

    const onCencelClick = (e) => {
      e.preventDefault();

      setPhoneNo("");
      setPassword("");

      window.location.href = "/";
    }

  return (
    <div className="h-screen w-screen relative overflow-hidden flex justify-center items-center lg:gap-4">
      <div className="hidden lg:flex h-40-r w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-20 backdrop-filter backdrop-blur-sm flex-col justify-center items-center gap-y-8 text-center">
        <div>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div>
          <h2 className="font-poppins text-2xl">Welcome Back To</h2>
          <h1 className="font-poppins text-5xl font-bold">Easy<span className="text-[#00BD5F]">Paisa</span></h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full h-1/2 lg:w-96 lg:h-40-r bg-opacity-10 relative z-10 rounded-2xl shadow-5xl border border-l-0 border-t-0 border-opacity-20 backdrop-filter backdrop-blur-sm flex flex-col justify-center items-center gap-y-8 p-8 m-4 lg:m-0">
        <h1 className="font-poppins text-white text-2xl tracking-wider">SignIn</h1>
        
        <input
          type="number"
          placeholder="Phone"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          required
          className="font-poppins text-white bg-transparent focus:outline-none border-b w-full tracking-wide px-4 py-2"
        />
        
        <input
          type="password"
          placeholder="PinCode"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="font-poppins text-white bg-transparent focus:outline-none border-b w-full tracking-wide px-4 py-2"
        />
        
        <p className="text-center">Don't have an account? <Link to={"/signup"} className="text-[#101ee6]">SignUp</Link></p>
        
        <button type="submit" className="capitalize hover:bg-white hover:text-black px-4 py-2 rounded-full border">SignIn</button>
        
        <button type="button" className="capitalize px-4 py-2 rounded-full bg-[#FF8081] hover:bg-[#db5c5c]" onClick={onCencelClick}>Cancel</button>
        </form>

        <div className="h-40-r w-40-r bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full absolute lg:left-2/3 lg:-top-56 -top-96 -left-40 animate-pulse"></div>
        <div className="h-35-r w-35-r rounded-full bg-gradient-to-r from-yellow-500 to-pink-400 absolute lg:top-96 lg:-left-20 top-3/4 right-0 animate-pulse"></div>
    </div>


  );
};

export default SignIn;