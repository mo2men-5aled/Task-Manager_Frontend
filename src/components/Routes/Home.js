import React from "react";
import AddTask from "../AddTask";
import ListTask from "../ListTask";

const Home = () => {
  return (
    <React.Fragment>
      <AddTask />
      <ListTask
        parentID={undefined}
        TriggerCreate={false}
        setTriggerCreate={false}
      />
    </React.Fragment>
  );
};

export default Home;
