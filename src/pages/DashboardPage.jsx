import { useContext, useState } from "react";
import userContext from "../Context/UserContext";
import Swal from "sweetalert2";
import {
  Wallet,
  Smartphone,
  ReceiptText,
  BicepsFlexed,
  Bitcoin,
  Wifi,
  Tv,
  GraduationCap,
  Hospital,
  Package,
  Youtube,
} from "lucide-react";
import Model from "react-modal";


const DashboardPage = () => {



  //add cash --------------
  const [addCashVisible, setAddCashVisible] = useState(false);
  const [addCashAccount, setAddCashAccount] = useState("");
  const [addCashAmount, setAddCashAmount] = useState("");

  // transfer money ------------
  const [transferOpen, setTransferOpen] = useState(false);
  const [receiverAccount, setReceiverAccount] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  // pay bill ---------------------
  const [payBillOpen, setPayBillOpen] = useState(false);
  const [billNo, setBillNo] = useState("");
  const [billAmount, setBillAmount] = useState("");

  // phone recharge ---------------
  const [phoneOpen, setPhoneOpen] =useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [rechargeAmount, setRechargeAmount] = useState("");

  const { currentUser,getAddCash,getTransferMoney,PayBill, users, getPhoneRecharge } = useContext(userContext);

  console.log("signed up users : ",users);

  const onLogOutClick = (e) => {
    e.preventDefault();
    // setCurrentUser("");

    Swal.fire({
    title: "Are you sure?",
    text: "You want to logOut!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logOut it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "LoggedOut!",
          text: "You logged out! See you soon again!", 
          icon: "success"
        }).then(() => {
          window.location.href = "/";
        });
      }
    });
  };

  // add cash section ----------------
  const addCashData = {addCashAccount, addCashAmount};

  const handleAddCashOpen = () => {
    setAddCashVisible(true);
  };

  const handleAddCashClose = () => {
    setAddCashVisible(false);
    setAddCashAccount("");
    setAddCashAmount("");
  };

  const handleAddCashSubmit = (e) => {
    e.preventDefault();
    getAddCash(addCashData);

    handleAddCashClose();
  }
  // add cash end ----------------


// transfer money section ----------------

const transferData = {receiverAccount, transferAmount};
  const handleTransferOpen = () => {
    setTransferOpen(true)
  };

  const handleTransferClose = () => {
    setTransferOpen(false)
    setReceiverAccount("");
    setTransferAmount("");
  }

  const handleTransferSubmit = (e) => {
    e.preventDefault();
    getTransferMoney(transferData);

    console.log(transferData);

    handleTransferClose();
  }

  // transfer money end --------------------

  //pay bill ------------------

  const billData = {billNo,billAmount};
  const handlePayBillOpen = () => {
    setPayBillOpen(true);
  };

  const handlePayBillClose = () => {
    setPayBillOpen(false);
    setBillNo("");
    setBillAmount("");
  };

  const handleBillSubmit = (e) => {
    e.preventDefault();

    PayBill(billData);

    handlePayBillClose();
  };

  //pay bill end ------------------------

  // phone recharge ----------------------

  const rechargeData = {phoneNo, rechargeAmount};

  const handlePhoneOpen = () => {
    setPhoneOpen(true);
  };

  const handlePhoneClose = () => {
    setPhoneOpen(false);
    setPhoneNo("");
    setRechargeAmount("");
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    getPhoneRecharge(rechargeData)

    handlePhoneClose();
  };

  // phone recharge end ---------------------

   
  return (

   <div className="bg-white h-full text-black">
      <div className="bg-[#00BD5F] h-auto flex flex-col justify-center items-center">
        <h1 className="font-poppins text-3xl md:text-5xl font-bold mb-4">Easy<span className="text-white">Paisa</span></h1>
        <div className="w-full max-w-7xl mx-auto h-auto md:h-64 bg-white rounded-2xl flex flex-wrap justify-around items-center p-4 gap-8 md:gap-0 mb-4">
          
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-green-500 rounded-full flex justify-center items-center">
              <h1 className="text-4xl md:text-5xl tracking-wide uppercase">{currentUser?.firstName[0]}{currentUser?.lastName[0]}</h1>
            </div>
            <p>Available Balance</p>
            <h3 className="font-bold">Rs. {currentUser?.balance}</h3>
          </div>

          <div className="flex flex-col justify-center items-center text-center md:text-left gap-4">
            <h1 className="font-bold text-xl md:text-2xl uppercase tracking-widest">{currentUser?.firstName} {currentUser?.lastName}</h1>
            <h2 className="font-bold text-lg md:text-xl tracking-wider">{currentUser?.phone}</h2>
            <p className="font-semibold tracking-wider">{currentUser?.email}</p>
          </div>

          <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-4">
            <button className="border px-4 py-2 rounded-full border-green-600 tracking-wider" onClick={onLogOutClick}>
              Logout
            </button>
            <button className="border px-4 py-2 rounded-full bg-[#00BD5F] text-white tracking-wider" onClick={handleAddCashOpen}>
              Add Cash
            </button>
          </div>
        </div>
      </div>

      {/* addcash modal */}
      <section>
        <Model 
        isOpen={addCashVisible}
        onRequestClose={handleAddCashClose}
        style={{
          content:{
            width: "500px",
            height: "600px",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: "15px"
          },
        }}
        >
          <div className="text-[#302F68] flex flex-col justify-between items-center h-full">
            <div className="flex flex-col justify-center items-center gap-4">
              <Wallet color="#00BD5F" size={72}/>
              <h1 className="font-semibold uppercase">add cash to your account</h1>
              <p>Current Balance </p>
              <h2 className="font-semibold ">Rs. {currentUser.balance}</h2>
            </div>

            <form onSubmit={handleAddCashSubmit} className="flex flex-col justify-center items-center h-full w-full gap-8">
              <input type="number" 
              placeholder="# Account"
              value={addCashAccount}
              onChange={(e) => setAddCashAccount(e.target.value)}
              required
              className="font-poppins font-bold  focus:outline-none border-b tracking-wide "
              />

              <input type="number" 
              placeholder="$ Amount"
              value={addCashAmount}
              onChange={(e) => setAddCashAmount(e.target.value)}
              required
              className="font-poppins font-bold  focus:outline-none border-b tracking-wide "
              />

              <button className="border px-4 py-2 rounded-full bg-[#00BD5F] text-white tracking-wider">Add Cash</button>
              <button className="border px-4 py-2 rounded-full border-green-600 tracking-wider" onClick={handleAddCashClose}>Cancel </button>
            </form>
          </div>
        </Model>
      </section>
      
      
      {/* this functionality section */}
      <section className="flex flex-wrap justify-center items-center m-8 gap-16">
      <button onClick={handleTransferOpen}
      className="w-72 h-72 shadow-2xl rounded-lg flex flex-col justify-center items-center gap-4">
        <Wallet color="#00BD5F" size={72}/>
        <h1 className="text-center font-poppins text-xl uppercase">transfer money</h1>
      </button>
        {/* tansfer money modal */}
        <Model 
        isOpen={transferOpen}
        onRequestClose={handleTransferClose}
        style={{
          content:{
            width: "500px",
            height: "600px",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: "15px"
          },
        }}
        >
          <div className="text-[#302F68] flex flex-col justify-between items-center h-full">
            <div className="flex flex-col justify-center items-center gap-4">
              <Wallet color="#00BD5F" size={72}/>
              <h1 className="font-semibold uppercase">Transfer money</h1>
              <p>Your Balance </p>
              <h2 className="font-semibold ">Rs. {currentUser.balance}</h2>
            </div>

            <form onSubmit={handleTransferSubmit} className="flex flex-col justify-center items-center h-full w-full gap-8">
              <input type="number" 
              placeholder="Account# or Phone#"
              value={receiverAccount}
              onChange={(e) => setReceiverAccount(e.target.value)}
              required
              className="font-poppins font-bold  focus:outline-none border-b tracking-wide "
              />

              <input type="number" 
              placeholder="$ Amount"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              required
              className="font-poppins font-bold  focus:outline-none border-b tracking-wide "
              />

              <button className="border px-4 py-2 rounded-full bg-[#00BD5F] text-white tracking-wider">Send money</button>
              <button className="border px-4 py-2 rounded-full border-green-600 tracking-wider" onClick={handleTransferClose}>Cancel </button>
            </form>
          </div>
        </Model>



      <button onClick={handlePayBillOpen}
      className="w-72 h-72 shadow-2xl rounded-lg flex flex-col justify-center items-center gap-4">
        <ReceiptText color="#00BD5F" size={72}/>
        <h1 className="text-center font-poppins text-xl uppercase">Pay Bill</h1>
      </button>
        {/* paybill */}
      <Model 
        isOpen={payBillOpen}
        onRequestClose={handlePayBillClose}
        style={{
          content:{
            width: "500px",
            height: "600px",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: "15px"
          },
        }}
        >
          <div className="text-[#302F68] flex flex-col justify-between items-center h-full">
            <div className="flex flex-col justify-center items-center gap-4">
              <ReceiptText color="#00BD5F" size={72}/>
              <h1 className="font-semibold uppercase">pay bills</h1>
              <p>Current Balance </p>
              <h2 className="font-semibold ">Rs. {currentUser.balance}</h2>
            </div>

            <form onSubmit={handleBillSubmit} className="flex flex-col justify-center items-center h-full w-full gap-8">
              <input type="number" 
              placeholder="Bill id #"
              value={billNo}
              onChange={(e) => setBillNo(e.target.value)}
              required
              className="font-poppins font-bold  focus:outline-none border-b tracking-wide "
              />

              <input type="number" 
              placeholder="$ Amount"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              required
              className="font-poppins font-bold  focus:outline-none border-b tracking-wide "
              />

              <button className="border px-4 py-2 rounded-full bg-[#00BD5F] text-white tracking-wider">Pay Now</button>
              <button className="border px-4 py-2 rounded-full border-green-600 tracking-wider" onClick={handlePayBillClose}>Cancel </button>
            </form>
          </div>
        </Model>


      <button onClick={handlePhoneOpen}
      className="w-72 h-72 shadow-2xl rounded-lg flex flex-col justify-center items-center gap-4 focus:outline-none">
        <Smartphone color="#00BD5F" size={72}/>
        <h1 className="text-center font-poppins text-xl uppercase">Phone Recharge</h1>
      </button>
        {/* phone recharge */}
      <Model 
        isOpen={phoneOpen}
        onRequestClose={handlePhoneClose}
        style={{
          content:{
            width: "500px",
            height: "600px",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: "15px"
          },
        }}
        >
          <div className="text-[#302F68] flex flex-col justify-between items-center h-full">
            <div className="flex flex-col justify-center items-center gap-4">
              <Smartphone color="#00BD5F" size={72}/>
              <h1 className="font-semibold uppercase">Phone Recharge</h1>
              <p>Current Balance </p>
              <h2 className="font-semibold ">Rs. {currentUser.balance}</h2>
            </div>

            <form onSubmit={handlePhoneSubmit} className="flex flex-col justify-center items-center h-full w-full gap-8">
              <input type="number" 
              placeholder="Phone #"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              required
              className="font-poppins font-bold  focus:outline-none border-b tracking-wide "
              />

              <input type="number" 
              placeholder="$ Amount"
              value={rechargeAmount}
              onChange={(e) => setRechargeAmount(e.target.value)}
              required
              className="font-poppins font-bold  focus:outline-none border-b tracking-wide "
              />

              <button className="border px-4 py-2 rounded-full bg-[#00BD5F] text-white tracking-wider">Pay Now</button>
              <button className="border px-4 py-2 rounded-full border-green-600 tracking-wider" onClick={handlePhoneClose}>Cancel </button>
            </form>
          </div>
        </Model>

      </section>




      {/* dummies */}
      <section className="mt-8 bg-[#00BD5F] p-8 flex justify-center items-center flex-wrap gap-8">
      <div className="w-64 h-64 shadow-2xl rounded-lg flex flex-col justify-center items-center gap-4 bg-white">
        <BicepsFlexed color="#00BD5F" size={64}/>
        <h1 className="text-center font-poppins text-xl uppercase">gym subscriptions</h1>
      </div>
      <div className="w-64 h-64 shadow-2xl rounded-lg flex flex-col justify-center items-center gap-4 bg-white">
        <Bitcoin color="#00BD5F" size={64}/>
        <h1 className="text-center font-poppins text-xl uppercase">Bitcoin</h1>
      </div>
      <div className="w-64 h-64 shadow-2xl rounded-lg flex flex-col justify-center items-center gap-4 bg-white">
        <Wifi color="#00BD5F" size={64}/>
        <h1 className="text-center font-poppins text-xl uppercase">wifi Bill</h1>
      </div>
      <div className="w-64 h-64 shadow-2xl rounded-lg flex flex-col justify-center items-center gap-4 bg-white">
        <Tv color="#00BD5F" size={64}/>
        <h1 className="text-center font-poppins text-xl uppercase">tv Bill</h1>
      </div>
      <div className="w-64 h-64 shadow-2xl rounded-lg flex flex-col justify-center items-center gap-4 bg-white">
        <GraduationCap color="#00BD5F" size={64}/>
        <h1 className="text-center font-poppins text-xl uppercase">school fees</h1>
      </div>
      <div className="w-64 h-64 shadow-2xl rounded-lg flex flex-col justify-center items-center gap-4 bg-white">
        <Hospital color="#00BD5F" size={64}/>
        <h1 className="text-center font-poppins text-xl uppercase">health insurance</h1>
      </div>
      <div className="w-64 h-64 shadow-2xl rounded-lg flex flex-col justify-center items-center gap-4 bg-white">
        <Package color="#00BD5F" size={64}/>
        <h1 className="text-center font-poppins text-xl uppercase">orders payments</h1>
      </div>
      <div className="w-64 h-64 shadow-2xl rounded-lg flex flex-col justify-center items-center gap-4 bg-white">
        <Youtube color="#00BD5F" size={64}/>
        <h1 className="text-center font-poppins text-xl uppercase">Youtube subscription</h1>
      </div>
      </section>

      



    </div>

    
  );
};

export default DashboardPage;