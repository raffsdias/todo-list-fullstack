const connection = require('./connection')

const getAll = async () => {
    const [tasks] = await connection.execute('select * FROM tasks');
    return tasks;
};

const createTask = async (tasks) => {
    const { title } = tasks;
    const dateUTC = new Date(Date.now()).toUTCString();


    const query = 'INSERT INTO tasks(title, status, created_at) VALUES(?, ?, ?)'

    const createdTask = await connection.execute(query, [title, 'pendente', dateUTC]);
    
    return createdTask;

};

const deleteTask = async (id) => {
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask;
};

const updateTask = async (id, task) => {
    const { title, status } = task;

    const queryUpdate = 'UPDATE tasks SET title =?, status = ? WHERE id = ?';
    const uptadedTask = await connection.execute(queryUpdate, [title, status, id]);
    return uptadedTask;
};


module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};