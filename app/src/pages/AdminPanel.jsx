const AdminPanel = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <header style={{ background: "#333", color: "#fff", padding: "1rem" }}>
        <h1>Admin Panel</h1>
      </header>
      <div style={{ display: "flex", flex: 1 }}>
        <nav style={{ width: "200px", background: "#f4f4f4", padding: "1rem" }}>
          <ul>
            <li>
              <a href="#dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#users">Users</a>
            </li>
            <li>
              <a href="#settings">Settings</a>
            </li>
          </ul>
        </nav>
        <main style={{ flex: 1, padding: "1rem" }}>
          <h2>Welcome to the Admin Panel</h2>
          <p>Select an option from the menu to get started.</p>
        </main>
      </div>
      <footer
        style={{
          background: "#333",
          color: "#fff",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default AdminPanel;
