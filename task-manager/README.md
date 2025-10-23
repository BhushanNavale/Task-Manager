# Task Manager

This project is a simple task management application built with Angular. It allows users to create, edit, delete, and manage tasks with different priorities.

## Features

- Add new tasks with a name and priority.
- Edit existing tasks.
- Delete tasks.
- Toggle task completion status.
- Store tasks using a backend API.

## File Structure

```
task-manager
├── src
│   ├── app
│   │   ├── tasks
│   │   │   ├── tasks.component.ts
│   │   │   ├── tasks.component.html
│   │   │   └── tasks.component.css
│   │   ├── services
│   │   │   └── tasks.service.ts
│   │   ├── models
│   │   │   └── task.model.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── main.ts
│   └── index.html
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd task-manager
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`.

## Usage

- Use the input field to add a new task and select its priority.
- Click on the "Add Task" button to save the task.
- Click on a task to edit its name or toggle its completion status.
- Use the delete button to remove a task from the list.

## API Integration

The application uses a service to handle API calls for storing and retrieving tasks. The `TasksService` class includes methods for:

- `getTasks()`: Fetches the list of tasks from the backend.
- `addTask(task: Task)`: Sends a new task to the backend for storage.
- `deleteTask(id: number)`: Removes a task from the backend.
- `updateTask(task: Task)`: Updates an existing task in the backend.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.