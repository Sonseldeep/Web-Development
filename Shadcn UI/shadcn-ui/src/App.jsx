import React from "react";

import { Button } from "@/components/ui/button";
import OTP_UI from "./OTP_UI";
import CardWithForm from "./CardWithForm";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <>
      <div className=" flex justify-center items-center h-screen w-screen flex-col bg-blue-50">
        <SearchBar />
        <OTP_UI />
        <div>
          <Skeleton className="w-[300px] h-[30px] rounded-full mb-5 " />
        </div>
        <CardWithForm />
        <h1 className="text-3xl font-semibold"> Shadcn UI componets</h1>
        <div className="mb-5">
          <Button>Primay</Button>
        </div>
        <div className="mb-5">
          <Button variant="destructive">Destructive</Button>
        </div>
        <div className="mb-5">
          <Button variant="secondary">Secondary</Button>
        </div>
        <div className="mb-5">
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="mb-5">
          <Button variant="sandeep">Ghost</Button>
        </div>
      </div>
    </>
  );
};

export default App;
