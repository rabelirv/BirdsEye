import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import image from '../images/signInAvatar.png';
import backgroundImages from '../images/backGround.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: `url(${backgroundImages})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn(props) {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("")
  const classes = useStyles();

  return (<Grid container="container" component="main" className={classes.root}>
    <CssBaseline/>
    <Grid item="item" xs={12} sm={8} md={5} component={Paper} elevation={6} square="square">
      <div className={classes.paper}>
        <Avatar className={classes.avatar} src={image}></Avatar>
        <Typography component="h1" variant="h5">
          Welcome to Birdseye!
        </Typography>
        <form className={classes.form} noValidate="noValidate">
          <TextField variant="outlined" margin="normal" required="required" fullWidth="fullWidth" id="email" label="Email Address" name="email" autoComplete="email" autoFocus="autoFocus" value={emailAddress} onChange={e => setEmailAddress(e.target.value)}/>
          <TextField variant="outlined" margin="normal" required="required" fullWidth="fullWidth" name="password" label="Password" type="password" id="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)}/>
          <Button type="submit" fullWidth="fullWidth" variant="contained" color="black" className={classes.submit} onClick={(e) => props.getUser(e, {
              email: emailAddress,
              password: password
            })}>
            SIGN IN
          </Button>
          <Button variant="outlined" fullWidth="fullWidth" color="inherit" className={classes.submit}>
            CREATE AN ACCOUNT
          </Button>
          <Grid container="container">
            <Grid item="item" xs="xs">
              <Link href="#" variant="body2">
                Forgot password
              </Link>
            </Grid>
            <Grid item="item"></Grid>
          </Grid>
        </form>
      </div>
    </Grid>
    <Grid item="item" xs={false} sm={4} md={7} className={classes.image}/>
  </Grid>);
}
