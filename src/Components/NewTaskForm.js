import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme=>({
  card: {
    minWidth: 400,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function NewTaskForm(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    projectName: '',
    taskName: '',
    time:'07:30 AM',
    day: 'Today',
    completed:false,
  })
  const [open, setOpen] = React.useState(false);



  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

    const handleClose = ()=>{
      setOpen(false);
    }

    const handleOpen=()=> {
      setOpen(true);
    }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Create a Task!
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
        id="standard-name"
        label="Project Name"
        className={classes.textField}
        value={values.projectName}
        onChange={handleChange('projectName')}
        margin="normal"
        />
        <TextField
        label="Task Name"
        className={classes.textField}
        value={values.taskName}
        onChange={handleChange('taskName')}
        margin="normal"
        />
        <TextField
        id="time"
        label="time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        onChange={handleChange("time")}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
      />
      <FormControl className={classes.formControl}>
        <InputLabel>Select Day</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={values.day}
          onChange={handleChange("day")}
          inputProps={{
            name: 'day',
          }}
        >
          <MenuItem value="Today">Today</MenuItem>
          <MenuItem value="Tomorrow">Tomorrow</MenuItem>
        </Select>
        <Button variant="contained" color="primary" onClick={()=>props.handleSubmit(values)}>
        Create Task!
        </Button>
      </FormControl>
        </form>
      </CardContent>
    </Card>
  );
}
