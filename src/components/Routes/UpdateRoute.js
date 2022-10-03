import React, { useState } from "react";

import AddTask from "../AddTask";
import TaskUpdate from "../UpdateTask";
import ListTask from "../ListTask";

const UpdateRoute = (Task) => {
  const [parentID, setparentID] = useState(Task.match.params.id);
  const [TriggerCreate, setTriggerCreate] = useState(false); // flag of shoing form

  return (
    <React.Fragment>
      <AddTask
        parentID={parentID}
        TriggerCreate={TriggerCreate}
        setTriggerCreate={setTriggerCreate}
      />
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
