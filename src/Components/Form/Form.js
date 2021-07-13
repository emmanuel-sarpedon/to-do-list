import "./Form.scss";

import { useState } from "react";

import Button from "../Button/Button";
import Task from "../Task/Task";

const Form = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  //Génère un id aléatoire
  const generateId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTasks = [...tasks];
    newTasks.push({ id: generateId(), title: inputValue, checked: false });
    setTasks(newTasks);
    setInputValue("");
  };

  const handleChangeCheckBox = (id) => {
    let newTasks = [...tasks];

    //On recherche la position (index) de la tâche ayant l'id passé en paramètre
    const index = tasks.map((e) => e.id).indexOf(id);

    newTasks[index].checked = !newTasks[index].checked;
    setTasks(newTasks);
  };

  const handleClickTrash = (id) => {
    let newTasks = [...tasks];

    //On recherche la position (index) de la tâche ayant l'id passé en paramètre
    const index = tasks.map((e) => e.id).indexOf(id);

    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="form">
      <div className="tasks-list">
        {tasks
          .filter((e, i) => !e.checked) // On affiche d'abord les tâches non terminées
          .map((e, i) => (
            <Task
              key={e.id}
              value={e.title}
              checked={e.checked}
              onChangeCheckBox={() => handleChangeCheckBox(e.id)}
              onClickTrash={() => handleClickTrash(e.id)}
            />
          ))}
      </div>
      <div className="tasks-list">
        {tasks
          .filter((e, i) => e.checked) // On affiche ensuite les tâches terminées
          .map((e, i) => (
            <Task
              key={e.id}
              value={e.title}
              checked={e.checked}
              onChangeCheckBox={() => handleChangeCheckBox(e.id)}
              onClickTrash={() => handleClickTrash(e.id)}
            />
          ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="new task"
          type="text"
          value={inputValue}
          onChange={handleChangeInput}
        />
        <Button type="submit" value="Add task" />
      </form>
    </div>
  );
};

export default Form;
