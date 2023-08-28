import React, { useState } from "react";
import pic1 from "./assets/pic1.jpeg";
import pic2 from "./assets/pic2.jpg";
import { toast } from "react-hot-toast";
import FooterCard from "./FooterCard";

function Home() {
  const [longUrl, setlongUrl] = useState("");
  const [ShortUrl, setShortUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (longUrl) {
      fetch("https://url-shortener-r10f.onrender.com/urls", {
        method: "POST",
        body: JSON.stringify({ longUrl }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => result.json())
        .then((data) => {
          setShortUrl(data.shortUrl)
        })
        .catch(error => {
          console.log('Error:', error.message)
        })
    }
    setlongUrl("");
  };
  const copy = () => {
    navigator.clipboard.writeText(`${ShortUrl}`).then(() => {
      toast.success("Copied to clipboard");
    });
  };
  return (
    <div className=" relative h-screen flex flex-col items-center object-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
     <div className=" h-1/2">
     <img src={pic1} alt="" className="h-full w-screen object-cover" />
      <img src={pic2} alt="" className=" h-full w-screen object-cover" />
     </div>
      <div className=" absolute top-1/2 -translate-y-1/2 flex flex-col gap-5">
        <div className="rounded-md tracking-wide font-Poppins py-2 px-3 grid place-items-center text-center  backdrop-blur-sm bg-white/60">
          <h1 className=" font-Raleway  font-bold text-2xl">TinyUrl</h1>
          <p >TinyUrl is a free tool to shorten a url.</p>
          <p>
            Use our URL Shortener to create a rememberable and easy-to-share URL
          </p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className=" bg-white shadow-lg py-4 px-2 w-full flex flex-col items-center gap-4 rounded-md font-Poppins"
          >
            <div className=" w-full flex items-center gap-4">
              <input
                type="url"
                onChange={(e) => setlongUrl(e.target.value)}
                value={longUrl}
                placeholder="Enter the link here"
                className=" indent-1 w-full h-8 outline-none bg-none border border-black rounded"
              />
              <button className=" bg-black text-white py-1 px-4 rounded">
                Shorten
              </button>
            </div>
            {ShortUrl && (
              <div className=" w-full">
                <p htmlFor="shortUrl" className=" inline-block">
                  Your TinyUrl:
                </p>
                <div className=" my-1 flex w-full items-center gap-4">
                  <input
                    id="shortUrl"
                    value={ShortUrl}
                    readOnly
                    className=" indent-1 h-8 w-full outline-none bg-none border border-black rounded"
                  />
                  <button
                    onClick={copy}
                    className=" bg-black text-white py-1 px-6 rounded"
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}
          </form>
          <div className=" grid place-items-center my-5" >
          <FooterCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
