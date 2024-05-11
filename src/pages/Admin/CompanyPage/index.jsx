import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row, Space, Table } from "antd";
import "./style.scss";
function index() {
  const user = [
    {
      id: "2142332512",
      name: "Kapital Bank",
      vacancyCount: "23",
      image:
        "data:image/png;base64,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",

      createdAt: "09.05.2024",
    },
    {
      id: "2142332512",
      name: "Kapital Bank",
      vacancyCount: "23",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX///+1HSnHZWizESH16+y7Eyi2HCX+/v37/v7//f/6/vy5HSe3HC/+//20Hir4//+6HCOwABO3HCm2ABnWlpXZkpO+TE7OfYGvAAy4AA2yAAi0HyPNe3y0Bx26ABTWi429VVTHa23BXVvcoKG8QUrGcnTQi5G8SVG9VFfAABn8+f/lvr2/U1PfqayuAACxFRrIYGS+OkXUgIfCY2BwslOiAAAFb0lEQVR4nO2d63abOBRGD57WCDB2MEntsQ2pM0kvbtrpNO//biMgJtTGGHGRzlK//TfOIt9iR0ZI54gIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDeLISBiwqh8aoHExGFOOi72OLb80Q7z98XmuJ5glz658e/f2kl2azkZXUhXI9u/946GpmmK9L2f3g4kAhdcbvRmXC9I1d4mhK++09QGEpRN9tAT7z5NNKpKL1LHw+LMNQo6o1ORbOE7+PPekXVqmiecJo8HrSJOgv0KlokXMb6RA3SnVZFXxMuE22iRjuhVdEiobxw8ugJ1x1bVAOKlgmlqN7CHVtUA4qWCYNl8uyJsUU1oGiZ0KmKerMcI54ZRasJc1FD36O79c0YCc0oWk0oRf3s5SPq3SiimlG0mlCSfChFHTieMUVPEi7jD8WIOrioQfpkRtGThM4y+VKMqHfrYRNGT4YUPU2YiyqfiwXdDngXTSp6nrAQddgR1dgoWpswF5XIFzScqCYVrUk4tKiGFa1NOKyoJkfRSwmHFdWwovUJK6Jutr2eUc0reilhKep9P1HNK3opYSmquO8lqnlFLyY8iurTp3XXWf9MBjSuaEPCQlR5A+6jjrN+Foo2JCxE9YS/6Cpqshe8EzpO/PFwFPW9aryZEz9RaDpcTkPC+dePr6Ku1UVN9yxuIDUmnM7jQtQOI2q8X4TGR9GChoTOUdRQUdTZNuKiKF1LWIjqK4q65aMoXUsoRX3wSPhqokZ7wUVRupbQyUT1hIqovBSlFglVRc0UJTaKUouEuaiivajRPmSkKLVI6FRFvfbCXyq6N53olDYJ24vKTlFql3DqHEfUX1dEjfYusVKU2iWUZBFd35UzjcsfzxVldgOpdULn60P2jCpolV78fK6obzrQGS0TBtldFNmAs4oufSaahMJnMOU9oe09zER1xauo8/OfMlWUVBJKUelV1JoRdZtOOCpKKgmlqBPKRd3VjKhMFSWle1iI6rvnos62MVNFSTGhkz7k7xhPR1S+ipJiQinqz1xU+l3UeOIyVZRU7+GbqKtSVNaKknrC+ZmorBUl9YTBPH75XdSY7ShaoJrQqYoazJbbhLWi1ClhKeouDebpC2tFqVPCyld/FHEeRQs6JHSOTzBS1BfmilLXhIWcQsgBh7ei1DWhHGAmWUWRDMhbUeqaUBL9ZO9nQeeENz9uTf/t7cA9rMf+/0P7x1LLvw/lw/fk+PDNemZY0Oe5VE6guE+dqOfcYjrnPv2lHvND8TY/5C0q5vinnL9Q5C6q6ru22pfCfF8HU4f3pXUv9lmLqvzOu25xhu+yDHVbt6hbYOMraqe1p5pfYbo8Smrrh00L3XxFVVkDzjYr0K/La8B7ll/9Suv4zRtOmIqqshfjyqYhjtuFqOV+mtY7FNlt+SLsiSpovwGT3dZLUtqbeG3LVwGv7bM00v5SPlugqe0eYT8fRVuVB7ET9eo+7y/ZKBoq7fNmVIpA4+zVZ1ROQu3qLQR92ijVW/ApCaLmhMfirg41M1zKuqgxYZ8CPS6ledSYsE+RZS4qj3lGc/0h+aJz/WFeIsvgNjbXkPoW15C+dVboXAcccK4DHqjpAN9a7qEaR7AQtbmnQs/OGFx7KpTtBmzti2F/bxPb+9PkzbBs7jE0Tp8oo6Ke9/oSrmttr69KY0FL+7WN1xySS8+98Rp8suib+Nak1dbel2WjXWv7lyaPrs09aAMtDa9N9hHW07TcZC9oPY3njfXz1qNogZme7Pb31bf+bATrz7fQfkaJ1mN06I84Z8b6s4LsP++JhGf9mV22n7tGf8TZedaffwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOV/qgypkOZq0KYAAAAASUVORK5CYII=",

      createdAt: "09.05.2024",
    },
    {
      id: "2142332512",
      name: "Kapital Bank",
      vacancyCount: "23",
      image:
        "data:image/png;base64,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",

      createdAt: "09.05.2024",
    },
    {
      id: "2142332512",
      name: "Kapital Bank",
      vacancyCount: "23",
      image:
        "data:image/png;base64,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",

      createdAt: "09.05.2024",
    },
    {
      id: "2142332512",
      name: "Kapital Bank",
      vacancyCount: "23",
      image:
        "data:image/png;base64,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",

      createdAt: "09.05.2024",
    },
  ];
  const columns = [
    {
      title: "Tarix",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 200,

      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      render: (text, record) =>
        record.createdAt.slice(11, 16) +
        " " +
        " " +
        record.createdAt.slice(0, 10),
    },
    {
      title: "Icon ",
      dataIndex: "image",
      key: "surname",
      width: 200,
      render: (text, record) =><Space style={{alignItems:"center",paddingLeft:"50px"}}> <img className="companyIcon" src={text} /></Space>,
    },
    {
      title: "Ad",
      width: 400,
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link to={"/admin/users/" + record.id}>{text}</Link>
      ),
    },

    {
      title: "Vakansiya sayı",
      dataIndex: "vacancyCount",
      key: "email",
      width: 200,
    },

    {
      title: "Action",
      key: "action",
      width: 300,

      render: (_, record) => (
        <Space
          size="middle"
          style={{ textAlign: "center", paddingLeft: "50px" }}
        >
          <Link to={"/admin/users/detail"}>Ətraflı</Link>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <div className="articleRequests">
      <div className="articleRequests_container">
        <Row className="containerCompanies">
          <Col span={24}>
            <Row className="containerCompanies_button">
              <Col span={2}>
                <Button>Şirkət əlavə et</Button>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="tableContainer ">
            <Table
              className="table"
              bordered={true}
              columns={columns}
              dataSource={user}
              rowKey="_id"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default index;