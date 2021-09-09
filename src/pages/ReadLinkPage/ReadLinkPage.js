import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import SuperChatIcon from '../../components/Icon';

function ReadLinkPage() {

  const { id } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const apiUrl = process.env.REACT_APP_ENDPOINTS_URL;

  useEffect(async () => {
    if (!id) return;

    const getLinkData = async () => {
      let data = {};

      try {
        const response = await fetch(`${apiUrl}/api/link/read/${id}`);
        let respData = await response.json();
        respData = JSON.parse(respData);
        data = { ...data, ...respData };
      } catch (e) {
        setError(e.message || 'Error accessing API');
      }

      const { repoOwner, repo } = data;
      try {
        const githubResponse = await fetch(`https://api.github.com/repos/${repoOwner}/${repo}`);
        const respData = await githubResponse.json();

        if (respData.message == 'Not Found') {
          throw Error('Error accessing github api');
        }

        data = { ...data, ...respData };
      } catch (e) {
        setError(e.message);
      }

      setData(data);
    }

    getLinkData();
  }, [id]);

  if (error) {
    return (
      <Paper>
        error
      </Paper>
    );
  }

  return (
    <Container maxWidth='lg'>
      <Paper>
        <AppBar position='static'>
          <ToolBar>
            <Typography variant="h2">
              Read Link
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
            <Typography variant="h6">
              Repo owner: {data.repoOwner}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              Repo: {data.repo}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              Color: {data.color}
            </Typography>
          </Grid>
          <Grid item>
            {data.icon && <Typography variant="h6">
              Icon: <SuperChatIcon icon={data.icon} />
            </Typography>}
          </Grid>
          <Grid item>
            <Typography variant="h6">
              Subscribers: {data.subscribers_count}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              watchers: {data.watchers}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              full_name: {data.full_name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              URL: {data.url}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default ReadLinkPage;