import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./components/Routes";
import "antd/dist/antd.css";
import "react-gravatar-or-initials/dist/index.css";
import "./styles/app.scss";
import { DeclarationService } from "./components/services/DeclarationService";
import { DataService } from "./components/services/DataService";
import { AuthService } from "./components/services/AuthService";
import { CommunityDataService } from "./components/services/CommunityDataService";
import { ManagementDataService } from "./components/services/ManagementDataService";

function App() {
  return (
    <AuthService>
      <BrowserRouter>
        <CommunityDataService>
          <ManagementDataService>
            <DataService>
              <DeclarationService>
                <Routes />
              </DeclarationService>
            </DataService>
          </ManagementDataService>
        </CommunityDataService>
      </BrowserRouter>
    </AuthService>
  );
}

export default App;
