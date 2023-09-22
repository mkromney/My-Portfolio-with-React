// Your portfolio page.
import 'bootstrap/dist/css/bootstrap.css'

// Images: 
import PassGenPhoto from "../styles/images/Password-Generator.png"
import MySQLPhoto from "../styles/images/MySQL-Thumbnail-maridon.png"
import WeatherForecaster from "../styles/images/Weather-Forecaster.png"
import DayCalendar from "../styles/images/Interactive-Day-Calendar.jpg"
import NoteTaker from "../styles/images/NoteTaker-Demo-01.png"
import ReadMeGenerator from "../styles/images/Readme-Generator.png"

const cardStyle = {
  width: '300px',
  display: 'flex',
  
};
const portfolioContainer = {
    height: '90vw',
    marginTop: '20px',
    marginBottom: '20px',  
  };

const Portfolio = () => {
  return (
    <div style={portfolioContainer} className="d-flex container bg-white text-black p-2">
    <div className="row">
            <div class="col">
                <h1 class="text-center" >My <span class="text-warning">Portfolio</span></h1>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-4 text-dark">
                            <img src={PassGenPhoto} class="card-img-top" alt="Project 1"></img>
                            <div class="card-body">
                             <h5>
                                Password Generator
                                    <div>
                                        <small class="text-muted">A user is presented with dynamic prompts to generate a unique and secure password.</small>
                                    </div>
                                <div class="p-3 mx-auto" style={cardStyle}>
                                  <a href="https://mkromney.github.io/Password-Generator/" target="_blank" class="btn btn-dark" rel="noreferrer">Live Site</a>
                                  <a href="https://github.com/mkromney/Password-Generator" target="_blank" class="btn btn-white" rel="noreferrer">Git Repo</a>
                                </div>
                             </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 text-dark">
                            <img src={MySQLPhoto} class="card-img-top" alt="Project 2"></img>
                            <div class="card-body">
                              <h5>
                              MySQL Employee (HR) Database
                                <div>
                                    <small class="text-muted">Backend SQL database that store information about employees, departments, roles and salaries. Must use MySQL2 in terminal to access and manipulate.</small>
                                </div>
                              <div class="p-3 mx-auto" style={cardStyle}>
                                  <a href="https://watch.screencastify.com/v/X8KBLehs2LfLzieG3w9D" target="_blank" class="btn btn-dark" rel="noreferrer">Watch Me</a>
                                  <a href="https://github.com/mkromney/MySQL-ORM-Back-End-E-Commerce-Database" target="_blank" class="btn btn-white" rel="noreferrer">Git Repo</a>
                              </div>
                             </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 text-dark">
                            <img src={WeatherForecaster} class="card-img-top" alt="Project 3"></img>
                            <div class="card-body">
                              <h5>
                              Weather Forecaster
                                <div>
                                    <small class="text-muted">Users are presented with 4-day 3-hour forecasts when they enter and submit a city of their choice. Previously searched cities are stored for later reference.</small>
                                </div>
                              <div class="p-3 mx-auto" style={cardStyle}>
                                  <a href="https://mkromney.github.io/WeatherForecastWebsite-API/" target="_blank" class="btn btn-dark" rel="noreferrer">Live Site</a>
                                  <a href="https://github.com/mkromney/WeatherForecastWebsite-API" target="_blank" class="btn btn-white" rel="noreferrer">Git Repo</a>
                              </div>
                             </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-4 text-dark">
                            <img src={DayCalendar} class="card-img-top" alt="Project 4"></img>
                            <div class="card-body">
                                <h5>
                                    Interactive Workday Hourly Planner
                                        <div>
                                            <small class="text-muted">This dynamic hourly planner displays editable hourly slots that a user can fill to plan out the current workday. Hourly slots presented in grey represent hours that have passed, the time slot in red represents the current hour, and time slots in green represent future slots. Stores responses for future reference.</small>
                                        </div>
                                    <div class="p-3 mx-auto" style={cardStyle}>
                                        <a href="https://mkromney.github.io/Workday-Interactive-Hourly-Planner/" target="_blank" class="btn btn-dark" rel="noreferrer">Live Site</a>
                                        <a href="https://github.com/mkromney/Workday-Interactive-Hourly-Planner" target="_blank" class="btn btn-white" rel="noreferrer">Git Repo</a>
                                </div>
                                   </h5>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="card mb-4 text-dark">
                            <img src={NoteTaker} class="card-img-top" alt="Project 6"></img>
                            <div class="card-body">
                                <h5>
                                    Note Taker with JavaScript
                                        <div>
                                            <small class="text-muted">This mini app allows a user to create a series of notes and store them for later use. Notes can be deleted. This app may also be used as a task or to-do list. Must be run in the terminal using Node.js and NPM.</small>
                                        </div>
                                    <div class="p-3 mx-auto" style={cardStyle}>
                                        <a href="https://maridons-notetaker-ja-9cdc326561db.herokuapp.com/" target="_blank" class="btn btn-dark" rel="noreferrer">Heroku Live Link</a>
                                        <a href="https://github.com/mkromney/Interactive-Note-Take-with-JavaScript" target="_blank" class="btn btn-white" rel="noreferrer">Git Repo</a>
                                    </div>
                                   </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 text-dark">
                            <img src={ReadMeGenerator} class="card-img-top" alt="Project 5"></img>
                            <div class="card-body">
                                <h5>
                                    README.md Generator
                                        <div>
                                            <small class="text-muted">This mini app allows a user to create a series of notes and store them for later use. Notes can be deleted. This app may also be used as a task or to-do list. Must be run in the terminal using Node.js and NPM.</small>
                                        </div>
                                    <div class="p-3 mx-auto" style={cardStyle}>
                                        <a href="https://mkromney.github.io/Node.js-Readme-Generator/" target="_blank" class="btn btn-dark" rel="noreferrer">Read Me</a>
                                        <a href="https://github.com/mkromney/Node.js-Readme-Generator" target="_blank" class="btn btn-white" rel="noreferrer">Git Repo</a>
                                    </div>
                                   </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

  // and the projects list
 };
 
 export default Portfolio;