import React, { useState, useMemo, useEffect } from "react";
import { user } from "../../utils/api";
import "./table.css";

function UserTable() {
  const [users, setUsers] = useState([]);

  // const useHandle = (users, sorted) => {

  // };
  const useTable = () => {
    const [sortedField, setSortedField] = useState({});

    const useUsers = useMemo(() => {
      let sortedUsers = [...users];

      sortedUsers.sort((a, b) => {
        if (a.name[sortedField.key] < b.name[sortedField.key]) {
          return sortedField.direction === "ascending" ? -1 : 1;
        }
        if (a.name[sortedField.key] > b.name[sortedField.key]) {
          return sortedField.direction === "ascending" ? 1 : -1;
        }
        if (a[sortedField.key] < b[sortedField.key]) {
          return sortedField.direction === "ascending" ? -1 : 1;
        }
        if (a[sortedField.key] > b[sortedField.key]) {
          return sortedField.direction === "ascending" ? 1 : -1;
        }
        if (a.dob[sortedField.key] < b.dob[sortedField.key]) {
          return sortedField.direction === "ascending" ? -1 : 1;
        }
        if (a.dob[sortedField.key] > b.dob[sortedField.key]) {
          return sortedField.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
      return sortedUsers;
    }, [users, sortedField]);

    const requestSort = (key) => {
      let direction = "ascending";
      if (sortedField.key === key && sortedField.direction === "ascending") {
        direction = "descending";
      }
      setSortedField({ key, direction });
    };
    return { items: useUsers, requestSort };
  };
  const { items, requestSort, sortedField } = useTable(users);

  useEffect(() => {
    user
      .getUsers()
      .then((user) => {
        setUsers(user.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button onClick={() => requestSort("first")}>first name</button>
          </th>
          <th>
            <button onClick={() => requestSort("last")}> last name </button>
          </th>
          <th>
            <button onClick={() => requestSort("email")}> email </button>
          </th>
          <th>
            <button onClick={() => requestSort("age")}>age</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((user) => {
          console.log(user);
          return (
            <tr key={user.id.value}>
              <td> First Name {user.name.first} </td>
              <td> Last Name {user.name.last} </td>
              <td> Email: {user.email} </td>
              <td> age {user.dob.age} </td>
              <td> ssn {user.id.value} </td>
              <td> phone: {user.phone} </td>
              <td>
                <img src={user.picture.large} alt="new" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserTable;
