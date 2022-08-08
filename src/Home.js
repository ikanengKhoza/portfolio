import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./Home.css";

const Home = () => {
  return (
    <>
      <h2>Projects</h2>
      <div className="projects">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="300"
            image="./Videoapp.png"
            alt="video app project"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Video App Project
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Built using React, Node.js, PostgresSql, HTML, CSS, Bootstrap.
              This app allows users to view, post, and delete videos.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://ikaneng-khoza-fullstack-application.netlify.app/">
              <Button size="small" color="secondary" variant="contained">
                App
              </Button>
            </a>
            <Button size="small">Code</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="300"
            image="./chatserver.png"
            alt="hotel app project"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Node Server
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Built using Node.js. This express application provides an API to
              manage a list of chat messages, in JSON format.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://github.com/ikanengKhoza/node-challenge-chat-server">
              <Button size="small">Code</Button>
            </a>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="300"
            image="./babynames.png"
            alt="video app project"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name App Project
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Built using React. This app allows users to seacrh and store
              favourite baby names
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://baby-names-ikaneng-khoza.netlify.app/">
              <Button size="small" color="secondary" variant="contained">
                App
              </Button>
            </a>
            <Button size="small">Code</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="300"
            image="./hotelapp.png"
            alt="hotel app project"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hotel App Project
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Built using React, HTML, CSS, Bootstrap. This app shares
              information on best place to visit and shows an example of a
              booking system.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://cyf-ikaneng-khoza-hotel-react.netlify.app">
              <Button size="small" color="secondary" variant="contained">
                App
              </Button>
            </a>
            <Button size="small">Code</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default Home;
