import { Box, Card, Group, HStack, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { Button } from "../ui/button.jsx";
import { Checkbox } from "../ui/checkbox.jsx";
import { SlMenu } from "react-icons/sl";

export function WeeklyDayItem({ text, color, DayItemClick }) {
  const [addTask, setAddTask] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [taskText, setTaskText] = useState("");

  const handleAddTaskButton = () => {
    setTaskList((prev) => [...prev, taskText]);
    setTaskText("");
  };
  return (
    <Box
      hover={color}
      onClick={() => DayItemClick()}
      width={"300px"}
      h={"350px"}
    >
      <Card.Root>
        <Card.Body>
          <Card.Title>
            <Box display={"flex"}>
              {text} <SlMenu />
            </Box>
          </Card.Title>
          <Card.Description>
            <Stack>
              {taskList.length !== 0 &&
                taskList.map((item, index) => (
                  <Checkbox key={index}>
                    <h2>{item}</h2>
                  </Checkbox>
                ))}

              <HStack>
                <FaSquarePlus
                  onClick={() => {
                    setAddTask(!addTask);
                  }}
                />
                {addTask && (
                  <Group attached>
                    <Input
                      value={taskText}
                      placeholder={"할 일을 입력해주세요 "}
                      onChange={(e) => {
                        setTaskText(e.target.value);
                      }}
                    />
                    <Button
                      onClick={() => {
                        handleAddTaskButton();
                      }}
                    >
                      {" "}
                      버튼
                    </Button>
                  </Group>
                )}
              </HStack>
            </Stack>
          </Card.Description>
        </Card.Body>
      </Card.Root>
    </Box>
  );
}
