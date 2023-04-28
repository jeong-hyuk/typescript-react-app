import React from "react";
import Props from "./Props";

export interface MyProps {
  name: string;
  age: number;
  hobbies?: string[];
}

export default function ParentProps() {
  const jack: MyProps = {
    name: "김정혁",
    age: 25,
    hobbies: ["술마시기", "달리기"],
  };
  return (
    <>
      {/* <Props name={jack.name} age={jack.age} hobbies={jack.hobbies} /> */}
      <Props {...jack} />
    </>
  );
}
