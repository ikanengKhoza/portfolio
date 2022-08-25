import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./Projects.css";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="h1-projects">Projects</h1>
      </div>
      <div className="projects" id="projects">
        <Card className="card" sx={{ maxWidth: 345 }}>
          <a href="https://ikaneng-khoza-fullstack-application.netlify.app/">
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
              <Button size="small" color="secondary" variant="contained">
                App
              </Button>

              <a href="https://github.com/ikanengKhoza/Full-Stack-Project-Assessment">
                <Button size="small">Code</Button>
              </a>
            </CardActions>
          </a>
        </Card>

        <Card className="card" sx={{ maxWidth: 345 }}>
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

        <Card className="card" sx={{ maxWidth: 345 }}>
          <a href="https://baby-names-ikaneng-khoza.netlify.app/">
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
              <Button size="small" color="secondary" variant="contained">
                App
              </Button>
              <a href="https://github.com/ikanengKhoza/baby-names">
                <Button size="small">Code</Button>
              </a>
            </CardActions>
          </a>
        </Card>

        <Card className="card" sx={{ maxWidth: 345 }}>
          <a href="https://cyf-ikaneng-khoza-hotel-react.netlify.app">
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
              <Button size="small" color="secondary" variant="contained">
                App
              </Button>
              <a href="https://github.com/ikanengKhoza/cyf-hotel-react">
                <Button size="small">Code</Button>
              </a>
            </CardActions>
          </a>
        </Card>
      </div>
    </>
  );
};

export default Home;
