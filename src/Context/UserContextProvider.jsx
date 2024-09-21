import userContext from "./UserContext";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const createUser = (newUserData) => {
    const newUser = {
      id: Date.now(),
      ...newUserData,
    };

    const newUsers = [...users, newUser];
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));

    Swal.fire({
      title: "SignUp",
      text: "Sign up successful!",
      icon: "success",
    });
  };


  const getCurrentUser = (loginData) => {
    const findUser = users.find(
      (user) =>
        user.phone === loginData.phoneNo && user.PinCode === loginData.password
    );
    if (findUser) {
      setCurrentUser({ ...findUser });
      localStorage.setItem("currentUser", JSON.stringify(findUser));

      // Alert part
      let timerInterval;
      Swal.fire({
        icon: "success",
        title: "Sign In successful!",
        html: "Going to Dashboard in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          window.location.href = "/dashboard";
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User not found! Please signup first!",
        });
        }
    };

        useEffect(() => {
            const savedUser = JSON.parse(localStorage.getItem("currentUser"));
            if (savedUser) {
            setCurrentUser(savedUser);
            }
        }, []);

       
        // add cash functionality
    const getAddCash = (addCashData) => {
        const user = users.find(user => user.phone === addCashData.addCashAccount);
        if (user) {
            const newBalance = Number(user.balance) + Number(addCashData.addCashAmount);
            const updatedUser = {...user, balance: newBalance};
            const updatedUsers = users.map(u => u.phone === user.phone ? updatedUser : u);
            setUsers(updatedUsers);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            if (user.phone === currentUser.phone) {
                setCurrentUser(updatedUser);
                localStorage.setItem("currentUser", JSON.stringify(updatedUser));
            }
            Swal.fire({
                icon: "success",
                title: "Cash Added successfully!",
                text: "Your new balance is: " + newBalance,
                });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "User not found! Please check user account first!",
                });
        };
    };

    // transfer money functionality

    const getTransferMoney = (transferData) => {
        const receiver = users.find(user => user.phone === transferData.receiverAccount);
        if (receiver) {
            
            const newReceiverBalance = Number(receiver.balance) + Number(transferData.transferAmount);
           
            const newCurrentUserBalance = Number(currentUser.balance) - Number(transferData.transferAmount);
            
            const updatedReceiver = {...receiver, balance: newReceiverBalance};
            const updatedCurrentUser = {...currentUser, balance: newCurrentUserBalance};
            
            const updatedUsers = users.map(u => u.phone === receiver.phone ? updatedReceiver : u);
            
            updatedUsers.splice(updatedUsers.indexOf(currentUser), 1, updatedCurrentUser);
            
            setUsers(updatedUsers);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            
            setCurrentUser(updatedCurrentUser);
            localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));
            
            Swal.fire({
                icon: "success",
                title: "Transfer successful!",
                text: "Your remaining balance is: " + newCurrentUserBalance,
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "User not found! Please check user account first!",
            });
        };
    };


      //  bill payment 

      const PayBill = (billData) => {
        const userBill = users.find(user => user.phone === billData.billNo);

        if(userBill){
          const BalanceAfterPayment = Number(currentUser.balance) - Number(billData.billAmount);

          const userBalanceAfterPayment = {...currentUser, balance: BalanceAfterPayment};
          
          setCurrentUser(userBalanceAfterPayment);
          localStorage.setItem("currentUser", JSON.stringify(userBalanceAfterPayment));
          
          const updatedUsers = users.map(u => u.phone === userBill.phone ? userBalanceAfterPayment : u);
          setUsers(updatedUsers);
          localStorage.setItem("users", JSON.stringify(updatedUsers));

          Swal.fire({
            icon: "success",
            title: "Bill Payed successful!",
            text: "Your remaining balance is: " + BalanceAfterPayment,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Bill payment failed!",
          });
        };
      };


      // phone recharge 
      const getPhoneRecharge = (rechargeData) => {
        const userRecharge = users.find(user => user.phone === rechargeData.phoneNo);
        
        if(userRecharge){
          
          const newBalance = Number(currentUser.balance) - Number(rechargeData.rechargeAmount);
          
          if(newBalance >= 0){
            const updatedUser = {...currentUser, balance: newBalance};
            setCurrentUser(updatedUser);
            localStorage.setItem("currentUser", JSON.stringify(updatedUser));
            
            const updatedUsers = users.map(u => u.phone === userRecharge.phone ? updatedUser : u);
            setUsers(updatedUsers);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            
            Swal.fire({
              icon: "success",
              title: "Recharge successful!",
              text: "Your new balance is: " + newBalance,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Recharge failed! Insufficient balance!",
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User not found! Please check user account first!",
          });
        };
      };
     
  return (
    <userContext.Provider
      value={{ createUser, users, getCurrentUser, currentUser, setCurrentUser, getAddCash,PayBill, getTransferMoney,getPhoneRecharge }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
