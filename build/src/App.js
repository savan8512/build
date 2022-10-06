
import './App.css';
import './aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons';
import { GiMountains } from "@react-icons/all-files/gi/GiMountains";
import { GiWaterfall } from "@react-icons/all-files/gi/GiWaterfall";
import { GiCompass } from "@react-icons/all-files/gi/GiCompass";
import { GiTrowel } from "@react-icons/all-files/gi/GiTrowel";
import { BsEasel } from "react-icons/bs";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { BsCheck2All } from "react-icons/bs";
import { GiFullMotorcycleHelmet } from "@react-icons/all-files/gi/GiFullMotorcycleHelmet";
import { GiGroundSprout } from "@react-icons/all-files/gi/GiGroundSprout";
import { FaRegHandPointRight } from "@react-icons/all-files/fa/FaRegHandPointRight";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { BiReceipt } from "@react-icons/all-files/bi/BiReceipt";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { ImStarFull } from "react-icons/im";

function App() {
  return (
    <div className="App">
      <header id="header" className="header d-flex align-items-center">
        <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
          <a href='#' className='logo d-flex align-items-center'>
            <h1>
              UpConstruction
              <span>.</span>
            </h1>
          </a>
          <nav id='navbar' className='navbar'>
            <ul>
              <li>
                <a href='App.js' className='active'>
                  Home
                </a>
              </li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>service</a></li>
              <li><a href='#'>Projects</a></li>
              <li><a href='#'>blog</a></li>
              <li><a href='#'>Dropdown</a></li>
              <li><a href='#'>Contect</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section id='hero' className='hero'>
        <div className='info d-flex align-items-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 text-center'>
                <h2 className='aos-init aos-animate'>
                  Welcome to <br />
                  <span>UpConstruction</span>
                </h2>
                <p className='p11'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href='#' className='btn-get-started aos-init aos-animate'>Get Started</a>
              </div>
            </div>
          </div>
        </div>
        <div id='hero-carousel' className='carousel slide' data-bs-ride>

        </div>
      </section>
      <section>
        <div className='slider'>

        </div>
      </section>
      <main id='main'>
        <section id='get-started' className='get-started section-bg'>
          <div className='container'>
            <div className='row justify-content-between gy-4'>
              <div className='col-lg-6 d-flex align-items-center'>
                <div className='content'>
                  <div className=''>
                    <h3>Minus hic non reiciendis ea possimus at quia.</h3>
                    <p>Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto ipsa. Eos ipsum nobis ipsa soluta itaque perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi possimus ut delectus dicta.</p>
                    <p>Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore culpa eos. Deserunt porro magni qui necessitatibus dolorem at animi cupiditate.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-5 aos-init aos-animate '>
                <form className='php-email-form'>
                  <h3>Get a quote</h3>
                  <p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim linead sero park flows.</p>
                  <div className='row gy-3'>
                    <div className='col-md-12'>
                      <input type='text' name="Name" className='form-control' placeholder='Name'></input>
                    </div>
                    <div className='col-md-12'>
                      <input type='email' name="email" className='form-control' placeholder='Email'></input>
                    </div>
                    <div className='col-md-12'>
                      <input type='text' name="Phone" className='form-control' placeholder='Phone'></input>
                    </div>
                    <div className='col-md-12'>
                      <textarea name="message" rows="6" className='form-control' placeholder='Message'></textarea>
                    </div>
                    <div className='col-md-12 text-center'>
                      <button type='submit'>Get a quote</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id='constructions' className='constructions'>
          <div className='container aos-init aos-animate'>
            <div className='section-header'>
              <span>Constructions</span>
              <h2>Constructions</h2>
              <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
            </div>

            <div className='row gy-4'>
              <div className='col-lg-6 aos-init aos-animate'>
                <div className='card-item'>
                  <div className='row'>
                    <div className='col-xl-5'>
                      <div className='card-bg pelo'>
                      </div>
                    </div>
                    <div className='col-xl-7 d-flex align-items-center'>
                      <div className='card-body'>
                        <h4 className='card-title'>Eligendi omnis sunt veritatis.</h4>
                        <p>Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 aos-init aos-animate'>
                <div className='card-item'>
                  <div className='row'>
                    <div className='col-xl-5'>
                      <div className='card-bg pelo1'>
                      </div>
                    </div>
                    <div className='col-xl-7 d-flex align-items-center'>
                      <div className='card-body'>
                        <h4 className='card-title'>Error beatae dolor inventore aut</h4>
                        <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 aos-init aos-animate'>
                <div className='card-item'>
                  <div className='row'>
                    <div className='col-xl-5'>
                      <div className='card-bg pelo2'>
                      </div>
                    </div>
                    <div className='col-xl-7 d-flex align-items-center'>
                      <div className='card-body'>
                        <h4 className='card-title'>Expedita voluptas ut ut nesciunt</h4>
                        <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 aos-init aos-animate'>
                <div className='card-item'>
                  <div className='row'>
                    <div className='col-xl-5'>
                      <div className='card-bg pelo3'>
                      </div>
                    </div>
                    <div className='col-xl-7 d-flex align-items-center'>
                      <div className='card-body'>
                        <h4 className='card-title'>Possimus ut sed velit assumenda</h4>
                        <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='services' className='services section-bg'>
          <div className='container'>
            <div className='section-header'>
              <span>services</span>
              <h2>Services</h2>
              <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam quibusdam ut ullam perferendis repellat non ut consequuntur est.</p>
            </div>
            <div className='row gy-4'>
              <div className='col-lg-4 col-md-6'>
                <div className='service-item position-relative'>
                  <div className='icon'>
                    <div className='i'>< GiMountains />
                    </div>
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                  <a className='readmore stretched-link'>Learn more <i><FaRegHandPointRight /></i> </a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='service-item position-relative'>
                  <div className='icon'>
                    <div className='i'>< GiWaterfall />
                    </div>
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                  <a className='readmore stretched-link'>Learn more <i><FaRegHandPointRight /></i> </a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='service-item position-relative'>
                  <div className='icon'>
                    <div className='i'>< GiCompass />
                    </div>
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                  <a className='readmore stretched-link'>Learn more <i><FaRegHandPointRight /></i> </a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='service-item position-relative'>
                  <div className='icon'>
                    <div className='i'>< GiTrowel />
                    </div>
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                  <a className='readmore stretched-link'>Learn more <i><FaRegHandPointRight /></i> </a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='service-item position-relative'>
                  <div className='icon'>
                    <div className='i'>< GiFullMotorcycleHelmet />
                    </div>
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                  <a className='readmore stretched-link'>Learn more <i><FaRegHandPointRight /></i> </a>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='service-item position-relative'>
                  <div className='icon'>
                    <div className='i'>< GiGroundSprout />
                    </div>
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                  <a className='readmore stretched-link'>Learn more <i><FaRegHandPointRight /></i> </a>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section id='alt-services' className='alt-services'>
          <div className='container'>
            <div className='row justify-content-around gy-4'>
              <div className='col-lg-6  img-bg'>
              </div>
              <div className='col-lg-5 d-flex flex-column justify-content-center'>
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>
                <div className='icon-box d-flex position-relative'>
                  <i><BsEasel /></i>
                  <div>
                    <h4><a href='' className='stretched-link'>Lorem Ipsum</a></h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
                <div className='icon-box d-flex position-relative'>
                  <i className='f1'><BsFillPatchCheckFill /></i>
                  <div>
                    <h4><a href='' className='stretched-link'>Lorem Ipsum</a></h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
                <div className='icon-box d-flex position-relative'>
                  <i className='f1'><BsFillBrightnessHighFill /></i>
                  <div>
                    <h4><a href='' className='stretched-link'>Lorem Ipsum</a></h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
                <div className='icon-box d-flex position-relative'>
                  <i className='f1'><BsFillBrightnessHighFill /></i>
                  <div>
                    <h4><a href='' className='stretched-link'>Lorem Ipsum</a></h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='about' className='about section2-bg section1'>
          <div className='container'>
            <div className='row no-gutters'>
              <div className='content col-xl-5 d-flex align-items-stretch'>
                <div className='content '>
                  <h3>Voluptatem dignissimos provident quasi</h3>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                  <a href='#' className=' cta'><span>About us</span><i><FaArrowRight /></i></a>
                </div>
              </div>
              <div className='col-xl-7 d-flex align-items-stretch'>
                <div className='icon-boxes d-flex flex-column justify-content-center'>
                  <div className='row'>
                    <div className='col-md-6 icon-box aos-init aos-animate'>
                      <i><BiReceipt /></i>
                      <h4>Corporis voluptates sit</h4>
                      <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                    <div className='col-md-6 icon-box aos-init aos-animate'>
                      <i><BiReceipt /></i>
                      <h4>Corporis voluptates sit</h4>
                      <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                    <div className='col-md-6 icon-box aos-init aos-animate'>
                      <i><BiReceipt /></i>
                      <h4>Corporis voluptates sit</h4>
                      <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                    <div className='col-md-6 icon-box aos-init aos-animate'>
                      <i><BiReceipt /></i>
                      <h4>Corporis voluptates sit</h4>
                      <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='features' className='features'>
          <div className='container'>
            <ul className='nav nav-tabs row g-2 d-flex'>
              <li className='nav-item col-3' role="presentation">
                <a className='nav-link active show' data-bs-toggle="tab" data-bs-target="#tab-1" aria-selected="true" role="tab">
                  <h4>Modisit</h4>
                </a>
              </li>
              <li className='nav-item col-3' role="presentation">
                <a className='nav-link' data-bs-toggle="tab" data-bs-target="#tab-2" aria-selected="false" tabindex="-1" role="tab">
                  <h4>Praesenti</h4>
                </a>
              </li>
              <li className='nav-item col-3' role="presentation">
                <a className='nav-link' data-bs-toggle="tab" data-bs-target="#tab-3" aria-selected="false" tabindex="-1" role="tab">
                  <h4>Explica</h4>
                </a>
              </li>
              <li className='nav-item col-3' role="presentation">
                <a className='nav-link' data-bs-toggle="tab" data-bs-target="#tab-4" aria-selected="false" tabindex="-1" role="tab">
                  <h4>Nostrum</h4>
                </a>
              </li>
            </ul>
            <div className='tab-content'>
              <div className='tab-pane active show' id='tab1' role="tabpanel">
                <div className='row'>
                  <div className='col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center'>
                    <h3>Voluptatem dignissimos provident</h3>
                    <p className='fst-italic'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul>
                      <li>
                        <i><BsCheck2All /></i>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i><BsCheck2All /></i>
                        Duis aute irure dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i><BsCheck2All /></i>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-6 order-1 order-lg-2 text-center'>
                    <img className='img-fluid' src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/features-1.jpg'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='projects' className='projects'>
          <div className='container'>
            <div className='section-header'>
              <span>Our Projects</span>
              <h2>Our Projects</h2>
              <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
            </div>
            <div className='portfolio-isotope'>
              <div className='row gy-4 portfolio-container'>
                <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
                  <div className='portfolio-content img-fluid'>
                    <figure>
                      <img src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/remodeling-1.jpg' className='img-fluid1'></img>
                    </figure>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
                  <div className='portfolio-content img-fluid'>
                    <figure>
                      <img src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/construction-1.jpg' className='img-fluid1'></img>
                    </figure>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
                  <div className='portfolio-content img-fluid'>
                    <figure>
                      <img src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/repairs-1.jpg' className='img-fluid1'></img>
                    </figure>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
                  <div className='portfolio-content img-fluid'>
                    <figure>
                      <img src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/design-1.jpg' className='img-fluid1'></img>
                    </figure>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
                  <div className='portfolio-content img-fluid'>
                    <figure>
                      <img src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/remodeling-2.jpg' className='img-fluid1'></img>
                    </figure>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
                  <div className='portfolio-content img-fluid'>
                    <figure>
                      <img src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/construction-2.jpg' className='img-fluid1'></img>
                    </figure>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
                  <div className='portfolio-content img-fluid'>
                    <figure>
                      <img src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/design-2.jpg' className='img-fluid1'></img>
                    </figure>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
                  <div className='portfolio-content img-fluid'>
                    <figure>
                      <img src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/remodeling-3.jpg' className='img-fluid1'></img>
                    </figure>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
                  <div className='portfolio-content img-fluid'>
                    <figure>
                      <img src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/construction-3.jpg' className='img-fluid1'></img>
                    </figure>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
                  <div className='portfolio-content img-fluid'>
                    <figure>
                      <img src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/repairs-3.jpg' className='img-fluid1'></img>
                    </figure>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
                  <div className='portfolio-content img-fluid'>
                    <figure>
                      <img src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/design-3.jpg' className='img-fluid1'></img>
                    </figure>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
                  <div className='portfolio-content img-fluid'>
                    <figure>
                      <img src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/projects/repairs-2.jpg' className='img-fluid1'></img>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='testimonials' className='testimonials section-bg'>
          <div className='container'>
            <div className='section-header'>
              <span>Testimonials</span>
              <h2>Testimonials</h2>
              <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
            </div>
            {/* <div className='slides-2 swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden'>
              
            </div>  */}
            <div className='testimonial-wrap'>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={2}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // nSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                  <div className='testimonial-item'>
                    <img src='https://bootstrapmade.com/demo/templates/UpConstruction/assets/img/testimonials/testimonials-4.jpg' className='testimonial-img'/>
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. </p>

                    <div className='stars'>
                      <i><ImStarFull/></i>
                      <i><ImStarFull/></i>
                      <i><ImStarFull/></i>
                      <i><ImStarFull/></i>
                      <i><ImStarFull/></i>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
