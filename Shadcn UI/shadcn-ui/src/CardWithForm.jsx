import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

const CardWithForm = () => {
  return (
    <div className="mb-4">
      <Card>
        <CardHeader>
          <CardTitle>Data Science</CardTitle>
          <CardDescription>Recent Trend</CardDescription>
        </CardHeader>
        <CardContent>
          <p>SQL, Python</p>
        </CardContent>
        <CardFooter>
          <p>power bi</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardWithForm;
