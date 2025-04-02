import React, { useState } from "react";

const HiringCardPage = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [month, setMonth] = useState("");
  const [showColumns, setShowColumns] = useState({
    customerName: true,
    machineryName: true,
    location: true,
    rate: true,
    status: true,
    returnDate: true,
  });
  const [cards, setCards] = useState([
    // Sample Data (you'll replace this with actual data from your backend)
    { cardNumber: "106767", customerName: "BAHRAIN STEEL", machineryName: "FORKLIFT 5 TON", location: "BAHRAIN STEEL", rate: "BHD 47.67", totalHours: 307.5, status: "Received", returnDate: "04-Feb-25", invoicedAmount: "1832.3", hiringCardAmount: "1832.3", cashMemoTaxInvoice: "AH/25/036", note: "Correct" },
    { cardNumber: "106868", customerName: "CEMARICA DELMON", machineryName: "MANLIFT 16 MTR", location: "HAMAD TOWN", rate: "BHD 148.50", totalHours: 8, status: "Received", returnDate: "02-Jan-25", invoicedAmount: "148.50", hiringCardAmount: "148.50", cashMemoTaxInvoice: "AH/25/005", note: "Correct" },
    // Add more cards
  ]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value);
  };

  const handleColumnToggle = (column: string) => {
    setShowColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const handleCardClick = (card: any) => {
    // Handle showing the details in a modal or a popup
    alert(JSON.stringify(card, null, 2)); // Replace with actual popup/modal code
  };

  return (
    <div className="container">
      {/* Header with Search Bar and Filters */}
      <div className="header">
        <input
          type="text"
          placeholder="Search by Card Number or Customer Name"
          value={search}
          onChange={handleSearchChange}
        />
        <select onChange={handleFilterChange} value={selectedFilter}>
          <option value="All">All</option>
          <option value="Received">Received</option>
          <option value="Cancel">Cancel</option>
          <option value="Running">Running</option>
        </select>
        <input type="month" value={month} onChange={handleMonthChange} placeholder="Select Month" />
      </div>

      {/* Table with Data */}
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
            {cards
              .filter(
                (card) =>
                  card.cardNumber.includes(search) ||
                  card.customerName.toLowerCase().includes(search.toLowerCase())
              )
              .filter((card) =>
                selectedFilter === "All"
                  ? true
                  : card.status.toLowerCase() === selectedFilter.toLowerCase()
              )
              .map((card, index) => (
                <tr key={index}>
                  {showColumns.customerName && <td>{card.customerName}</td>}
                  {showColumns.machineryName && <td>{card.machineryName}</td>}
                  {showColumns.location && <td>{card.location}</td>}
                  {showColumns.rate && <td>{card.rate}</td>}
                  {showColumns.status && (
                    <td
                      className={`status ${card.status.toLowerCase()}`}
                    >
                      {card.status}
                    </td>
                  )}
                  {showColumns.returnDate && <td>{card.returnDate}</td>}
                  <td>
                    <button onClick={() => handleCardClick(card)}>View Details</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="footer">
        <button onClick={() => console.log("Exporting to Excel...")}>Export</button>
        <button onClick={() => console.log("Save Changes")}>Save</button>
        <button onClick={() => console.log("Reset Changes")}>Reset</button>
      </div>
    </div>
  );
};

export default HiringCardPage;
