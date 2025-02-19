import React, { useEffect } from "react";

const Services = () => {
  // useEffect le callback ra empty array accept garxa, and return { return le pani callback linxa}
  useEffect(() => {
    // component create hudaa matra chalxa
    console.log("Service Component is created");
    return () => {
      console.log("Service Component is deleted");
    };
  }, []);
  return <div>Services</div>;
};

export default Services;
