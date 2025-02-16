import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Project.css';

const Project = () => {
  return (
    <>
  
      <div className="container-fluid portfolio-btn pro-section ">
      <h1 className='text-center' id='pro'> MY Project</h1>
        <div className="row mt-3">
       <div className="col-lg-3 col-sm-6 animate__animated animate__backInUp">
       <Card className="  me-3 custom-card">
            <Card.Img variant="top" src="/coffeeshop.png" className="card-image mt-2" />
            <Card.Body>
              <Card.Title>Coffee Shop</Card.Title>
              <Card.Text>
                This Coffee Shop was made using HTML, CSS, and JavaScript.
              </Card.Text>
              <a href="https://web-page-peach-pi.vercel.app/"  target="_blank" >Live Link</a>
            </Card.Body>
          </Card> 
       </div>
       <div className="col-lg-3 col-sm-6 animate__animated animate__backInUp">
       <Card className="me-3 custom-card">
            <Card.Img variant="top" src="/wheatherf.png" className="card-image mt-2" target="_blank" />
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <Card.Text>
                This Weather App was made using JavaScript.
              </Card.Text>
          <a href="">Live Link</a>
            </Card.Body>
          </Card>
       </div>
       <div className="col-lg-3 col-sm-6 animate__animated animate__backInUp">
       <Card className="me-3 custom-card">
            <Card.Img variant="top" src="/claculator.png" className="card-image mt-2" target="_blank" />
            <Card.Body>
              <Card.Title>Calculator</Card.Title>
              <Card.Text>
                This Calculator was made using JavaScript.
              </Card.Text>
                <a href="https://calculator-beta-eight-12.vercel.app/ " target="_blank" > Live Link</a>
            </Card.Body>
          </Card>

          
       </div>
       <div className="col-lg-3 col-sm-6 animate__animated animate__backInUp">
       <Card className="custom-card">
            <Card.Img variant="top" src="/tailwind.png" className="card-image mt-2" />
            <Card.Body>
              <Card.Title>React Web Page</Card.Title>
              <Card.Text>
                This YouTube Clone was made using HTML , CSS ,React , Tailwind.
              </Card.Text>
            <a href="react-tailwind-nine-kappa.vercel.app" target="_blank" >Live Link</a>
            </Card.Body>
          </Card>
       </div>
        </div>
           <div className="row mt-3">
   <div className="col-lg-3 col-sm-6 animate__animated animate__backInUp">
   <Card className="me-3 custom-card">
            <Card.Img variant="top" src="/hackathone.jpg" className="card-image mt-2" />
            <Card.Body>
              <Card.Title>Blog App</Card.Title>
              <Card.Text>
                This Blog APP was made using HTML, CSS, JavaScript , FireBase.
              </Card.Text>
              <a href="https://amna-attaria.github.io/Hackathone-Fire-Base/" target="_blank" >Live Link</a>
            </Card.Body>
          </Card>
   </div>
   <div className="col-lg-3 col-sm-6 animate__animated animate__backInUp">
   <Card className="me-3 custom-card">
            <Card.Img variant="top" src="/post.png" className="card-image mt-2" />
            <Card.Body>
              <Card.Title>Post App</Card.Title>
              <Card.Text>
                This Post App was made using HTML , CSS JavaScript , FireBase.
              </Card.Text>
          <a href="https://post-app-fire-base-authentication.vercel.app/ " target="_blank" >Live Link</a>
            </Card.Body>
          </Card>

          
   </div>
   <div className="col-lg-3 col-sm-6 animate__animated animate__backInUp">
   <Card className="me-3 custom-card">
            <Card.Img variant="top" src="reactcrud.png" className="card-image mt-2" />
            <Card.Body>
              <Card.Title>Online Mart </Card.Title>
              <Card.Text>
                ADD Product Fuctionality was made using React .
              </Card.Text>
                <a href="react-crud-liart-sigma.vercel.app/" target="_blank" > Live Link</a>
            </Card.Body>
          </Card>

       
   </div>
   <div className="col-lg-3 col-sm-6 animate__animated animate__backInUp">
   <Card className="custom-card">
            <Card.Img variant="top" src="/youtube.png" className="card-image mt-2" />
            <Card.Body>
              <Card.Title>YouTube Clone</Card.Title>
              <Card.Text>
                This YouTube Clone was made using HTML and CSS.
              </Card.Text>
            <a href="https://youtube-layout-html-css.vercel.app/" target="_blank" >Live Link</a>
            </Card.Body>
          </Card>
   </div>
        </div>
        <div className="row mt-3">
   <div className="col-lg-3 col-sm-6 animate__animated animate__backInUp">
   <Card className="me-3 custom-card">
            <Card.Img variant="top" src="/game.png" className="card-image mt-2" />
            <Card.Body>
              <Card.Title>JavaScript Game</Card.Title>
              <Card.Text>
                This Game was made using HTML, CSS, JavaScript .
              </Card.Text>
              <a href="https://animation-game-hazel.vercel.app/" target="_blank" >Live Link</a>
            </Card.Body>
          </Card>
   </div>
   <div className="col-lg-3 col-sm-6 animate__animated animate__backInUp">
   <Card className="me-3 custom-card">
            <Card.Img variant="top" src="/realstate.png" className="card-image mt-2" />
            <Card.Body>
              <Card.Title>Real State Web Page</Card.Title>
              <Card.Text>
                This Post App was made using HTML , CSS JavaScript , FireBase.
              </Card.Text>
          <a href="https://real-estate-web-page-two.vercel.app/ " target="_blank" >Live Link</a>
            </Card.Body>
          </Card>

          
   </div>
   <div className="col-lg-3 col-sm-6 animate__animated animate__backInUp">
   <Card className="me-3 custom-card">
            <Card.Img variant="top" src="/nike.png" className="card-image mt-2" />
            <Card.Body>
              <Card.Title>Web Page </Card.Title>
              <Card.Text>
                ADD Product Fuctionality was made using HTML CSS  .
              </Card.Text>
                <a href="https://real-estate-web-page-whie.vercel.app/" target="_blank" > Live Link</a>
            </Card.Body>
          </Card>

       
   </div>
   <div className="col-lg-3 col-sm-6 animate__animated animate__backInUp">
   <Card className="custom-card">
            <Card.Img variant="top" src="/ride.png" className="card-image mt-2" />
            <Card.Body>
              <Card.Title>Web Page</Card.Title>
              <Card.Text>
                This YouTube Clone was made using HTML and CSS.
              </Card.Text>
            <a href="https://ride-sharing-web-page.vercel.app/" target="_blank" >Live Link</a>
            </Card.Body>
          </Card>
   </div>
        </div>
      </div>
    </>
  );
};

export default Project;
