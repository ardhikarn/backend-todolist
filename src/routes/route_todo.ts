import { Router } from 'express' 
import { getTodos, getTodo, postTodo, putTodo, deleteTodo} from '../controllers/control_todo'

const router = Router()

router.get('/api/todos', getTodos)
router.get('/api/todo/:id', getTodo)
router.post('/api/add-todo', postTodo)
router.put('/api/update-todo/:id', putTodo)
router.delete('/api/delete-todo/:id', deleteTodo)

export default router