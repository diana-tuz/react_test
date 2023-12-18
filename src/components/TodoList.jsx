export const TodoList = ({tasks}) => (
  <ol>
    {tasks.map((task, index) => <li key={index}>{task}</li>)}
  </ol>
)