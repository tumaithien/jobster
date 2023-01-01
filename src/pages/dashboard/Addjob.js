import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormRow, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import {
  clearValues,
  createJob,
  handleChange,
} from "../../feartures/job/jobSlice";
import { toast } from "react-toastify";

const Addjob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOption,
    jobType,
    statusOption,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: "jobLocation", value: user.location }));
    }
  });
  const dispatch = useDispatch();
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !jobLocation || !position) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Job Location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name="status"
            list={statusOption}
            value={status}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name="jobType"
            labelText="Job Type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOption}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Addjob;
