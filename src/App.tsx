import { useEffect, useState } from 'react';
import Task from './components/Task/task.component';
import logo from './utils/images/logo.svg';
import plus from './utils/images/plus.svg';
import clipboard from './utils/images/clipboard.svg';
import './global.css';
import styles from './App.module.css';

export type Tasks = {
  id: string;
  content: string;
};

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const [createdTasksNumber, setCreatedTasksNumber] = useState(0);
  const [concludedTasksNumber, setConcludedTasksNumber] = useState(0);

  useEffect(() => {
    console.log(concludedTasksNumber);
  }, [concludedTasksNumber])

  /**
   * 
   * @description If the tasks array state is empty, it will show
   * an empty div content. If not, it will show a list of tasks. 
   */
  function renderTasksContent(tasks: Tasks[]) {
    return tasks.length === 0
      ?
      (
        <div className={styles.TasksContent}>
          <img src={clipboard} alt="clipboard icon" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )

      : (
        <div className={styles.TasksContent}>
          {tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              tasks={tasks}
              setTasks={setTasks}
              setConcludedTasksNumber={setConcludedTasksNumber}
            />
          ))}
        </div>
      );
  }

  /**
   * @description This function will get the final new task input's value  
   * de nova tarefa e and set the new content of the task. 
   */
  function getTaskContent(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function addNewTask() {

    const newTask: Tasks = {
      id: `${tasks.length} + ${inputValue}`,
      content: inputValue,
    }

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);

    setCreatedTasksNumber(prev => prev + 1);

    setInputValue('');
  }

  const emptyTaskContent = () => {
    if (inputValue === ' ' || inputValue === '\n' || inputValue.length === 0) return true;
    else return false;
  }

  return (
    <div className="App">
      <header className={styles.Header}>
        <img
          className={styles.logo}
          src={logo}
          alt="todo logo"
        />
      </header>


      <main>
        <div className={styles.newTask}>
          <input
            type="text"
            placeholder='Adicione uma nova tarefa'
            value={inputValue}
            onChange={(e) => getTaskContent(e)}
          />
          <button
            type='button'
            onClick={addNewTask}
            disabled={emptyTaskContent()}>
            Criar<img src={plus} alt="Add one more task" />
          </button>
        </div>

        <div className={styles.tasksInfo}>
          <div className={styles.createdTasks}>
            <span>Tarefas criadas</span>
            <div className={styles.createdTasksNumberWrapper}><span>{createdTasksNumber}</span></div>
          </div>

          <div className={styles.concludedTasks}>
            <span>Concluidas</span>
            <div className={styles.doneTasksNumberWrapper}><span>{concludedTasksNumber} de {createdTasksNumber}</span></div>
          </div>
        </div>

        <div className={styles.divisor}></div>

        {renderTasksContent(tasks)}
      </main>

    </div>
  )
}

export default App
