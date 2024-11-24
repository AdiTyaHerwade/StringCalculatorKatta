import React, { useEffect, useState } from "react";

export default function NewComp() {
  const [inputVal, setInputVal] = useState("");
  const [addition, setAddition] = useState(0);
  const [err, setErr] = useState(false);
  const [errExp, setErrExp] = useState(false);
  const [errNAN, setErrNAN] = useState(false);
  const [negArr, setNegArr] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    setInputVal(e.target.value);
  };

  const handleClck = () => {
    setErrNAN(false);

    setErr(false);

    //  console.log(inputVal, typeof inputVal);
    if (inputVal[0] == "/") {
      setErrExp(true);
      let char = inputVal[3];

      const arr = inputVal.split(/[\\n]/);
      const brr =
        arr[2]?.split(inputVal.charAt(2)) || arr[1]?.split(inputVal.charAt(2));
      console.log(brr);
      console.log(arr, "asd");
      let res = add(brr);
      setAddition(res);
    } else if (inputVal) {
      setErrExp(false);
      const arr = inputVal.split(/[\\n,]/);
      let res = add(arr);
      setAddition(res);
    } else {
      setErrExp(false);
      console.log("No Input To Calculate");
    }
  };

  const add = (arr) => {
    let total = 0;
    const brr = [];
    console.log(arr);
    arr?.map((val) => {
      if (!isNaN(val)) {
        try {
          if (Number(val) < 0) {
            throw new Error(`Negative numbers are not allowed. ${val}`);
          }
          total += Number(val);
        } catch (error) {
          setErr(true);
          brr.push(val);
          console.error("Error:", error.message);
        }
      } else {
        setErrNAN(true);
        console.log(val, "is not a number");
      }
    });

    setNegArr(brr);
    return total;
  };

  useEffect(() => {
    if (negArr.length > 0) {
      let res = "";
      negArr.map((val) => {
        res += val + ", ";
      });
      res += "are negative numbers. ";
      console.log(res);
      setErrMsg(res);
    }
  }, [negArr]);
  return (
    <div className="String">
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={inputVal}
          style={{
            margin: "2px",
            width: "300px",
            height: "35px",
            padding: "5px",
            borderRadius: "8px",
          }}
          placeholder="Input Numbers ',' seperated."
          label={"user input"}
        />
        <br></br>
        <button className="btn" variant="outlined" onClick={handleClck}>
          Addition
        </button>
        <button
          className="btn"
          variant="outlined"
          onClick={() => {
            setAddition(0);
            setErr(false);
            setErrExp(false);
            setErrNAN(false);
            setNegArr([]);
            setInputVal("");
          }}
        >
          Clear
        </button>
      </div>
      <div className="userMsg">
        <div style={{ marginTop: "10px" }}>
          Total Addition of input fields number is {addition}.
        </div>
        {err && (
          <div style={{ fontSize: "19px", backgroundColor: "#c8cee3a6" }}>
            <p>Exception found with Negative Numbers, </p>
            {errMsg}
          </div>
        )}
        {errExp && (
          <p style={{ fontSize: "14px", backgroundColor: "#c8cee3a6" }}>
            * String found with special delimiter.
          </p>
        )}
        {errNAN && (
          <p style={{ fontSize: "14px", backgroundColor: "#c8cee3a6" }}>
            * Input fields String contains not a number Value.
          </p>
        )}
      </div>
    </div>
  );
}
