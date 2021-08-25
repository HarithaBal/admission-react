import { Alert, Button, Card, Pagination, Space, Spin } from "antd";
import React, { useEffect } from "react";
import { fetchStudents } from "../../requests/authRequests";
import { StudentDetails } from "../../students/StudentDetails";
import { Link } from "react-router-dom";

export const AllStudents = () => {
  const [loading, setLoading] = React.useState(true);
  const [students, setStudents] = React.useState([]);
  const [error, setError] = React.useState(null);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  const fetch = async (_page = null, _limit = null) => {
    let __page = page,
      __limit = limit;
    if (_page) {
      __page = _page;
    }
    if (_limit) {
      __limit = _limit;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await fetchStudents(__page, __limit);
      setStudents(res.data.data.data);
      console.log(res.data.data.total);
      setPage(res.data.data.total);
      setCurrentPage(res.data.data.current_page);
    } catch (error) {
      console.log("error in fetching students");
      setError(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = async (page, limit) => {
    setLimit(limit);
    await fetch(page, limit);
  };

  const getUpperLimit = (val) => {
    return val > page ? page : val;
  };

  return (
    <div>
      {error && <Alert type="error" message={error} />}
      {loading && <Spin />}

      <div className="students">
        {students.map((student, index) => (
          <Card key={student.id} className="student">
            <div className="sl-no">
              <span># {index + 1} </span>
            </div>
            <span className="user-id">Student ID: {student.id}</span>
            <div className="student-name">{student.name || ""}</div>
            <div className="student-email">
              <span>{student.email || ""}</span>
              <span>{student.phone || ""}</span>
            </div>
            {student.details.length > 0 ? (
              <StudentDetails details={student.details} />
            ) : (
              <div></div>
            )}
            <Link to={`/students/${student.id}`}>
              <Button type="primary">View profile</Button>
            </Link>
          </Card>
        ))}
      </div>
      <Card className="pagination">
        <Pagination
          defaultCurrent={currentPage}
          onChange={handlePageChange}
          onShowSizeChange={handlePageChange}
          total={page}
          responsive
          hideOnSinglePage
        />
        <span>
          showing {(currentPage - 1) * limit + 1} to{" "}
          {getUpperLimit(currentPage * limit)} of {page} results
        </span>
      </Card>
      <Space />
    </div>
  );
};
