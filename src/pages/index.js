import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [value, setValue] = useState("Hello");

  useEffect(() => {
    console.log("here now");
  }, []);
  const Navigate = () => {
    setValue("Hiiiii");
  };
  return (
    <>
      <div onClick={Navigate}>
        <h1>BLOG APP {value}</h1>
      </div>
    </>
  );
}
