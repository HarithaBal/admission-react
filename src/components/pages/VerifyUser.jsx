import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { verifyUserRequest } from "../requests/authRequests";
import { Spin, Alert, Button } from "antd";
import { Link } from "react-router-dom";

export const VerifyUser = () => {
  const { search } = useLocation();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const verifyUser = async (user, hash) => {
    setLoading(true);
    setStatus(null);
    setError(null);

    try {
      await verifyUserRequest(user, hash);
      setStatus(
        "Your account has been verified successfully. You can now login"
      );
    } catch (e) {
      setError(
        "We couldn't verify your account. Please try again. If problem persist, please contact support."
      );
    }

    setLoading(false);
  };

  useEffect(() => {
    const user = search.split("&")[0].split("=")[1];
    const hash = search.split("&")[1].split("=")[1];
    verifyUser(user, hash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-center full-screen">
      <div className="verify-container">
        {loading && (
          <div className="flex-center" style={{ height: "40vh" }}>
            <Spin size="large" />
          </div>
        )}
        {status && (
          <div className="flex-center column" style={{ height: "40vh" }}>
            <Alert
              message="Verification Successful"
              description={status}
              type="success"
              showIcon
            />
            <Link to="/login">
              <Button style={{ marginTop: "1em" }} type="primary">
                Login
              </Button>
            </Link>
          </div>
        )}

        {error && (
          <div className="flex-center" style={{ height: "40vh" }}>
            <Alert
              message="Something went wrong"
              description={error}
              type="error"
              showIcon
            />
          </div>
        )}
      </div>
    </div>
  );
};
