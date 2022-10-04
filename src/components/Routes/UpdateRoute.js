import React, { useState } from "react";

import AddTask from "../AddTask";
import TaskUpdate from "../UpdateTask";
import ListTask from "../ListTask";

const UpdateRoute = (Task) => {
  const parentID = Task.match.params.id;
  const [TriggerCreate, setTriggerCreate] = useState(false); // flag of shoing form

  console.log(parentID);
  return (
    <React.Fragment>
      <AddTask parentID={parentID} setTriggerCreate={setTriggerCreate} />
      <TaskUpdate parentID={parentID} />
      <ListTask
        parentID={parentID}
        TriggerCreate={TriggerCreate}
        setTriggerCreate={setTriggerCreate}
      />
    </React.Fragment>
  );
};

export default UpdateRoute;
