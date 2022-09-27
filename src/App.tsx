import logo from './utils/images/logo.svg';
import plus from './utils/images/plus.svg';
import './global.css';
import styles from './App.module.css';

function App() {

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
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button type='button' onClick={() => { }}>Criar<img src={plus} alt="Add one more task" /></button>
        </div>

        <div className={styles.tasksInfo}>
          <div className={styles.createdTasks}>
            <span>Tarefas criadas</span>
            <div className={styles.createdTasksNumberWrapper}><span>0</span></div>
          </div>

          <div className={styles.concludedTasks}>
            <span>Concluidas</span>
            <div className={styles.doneTasksNumberWrapper}><span>0</span></div>
          </div>
        </div>

        <div className={styles.tasksContent}>
          <img src="" alt="" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </main>

    </div>
  )
}

export default App
