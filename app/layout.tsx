import React, { useState } from "react";

export default function HiringCardSystem() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showColumns, setShowColumns] = useState({
    customerName: true,
    machineryName: true,
    location: true,
    rate: true,
    status: true,
    returnDate: true,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };

  const handleColumnToggle = (column: string) => {
    setShowColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          placeholder="Search by Card Number or Customer Name"
          value={search}
          onChange={handleSearchChange}
        />
        <select onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Received">Received</option>
          <option value="Cancel">Cancel</option>
          <option value="Running">Running</option>
        </select>
        {/* Add option to select month for filtering */}
        <input type="month" placeholder="Select Month" />
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              {showColumns.customerName && <th>Customer Name</th>}
              {showColumns.machineryName && <th>Machinery Name</th>}
              {showColumns.location && <th>Location</th>}
              {showColumns.rate && <th>Rate per 8 Hour</th>}
              {showColumns.status && <th>Card Status</th>}
              {showColumns.returnDate && <th>Return Date</th>}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Mock data loop here */}
            {/* This will be your dynamic list */}
            <tr>
              {showColumns.customerName && <td>Customer Name Example</td>}
              {showColumns.machineryName && <td>Machinery Example</td>}
              {showColumns.location && <td>Location Example</td>}
              {showColumns.rate && <td>Rate Example</td>}
              {showColumns.status && <td>Received</td>}
              {showColumns.returnDate && <td>01-Jan-2025</td>}
              <td>
                <button onClick={() => console.log("Open details")}>
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="footer">
        <button onClick={() => console.log("Export to Excel")}>Export</button>
        <button onClick={() => console.log("Save Changes")}>Save</button>
        <button onClick={() => console.log("Reset Changes")}>Reset</button>
      </div>
    </div>
  );
}
