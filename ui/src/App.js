import Home from './Home';
import React from 'react';
import Books from './Books';
import Button from '@material-ui/core/Button';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import MainImage from '../src/Images/MainImage.jpg';
import {makeStyles} from '@material-ui/core/styles';
//import Home from './pages/Home';
// import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';





import { AppBar, Toolbar,Container, IconButton, Typography, Box,Paper, Grid,Card,CardContent,CardActions,CardMedia,BottomNavigation,BottomNavigationAction, DialogTitle, DialogContent, TextField, DialogActions, Dialog,DialogContentText} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow:1
  },
  mainFeaturesPost: {
    position: "relative",
    marginBottom: theme.spacing(4),
    color: theme.palette.common.white,

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding : theme.spacing(20),
    marginTop : theme.spacing(4)
  },
  overlay : {
    position: "absolute",
    top: 0 ,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,..3)"

  }
}))

const cards=[1,2,3,4,5,6]; 
function App() {
  const classes = useStyles();
  const [value,setValue] = React.useState("recents")
  const handleChange = (event, newValue) => {setValue(newValue);};
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClickClose = () => {
    setOpen(false);
  }
  return (
    <>
    <BrowserRouter>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
         <IconButton edge="start"
         color="inherit" aria-label="menu" className={classes.menuButton}>
             <Navbar/>
             <Switch>
               <Route path='/'/>
             </Switch>
           </IconButton>
           <Typography variant="h6" className={classes.title}>Book Store</Typography>
           <Box mr={3}>
             <Button color="inherit" variant="outlined" onClick ={handleClickOpen} className={classes.menuButton} to="/Books">Вход</Button>
             <Dialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-login">
               <DialogTitle id="form-dialog-login">Авторизация</DialogTitle>
               <DialogContent>
                 <DialogContentText>Авторизация для просмотра библиотеки</DialogContentText>
                <TextField
                autoFocus
                margin ="dense"
                id="name"
                label="Login"
                type="login"
                fullWidth
                />
                <TextField
                margin ="dense"
                id="pass"
                label="Password"
                type="password"
                fullWidth
                />
               </DialogContent>
               <DialogActions>
                 <Button onClick={handleClickClose} color="primary">Отмена</Button>
                 <Button onClick={handleClickClose} color="primary">Вход</Button>

               </DialogActions>

             </Dialog>
           </Box>
           <Button color="secondary" variant="contained" onClick ={handleClickOpen} className={classes.menuButton}>Регистрация</Button>
           <Dialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-registration">
               <DialogTitle id="form-dialog-registration">Регистрация</DialogTitle>
               <DialogContent>
                 <DialogContentText>Регистрация для просмотра библиотеки</DialogContentText>
                <TextField
                autoFocus
                margin ="dense"
                id="name"
                label="Login"
                type="login"
                fullWidth
                />
                <TextField
                margin ="dense"
                id="pass"
                label="Password"
                type="password"
                fullWidth
                />
               </DialogContent>
               <DialogActions>
                 <Button onClick={handleClickClose} color="primary">Отмена</Button>
                 <Button onClick={handleClickClose} color="primary">Вход</Button>

               </DialogActions>

             </Dialog>
        </Toolbar>
      </Container>
      <Switch>
        <Route path='/Home' component={Home}/>
        <Route path='/Books' component={Books}/>
      </Switch>
     </AppBar>
     </BrowserRouter>
     <main>
       <Paper className={classes.mainFeaturesPost} 
       style={{backgroundImage: `url(${MainImage})`}}>
         <Container fixed>
           <div className={classes.overlay}/>
           <Grid container md={6}>
            <div className={classes.mainFeaturesPostContent}>
              <Typography 
              component="h1" 
              variant="h3" 
              color="inherit"
              gutterBottom
              >
                BookStore
              </Typography>
              <Typography
              component="h5"
              color="inherit"
              paragraph>
                Добро пожаловать в BookStore. Здесь вы можете скачать и прочитать 
                нужную вам книгу.
              </Typography>
              <Button variant="contained" color="secondary">Посмотреть коллекцию</Button>
            </div>
           </Grid>
         </Container>
       </Paper>
       <div className={classes.mainContent}>
         <Container maxWidth ="md">
           <Typography variant="h2" align = "center" color="textPrimary" gutterBottom> Book Store </Typography>
           <Typography variant="h5" align = "center" color="textSeconady" gutterBottom> Book Store </Typography>
         </Container>
         <div className={classes.mainButtons}>
           <Grid container spacing={2} justify="center">
             <Grid item>
               <Button variant="contained" color="primary">Посмотреть коллекцию</Button>
               
             </Grid>
             <Grid item>
               <Button variant="outline" color="primary">Добавить книгу</Button>
               
             </Grid>
           </Grid>
         </div>
       </div>
       <Container className={classes.cardGrid} maxWidth="md">
         <Grid container spacing={4}>
            {cards.map((card) =>(
              <Grid item key={card} xs="12" sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia 
                  className={classes.cardMedia}
                  image= {MainImage}
                  title = "Image title"/>
                  <CardContent className = {classes.CardContent}>
                    <Typography varian="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography varian="h5" gutterBottom>
                      Test 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" color="primary">
                      View
                    </Button>
                    <Button size="small" variant="contained" color="secondary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ) )}
         </Grid>
       </Container>
     </main>
     <footer>
       <Typography variant="h6" align="center" gutterBottom>
         Footer
       </Typography>
       <BottomNavigation
       value={value}
       onChange={handleChange}
       className={classes.root}>
         <BottomNavigationAction
         label="Recents"
         value="recents"
         icon = {<RestoreIcon/>}>
         </BottomNavigationAction>
         <BottomNavigationAction
         label="Favorites"
         value="favorites"
         icon = {<FavoriteIcon/>}>
         </BottomNavigationAction>
         <BottomNavigationAction
         label="Nearby"
         value="nearby"
         icon = {<LocationOnIcon/>}>
         </BottomNavigationAction>
       </BottomNavigation>
     </footer>
     </>
  );
}

export default App;
