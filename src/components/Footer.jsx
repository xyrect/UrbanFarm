import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faPrint, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub ,faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="text-center text-lg-start " style={{marginTop:'3rem',paddingTop:'2rem',backgroundColor:'#334B35',color:'#fff'}}>
            

            <section className="">
                <div className="container text-center text-md-start mt-6">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Urban Farm
                            </h6>
                            <p>
                            Website yang menyediakan panduan
                            berkebun untuk ruang terbatas (Urban Farming)
                            dan juga menghubungkan langsung ke
                            marketplace untuk alat, bahan, dan bibit berkebun
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <img src="../public/logo/mylogo.png" alt="logo" />
                        </div>

                        {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Fitur
                            </h6>
                            <p>
                                <a href="/" className="text-reset">Beranda</a>
                            </p>
                            <p>
                                <a href="/tentangkami" className="text-reset">Tentang Kami</a>
                            </p>
                            <p>
                                <a href="/panduan" className="text-reset">Panduan</a>
                            </p>
                            <p>
                                <a href="/artikel" className="text-reset">Artikel</a>
                            </p>
                        </div> */}

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Kontak</h6>
                            <p><FontAwesomeIcon icon={faEnvelope} className="me-3" />UrbanFarm@gmail.com</p>
                            <p><FontAwesomeIcon icon={faPhoneAlt} className="me-3" />085947101069</p>
                            <p><FontAwesomeIcon icon={faWhatsapp} className="me-3" />085947101069</p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Media Sosial</h6>
                            <p><FontAwesomeIcon icon={faFacebook} className="me-3" />Urban Farm</p>
                            <p><FontAwesomeIcon icon={faInstagram} className="me-3" />Urban Farm</p>
                            <p><FontAwesomeIcon icon={faYoutube} className="me-3" />Urban Farm CH</p>
                        </div>
                    </div>
                </div>
            </section>

            
        </footer>
    );
}

export default Footer;
