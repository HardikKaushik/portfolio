import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/t20.png";
import projImg2 from "../assets/img/hr.png";
import projImg3 from "../assets/img/sales.png";
import projImg4 from "../assets/img/happiness.png";
import projImg5 from "../assets/img/spotify.png";
import projImg6 from "../assets/img/covid19.png";
import projImg7 from "../assets/img/blog.png";
import projImg8 from "../assets/img/expense.png";
import projImg9 from "../assets/img/news.png";
import projImg10 from "../assets/img/movies.png";
import projImg11 from "../assets/img/todo.png";
import projImg12 from "../assets/img/js joke.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "T20 World Cup Power Bi Dashboard",
      description: "Multi Pages Power Bi dashboard by web scarping and data modeling with python jupyter notebook",
      imgUrl: projImg1,
    },
    {
      title: "HR Analytics Power Bi Dashboard",
      description: "HR analytics Power Bi Dashboard with Empolyee details and their performance",
      imgUrl: projImg2,
    },
    {
      title: "Sales Insights Power Bi Dashboard",
      description: "Dashboard about yearly sales of the company by SQL database ",
      imgUrl: projImg3,
    },
    {
      title: "World Happiness Report",
      description: "world happiness EDA report with python in jupyter notebook",
      imgUrl: projImg4,
    },
    {
      title: "Spotify EDA Project",
      description: "Spotify EDA visualization with Python",
      imgUrl: projImg5,
    },
    {
      title: "Covid-19 Report",
      description: "Covid-19 EDA visualization with Python",
      imgUrl: projImg6,
    },
  ];
  const projects1 = [
    {
      title: "MERN blog app",
      description: "The project showcases how to implement user authentication,CRUD operations,dynamic front-end using React,all backed by a MongoDB database and a Node.js/Express server",
      imgUrl: projImg7,
    },
    {
      title: "MERN Expense-Tracker App",
      description: "The MERN Expenses Tracker App is a comprehensive financial management tool.It empowers users to efficiently track and manage their expenses",
      imgUrl: projImg8,
    },
    {
      title: "News-API App using React.Js",
      description: "Fetching Latest news via API with categorial and Pagination",
      imgUrl: projImg9,
    },
    {
      title: "Movies Description app using React.Js",
      description: "The Movie Website App is a dynamic React frontend application designed for movie enthusiasts. ",
      imgUrl: projImg10,
    },
    {
      title: "Note Keeper App using React.Js",
      description: "just like a To-Do list app with React CRUD Opreation",
      imgUrl: projImg11,
    },
    {
      title: "Joke Web App using JavaScript",
      description: "Simple JavaScript app which fetches data through API",
      imgUrl: projImg12,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some projects which i have made in Data Aanalyis and Web Development.Following projects are pushed to my Github Profile you can have a look by following this <a className="gitlink" href="https://github.com/HardikKaushik?tab=repositories"> Github Link</a></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Data Analysis</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web Development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects1.map((projects1, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects1}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
