import React, { useState } from "react";

import AddTask from "../AddTask";
import ListTask from "../ListTask";

import { useParams } from "react-router-dom";
const Home = () => {
  const [TriggerCreate, setTriggerCreate] = useState(false); // flag of shoing form
  const params = useParams();
  const userID = params.userID;
  return (
    <React.Fragment>
      <AddTask
        parentID={undefined}
        userID={userID}
        setTriggerCreate={setTriggerCreate}
      />
      <ListTask
        parentID={undefined}
        TriggerCreate={TriggerCreate}
        userID={userID}
        setTriggerCreate={setTriggerCreate}
      />
    </React.Fragment>
  );
};

export default Home;
