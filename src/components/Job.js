import React from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/Job";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <h4>more content</h4>
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
