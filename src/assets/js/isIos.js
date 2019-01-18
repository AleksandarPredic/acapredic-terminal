class DetectIOS {

  constructor() {

    this.isIphone = navigator.userAgent.indexOf("iPhone") != -1 ;
    this.isIod = navigator.userAgent.indexOf("iPod") != -1 ;
    this.isIpad = navigator.userAgent.indexOf("iPad") != -1 ;

  }

  isIOS() {

    return this.isIphone || this.isIod || this.isIpad;

  }

}

const isIOS = new DetectIOS();

export default isIOS;
