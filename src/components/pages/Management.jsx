import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { getManagementFormRequest } from "../requests/authRequests";
import { AuthContext } from "../services/AuthService";
import { Spin } from "antd";
import { ManagementDataContext } from "../services/ManagementDataService";
import { ManagementForm } from "../forms/ManagementForm";
import { ManagementData } from "../forms/ManagementData";

export const Management = () => {
  const { isAvailable, set, reset } = useContext(ManagementDataContext);
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await getManagementFormRequest(token);
      if (response.data.data) {
        set(response.data.data);
      }
    } catch (error) {
      reset();
    }

    setLoading(false);
  };

  useEffect(() => {
    if (!isAvailable) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex-center" style={{ minWidth: "40vh" }}>
          <Spin size="large" />
        </div>
      ) : (
        <>{isAvailable ? <ManagementData /> : <ManagementForm />}</>
      )}
    </div>
  );
};
