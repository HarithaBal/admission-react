import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
    return (
        <div>
            <div className="options">
                <Link to="/forms/management" className="options-item">
                    Management Quota
                </Link>
                <Link to="/forms/community" className="options-item">
                    Community Quota
                </Link>
                <Link to="/forms/documents" className="options-item">
                    Upload Supporting Documents
                </Link>
                <Link to="/payment" className="options-item">
                    Payment
                </Link>
            </div>
        </div>
    );
};
