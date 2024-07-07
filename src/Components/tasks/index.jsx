import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";

const Tasks = () => {
  const [userID, setuserID] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    status: "InProgress",
    taskName: "",
    taskInfo: "",
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
    setNewTask({
      status: "InProgress",
      taskName: "",
      taskInfo: "",
    });
  };
  const getTasks = async () => {
    await axios
      .get("http://localhost:3000/task/getAllTask", {
        withCredentials: true,
      })
      .then((val) => {
        setTasks(val.data.response);
      })
      .catch((e) => {});
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };
  const handleCreateTask = async () => {
    newTask.userId = userID;
    await axios
      .post("http://localhost:3000/task/createTask", newTask, {
        withCredentials: true,
      })
      .then((val) => {
        handleClose();
        console.log(val);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleDeleteTask = async (id) => {
    await axios
      .delete("http://localhost:3000/task/deleteTask?taskId=" + id, {
        withCredentials: true,
      })
      .then((val) => {
        handleClose();
        console.log(val);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    void getTasks();
    const uuid = localStorage.getItem("userId");
    setuserID(uuid);
  }, [newTask]);

  const TaskCard = ({ taskName, taskInfo, status, id }) => {
    return (
      <div className="w-1/4 p-2  h-3/6 ">
        <div
          className={`p-2 w-full h-full bg-gray-200  rounded-md shadow-2xl shadow-gray-200 border-green-300 border-r-8 ${
            status === "Completed" && "border-r-8 border-r-green-400"
          } ${status === "Delayed" && "border-r-8 border-r-red-400"} ${
            status === "InProgress" && "border-r-8 border-r-yellow-400 "
          } `}
        >
          <div className="w-full h-2/3 ">
            <p className="text-lg font-bold text-gray-800 h-1/4">{taskName}</p>
            <p className="text-md font-normal text-gray-600 flex overflow-hidden h-3/4">
              {taskInfo}{" "}
            </p>
          </div>
          <div className="w-full h-1/3 flex justify-center gap-x-4 items-center">
            <p className="text-md text-white bg-blue-600 py-1 px-4 w-20 flex justify-center rounded-md cursor-pointer">
              Edit
            </p>
            <p
              onClick={() => handleDeleteTask(id)}
              className="text-md text-white bg-blue-600 py-1 px-4 w-20 flex rounded-md cursor-pointer"
            >
              Delete
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className=" w-full h-full p-4 ">
        <div className="w-full h-2/6">
          <div className="w-full h-1/2 flex justify-between items-start">
            <p className="text-2xl font-semibold text-blue-600">Tasks</p>
            <p
              onClick={handleOpen}
              className="text-md font-semibold text-white bg-blue-600 rounded-md py-2 px-4 cursor-pointer"
            >
              {"Create Task +"}
            </p>
          </div>
          <div className="w-full h-1/2  flex justify-center items-center">
            <input
              placeholder="Search task here..."
              required
              type="text"
              className="rounded-md p-2 w-4/6 bg-gray-200 rounded-r-none "
            />
            <p className="text-md font-semibold text-white bg-blue-600 rounded-l-none rounded-md py-2 px-8 cursor-pointer">
              {"Search"}
            </p>
          </div>
        </div>
        <div className="w-full h-4/6">
          {tasks.length !== 0 ? (
            <div className="w-full h-full flex flex-wrap overflow-y-scroll">
              {tasks
                .filter((val) => val.user.userId === userID)
                .map((val, i) => (
                  <TaskCard
                    key={i}
                    id={val.taskId}
                    taskInfo={val.taskInfo}
                    taskName={val.taskName}
                    status={val.status}
                  />
                ))}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center flex-col">
              <p className="text-gray-800 text-4xl font-semibold py-1">OOPS!</p>
              <p className="text-gray-500 text-xl font-normal py-1">
                No tasks to show!
              </p>
            </div>
          )}
        </div>
      </div>
      <Modal size="lg" centered show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Task</Modal.Title>{" "}
        </Modal.Header>
        <div className="p-2 flex flex-col">
          <input
            type="text"
            className="bg-white border-2 outline-none border-gray-300 p-2 m-2 rounded-md"
            placeholder="add task new here..."
            required
            value={newTask.taskName}
            name="taskName"
            onChange={handleChange}
          />
          <textarea
            value={newTask.taskInfo}
            name="taskInfo"
            onChange={handleChange}
            className="bg-white border-2 p-2 border-gray-300 h-40 m-2 resize-none rounded-md outline-none"
            placeholder="enter description here"
            required
          />
          <select
            value={newTask.status}
            name="status"
            onChange={handleChange}
            className="bg-white p-2 rounded-md border-gray-300 border-2 m-2"
          >
            <option value="InProgress">InProgress</option>
            <option value="Completed">Completed</option>
            <option value="Delayed">Delayed</option>
          </select>
        </div>
        <Modal.Footer>
          <p
            onClick={handleClose}
            className="text-md text-white bg-gray-600 py-1 px-4 w-20 flex justify-center rounded-md cursor-pointer"
          >
            Close
          </p>{" "}
          <p
            onClick={handleCreateTask}
            className="text-md text-white bg-blue-600 py-1 px-4 w-20 flex justify-center rounded-md cursor-pointer"
          >
            Save
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Tasks;
