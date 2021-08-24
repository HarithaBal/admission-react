import { Alert, Card, Divider, Spin } from "antd";
import React, { useEffect } from "react";
import { fetchStudents } from "../../requests/authRequests";
import { StudentDetails } from "../../students/StudentDetails";

export const AllStudents = () => {
  const [loading, setLoading] = React.useState(true);
  const [students, setStudents] = React.useState([]);
  const [error, setError] = React.useState(null);

  const fetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchStudents();
      setStudents(res.data.data);
    } catch (error) {
      console.log("error in fetching students");
      setError(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {error && <Alert type="error" message={error} />}
      {loading && <Spin />}

      <div className="students">
        {students.map((student) => (
          <Card key={student.id} className="student">
            <div className="student-name">{student.name || ""}</div>
            <div className="student-email">{student.email || ""}</div>
            <div className="student-contact">{student.phone || ""}</div>
            <Divider />
            {student.details.length > 0 && (
              <StudentDetails details={student.details} />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
