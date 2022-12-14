import { useEffect, useState } from 'react';
import { Trash, Check } from 'phosphor-react';
import { Tasks } from '../../App';
import styles from './task.module.css';

interface ITask {
    id: string;
    content: string;
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
    setConcludedTasksNumber: React.Dispatch<React.SetStateAction<number>>;
}

function Task({ id, content, tasks, setTasks, setConcludedTasksNumber }: ITask) {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (isChecked) setConcludedTasksNumber(prev => prev + 1);
        else setConcludedTasksNumber(prev => {
            if (prev === 0) return 0;
            else return prev - 1;
        })
    }, [isChecked]);

    function changeTaskCheck() {
        setIsChecked(prev => !prev);
    }

    function deleteTask() {
        const newTasks = tasks.filter(target => target.id !== id);
        setTasks(newTasks);
    }

    const checkboxIsChecked = isChecked ? styles.darkParagraph : styles.normalParagraph;

    return (
        <div className={styles.TaskWrapper}>
            <div className={styles.CheckAndContentTask}>
                <div className={styles.CheckInputWrapper}>
                    {isChecked ? (<Check onClick={changeTaskCheck} className='Check' size={13} />) : <></>}
                    <input
                        type="checkbox"
                        name="task_checked"
                        id="task_checked"
                        checked={isChecked}
                        onChange={changeTaskCheck}
                    />
                </div>

                <p className={checkboxIsChecked}>{content}</p>
            </div>

            <button
                type='button'
                onClick={deleteTask}
            ><Trash className={styles.trash} size={20} /></button>
        </div>
    )
};

export default Task;