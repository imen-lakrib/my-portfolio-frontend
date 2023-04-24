import { CircularProgress, Box } from "@mui/material";

function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
    >
      <CircularProgress size={80} color="secondary" />
    </Box>
  );
}

export default Loader;