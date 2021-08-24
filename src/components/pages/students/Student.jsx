import { Tag, Alert, Card, Divider, Spin, Tooltip, Button } from "antd";
import React from "react";
import { useParams } from "react-router";
import { fetchStudent } from "../../requests/authRequests";
import { capitalize } from "../../utils/helpers";

export const Student = () => {
  const { studentId } = useParams();

  const [loading, setLoading] = React.useState(true);
  const [student, setStudent] = React.useState(null);
  const [error, setError] = React.useState(null);

  const [payments, setPayments] = React.useState([]);
  const [nonPayments, setNonPayments] = React.useState([]);

  const fetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchStudent(studentId);
      setStudent(res.data.data);
    } catch (error) {
      console.log("error in fetching students");
      setError(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (student) {
      setPayments(() => {
        return student.details.filter(
          (item) => item.doc_type.name === "payment"
        );
      });
      setNonPayments(() => {
        return student.details.filter(
          (item) => item.doc_type.name !== "payment"
        );
      });
    }
  }, [student]);

  React.useEffect(() => {
    fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentId]);

  return (
    <div>
      {error && <Alert type="error" message={error} />}
      {loading && <Spin />}

      {student && (
        <div className="student-show">
          <h1>{student.name}</h1>
          <h2>
            {student.email}, {student.phone}
          </h2>
          <Divider />
          {nonPayments.map((detail) => (
            <Card title={capitalize(detail.doc_type.name)}>
              <Alert type="info" message="details will be shown here" />
            </Card>
          ))}
          <Divider />
          <h4>Payment Details</h4>

          {payments.map((detail) => (
            <Card key={detail.id}>
              <h4>
                <span>
                  Payment Record ID
                  <span>#SFHSS100{detail.id}</span>
                </span>
                {detail.data?.isVerified ? (
                  <Tag color="green">Verified</Tag>
                ) : (
                  <Tooltip title="Payment information has not been verified by School">
                    <Tag color="red">Not verified</Tag>
                  </Tooltip>
                )}
              </h4>
              <Divider />
              <div className="logs">
                <div className="log-item">
                  <div className="log-item--type">Amount</div>
                  <div className="log-item--value">{detail.data.amount}</div>
                </div>
                <div className="log-item">
                  <div className="log-item--type">UPI Transaction ID</div>
                  <div className="log-item--value">
                    {detail.data.transaction_id}
                  </div>
                </div>
              </div>
              <div className="tag">
                <div className="tag--type">Paid for</div>
                <div className="tag--value">
                  {detail.data.payment_types.map((type) => (
                    <Tag className="tag-payment" color="#00adb5" key={type}>
                      {type}
                    </Tag>
                  ))}
                </div>
              </div>

              <Divider />
              <Button danger type="dashed">
                Verify Payment
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
