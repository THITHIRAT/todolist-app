import { Progress, Task } from "../../components";
import {
  Box,
  Wrapper,
} from "./TodoList.style";

const TodoList = () => {
  return (
    <Wrapper>
      <Box>
        <Progress />
        <Task />
      </Box>
    </Wrapper>
  )
}

export default TodoList;