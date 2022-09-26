import "./App.css";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
// import { submit } from "./actions";
import { useState } from "react";
function App() {
  const dispatch = useDispatch();

  const myContact = useSelector((state) => state.contact);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phonenumber, setNumber] = useState("");
  const [emailaddress, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");
  const [emailError, setEmailError] = useState("");

  const getName = (e) => {
    let uname = e.target.value;
    if (/^[A-Za-z ]+$/.test(uname)) {
      setName(e.target.value);
      setNameError("valid");
    } else {
      setName(e.target.value);
      setNameError("not valid");
    }
  };

  const getAddress = (e) => {
    let uAddress = e.target.value;
    if (/^[A-Za-z0-9\s,./' ]+$/.test(uAddress)) {
      setAddress(e.target.value);
      setAddressError("valid");
    } else {
      setAddress(e.target.value);
      setAddressError("not valid");
    }
  };

  const getCity = (e) => {
    let uCity = e.target.value;
    if (/^[A-Za-z ]+$/.test(uCity)) {
      setCity(e.target.value);
      setCityError("valid");
    } else {
      setCity(e.target.value);
      setCityError("not valid");
    }
  };

  const getphoneNumber = (e) => {
    let uPhoneNumber = e.target.value;
    if (/^[6-9]\d{9}$/.test(uPhoneNumber)) {
      setNumber(e.target.value);
      setPhoneNoError("valid");
    } else {
      setNumber(e.target.value);
      setPhoneNoError("not valid");
    }
  };

  const getEmail = (e) => {
    let uEmail = e.target.value;
    if (
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        uEmail
      )
    ) {
      setEmail(e.target.value);
      setEmailError("valid");
    } else {
      setEmail(e.target.value);
      setEmailError("not valid");
    }
  };

  const submit = () => {
    if (
      nameError === "valid" &&
      addressError === "valid" &&
      cityError === "valid" &&
      phoneNoError === "valid" &&
      emailError === "valid"
    ) {
      let temp = {
        name: name,
        address: address,
        city: city,
        phoneNo: phonenumber,
        email: emailaddress,
      };
      dispatch({
        type: "ADD_HERE",
        data: temp,
      });
      setName("");
      setAddress("");
      setCity("");
      setEmail("");
      setNumber("");
      setNameError("");
      setAddressError("");
      setCityError("");
      setPhoneNoError("");
      setEmailError("");
    }
  };

  const removeUserFromContact = (e, indx) => {
    dispatch({
      type: "remove",
      index: indx,
    });
  };

  return (
    <div className="App">
      <h3>Add Contact</h3>
      <div style={{ marginTop: "20px", display: "grid", placeItems: "center" }}>
        <div className="inputContainer">
          <label>Name</label>
          <input
            type="text"
            placeholder="enter name"
            value={name}
            onChange={getName}
          />
        </div>
        {nameError === "not valid" ? (
          <span className="Error">{nameError}</span>
        ) : (
          <span className="noError">{nameError}</span>
        )}
        <div className="inputContainer">
          <label>Address</label>
          <input
            type="text"
            placeholder="enter address"
            value={address}
            onChange={getAddress}
          />
        </div>
        {addressError === "not valid" ? (
          <span className="Error">{addressError}</span>
        ) : (
          <span className="noError">{addressError}</span>
        )}
        <div className="inputContainer">
          <label>City</label>
          <input
            type="text"
            placeholder="enter city"
            value={city}
            onChange={getCity}
          />
        </div>
        {cityError === "not valid" ? (
          <span className="Error">{cityError}</span>
        ) : (
          <span className="noError">{cityError}</span>
        )}
        <div className="inputContainer">
          <label>Phone Number</label>
          <input
            type="number"
            placeholder="enter phoneNo."
            value={phonenumber}
            onChange={getphoneNumber}
          />
        </div>
        {phoneNoError === "not valid" ? (
          <span className="Error">{phoneNoError}</span>
        ) : (
          <span className="noError">{phoneNoError}</span>
        )}
        <div className="inputContainer">
          <label>Email No.</label>
          <input
            type="text"
            placeholder="enter email"
            value={emailaddress}
            onChange={getEmail}
          />
        </div>
        {emailError === "not valid" ? (
          <span className="Error">{emailError}</span>
        ) : (
          <span className="noError">{emailError}</span>
        )}

        <button
          style={{ marginTop: "10px", marginBottom: "30px" }}
          onClick={submit}
        >
          submit
        </button>
      </div>
      <div>
        <h4>CONTACT LIST</h4>
      </div>
      <div className="tableContainer">
        {myContact.length > 0 ? (
          <table>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Phone No.</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            {myContact.map((item, index) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td>{item.phoneNo}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      style={{ backgroundColor: "red" }}
                      id={index}
                      onClick={(e) => removeUserFromContact(e, index)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
