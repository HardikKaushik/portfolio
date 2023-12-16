import React from 'react'
import meter8 from "../assets/img/sqlcertificate.png";
import meter1 from "../assets/img/google.png";
import meter2 from "../assets/img/py.png";
import meter3 from "../assets/img/webd.jpg";
import meter4 from "../assets/img/sqlcertificate.png";




export const Edu = () => {
    return (

        <section className='eduu'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wow zoomIn">
                            <h2>Certificates</h2>
                            <p>Here are the certificates i have achived by joining different Courses.<br></br> Certificates include Google analytics,Web Development,python and SQl with Data Science.</p>


                            <br />





                            <div id="carouselExample" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="card">

                                            <div class="card-body">
                                                <h5 class="card-title">Google Analytics Academy</h5>
                                                <p class="card-text">The Google Analytics Certificate by Google analytics academy for passing the assesment.</p>

                                                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    View Certificate
                                                </button>


                                                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <img src={meter1} class="img-fluid" alt="..." />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="card">

                                            <div class="card-body">
                                                <h5 class="card-title">Python with Data Science</h5>
                                                <p class="card-text">Python for Data Science Certificate by Simplilearn for compelting the course.</p>

                                                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    View Certificate
                                                </button>


                                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-centered">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <img src={meter2} class="img-fluid" alt="..." />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="card">

                                            <div class="card-body">
                                                <h5 class="card-title">Web Development</h5>
                                                <p class="card-text">Web Development Certificate by SmartKnower for completing the course which includes HTML,CSS,JAVASCRIPT and React.JS.</p>
                                                

                                                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <a className='cert' href={meter3}> View Certificate</a>
                                                   
                                                </button>


                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="card">

                                            <div class="card-body">
                                                <h5 class="card-title">SQL with Data Science</h5>
                                                <p class="card-text">SQL with Data Science Certficate by Great Learning for compelting the course.</p>


                                                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <a className='cert' href={meter4}> View Certificate</a>
                                                   
                                                </button>

                                                
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>


    )
}
