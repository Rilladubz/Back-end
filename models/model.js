const db = require("../config/secrets");

module.exports = {
    // USERS
    register,
    login,
    getUsers,
    getAll,
    // PROFILE
    getProfile,
    addProfile,
    updateProfile,
    removeProfile,

    // TASKS
    getTasks,
    getTaskId,
    addTask,
    updateTask,
    removeTask,
    // TAGS
    getTags,
    getTagId,
    addTag,
    updateTag,
    removeTag,

};

// Users
// Register
function register(userData) {
    return db("users").insert(userData);
}
// Login

function login(email) {
    return db("users").where(email);
}
// GetUsers
function getUsers() {
    return db("users").select("id", "email");
}


// TASKS
// GET TASK
function getTasks(id) {
    return db("tasks")
        .orderBy("id")
        .where({ user_id: id });
}
// GET TASK BY ID
function getTaskId(id) {
    return db("tasks").where(id);
}
// ADD TASK
function addTask(id, taskData) {
    return db("tasks")
        .returning({ id: "tasks.id" })
        .insert({
            user_id: id,
            task: taskData.task,
            description: taskData.description,
            due_date: taskData.due_date,
            timestamp: taskData.timestamp,
            completed: taskData.completed
        });
}
// UPDATE TASK
function updateTask(id, taskData) {
    return db("tasks")
        .where(id)
        .update(taskData);
}
// DELETE TASK
function removeTask(id) {
    return db("tasks")
        .where(id)
        .delete();
}

// TAGS
// GET TAGS
function getTags() {
    return db("tags");
}

// GET TAG BY ID
function getTagId(id) {
    return db("tags").where(id);
}


// ADD TAGS
function addTag(tagData) {
    return db("tags").insert(tagData);
}
// UPDATE TASK
function updateTag(id, tagData) {
    return db("tags")
        .where(id)
        .update(tagData);
}
// DELETE TASK
function removeTag(id) {
    return db("tags")
        .where(id)
        .delete();
}

// PROFILE
// GET PROFILE
function getProfile(id) {
    return db("profiles").where({ user_id: id });
}
// ADD PROFILE
function addProfile(id, profileData) {
    return db("profiles").insert({
        user_id: id,
        first_name: profileData.first_name,
        last_name: profileData.last_name,
        age: profileData.age,
        occupation: profileData.occupation
    });
}
// UPDATE PROFILE
function updateProfile(id, profileData) {
    return db("profiles")
        .where(id)
        .update(profileData);
}

// DELETE PROFILE
function removeProfile(id) {
    return db("profiles")
        .where(id)
        .delete();
}

// Get All User Info
function getAll() {
    return db("users", "profiles", "tasks", "avatar").select("*");
}
