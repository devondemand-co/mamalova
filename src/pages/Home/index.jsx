import React from 'react';
import { Container, Grid, Typography, Divider, Button } from '@material-ui/core';

import '../../styles/homeStyles.scss';

//router
import { Link } from 'react-router-dom';

//icons
import ArrowSVG from '../../assets/V1/Arrow.svg';
import LogoDesktop from '../../assets/V1/logo_desktop.svg';
import FacebookIcon from '../../assets/V1/fb.svg';
import InstagramIcon from '../../assets/V1/insta.svg';
import UberEattSVG from '../../assets/icons/uber-eats.svg';
import justeatSVG from '../../assets/V1/just-eat.svg';
import deliverooSVG from '../../assets/V1/deliveroo.svg';
import pizzaIcon from '../../assets/V1/pizza.svg';

export default function index() {
  return (
    <>
      {/* <div className="background-image overlay"></div> */}
      <div id="home-styles">
        <Container className="conteinerWrapper">
          <Grid container spacing={3} className="header">
            <Grid item md={4} xs={12} className="col-1">
              <Link to="/menu">Le Menu</Link>
            </Grid>
            <Grid className="col-2" item md={4} xs={12}>
              <img src={LogoDesktop} alt="logo-desktop" />
            </Grid>
            <Grid item md={4} xs={12} className="col-3">
              <div className="colWrap">
                <span className="text">Rejoignez nous</span>
                <img className="arrow" src={ArrowSVG} alt="arrow-svg" />
              </div>
              <div>
                <Button className="buttonStyle" variant="contained" color="primary">
                  <img src={FacebookIcon} alt="fb-icon" />
                </Button>
                <Button className="buttonStyle" variant="contained" color="primary">
                  <img src={InstagramIcon} alt="insta-icon" />
                </Button>
              </div>
            </Grid>
          </Grid>

          <div className="btnDiv">
            <div className="btnWrap">
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
              <Typography className="text-1" variant="body1" align="center">
                Ou
              </Typography>
              <Typography className="text-2" variant="subtitle1" align="center">
                Commandez sur votre plateforme préférée :
              </Typography>

              <a
                style={{ width: '100%', textDecoration: 'none' }}
                href="https://www.ubereats.com/fr/paris/food-delivery/mamma-lova/sowtpdNMTRqIK2GpMX2t2w"
              >
                <Button className="btnSub" variant="contained" color="primary" fullWidth>
                  <img src={UberEattSVG} alt="uber-eat-icon" width="100" />
                </Button>
              </a>
              <a
                // target="blank"
                style={{ width: '100%', textDecoration: 'none' }}
                href="https://deliveroo.fr/fr/menu/paris/versailles-notre-dame/mamma-lova-rue-des-2-portes?geohash=u09t87j02jxw"
              >
                <Button className="btnSub" variant="contained" color="primary" fullWidth>
                  <img src={deliverooSVG} alt="deliveroo-icon" />
                </Button>
              </a>
              {/* <Button className="btnSub" variant="contained" color="primary" fullWidth>
                <img src={justeatSVG} alt="just-eat-icon" />
              </Button> */}
            </div>
          </div>
          <div className="footer">
            <Grid container spacing={3} justify="center">
              <Grid item className="col-1" md={4} xs={12} justify="left">
                7 rue des 2 portes 78000 Versailles
              </Grid>
              <Grid item className="col-2" md={4} xs={12}>
                +33 1 76 54 45 34
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
