import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const CardItem =()=>{
    return(
        <Card sx={{backgroundColor:'#171717', maxWidth:'200px'}}>
            <Image src="" width="150" bgColor="white"/>
            <CardContent>
                <Typography variant="h6" sx={{color:'white'}}>hello</Typography>
                <Typography sx={{color:'#b2b2b2'}}> hello</Typography>
            </CardContent>
        </Card>
    )
}

export default CardItem;