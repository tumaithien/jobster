import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow } from "../../components/";
import { updateUser } from "../../feartures/user/userSlice";

const Profile = () => {
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, lastName, email, location } = userData;
    if (!name || !lastName || !email || !location) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    dispatch(updateUser(userData));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow
            name="name"
            type="text"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            name="lastName"
            type="text"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            name="email"
            type="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            name="location"
            type="text"
            value={userData.location}
            handleChange={handleChange}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Save change"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
