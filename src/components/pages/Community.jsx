import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CommunityDataContext } from "../services/CommunityDataService";
import { getCommunityFormRequest } from "../requests/authRequests";
import { AuthContext } from "../services/AuthService";
import { Spin } from "antd";
import { CommunityForm } from "../forms/CommunityForm";
import { CommunityData } from "../forms/CommunityData";

export const Community = () => {
  const { isAvailable, set, reset } = useContext(CommunityDataContext);
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await getCommunityFormRequest(token);
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
        <>{isAvailable ? <CommunityData /> : <CommunityForm />}</>
      )}
    </div>
  );
};
