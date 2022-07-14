import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import ImageCollage from "../components/ImageCollage"
import CustomizedAccordions from "../components/Accordion"
import Paper from '@mui/material/Paper'
import BottomNavigation from "@mui/material/BottomNavigation"
import BasicModal from "../components/Modal"


const Tour = () => {
    return (
        <Container sx={{width: 900}}>
            <Typography variant="h3" component='h1' mt={3}>
                Explore the World in Vegas
            </Typography>
            <Box mt={3} sx={{display: 'flex'}}>
                <img
                    src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
                    alt=""
                    height={225}
                />
                <ImageCollage/>
            </Box>
            <Box mb={10}>
                <Typography variant="h6" component='h4' mt={3} mb={2}>
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordions/>
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal/>
                </BottomNavigation>
            </Paper>
        </Container>
    )
}

export default Tour