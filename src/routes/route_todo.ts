import { Router } from 'express' 
import { getTodos, getTodo, postTodo, putTodo, deleteTodo} from '../controllers/control_todo'
import bodyParser from 'body-parser'

const router = Router()
const jsonParser = bodyParser.json()

router.get('/api/todos', getTodos)
router.get('/api/todo/:id', getTodo)
router.post('/api/add-todo', jsonParser, postTodo)
router.put('/api/update-todo/:id', jsonParser, putTodo)
router.delete('/api/delete-todo/:id', jsonParser, deleteTodo)

export default router