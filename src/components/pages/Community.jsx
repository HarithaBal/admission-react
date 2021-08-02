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
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await getCommunityFormRequest(token);
      set(response.data.data);
    } catch (error) {
      reset();
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
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
