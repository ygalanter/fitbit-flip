import document from 'document';

export function FitbitFlip({id, img_width, img_height}) {

    
    function customAnimation(element, prop, from, to, dur) {
      let value = from;

      let anim = setInterval(() => {
        element[prop] = value;
        value += (to - from)/(dur*1000);

        if ((to < from && value <= to) || (to > from && value >=to)) {
          clearInterval(anim)
        }
        
      }, dur);

    }

    const START_IMAGE = 0;
    const END_IMAGE = 1;

    // getting handle on main element and child images
    this.root       = typeof id === 'string' ? document.getElementById(id) : id;
    this.images     = this.root.getElementsByClassName('fitbit-flip-image');
    this.static_images     = this.root.getElementsByClassName('fitbit-static-image');
    this.animations        = this.root.getElementsByClassName('fitbit-anim');

    // images sizes and positions according to constructor
    this.images[START_IMAGE].width = img_width; this.images[START_IMAGE].height = img_height; 
    this.images[END_IMAGE].width = img_width; this.images[END_IMAGE].height = img_height;
    this.images[END_IMAGE].y = img_height;

    // images sizes and positions according to constructor
    this.static_images[START_IMAGE].width = img_width; this.static_images[START_IMAGE].height = img_height; 
    this.static_images[END_IMAGE].width = img_width; this.static_images[END_IMAGE].height = img_height;
    this.static_images[END_IMAGE].y = img_height;
    

    this.flip = () => {
        this.images[START_IMAGE].parent.animate("enable");
        customAnimation(this.images[START_IMAGE].parent.groupTransform.translate, 'y', 0, img_height, 1);

        setTimeout(() => {
          this.images[END_IMAGE].style.display = 'inline';
          this.images[END_IMAGE].parent.animate("enable");
          customAnimation(this.images[END_IMAGE].parent.groupTransform.translate, 'y', img_height, 0, 1);
        },1000)
    }

    Object.defineProperty(this, 'startImage', {
        get : () => {
          return this.images[0].href
        },
        set : (val) => {
          this.images[0].href = val;
        }
    })

    Object.defineProperty(this, 'endImage', {
        get : () => {
          return this.images[1].href
        },
        set : (val) => {
          this.images[1].href = val;
          this.images[1].style.display = 'none';
        }
    })

    Object.defineProperty(this, 'startStaticImage', {
        get : () => {
          return this.static_images[0].href
        },
        set : (val) => {
          this.static_images[0].href = val;
        }
    })

    Object.defineProperty(this, 'endStaticImage', {
        get : () => {
          return this.static_images[1].href
        },
        set : (val) => {
          this.static_images[1].href = val;
        }
    })

}