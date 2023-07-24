
// Material UI
import { useTheme, Typography, Divider, Link } from "@mui/material";
// Components
import StyledContainer from "../styled/StyledContainer.jsx";
import StyledFlex from "../styled/StyledFlex.jsx";
// import StyledBetween from "../styled/StyledBetween.jsx";
// import StyledEvenly from "../styled/StyledBetween.jsx";
import StyledCentered from "../styled/StyledCentered.jsx";


const Ads = () => {
    const { palette } = useTheme();
    // const primeDark = palette.neutral.dark;
    // const primeMain = palette.primary.main;
    const neutralMedium = palette.primary.medium;

    return (
        <StyledContainer borderRadius=".5rem">
            <img
                width="100%"
                height="auto"
                alt="ads"
                src="https://picsum.photos/id/250/600/400"
                style={{ borderRadius: ".5rem .5rem 0 0", margin: "0 .9rem 0 0" }}
            />
            <StyledCentered>
                <StyledFlex>
                    <Divider />
                    <Typography color={neutralMedium} flexGrow={1} padding={"0 1rem 0 1rem"} variant="h5"> 
                        DISCOVER THE MAGIC
                    </Typography>
                </StyledFlex>
            
                <StyledFlex>
                    <Divider />
                    <Typography color={neutralMedium} flexGrow={1} padding={"0 1rem 0 1rem"} variant="h5"> 
                        WORLD OF...
                    </Typography>
                </StyledFlex>
            </StyledCentered>
            <Typography color="primeMain" margin="0 0 2rem .5rem" padding={"1rem 0 1rem 1rem"}>
                <i> <Link href="https://promocomix.it/">theWhiteRabbit.com</Link></i>
            </Typography>
            
        </StyledContainer>
    );
};


export default Ads;