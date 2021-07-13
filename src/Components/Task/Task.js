import "./Task.scss";

const Task = (props) => {
  const { value, checked, onChangeCheckBox, onClickTrash } = props;

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={checked && checked}
        onChange={onChangeCheckBox}
      />
      <span style={{ textDecoration: checked ? "line-through" : "none" }}>
        {value}
      </span>
      <i class="fas fa-trash" onClick={onClickTrash}></i>
    </div>
  );
};

export default Task;
