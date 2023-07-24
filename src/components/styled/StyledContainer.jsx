import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.alt,
    color: theme.palette.background.main,
    margin: ".1rem 0 .3rem 0",
    borderRadius: ".5rem"
}));

export default StyledContainer;