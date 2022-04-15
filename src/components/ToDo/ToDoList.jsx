import { Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeTask } from "../../redux/actions/todos";

const ToDoList = ({ tasks }) => {
  const dispatch = useDispatch();
  const removeTaskItem = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4 p-4">
      {tasks?.length &&
        tasks.map((task, index) => (
          <Col>
            <Card key={index}>
              <Card.Body>
                <Card.Title className="h6 text-center">{task.title}</Card.Title>
                <Card.Text
                  title={task.content}
                  className="text-secondary text-center"
                >
                  {task.content}
                </Card.Text>
                <div className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      removeTaskItem(index);
                    }}
                  >
                    x
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
};
export default ToDoList;
