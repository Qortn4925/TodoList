import { Outlet, useLocation } from "react-router-dom";
import { Box, Stack } from "@chakra-ui/react";
import { NavBar } from "../../components/root/NavBar.jsx";

export function RootLayout() {
  let location = useLocation();

  return (
    <Stack>
      <Box>
        <NavBar />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Stack>
  );
}
