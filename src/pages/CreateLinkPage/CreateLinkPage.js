import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/ToolBar';
import { ColorPicker } from 'material-ui-color';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import SuperchatIcon, { icons } from '../../components/Icon';


function CreateLinkPage() {

  const [repo, setRepo] = useState();
  const [owner, setOwner] = useState();
  const [color, setColor] = useState('green');
  const [icon, setIcon] = useState('alarm');


  const handleRepoChange = (event) => {
    setRepo(event.target.value);
  };

  const handleOwnerChange = (event) => {
    setOwner(event.target.value);
  };

  const handleSetIcon = (event) => {
    setIcon(event.target.value);
  };

  const renderIcons = () => {
    return Object.keys(icons).map(iconId => {
      const Icon = icons[iconId];
      return <MenuItem value={iconId}><Icon /></MenuItem>
    });
  }

  return (
    <Container maxWidth='lg'>
      <Paper>
        <AppBar position='static'>
          <ToolBar>
            <Typography variant="h6">
              Create Link
            </Typography>
          </ToolBar>
        </AppBar>
        <Grid
          container
          spacing={4}
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <TextField label="Owner" value={owner} onChange={handleOwnerChange} />
          </Grid>
          <Grid item >
            <TextField label="Repo" value={repo} onChange={handleRepoChange} />
          </Grid>
          <Grid item >
            <ColorPicker defaultValue='green' onChange={setColor} value={color}/>
          </Grid>

          <Grid item>
          <TextField
            id="outlined-select-currency"
            select
            label="Select icon"
            value={icon}
            onChange={handleSetIcon}
            helperText="Please select your currency"
            variant="outlined"
            >
              {renderIcons()}
            </TextField>
          </Grid>
          <Grid item >
            <Button>
              Get Link
            </Button>
          </Grid>
          <Grid item >
            {`${window.location}/r/llsasdlsdk`}
          </Grid>
        </Grid>
      </Paper>
    </Container>

  );
}

export default CreateLinkPage;