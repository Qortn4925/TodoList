import {
  Box,
  Card,
  Group,
  Heading,
  HStack,
  Input,
  ListItem,
  ListRoot,
} from "@chakra-ui/react";
import { useState } from "react";
import { WeeklyDayItem } from "../../components/main/WeeklyDayItem.jsx";
import { FaSquarePlus } from "react-icons/fa6";
import { Button } from "../../components/ui/button.jsx";
import { Checkbox } from "../../components/ui/checkbox.jsx";

export function MainPage() {
  const [taskText, setTaskText] = useState("");
  const [addTask, setAddTask] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const DayList = ["월", "화", "수", "목", "금", "토", "일"];
  const [clickedDay, setClickedDay] = useState("");
  const [date, setDate] = useState(new Date());

  const handleAddTaskButton = () => {
    setTaskList((prev) => [...prev, taskText]);
    setTaskText("");
  };

  return (
    <Box>
      <Heading> 7Days </Heading>
      <HStack>
        {DayList.map((item) => {
          return (
            <WeeklyDayItem
              DayItemClick={() => setClickedDay(item)}
              text={item}
            />
          );
        })}
      </HStack>

      <HStack>
        <Box border={"1px solid black"}>
          <Heading> 이번주 우선 순위</Heading>
          1. h2 2. h3//
        </Box>
        <Box border={"1px solid black"}>
          <Heading> {clickedDay} To-do-List > 조그만하게 진행률 </Heading>

          {taskList.length !== 0 && (
            <ListRoot listStyle={"none"}>
              {taskList.map((item, index) => (
                <ListItem key={index}>
                  <Card.Root>
                    <Card.Body>
                      <Card.Title>제목</Card.Title>
                      <Card.Description>
                        <Checkbox value={item}>{item}</Checkbox>
                      </Card.Description>
                    </Card.Body>
                  </Card.Root>
                </ListItem>
              ))}
            </ListRoot>
          )}

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
        </Box>
      </HStack>
    </Box>
  );
}
