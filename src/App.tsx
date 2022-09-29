import React, { useCallback, useEffect, useState } from "react";
import { fetchRandomUser } from "./api/User";
import "./styles/App.css";

import { AppShell, Button, Navbar } from "@mantine/core";

function App() {
  const [userData, setUserData] = useState([]);

  const loadUserData = useCallback(async () => {
    setUserData(await fetchRandomUser());
  }, []);

  useEffect(() => {
    loadUserData();
    console.log(userData);
  }, [loadUserData]);

  return (
    <AppShell
      navbar={
        <Navbar width={{ base: 300 }} height="100vh">
          <Navbar.Section>
            <Button variant="subtle" fullWidth>
              Assets/Hosts
            </Button>
          </Navbar.Section>

          <Navbar.Section>
            <Button variant="subtle" fullWidth>
              Software
            </Button>
          </Navbar.Section>

          <Navbar.Section>
            <Button variant="subtle" fullWidth>
              Configurations
            </Button>
          </Navbar.Section>
        </Navbar>
      }
    >
      {/* Your application here */}
    </AppShell>
  );
}

export default App;
