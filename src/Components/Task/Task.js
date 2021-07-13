import "./Task.scss";

const Task = (props) => {
  const { value, checked, onChangeCheckBox, onClickTrash } = props;
  /*const [isChecked, setChecked] = useState(true);

  const handleChangeCheckBox = (e) => {
    const value = e.target.checked;
    setChecked(value);
  };*/

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
