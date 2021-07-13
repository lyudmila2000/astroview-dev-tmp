import ImageActions from '../actions/imageActions';

function initDev(){

  console.log('--- DEV MODE ---');

  // DEV
  // let imagePath = 'fits/656nmos.fits';
  let imagePath = "fits/tfn0m414-kb81-20210319-0198-e91.fits.fz";
  // let imagePath = 'fits/6008B000.fits';
  // let imagePath = "fits/elgordo.fits";

  ImageActions.addImage(imagePath);

}

module.exports = initDev;
