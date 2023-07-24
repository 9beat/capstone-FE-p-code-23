// import { useState } from "react";
import { Card, CardMedia, Typography, Box, Stack, IconButton, styled, useTheme, UseMediaQuery } from "@mui/material";
import { FastRewindRounded, FastForwardRounded, PlayArrowRounded, PauseRounded } from "@mui/icons-material";


import React, { useState } from 'react';

const SoundPlayer = ({ soundUrl }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.createRef();
//     const [ paused, setPaused ] = useState(false)

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <Card variant="outlined" sx={{
            p: 1,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
        }}> 
            <CardMedia component="img"
                width="124"
                height="124"
                alt="Beside Myself album cover"
                src="/static/images/cards/basement-beside-myself.jpeg"
                sx={{
                    borderRadius: 0.5,
                    width: 'clamp(124px, (304px - 100%) * 999 , 100%)',
                }}
            />

            {/* <button onClick={togglePlay}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <audio ref={audioRef} src={soundUrl} /> */}
        
        
        
        </Card>
    );
};

export default SoundPlayer;



//             <Box sx={{ alignSelf: 'center', px: { xs: 0, sm: 2 } }}>
//                 <Typography
//                     variant="body1"
//                     color="text.primary"
//                     fontWeight={600}
//                     sx={{
//                         textAlign: { xs: 'center', sm: 'start' },
//                         mt: { xs: 1.5, sm: 0 },
//                     }}
//                 >
//                     Ultraviolet
//                 </Typography>
//                 <Typography
//                     component="div"
//                     variant="caption"
//                     color="text.secondary"
//                     fontWeight={500}
//                     sx={{ textAlign: { xm: 'center', sm: 'start' } }}
//                 >
//                     Basement • Beside Myself
//                 </Typography>
//                 <Stack
//                     direction="row"
//                     spacing={1}
//                     sx={{
//                         mt: 2,
//                         justifyContent: { xs: 'space-between', sm: 'flex-start' },
//                     }}
//                 >
                    
//                     <IconButton aria-label="fast rewind" >
//                         <FastRewindRounded />
//                     </IconButton>
                    
//                     <IconButton
//                         aria-label={ paused ? 'play' : 'pause'}
//                         sx={{ mx: 1 }}
//                         onClick={() => setPaused((val) => !val)}
//                     >
//                         {paused ? <PlayArrowRounded /> : <PauseRounded />}
//                     </IconButton>

//                     <IconButton aria-label="fast forward" >
//                         <FastForwardRounded />
//                     </IconButton>
//             </Stack>
//         </Box>
//     </Card>
//     )
// }

// export default Player;