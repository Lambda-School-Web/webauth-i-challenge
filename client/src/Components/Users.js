import React, { useEffect, useState } from "react";
import { axiosWithHeader } from "./axiosWithHeader";

const Users = () => {
  const [usersArr, setUsersArr] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axiosWithHeader().get("users");
      setUsersArr(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {usersArr.map(user => {
        return (
          <>
            <p>id: {user.id}</p>
            <p>username: {user.username}</p>
            <p>password: {user.password}</p>
          </>
        );
      })}
    </div>
  );
};

export default Users;
