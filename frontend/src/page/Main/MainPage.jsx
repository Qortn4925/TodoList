import { Box, Group, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "../../components/ui/button.jsx";

function WeeklyDayItem({ text }) {
  return <Box>{text}</Box>;
}

export function MainPage() {
  const [taskText, setTaskText] = useState("");
  const DayList = ["월", "화", "수", "목", "금", "토", "일"];
  return (
    <Box>
      {" "}
      ㅋㅋㅋㅋ
      <HStack>
        {DayList.map((item) => {
          return <WeeklyDayItem text={item} />;
        })}
      </HStack>
      <Box border={"1px solid black"}>
        <Group attached>
          <Input
            value={taskText}
            placeholder={"할 일을 입력해주세요 "}
            onChange={(e) => {
              setTaskText(e.target.value);
            }}
          />
          <Button> 버튼</Button>
        </Group>
      </Box>
      {taskText}
    </Box>
  );
}
