import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Modal from "react-custom-modal-blackemesa";
import "react-custom-modal-blackemesa/src/Modal.css";

const EmployeeListComponent = () => {
    const employees = useSelector((state) => state.employees.employees); 
    const [search, setSearch] = useState(""); 
    const [entries, setEntries] = useState(10); 
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {

      setFilteredData(
        employees.filter(
          (item) =>
            item.firstName.toLowerCase().includes(search.toLowerCase()) ||
            item.lastName.toLowerCase().includes(search.toLowerCase()) ||
            item.department.toLowerCase().includes(search.toLowerCase()) ||
            item.city.toLowerCase().includes(search.toLowerCase()) ||
            item.state.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, [search, employees]);

    const handleSearchChange = (e) => {
      setSearch(e.target.value);
    };

    const handleEntriesChange = (e) => {
      setEntries(parseInt(e.target.value));
    };

    return (
      <div className="data-table-container">
        <div className="data-table-header">
          <div className="data-table-entries">
            Show{" "}
            <select value={entries} onChange={handleEntriesChange}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>{" "}
            entries
          </div>
          <div className="data-table-search">
            Search: <input type="text" value={search} onChange={handleSearchChange} />
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Start Date</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.slice(0, entries).map((item, index) => (
                <tr key={index}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.startDate}</td>
                  <td>{item.department}</td>
                  <td>{item.dateOfBirth}</td>
                  <td>{item.street}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  <td>{item.zipCode}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="data-table-no-data">
                  No data available in table
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="data-table-footer">
          <div className="data-table-info">
            Showing {filteredData.length > 0 ? 1 : 0} to {filteredData.length > entries ? entries : filteredData.length} of {filteredData.length} entries
          </div>
          <div className="data-table-pagination">
            <button disabled={true}>Previous</button>
            <button disabled={true}>Next</button>
          </div>
        </div>
      </div>
    );
}

export default EmployeeListComponent;