import document from 'document';

export function FitbitFlip({id, img_width, img_height, duration}) {

    const START_IMAGE = 0;
    const END_IMAGE = 1;

    const START_ANIM_MOVE = 0;
    const START_ANIM_RESIZE = 1;
    const END_ANIM_RESIZE = 2;

    // getting handle on main element and child images
    this.root       = typeof id === 'string' ? document.getElementById(id) : id;
    this.images     = this.root.getElementsByClassName('fitbit-flip-image');
    this.static_images     = this.root.getElementsByClassName('fitbit-static-image');
    this.animations        = this.root.getElementsByClassName('fitbit-anim');

    // images sizes and positions according to constructor
    this.images[START_IMAGE].width = img_width; this.images[START_IMAGE].height = img_height; 
    this.images[END_IMAGE].width = img_width; this.images[END_IMAGE].height = img_height;
    this.images[END_IMAGE].y = img_height;

    //animation properties
    this.animations[START_ANIM_MOVE].from = 0; this.animations[START_ANIM_MOVE].to = img_height; this.animations[START_ANIM_MOVE].dur = duration;
    this.animations[START_ANIM_RESIZE].from = img_height; this.animations[START_ANIM_RESIZE].to = 0; this.animations[START_ANIM_RESIZE].dur = duration;
    this.animations[END_ANIM_RESIZE].from = 0; this.animations[END_ANIM_RESIZE].to = img_height; this.animations[END_ANIM_RESIZE].dur = duration;


    // images sizes and positions according to constructor
    this.static_images[START_IMAGE].width = img_width; this.static_images[START_IMAGE].height = img_height; 
    this.static_images[END_IMAGE].width = img_width; this.static_images[END_IMAGE].height = img_height;
    this.static_images[END_IMAGE].y = img_height;
    

    this.flip = () => {
        this.images[START_IMAGE].animate("enable");
        setTimeout(() => {
          this.images[END_IMAGE].style.display = 'inline';
          this.images[END_IMAGE].animate("enable");
        },duration * 1000)
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
