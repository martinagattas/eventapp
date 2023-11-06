import { QuestionAnswer } from '@mui/icons-material';
import { Box, Link } from '@mui/material';

export const ProvidersLinks = () => {
    return (
        <Box className="menuButtonGroup hideXs hideSm">
            <Link href="/providers" underline="none" className="link primaryLink"><QuestionAnswer/> Cómo funciona</Link>
        </Box>
    )
}