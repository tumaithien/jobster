import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../feartures/allJobs/allJobsSlice";
import Loading from "../../components/Loading";
import { StatsContainer, ChartsContainer } from "../../components";

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
