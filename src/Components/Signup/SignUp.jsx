import { useContext, useState } from "react";
import userContext from "../../Context/UserContext";

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [PinCode,setPinCode] = useState("");
    const [balance,setBalance] = useState(0);

    const {createUser} = useContext(userContext);

    const newUserData = {firstName, lastName, email, phone, PinCode,balance,setBalance};

    const handleSubmit = (e) => {
        e.preventDefault();


        createUser(newUserData);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setPinCode("");
    };

    const onCencelClick = (e) => {
      e.preventDefault();  
      
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPinCode("");

      window.location.href = "/";
    };

    const handleAlert = () => {
      
    };

  return (
    <div className="h-screen w-screen relative overflow-hidden flex justify-center items-center gap-4">
      <div className="h-40-r w-40-r bg-gradient-to-r from-pink-400 to-yellow-500 rounded-full absolute left-2/3 -top-56 animate-pulse"></div>
      <div className="h-35-r w-35-r rounded-full bg-gradient-to-r from-yellow-500 to-pink-400 absolute top-96 -left-20 animate-pulse"></div>


      <div className="hidden lg:flex container h-40-r w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-20 backdrop-filter backdrop-blur-sm flex-col justify-center items-center gap-y-8 text-center">
        <div>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div>
          <h2 className="font-poppins text-2xl">Welcome To</h2>
          <h1 className="font-poppins text-5xl font-bold">Easy<span className="text-[#00BD5F]">Paisa</span></h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="container h-3/5 w-full lg:h-40-r lg:w-96 bg-opacity-10 relative z-10 rounded-2xl shadow-5xl border border-l-0 border-t-0 border-opacity-20 backdrop-filter backdrop-blur-sm flex flex-col justify-center items-center gap-y-8 p-8 m-4 lg:p-0">
        <h1 className="font-poppins text-white text-2xl tracking-wider">SignUp</h1>
        <input type="text" 
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="font-poppins text-white bg-none bg-transparent focus:outline-none border-b tracking-wide w-full lg:w-auto"
        />
        <input type="text" 
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="font-poppins text-white bg-none bg-transparent focus:outline-none border-b tracking-wide w-full lg:w-auto"
        />
        <input type="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="font-poppins text-white bg-none bg-transparent focus:outline-none border-b tracking-wide w-full lg:w-auto"
        />
        <input type="number" 
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="font-poppins text-white bg-none bg-transparent focus:outline-none border-b tracking-wide w-full lg:w-auto"
        />
        <input type="password" 
          placeholder="PinCode"
          value={PinCode}
          onChange={(e) => setPinCode(e.target.value)}
          required
          className="font-poppins text-white bg-none bg-transparent focus:outline-none border-b tracking-wide w-full lg:w-auto"
        />
        <button type="submit" className="capitalize hover:bg-[#ffffff] hover:text-black px-4 py-2 rounded-full border w-full lg:w-auto" onClick={handleAlert}>SignUp</button>
        <button className="capitalize px-4 py-2 rounded-full bg-[#FF8081] hover:bg-[#db5c5c] w-full lg:w-auto" onClick={onCencelClick}>Cancel</button>
      </form>
    </div>

  );
};

export default SignUp;