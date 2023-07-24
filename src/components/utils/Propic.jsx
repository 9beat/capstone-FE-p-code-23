import './Propic.css'
import { Box } from "@mui/material"

const Propic = ({ image, size="60px" }) => {
    return (
        <Box>
            <img src={`http://localhost:3001/assets/${image}`} 
                alt="user" 
                width={size} 
                height={size} 
                className="propic"
            />
        </Box>
    )
}

export default Propic; 