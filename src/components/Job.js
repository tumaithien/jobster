import React from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/Job";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import JobInfo from "./JobInfo";
import moment from "moment/moment";

const Job = ({
  company,
  createdAt,
  position,
  jobType,
  jobLocation,
  _id,
  status,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format("MMM DD, YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
        <div className="content">
          <div className="content-center">
            <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
            <JobInfo icon={<FaCalendarAlt />} text={date} />
            <JobInfo icon={<FaBriefcase />} text={jobType} />
            <div className={`status ${status}`}>{status}</div>
          </div>
          <footer>
            <div className="actions">
              <Link
                to="/add-job"
                className="btn edit-btn"
                onClick={() => console.log("edit job")}
              >
                Edit
              </Link>
              <button
                type="button"
                className="btn delete-btn"
                onClick={() => console.log("delete job")}
              >
                Delete
              </button>
            </div>
          </footer>
        </div>
      </header>
    </Wrapper>
  );
};

export default Job;
