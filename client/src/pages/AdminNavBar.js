import React from "react";

function AdminNavBar({ onChangePage }) {
  return (
    <nav>
      <button className="questionbutton" onClick={() => onChangePage("Form")}>New Question</button>
      <button  className="questionbutton" onClick={() => onChangePage("List")}>View Questions</button>
    </nav>
  );
}

export default AdminNavBar;
