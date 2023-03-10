import Link from "next/link";

interface ITodoCardProps {
  todo: {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  };
  deleteTodo: (id: number) => void;
}

const TodoCard: React.FC<ITodoCardProps> = ({ todo, deleteTodo }) => {
  const { id, title } = todo;

  return (
    <div className="col-sm-4 mt-3 h-50">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <button
            className="btn btn-danger mr-2"
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
