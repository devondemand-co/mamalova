import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';

import '../../styles/menuStyle.scss';

//router
import { Link } from 'react-router-dom';

//icons
import ArrowGreenSVG from '../../assets/Code Promo/arrowgreen.svg';
import ArrowSVG from '../../assets/Code Promo/Arrow.svg';
import LogoDesktop from '../../assets/V1/logo_desktop.svg';
import FacebookIcon from '../../assets/V1/fb.svg';
import InstagramIcon from '../../assets/V1/insta.svg';
import pizzaIcon from '../../assets/V1/pizza.svg';

import SEO from '../../components/seo';

export default function index() {
  return (
    <>
      <SEO
        title="Mamma Lova - Le Menu"
        description="Mamma Lova est une pizzeria avec une pâte faite maison à l’eau de source de 48h minimum de maturation pour un effet léger et très digeste avec des produits frais et originaux. Nous sommes situés à proximité du marché Carré Notre Dame dans une rue piétonne à Versailles. Si vous avez adoré le fromage ou la charcuterie sur nos pizzas rendez-vous dans notre épicerie avec de nombreux produits bio. Venez partager dans une ambiance chaleureuse des produits authentiques italiens et des plats faits maison."
      />
      {/* <div className="background-image overlay"></div> */}
      <div id="menu-styles">
        <Container className="conteinerWrapper" maxWidth="lg">
          <Grid container spacing={3} className="header">
            <Grid item md={4} xs={12} className="col-1">
              <a href='https://mammalovacarte.carrd.co/'>
                Le Menu
              </a>{' '}
            </Grid>
            <Grid className="col-2" item md={4} xs={12}>
              <Link to="/home">
                <img src={LogoDesktop} alt="logo-desktop" />
              </Link>
            </Grid>
            <Grid item md={4} xs={12} className="col-3">
              <div className="colWrap">
                <span className="text">Rejoignez nous</span>
                <img className="arrow" src={ArrowGreenSVG} alt="arrow-svg" />
              </div>
              <div>
                <a href="https://m.facebook.com/Mamma-Lova-Versailles-104445001769968/?tsid=0.38748269739848207&source=result">
                  <Button className="buttonStyle" variant="contained" color="primary">
                    <img src={FacebookIcon} alt="fb-icon" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/mamma.lova/">
                  <Button className="buttonStyle" variant="contained" color="primary">
                    <img src={InstagramIcon} alt="insta-icon" />
                  </Button>
                </a>
              </div>
            </Grid>
          </Grid>

          <div className="btnDiv">
            <div className="arrowdisplay">
              <img src={ArrowSVG} alt="arrowSVG" />
            </div>
            <div className="btnWrap">
              <Typography className="text-2" variant="subtitle1" align="center">
                Pssst… Rentrez ce code sur notre plateforme de click & collect
              </Typography>
              <Typography className="text-1" variant="subtitle1" align="center">
                GIVEME10
              </Typography>
              <Typography style={{ marginTop: '50px' }} className="text-2" variant="subtitle1" align="center">
                Pour obtenir 10% de reduction
              </Typography>

              <div className="buttonMainWrap">
                <img src={pizzaIcon} alt="pizza-icon" />
                <a
                  // target="blank"
                  style={{ width: '100%', textDecoration: 'none' }}
                  href="https://sioupla.it/mamma-lova/mamma-lova/a-la-carte.html?"
                >
                  <Button className="btnMain" variant="contained" color="primary" fullWidth>
                    Click and Collect
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="footer">
            <Grid container spacing={3} justify="center">
              <Grid item className="col-1" md={4} xs={12} justify="left">
                7 rue des 2 portes 78000 Versailles
              </Grid>
              <Grid item className="col-2" md={4} xs={12}>
                <a style={{ color: 'inherit', textDecoration: 'none' }} href="tel:0130241469">
                  0130241469
                </a>
              </Grid>
              <Grid item className="col-3" md={4} xs={12}>
                Mar - Dim : 11h - 22h
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
}
