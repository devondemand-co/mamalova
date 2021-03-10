import React from 'react';
import { Container, Grid, Typography, Divider, Button } from '@material-ui/core';

import '../../styles/menuStyle.scss';

//router
import { Link } from 'react-router-dom';

//icons
import ArrowGreenSVG from '../../assets/Code Promo/arrowgreen.svg';
import ArrowSVG from '../../assets/Code Promo/Arrow.svg';
import LogoDesktop from '../../assets/V1/logo_desktop.svg';
import FacebookIcon from '../../assets/V1/fb.svg';
import InstagramIcon from '../../assets/V1/insta.svg';
import UberEattSVG from '../../assets/V1/Uber_Eats.svg';
import justeatSVG from '../../assets/V1/just-eat.svg';
import deliverooSVG from '../../assets/V1/deliveroo.svg';
import pizzaIcon from '../../assets/V1/pizza.svg';

export default function index() {
  return (
    <>
      {/* <div className="background-image overlay"></div> */}
      <div id="menu-styles">
        <Container className="conteinerWrapper">
          <Grid container spacing={3} className="header">
            <Grid item md={4} xs={12} className="col-1">
              <Link to="/menu">le Menu</Link>
            </Grid>
            <Grid className="col-2" item md={4} xs={12}>
              <img src={LogoDesktop} alt="logo-desktop" />
            </Grid>
            <Grid item md={4} xs={12} className="col-3">
              <div className="colWrap">
                <span className="text">Rejoignez nous</span>
                <img className="arrow" src={ArrowGreenSVG} alt="arrow-svg" />
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
            <div className="arrowdisplay">
              <img src={ArrowSVG} />
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
                <Button className="btnMain" variant="contained" color="primary" fullWidth>
                  Click and Collect
                </Button>
              </div>
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