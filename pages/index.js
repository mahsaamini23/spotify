import styles from '../styles/Home.module.css'
import CardList from '../component/cardList';
import { NameCardList } from '../database/data';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Image from 'next/image';
import logo from '../image/spotify-logo.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';


export default function Home() {
  return (
    <Grid bgColor="#121212">
      <Grid >
        <AppBar sx={{backgroundColor:'#101010', }}>
          <Toolbar sx={{marginLeft:'230px',display:'flex', justifyContent:'space-between'}}>
          <Grid>
              <IconButton>
                <ArrowBackIosIcon sx={{color:'#b2b2b2',fontSize:20}}/>
              </IconButton>
              <IconButton>
                <ArrowForwardIosIcon sx={{color:'#b2b2b2',fontSize:20}}/>
              </IconButton>
            </Grid>
            <Grid sx={{display:'flex', gap:'15px'}}>
              <Button sx={{color:'#b2b2b2',fontSize:'12px', fontWeight:'bolder'}}>Sign up</Button>
              <Button sx={{backgroundColor:"white", color:'#000',borderRadius:'30px', padding:"12px 28px",fontSize:'12px', fontWeight:'bolder'}} >Log in</Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid sx={{display:'flex', justifyContent:'flex-start'}}>
        <Drawer variant="permanent" PaperProps={{sx: { width: "18%" ,backgroundColor:'#000'},}}>
          <Box sx={{backgroundColor:'#000', padding:'22px 0 10px 22px'}}>
            <Image 
              src={logo}
              width={120}
              height={36}
            />
          </Box>
          <List>
            <Box sx={{marginBottom:'30px'}}>
              <ListItem sx={{display:'flex', gap:'10px',height:'35px'}}>
                <HomeIcon sx={{color:'#fff',fontSize:30}}/>
                <Typography sx={{color:'#fff', fontSize:'12px', fontWeight:'bolder'}}>Home</Typography>
              </ListItem>
              <ListItem sx={{display:'flex', gap:'10px',height:'35px'}}>
                <SearchIcon sx={{color:'#b2b2b2',fontSize:30}}/>
                <Typography sx={{color:'#b2b2b2',fontSize:'12px', fontWeight:'bolder'}}>Search</Typography>
              </ListItem>
              <ListItem sx={{display:'flex', gap:'10px',height:'35px'}}>
                <VideoLibraryIcon sx={{color:'#b2b2b2'}}/>
                <Typography sx={{color:'#b2b2b2',fontSize:'12px', fontWeight:'bolder'}}>Your Library</Typography>
              </ListItem>
            </Box>
            <Box>
              <ListItem sx={{display:'flex', gap:'10px',height:'35px'}}>
                <AddBoxIcon sx={{color:'#b2b2b2',fontSize:30}}/>
                <Typography sx={{color:'#b2b2b2',fontSize:'12px', fontWeight:'bolder'}}>Create Playlist</Typography>
              </ListItem>
              <ListItem sx={{display:'flex', gap:'10px',height:'35px'}}>
                <BookmarkAddIcon sx={{color:'#b2b2b2',fontSize:30}}/>
                <Typography sx={{color:'#b2b2b2',fontSize:'12px', fontWeight:'bolder'}}>Liked Songs</Typography>
              </ListItem>
            </Box>
          </List>
        </Drawer>
      
        <Grid sx={{width:'100%',margin:'60px 0 0 150px', padding:'20px 20px 20px 20px',backgroundColor:'#121212'}}>
          {NameCardList.map(item => (
            <CardList item={item}/>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
