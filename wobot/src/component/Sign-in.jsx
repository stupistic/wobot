/* eslint-disable jsx-a11y/alt-text */
import "./Sign-in.css";
import logo from "./logo.svg";
import Dots from "./Solid_lines.svg";

function SignIn(){
  return (
    <>
      <img className="logo" src={logo} />
      <div className="Container">
        <div className="Header">
          <div className="Header Heading">
            <img src={Dots} className="dots" />
            <h3 className="HeadText">It's a delight to have you onboard</h3>
          </div>
          <caption className="HeaderInfo">
            Help us know you better.<br></br>(This is how we optimize Wobot as
            per your business needs)
          </caption>
        </div>
        <div className="FormBase">
          <form className="Form">
            <label className="Label1">Company name</label>
            <input
              className="form-input"
              type="text"
              placeholder="e.g Example Inc"
            />
          </form>
          <form className="Form">
            <label className="Label1">Industry</label>
            <select className="select-input">
              <option value="Select">Select</option>
              <option value="option"></option>
            </select>
          </form>
          <span>Company size</span>
          <div className="Butt">
            <div>
              <button className="Button">1-20</button>
            </div>
            <div>
              <button className="Button">21-50</button>
            </div>
            <div>
              <button className="Button" style={{backgroundColor:'#3766E8',color:'white'}}>51-200</button>
            </div>
            <div>
              <button className="Button">201-500</button>
            </div>
            <div>
              <button className="Button">500+</button>
            </div>
          </div>
          <button className="Clickme" type="submit">Get Started</button>
        </div>
      </div>
      
    </>
  );
};

export default SignIn;
