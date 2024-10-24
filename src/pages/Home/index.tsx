import React from "react";
import { Button } from "@/components/ui/button"


const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-black font-bold text-3xl mt-9">
        Salve
      </h1>
      <Button>CLICKA AI</Button>
    </div>
  );
};

export default Home;