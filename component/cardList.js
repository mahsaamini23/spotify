import CardItem from "./card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


const CardList =({item})=>{
    return(
        <Grid key={item.id}  sx={{width:'100%',backgroundColor:'#121212',padding:'25px 0 0 25px',display:'Flex', flexDirection:'column', alignItems:'self-start',gap:'30px'}}>
            <Grid sx={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                <Grid>
                    <Typography variant='h5' sx={{color:'white'}}>{item.title}</Typography>
                </Grid>
                <Grid>
                    <Typography sx={{color:'#b2b2b2',fontSize:'10px'}}>SEE ALL</Typography>
                </Grid>
            </Grid>
            <Grid sx={{display:'flex' }}>
                <CardItem/>
            </Grid>
        </Grid>
    )
}

export default CardList