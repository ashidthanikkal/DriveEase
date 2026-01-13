import React, { useEffect } from 'react';
import './Landingpage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';

const serviceCardData = [
    {
        icon: "fa-solid fa-credit-card",
        title: "No downpayment",
        points: [
            "Access to a Vehicle Without Financial Strain",
            "No need to pay hefty road tax.",
            "Cheaper than EMI"
        ],
        dataAosDelay: "0"
    },
    {
        icon: "fa-solid fa-shield",
        title: "Free Insurance",
        points: [
            "No additional financial burden of paying for insurance",
            "Comprehensive Coverage"
        ],
        dataAosDelay: "200"
    },
    {
        icon: "fa-solid fa-gears",
        title: "Free Servicing",
        points: [
            "Cost Savings",
            "No additional financial burden of paying for servicing"
        ],
        dataAosDelay: "400"
    },
    {
        icon: "fa-solid fa-hand-holding-dollar",
        title: "Zero hidden charges",
        points: [
            "Transparent Pricing",
            "Clearly Defined Terms and Conditions"
        ],
        dataAosDelay: "600"
    },
    {
        icon: "fa-solid fa-road",
        title: "No Limits",
        points: [
            "Option to Switch Cars",
            "Return or extend anytime"
        ],
        dataAosDelay: "800"
    }
];


function Landingpage() {
    window.scrollTo(0, 0);

    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of animation in milliseconds
            once: true, // whether animation should happen only once - while scrolling down
        });
    }, []);



    return (
        <div className='landing'>
            <Header></Header>
            <Container>
                <Row className='banner d-flex justify-content-center align-items-center'>
                    <Col lg={6} md={12}>
                        <img style={{ width: "100%" }} src="https://i.postimg.cc/cC75sgzd/Car-rental-pana.png" alt="" />
                    </Col>
                    <Col className='banner_content' lg={6} md={12}>
                        <h1>DriveEase: Where Every Mile Matters</h1>
                        <p>
                            Welcome to DriveEase, where renting a car is designed to be effortless and enjoyable. We offer a diverse selection of vehicles, from sleek sedans to spacious SUVs, ensuring there's a perfect ride for every journey. Our commitment is to provide competitive rates, transparent booking processes, and exceptional customer service. Whether you're traveling for business or pleasure, DriveEase is your trusted partner for convenient, reliable, and memorable car rentals. Join us and experience the simplicity of driving with DriveEase.
                        </p>
                        <Link to={'./home'}><div className='text-center py-3'><button className='car_btn'>Choose your Car</button></div></Link>
                    </Col>
                </Row>

                <div className='about text-center'>
                    <h1> About us </h1>
                    <p>Discover the convenience and benefits of car subscription with DriveEase. Our customer-friendly system ensures a seamless experience for your favorite pick. Enjoy zero down payment, free insurance, and complimentary maintenance and service. With the freedom to return or extend your subscription anytime, DriveEase guarantees your happiness on the road. Choose DriveEase and experience the joy of hassle-free car subscription today.</p>
                </div>

                <div className='d-flex justify-content-center gap-4 flex-wrap service_cards mb-5'>
                    {serviceCardData.map((data, index) => (
                        <div key={index} className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="first-content d-flex flex-column justify-content-center align-items-center">
                                        <div style={{ boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)" }} className='p-2 w-25 rounded'>
                                            <i className={`${data.icon}`}></i>
                                        </div>
                                        <p className='title'>{data.title}</p>
                                    </div>
                                </div>
                                <div className="flip-card-back p-2">
                                    <span>
                                        {data.points.map((point, i) => (
                                            <p key={i}>» {point}</p>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Landingpage;
