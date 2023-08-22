import React from "react";
import pic1 from "./assets/pic1.jpeg";
function Home() {
  return (
    <div className=" relative h-screen flex flex-col items-center object-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <img src={pic1} alt="" className=" h-96 w-screen object-cover" />
      <div className=" absolute top-1/2 -translate-y-1/2 flex flex-col gap-10">
        <div className="rounded-md py-2 px-3 grid place-items-center text-center  backdrop-blur-sm bg-white/60">
          <h1 className=" font-Raleway font-bold text-2xl">TinyUrl</h1>
          <p>TinyUrl is a free tool to shorten a url.</p>
          <p>
            Use our URL Shortener to create a rememberable and easy-to-share URL
          </p>
        </div>
        <div>
          <form className=" bg-white py-3 px-2 w-full flex items-center gap-4 rounded-md">
            <input type="text" placeholder="Enter the link here" className=" w-full h-8 outline-none bg-none"  />
            <button className=" bg-black text-white py-1 px-4 rounded">Shorten</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
