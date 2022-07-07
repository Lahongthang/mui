import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {AccessTime} from '@mui/icons-material'
import Rating from '@mui/material/Rating'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2'
                    },
                    style: {
                        fontSize: 11
                    }
                },
                {
                    props: {
                        variant: 'body3'
                    },
                    style: {
                        fontSize: 9
                    }
                }
            ]
        }
    }
})

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={10}>
                    <img
                        src='http://neptuneholidays.com/blog/images/blog/immerse-yourself-in-the-wonder-and-awe-that-is-niagara-falls-usa.jpg'
                        alt=''
                        className='img'
                    />
                    <Box paddingX={1}>
                        <Typography variant='subtitle1' component='h2'>
                            Immerse into the Falls
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <AccessTime sx={{width: 15}}/>
                            <Typography variant='body2' component='p' marginLeft={0.5}>
                                5 hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            marginTop={3}
                        >
                            <Rating
                                name='read-only'
                                value={3.5}
                                readOnly
                                precision={0.5}
                                size='small'
                            />
                            <Typography variant='body2' component='p' marginLeft={0.5}>
                                4.5
                            </Typography>
                            <Typography variant='body2' component='p' marginLeft={1.5}>
                                (655 reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6' component='h3' marginTop={0}>
                                From C $147
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    )
}

export default TourCard