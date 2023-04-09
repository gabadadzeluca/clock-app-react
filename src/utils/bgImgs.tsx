import mobileImgLight from '../assets/mobile/bg-image-daytime.jpg';
import mobileImgDark from '../assets/mobile/bg-image-nighttime.jpg';
import tabletImgLight from '../assets/tablet/bg-image-daytime.jpg';
import tabletImgDark from '../assets/tablet/bg-image-nighttime.jpg';
import desktopImgLight from '../assets/desktop/bg-image-daytime.jpg';
import desktopImgDark from '../assets/desktop/bg-image-nighttime.jpg';


interface BgImages {
  [key:string]: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const bgImgs:BgImages = {
  'day' : {
    'mobile': mobileImgLight,
    'tablet': tabletImgLight,
    'desktop': desktopImgLight
  },
  'night':{
    'mobile': mobileImgDark,
    'tablet': tabletImgDark,
    'desktop': desktopImgDark
  }
}

export default bgImgs;