import React, { useRef, useState } from "react";
import List from "./List";

export interface Task {
  task: string;
  done: boolean;
}

export default function Todo() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const testList: Task[] = [
    { task: "ts 배우기", done: false },
    { task: "jest 배우기", done: false },
  ];

  const addTask = (): void => {
    // let copyArr: Task[] = [...taskList];
    if (inputRef.current !== null) {
      let newTask: Task = { task: inputRef.current.value, done: false };
      setTaskList([...taskList, newTask]);
      // copyArr.push(newTask);
      // setTaskList((cur: Task[]) => copyArr);
      // inputRef.current.value = "";
    }
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={addTask}>할 일 추가</button>
      <h1>할 일 목룍</h1>
      {taskList?.map((el, idx) => (
        <List task={el.task} done={el.done} key={idx} />
      ))}

      {/* {testList.map((el, idx) => (
        <List task={el.task} done={el.done} key={idx} />
      ))} */}
    </>
  );
}
