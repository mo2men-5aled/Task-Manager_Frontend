import React, { useState } from "react";
import AddTask from "../AddTask";
import ListTask from "../ListTask";
import { useParams } from "react-router-dom";
const Home = () => {
  const [TriggerCreate, setTriggerCreate] = useState(false); // flag of shoing form
  const params = useParams();
  console.log(params);
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
