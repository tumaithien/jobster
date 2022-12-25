import { v4 as uuidv4 } from "uuid";
import { IoBarChart } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: uuidv4(),
    text: "stats",
    path: "/",
    icon: <IoBarChart />,
  },
  {
    id: uuidv4(),
    text: "all jobs",
    path: "all-jobs",
    icon: <MdQueryStats />,
  },
  {
    id: uuidv4(),
    text: "add job",
    path: "add-job",
    icon: <FaWpforms />,
  },
  {
    id: uuidv4(),
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
];
export default links;
