import React, { useState } from "react";
import AddTask from "../AddTask";
import ListTask from "../ListTask";

const Home = () => {
  const [TriggerCreate, setTriggerCreate] = useState(false); // flag of shoing form
  return (
    <React.Fragment>
      <AddTask parentID={undefined} setTriggerCreate={setTriggerCreate} />
      <ListTask
        parentID={undefined}
        TriggerCreate={TriggerCreate}
        setTriggerCreate={setTriggerCreate}
      />
    </React.Fragment>
  );
};

export default Home;
