import React from "react";
import "./CSS/Home.css";
import Frame from "./assets/Frame.svg";
import Member from "./Member";
import Test from "./Test"
import { useState } from "react";
const Home = () => {
  let [value,setValue] = useState(6);
  let [count, setCount] = useState(6);
  let[mem,setMem] =useState(true);
  let membersCount = Array(count).fill(null);
  function handleMember(e) {
    let a = e.target.innerText;
    if (a === "1") {
      setCount(1);
      setValue(1);
    } else if (a === "2") {
      setCount(2);
      setValue(2);
    } else if (a === "3") {
      setCount(3);
      setValue(3);
    } else if (a === "+" && count < 9) {
      setCount((prev) => prev + 1);
      setValue((prev) => prev + 1);
    }
  
  }


  function handleTest(){
    setMem(false)
  }

  return (
    <>
      {mem?<div className="container">
        <div className="cell cell-1">
          <div className="frame">
            <img src={Frame} alt="" />
          </div>
        </div>
        <div className="cell cell-2">
          <p>Get Your Best Travel Travel Insurance</p>
            <div className="rows">
              <div className="row-1">
                <div className="count one" onClick={handleMember}>
                  1
                </div>
                <div className="count two" onClick={handleMember}>
                  2
                </div>
                <div className="count three" onClick={handleMember}>
                  3
                </div>
                <div className="count more" onClick={handleMember}>
                  +
                </div>
              </div>
              <div className="row-2">
                {membersCount.map((e, i) => (
                  <Member data={i} />
                ))}
              </div>
              <div className="row-3">
              <button className="space-btn" onClick={handleTest}>Next  <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
        </div>
      </div>:<Test data={value}/>}
    </>
  );
};

export default Home;
