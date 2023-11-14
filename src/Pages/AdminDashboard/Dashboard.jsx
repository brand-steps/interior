import React from "react";
import Sidebar from "./Sidebar";
import "./product.css";
import { useNavigate } from "react-router-dom";
import AdminBar from "../HOme/AdminBar";


const Dashbord = () => {

  const navigate = useNavigate();
  const divStyle = {
    backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20190331/pngtree-vector-white-abstract-background-design-templates-collection-wit-image_94438.jpg')",
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '8px',
    width: '300px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    background: '#28231d',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };

  return (
    <>
<AdminBar/>

<div style={divStyle}>
        
        <div className='flex  justify-evenly flex-wrap my-4 topdiv' >

        <div style={containerStyle}>
        <img src="https://static.thenounproject.com/png/2951113-200.png" alt="Fairs" style={imageStyle} />
        <h1>APPROVE PRODUCTS</h1>
        <p>You can approve or disapprove vender products and can edit the products before approving according to your choice</p>
<button onClick={() =>{navigate("/productrequest")}} style={buttonStyle}>View</button>
      </div>

      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/962/962863.png" alt="Fairs" style={imageStyle} />
        <h1>All PRODUCTS</h1>
        <p>You can view all the products uploaded and can edit or delete it</p>
<button onClick={() =>{navigate("/AllProductDashboad")}} style={buttonStyle}>View</button>
      </div>
      
      
    </div>

    <div className='flex  justify-evenly flex-wrap my-4 topdiv' style={divStyle}>
    <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/4129/4129437.png" alt="Fairs" style={imageStyle} />
        <h1>USER PRODUCTS</h1>
        <p>You can view products are uploaded by a certain user and can edit or delete it</p>
<button onClick={() =>{navigate("/UserProduct")}} style={buttonStyle}>View</button>
      </div>

      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/3106/3106773.png" alt="Fairs" style={imageStyle} />
        <h1>All USERS</h1>
        <p>You can view all the vendors and view their profile and can edit or delete it</p>
<button onClick={() =>{navigate("/AllUser")}} style={buttonStyle}>View</button>
      </div>
      
    </div>
      </div>



      
        
        <div className='flex  justify-evenly flex-wrap my-4 topdiv' >

        <div style={  containerStyle2}>
        <div class="flex-item">
              <div class=" ">
                {/* <!-- card --> */}
                <a href="#">
                  <div class="card-front bg-violet">
                    <i class="fa fa-pie-chart fa-3x tile-icon icon-white"></i>
                    <h4>Flexible Spending Account</h4>
                  </div>
                  <div class="card-back bg-violet">
                    <p class="title">Lorem ipsum dolor sit amet</p>
                    <p class="desc">
                      Pellentesque magna nunc, fermentum nec ipsum non,
                      consequat scelerisque dui.
                    </p>
                    <p class="link">
                      Details <i class="fa fa-chevron-circle-right"></i>
                    </p>
                  </div>
                </a>
                {/* <!-- /card --> */}
              </div>
            </div>

      </div>

      <div style={containerStyle2}>

      <div class="flex-item">
              <div class=" ">
                {/* <!-- card --> */}
                <a href="#">
                  <div class="card-front bg-magenta">
                    <i class="fa fa-heart fa-3x tile-icon icon-white"></i>
                    <h4>HSA Total Balance</h4>
                  </div>
                  <div class="card-back bg-magenta">
                    <p class="title">Praesent varius mi sem</p>
                    <p class="desc">
                      Cras posuere consequat nisl, ut rhoncus odio finibus sit
                      amet. Sed consectetur dapibus.
                    </p>
                    <p class="link">
                      Details <i class="fa fa-chevron-circle-right"></i>
                    </p>
                  </div>
                </a>
                {/* <!-- /card --> */}
              </div>
            </div>
      </div>
      <div style={containerStyle2}>
      <div class="flex-item">
              <div class=" ">
                {/* <!-- card --> */}
                <a href="#">
                  <div class="card-front bg-blue">
                    <i class="fa fa-heart fa-3x tile-icon icon-white"></i>
                    <h4>Your Paid Time Off Balance</h4>
                  </div>
                  <div class="card-back bg-blue">
                    <p class="title">Vestibulum eget sem malesuada</p>
                    <p class="desc">
                      Etiam imperdiet ullamcorper dolor sit amet molestie.
                      Quisque eu nibh in ligula.
                    </p>
                    <p class="link">
                      Details <i class="fa fa-chevron-circle-right"></i>
                    </p>
                  </div>
                </a>
                {/* <!-- /card --> */}
              </div>
            </div>

      </div>
      <div style={containerStyle2}>
      <div class="flex-item">
              <div class=" ">
                {/* <!-- card --> */}
                <a href="#">
                  <div class="card-front bg-green">
                    <i class="fa fa-bar-chart fa-3x tile-icon icon-white"></i>
                    <h4>Savings Plan Total Balance</h4>
                  </div>
                  <div class="card-back bg-green">
                    <p class="title">Curabitur elementum augue</p>
                    <p class="desc">
                      Nullam porttitor dui quis commodo mattis. Fusce posuere,
                      nisl id ultrices pellentesque.
                    </p>
                    <p class="link">
                      Details <i class="fa fa-chevron-circle-right"></i>
                    </p>
                  </div>
                </a>
                {/* <!-- /card --> */}
              </div>
            </div>

      </div>
      
    </div>


    <div className='flex  justify-evenly flex-wrap my-4 topdiv' >

<div style={containerStyle2}>
<div class="donut-chart-block block22  ml-4">
              <h2 class="titular   text-white">OS AUDIENCE STATS</h2>
              <div class="donut-chart">
                <div id="porcion1" class="recorte">
                  <div class="quesito ios" data-rel="21"></div>
                </div>
                <div id="porcion2" class="recorte">
                  <div class="quesito mac" data-rel="39"></div>
                </div>
                <div id="porcion3" class="recorte">
                  <div class="quesito win" data-rel="31"></div>
                </div>
                <div id="porcionFin" class="recorte">
                  <div class="quesito linux" data-rel="9"></div>
                </div>
                {/* <!-- FIN AÑADIDO GRÄFICO --> */}
                <p class="center-date">
                  JUNE
                  <br />
                  <span class="scnd-font-color">2023</span>
                </p>
              </div>
              <ul class="os-percentages horizontal-list">
                <li>
                  <p class="ios os scnd-font-color">iOS</p>
                  <p class="os-percentage">
                    21<sup>%</sup>
                  </p>
                </li>
                <li>
                  <p class="mac os scnd-font-color">Mac</p>
                  <p class="os-percentage">
                    39<sup>%</sup>
                  </p>
                </li>
                <li>
                  <p class="linux os scnd-font-color">Linux</p>
                  <p class="os-percentage">
                    9<sup>%</sup>
                  </p>
                </li>
                <li>
                  <p class="win os scnd-font-color">Win</p>
                  <p class="os-percentage">
                    31<sup>%</sup>
                  </p>
                </li>
              </ul>
            </div>
</div>

<div style={containerStyle2}>
<div class="line-chart-block block22">
              <div class="line-chart">
                <div class="grafico">
                  <ul class="eje-y">
                    <li data-ejeY="30"></li>
                    <li data-ejeY="20"></li>
                    <li data-ejeY="10"></li>
                    <li data-ejeY="0"></li>
                  </ul>
                  <ul class="eje-x">
                    <li>Apr</li>
                    <li>May</li>
                    <li>Jun</li>
                  </ul>
                  <span data-valor="25">
                    <span data-valor="8">
                      <span data-valor="13">
                        <span data-valor="5">
                          <span data-valor="23">
                            <span data-valor="12">
                              <span data-valor="15"></span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
              <ul class="time-lenght horizontal-list">
                <li>
                  <a class="time-lenght-btn" href="#14">
                    Week
                  </a>
                </li>
                <li>
                  <a class="time-lenght-btn" href="#15">
                    Month
                  </a>
                </li>
                <li>
                  <a class="time-lenght-btn" href="#16">
                    Year
                  </a>
                </li>
              </ul>
              <ul class="month-data clear">
                <li>
                  <p>
                    APR<span class="scnd-font-color"> 2023</span>
                  </p>
                  <p>
                    <span class="entypo-plus increment"> </span>21<sup>%</sup>
                  </p>
                </li>
                <li>
                  <p>
                    MAY<span class="scnd-font-color"> 2023</span>
                  </p>
                  <p>
                    <span class="entypo-plus increment"> </span>48<sup>%</sup>
                  </p>
                </li>
                <li>
                  <p>
                    JUN<span class="scnd-font-color"> 2023</span>
                  </p>
                  <p>
                    <span class="entypo-plus increment"> </span>35<sup>%</sup>
                  </p>
                </li>
              </ul>
            </div>
</div>

<div style={containerStyle2}>
<div class="bar-chart-block block22">
              <h2 class="titular  text-white">
                By Country <span>*1000</span>
              </h2>
              <div class="grafico bar-chart">
                <ul class="eje-y">
                  <li data-ejeY="60"></li>
                  <li data-ejeY="45"></li>
                  <li data-ejeY="30"></li>
                  <li data-ejeY="15"></li>
                  <li data-ejeY="0"></li>
                </ul>
                <ul class="eje-x">
                  <li data-ejeX="37">
                    <i>España</i>
                  </li>
                  <li data-ejeX="56">
                    <i>Portugal</i>
                  </li>
                  <li data-ejeX="25">
                    <i>Italia</i>
                  </li>
                  <li data-ejeX="18">
                    <i>Grecia</i>
                  </li>
                  <li data-ejeX="45">
                    <i>EE.UU</i>
                  </li>
                  <li data-ejeX="50">
                    <i>México</i>
                  </li>
                  <li data-ejeX="33">
                    <i>Chile</i>
                  </li>
                </ul>
              </div>
            </div>
</div>

</div>





    </>
  );
};

export default Dashbord;
