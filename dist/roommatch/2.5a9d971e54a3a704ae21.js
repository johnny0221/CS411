(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0L5U":function(e,t,i){"use strict";i.d(t,"a",(function(){return C})),i.d(t,"b",(function(){return v}));var s=i("fXoL"),n=i("ofXK");function o(e,t){if(1&e&&(s.Qb(0,"div",7),s.xc(1),s.Pb()),2&e){const e=s.bc();s.zb(1),s.yc(e.counter)}}function r(e,t){if(1&e&&s.Lb(0,"img",12),2&e){const e=s.bc(2).index,t=s.bc();s.tc("object-fit",t.objectFit),s.gc("src",t.getFile(e).image.path,s.pc)}}function l(e,t){if(1&e){const e=s.Rb();s.Qb(0,"div",13),s.Xb("click",(function(){s.oc(e);const t=s.mc(2);return s.bc(3).toggleVideo(t)})),s.Pb(),s.Qb(1,"video",14,15),s.Lb(3,"source",16),s.Pb()}if(2&e){const e=s.bc(2).index,t=s.bc();s.zb(1),s.tc("object-fit",t.objectFit)("border-radius",t.borderRadius+"px"),s.gc("loop",t.videoProperties.loop)("muted",t.videoProperties.muted)("controls",t.isSafari),s.zb(2),s.gc("src",t.getFile(e).path,s.pc)}}function h(e,t){if(1&e&&(s.Qb(0,"div",9),s.wc(1,r,1,3,"img",10),s.wc(2,l,4,8,"ng-template",11),s.Pb()),2&e){const e=s.bc().index,t=s.bc();s.tc("width",t.getCellWidth()+"px")("border-radius",t.borderRadius+"px"),s.zb(1),s.gc("ngIf",t.getFile(e)&&t.getFile(e).image),s.zb(1),s.gc("ngIf",t.getFile(e)&&"video"===t.getFile(e).type)}}function a(e,t){if(1&e&&s.wc(0,h,3,6,"div",8),2&e){const e=t.index,i=s.bc();s.gc("ngIf",e<i.cellLimit)}}function c(e,t){if(1&e&&s.Lb(0,"div",19),2&e){const e=t.index,i=s.bc(2);s.Cb("carousel-dot-active",e===i.activeDotIndex)}}function u(e,t){if(1&e&&(s.Qb(0,"div",17),s.wc(1,c,1,2,"div",18),s.Pb()),2&e){const e=s.bc();s.zb(1),s.gc("ngForOf",e.dotsArr)}}function d(e,t){if(1&e){const e=s.Rb();s.Qb(0,"div",20),s.Qb(1,"div",21),s.Xb("click",(function(){return s.oc(e),s.bc().prev()})),s.Pb(),s.Qb(2,"div",22),s.Xb("click",(function(){return s.oc(e),s.bc().next()})),s.Pb(),s.Pb()}if(2&e){const e=s.bc();s.Cb("carousel-arrows-outside",e.arrowsOutside)("carousel-dark-arrows","dark"===e.arrowsTheme),s.zb(1),s.Cb("carousel-arrow-disabled",e.isPrevArrowDisabled()),s.zb(1),s.Cb("carousel-arrow-disabled",e.isNextArrowDisabled())}}const g=["*"];class p{constructor(e){this.eventType=void 0,this.handlers={},this.startX=0,this.startY=0,this.lastTap=0,this.doubleTapMinTimeout=300,this.tapMinTimeout=200,this.touchstartTime=0,this.i=0,this.isMousedown=!1,this._touchListeners={touchstart:"handleTouchstart",touchmove:"handleTouchmove",touchend:"handleTouchend"},this._mouseListeners={mousedown:"handleMousedown",mousemove:"handleMousemove",mouseup:"handleMouseup",wheel:"handleWheel"},this._otherListeners={resize:"handleResize"},this.handleTouchstart=e=>{this.elementPosition=this.getElementPosition(),this.touchstartTime=(new Date).getTime(),void 0===this.eventType&&this.getTouchstartPosition(e),this.runHandler("touchstart",e)},this.handleTouchmove=e=>{switch(this.detectPan(e.touches)&&this.runHandler("pan",e),this.detectPinch(e)&&this.runHandler("pinch",e),this.detectLinearSwipe(e)){case"horizontal-swipe":e.swipeType="horizontal-swipe",this.runHandler("horizontal-swipe",e);break;case"vertical-swipe":e.swipeType="vertical-swipe",this.runHandler("vertical-swipe",e)}(this.detectLinearSwipe(e)||"horizontal-swipe"===this.eventType||"vertical-swipe"===this.eventType)&&this.handleLinearSwipe(e)},this.handleTouchend=e=>{const t=e.touches;this.detectDoubleTap()&&this.runHandler("double-tap",e),this.detectTap(),this.runHandler("touchend",e),this.eventType="touchend",t&&0===t.length&&(this.eventType=void 0,this.i=0)},this.handleMousedown=e=>{this.isMousedown=!0,this.elementPosition=this.getElementPosition(),this.touchstartTime=(new Date).getTime(),void 0===this.eventType&&this.getMousedownPosition(e),this.runHandler("mousedown",e)},this.handleMousemove=e=>{if(this.isMousedown){switch(this.runHandler("pan",e),this.detectLinearSwipe(e)){case"horizontal-swipe":e.swipeType="horizontal-swipe",this.runHandler("horizontal-swipe",e);break;case"vertical-swipe":e.swipeType="vertical-swipe",this.runHandler("vertical-swipe",e)}(this.detectLinearSwipe(e)||"horizontal-swipe"===this.eventType||"vertical-swipe"===this.eventType)&&this.handleLinearSwipe(e)}},this.handleMouseup=e=>{this.detectTap(),this.isMousedown=!1,this.runHandler("mouseup",e),this.eventType=void 0,this.i=0},this.handleWheel=e=>{this.runHandler("wheel",e)},this.handleResize=e=>{this.runHandler("resize",e)},this.properties=e,this.element=this.properties.element,this.elementPosition=this.getElementPosition(),this.toggleEventListeners("addEventListener")}get touchListeners(){return this.properties.touchListeners?this.properties.touchListeners:this._touchListeners}get mouseListeners(){return this.properties.mouseListeners?this.properties.mouseListeners:this._mouseListeners}get otherListeners(){return this.properties.otherListeners?this.properties.otherListeners:this._otherListeners}destroy(){this.toggleEventListeners("removeEventListener")}toggleEventListeners(e){let t;for(var i in t="mouse and touch"===this.properties.listeners?Object.assign(this.touchListeners,this.mouseListeners):this.detectTouchScreen()?this.touchListeners:this.mouseListeners,this.properties.resize&&(t=Object.assign(t,this.otherListeners)),t){const s=t[i];"resize"===i?("addEventListener"===e&&window.addEventListener(i,this[s],!1),"removeEventListener"===e&&window.removeEventListener(i,this[s],!1)):"mouseup"===i||"mousemove"===i?("addEventListener"===e&&document.addEventListener(i,this[s],!1),"removeEventListener"===e&&document.removeEventListener(i,this[s],!1)):("addEventListener"===e&&this.element.addEventListener(i,this[s],!1),"removeEventListener"===e&&this.element.removeEventListener(i,this[s],!1))}}addEventListeners(e,t){window.addEventListener(e,this[t],!1)}removeEventListeners(e,t){window.removeEventListener(e,this[t],!1)}handleLinearSwipe(e){this.i++,this.i>3&&(this.eventType=this.getLinearSwipeType(e)),"horizontal-swipe"===this.eventType&&this.runHandler("horizontal-swipe",e),"vertical-swipe"===this.eventType&&this.runHandler("vertical-swipe",e)}runHandler(e,t){this.handlers[e]&&this.handlers[e](t)}detectPan(e){return 1===e.length&&!this.eventType||"pan"===this.eventType}detectDoubleTap(){if(null!=this.eventType)return;const e=(new Date).getTime(),t=e-this.lastTap;if(clearTimeout(this.doubleTapTimeout),t<this.doubleTapMinTimeout&&t>0)return!0;this.doubleTapTimeout=setTimeout(()=>{clearTimeout(this.doubleTapTimeout)},this.doubleTapMinTimeout),this.lastTap=e}detectTap(){if(null!=this.eventType)return;const e=(new Date).getTime()-this.touchstartTime;e>0&&this.runHandler(e<this.tapMinTimeout?"tap":"longtap",event)}detectPinch(e){return 2===e.touches.length&&void 0===this.eventType||"pinch"===this.eventType}detectLinearSwipe(e){const t=e.touches;if(t){if(1===t.length&&!this.eventType||"horizontal-swipe"===this.eventType||"vertical-swipe"===this.eventType)return this.getLinearSwipeType(e)}else if(!this.eventType||"horizontal-swipe"===this.eventType||"vertical-swipe"===this.eventType)return this.getLinearSwipeType(e)}getLinearSwipeType(e){if("horizontal-swipe"!==this.eventType&&"vertical-swipe"!==this.eventType){const t=Math.abs(this.moveLeft(0,e)-this.startX);return 3*Math.abs(this.moveTop(0,e)-this.startY)>t?"vertical-swipe":"horizontal-swipe"}return this.eventType}getElementPosition(){return this.element.getBoundingClientRect()}getTouchstartPosition(e){this.startX=e.touches[0].clientX-this.elementPosition.left,this.startY=e.touches[0].clientY-this.elementPosition.top}getMousedownPosition(e){this.startX=e.clientX-this.elementPosition.left,this.startY=e.clientY-this.elementPosition.top}moveLeft(e,t){const i=t.touches;return i?i[e].clientX-this.elementPosition.left:t.clientX-this.elementPosition.left}moveTop(e,t){const i=t.touches;return i?i[e].clientY-this.elementPosition.top:t.clientY-this.elementPosition.top}detectTouchScreen(){var e,t=" -webkit- -moz- -o- -ms- ".split(" ");return"ontouchstart"in window||(e=["(",t.join("touch-enabled),("),"heartz",")"].join(""),window.matchMedia(e).matches)}on(e,t){e&&(this.handlers[e]=t)}}class m{constructor(e){this.initialPositionX=0,this.newContainerPositionIndex=0,this.preliminarySlideCounter=0,this.slideCounter=0,this.previousSlideCounter=0,this.isContentImages=!0,this.isLazyLoad=!0,this.isContainerLocked=!0,this.alignCells="left",this.initialContainerPosition=0,this.handleTouchstart=e=>{this.isTouchstart=!0,this.startX=this.getStartX(e),this.containerInitialPositionX=this.getElementPosition().left-this.getCarouselElementPosition().left,this.isMoveInProgress=!0,this.stopTransformContainer()},this.handleHorizontalSwipe=e=>{const t=e.touches;this.moveX=t?t[0].clientX-this.getCarouselElementPosition().left:e.clientX-this.getCarouselElementPosition().left,this.distanceAbs=this.getDistanceAbs(),this.direction=this.getDirection(),this.moveContainer()},this.handleTouchend=e=>{this.isTouchstart?(this.isMoveInProgress=!1,this.detectSlide()?this.handleSlide():(this.newContainerPositionIndex=0,this.alignContainer()),this.startX=this.moveX=this.distanceAbs=void 0,this.isTouchstart=!1):this.isTouchstart=!1},this.element=e.element,this.properties=e,this.cells=this.element.children,this.visibleWidth=this.properties.visibleWidth||this.element.parentElement.clientWidth,this.setContainerWidth(),this.alignContainer(0)}get cellLength(){return this.images?this.images.length:this.cells.length}get totalContainerCellsCount(){if(this.images){let e=this.visibleCellsCount+2*this.overflowCellsLimit;return e>this.images.length&&(e=this.images.length),e}return this.cellLength}get isFirstCell(){return 0===this.slideCounter}get lastCellIndex(){return this.images.length?this.images.length-1:this.cells.length-1}get overflowCellsLimit(){return this.images&&this.isImagesLessCellLimit?Math.floor((this.images.length-this.visibleCellsCount)/2):this.properties.overflowCellsLimit}get isImagesLessCellLimit(){return 2*this.properties.overflowCellsLimit+this.visibleCellsCount>this.images.length}get cellLimit(){return this.visibleCellsCount+2*this.overflowCellsLimit}get images(){return this.properties.images}get margin(){return this.properties.margin}get minSwipeDistance(){return this.properties.minSwipeDistance}get transitionDuration(){return this.properties.transitionDuration}get transitionTimingFunction(){return this.properties.transitionTimingFunction}get fullCellWidth(){return this.properties.cellWidth+this.margin}get visibleCellsCount(){return Math.ceil(this.visibleWidth/this.fullCellWidth)}get lapCounter(){return Math.floor(this.slideCounter/this.totalContainerCellsCount)}get visibleCellsOverflowContainer(){return this.visibleCellsCount*this.fullCellWidth-this.margin>this.visibleWidth}stopTransformContainer(){this.transformPositionX(this.containerInitialPositionX,0),this.setSlideCounter(),this.isSlideInProgress=!1,this.newContainerPositionIndex=0,this.isSlideLengthLimited=void 0}getStartX(e){const t=e.touches;let i;return i=t?t[0].clientX-this.getCarouselElementPosition().left:e.clientX-this.getCarouselElementPosition().left,i}moveContainer(){let e=this.getMovePositionX();this.transformPositionX(e,0)}getMovePositionX(){const e=this.getDistance();return this.containerInitialPositionX-e}alignContainer(e=this.transitionDuration){let t=this.getContainerPosition();this.transformPositionX(t,e),this.setInitialContainerPosition(t)}getContainerPosition(){let e=this.getContainerPositionCorrection();return this.isContainerPositionCorrection=0!=e,this.initialContainerPosition+this.newContainerPositionIndex*this.fullCellWidth+e}setInitialContainerPosition(e){let t=this.getContainerPositionCorrection();this.initialContainerPosition=e-t}getContainerPositionCorrection(){let e=0;return this.properties.loop?0:((this.cellLength-this.preliminarySlideCounter<this.visibleCellsCount||this.isSlideLengthLimited)&&(this.visibleWidth<this.totalContainerCellsCount*this.fullCellWidth&&(e=-(this.visibleCellsCount*this.fullCellWidth-this.visibleWidth-this.margin)),e>=-this.margin&&(e=0)),e)}quicklyPositionContainer(){let e=this.getContainerPositionCorrection();const t=this.getNewContainerPosition()+e;this.transformPositionX(t,0),this.setInitialContainerPosition(t)}getNewContainerPosition(){return this.slideCounter>this.overflowCellsLimit&&"left"===this.alignCells?(this.lineUpCells(),-this.overflowCellsLimit*this.fullCellWidth):this.slideCounter<=this.overflowCellsLimit?(this.previousSlideCounter>this.overflowCellsLimit&&this.lineUpCells(),-this.slideCounter*this.fullCellWidth):void 0}setContainerWidth(){const e=this.getContainerWidth();this.element.style.width=e+"px"}getContainerWidth(){let e=this.totalContainerCellsCount*this.fullCellWidth,t=this.cellLength*this.fullCellWidth;return t<e&&(e=t),e}getFile(e){let t=this.getFileIndex(e),i=this.images[t];return i&&!i.type&&(i.type="image"),{image:this.images[t],imageIndex:t}}getFileIndex(e){const t=this.getPositionIndex(e);let i,s=this.slideCounter;return this.isContainerLocked?("left"===this.alignCells&&(i=s>this.overflowCellsLimit?t+(s-this.overflowCellsLimit):e),!(i>this.lastCellIndex&&!this.properties.loop)&&i):s<=this.overflowCellsLimit?e:(i=t+(s-this.overflowCellsLimit),this.images&&this.properties.loop&&(i%=this.images.length),i)}transformPositionX(e,t=this.transitionDuration){this.element.style.transition="transform "+t+"ms "+this.transitionTimingFunction,this.element.style.transform="translateX("+e+"px)"}detectSlide(){return this.distanceAbs>=this.minSwipeDistance}next(e=1){this.newContainerPositionIndex=0,this.direction="left",this.handleSlide(e)}prev(e=1){this.newContainerPositionIndex=0,this.direction="right",this.handleSlide(e)}select(e){this.slideCounter=e,this.quicklyPositionContainer()}handleSlide(e){e&&this.isSlideInProgress||(this.slideLength=e||this.limitSlideLength(this.getSlideLength()),"left"===this.direction&&this.handleLeftSlide(),"right"===this.direction&&this.handleRightSlide(),this.alignContainer())}handleLeftSlide(){this.preliminarySlideCounter=this.slideCounter+this.slideLength,this.detectLastSlide(this.slideCounter+this.slideLength)?this.slideLength=0:(this.newContainerPositionIndex=this.newContainerPositionIndex-this.slideLength,this.isSlideInProgress=!0,this.isLazyLoad&&(this.isContainerLocked=this.preliminarySlideCounter>this.overflowCellsLimit,this.detectContainerUnlock()&&(this.isContainerLocked=!1)))}handleRightSlide(){this.slideCounter-this.slideLength<0&&(this.slideLength=this.slideCounter),this.preliminarySlideCounter=this.slideCounter-this.slideLength,this.isFirstCell?this.slideLength=0:(this.newContainerPositionIndex=this.newContainerPositionIndex+this.slideLength,this.isSlideInProgress=!0,this.isLazyLoad&&(this.isContainerLocked=this.preliminarySlideCounter>this.overflowCellsLimit,this.detectContainerUnlock()&&(this.isContainerLocked=!1)))}getSlideLength(){let e=this.getContainerPositionCorrection(),t=Math.floor((this.distanceAbs+e)/this.fullCellWidth);return this.distanceAbs%this.fullCellWidth>=this.minSwipeDistance&&t++,t}limitSlideLength(e){if(e>1)for(var t=0;t<e;t++)if(!this.detectLastSlide(this.slideCounter+(e-t))){e-=t,this.isSlideLengthLimited=t>0;break}return e}detectLastSlide(e){return!this.properties.loop&&this.cellLength-e<this.visibleCellsCount}isNextArrowDisabled(){return this.visibleCellsOverflowContainer?this.detectLastSlide(this.slideCounter+1)&&this.isContainerPositionCorrection:this.detectLastSlide(this.slideCounter+1)}isPrevArrowDisabled(){return 0===this.slideCounter}detectContainerUnlock(){return this.cellLength-this.preliminarySlideCounter<this.visibleCellsCount+this.overflowCellsLimit}handleSlideEnd(){this.isSlideInProgress&&(this.transformSlideEnd(),this.isSlideInProgress=!1,this.newContainerPositionIndex=0,this.isSlideLengthLimited=void 0)}transformSlideEnd(){this.isLazyLoad&&(this.setSlideCounter(),(this.images||!this.images&&this.properties.loop)&&this.quicklyPositionContainer()),this.previousSlideCounter=this.slideCounter}setSlideCounter(){"left"===this.direction&&(this.slideCounter=this.slideCounter+this.slideLength),"right"===this.direction&&(this.slideCounter=this.slideCounter-this.slideLength),this.direction=void 0,this.slideLength=0}resetTransition(){this.element.style.transition=""}getElementPosition(){return this.element.getBoundingClientRect()}getCarouselElementPosition(){return this.properties.container.getBoundingClientRect()}getDistance(){return this.startX-this.moveX}getDistanceAbs(){return Math.abs(this.startX-this.moveX)}getDirection(){const e=Math.sign(this.startX-this.moveX);return-1===e?"right":1===e?"left":void 0}lineUpCells(){const e=this.element.children;for(var t=0;t<e.length;t++){let i=e[t],s=this.getCellPositionX(t);i.style.transform="translateX("+s+"px)",i.style.width=this.properties.cellWidth+"px"}}getCellPositionX(e){return this.getPositionIndex(e)*this.fullCellWidth}getPositionIndex(e){let t,i=this.totalContainerCellsCount,s=this.slideCounter-this.overflowCellsLimit;return s>i&&(s%=i),s<0?e:(t=e-s,t<0&&(t=i+t),t)}getCenterPositionIndex(){return(this.totalContainerCellsCount-1)/2}autoplay(){this.autoplayId=setInterval(()=>{this.next()},this.properties.autoplayInterval)}stopAutoplay(){this.autoplayId&&clearInterval(this.autoplayId)}destroy(){this.stopAutoplay()}}let C=(()=>{class e{constructor(e,t){this.elementRef=e,this.ref=t,this.minTimeout=30,this._cellWidth=200,this.events=new s.n,this.height=200,this.loop=!1,this.autoplay=!1,this.autoplayInterval=5e3,this.pauseOnHover=!0,this.dots=!1,this.margin=10,this.objectFit="cover",this.minSwipeDistance=10,this.transitionDuration=200,this.transitionTimingFunction="ease",this.counterSeparator=" / ",this.overflowCellsLimit=3,this.listeners="mouse and touch",this.cellsToScroll=1,this.arrows=!0,this.arrowsTheme="light",this.hostClassCarousel=!0,this.handleTouchstart=e=>{this.touches.addEventListeners("mousemove","handleMousemove"),this.carousel.handleTouchstart(e),this.isMoving=!0},this.handleHorizontalSwipe=e=>{e.preventDefault(),this.carousel.handleHorizontalSwipe(e)},this.handleTouchend=e=>{this.carousel.handleTouchend(e),this.touches.removeEventListeners("mousemove","handleMousemove"),this.isMoving=!1}}get isContainerLocked(){return this.carousel.isContainerLocked}get slideCounter(){return this.carousel.slideCounter}get previousSlideCounter(){return this.carousel.previousSlideCounter}get lapCounter(){return this.carousel.lapCounter}lineUpCells(){this.carousel.lineUpCells()}quicklyPositionContainer(){this.carousel.quicklyPositionContainer()}get isLandscape(){return window.innerWidth>window.innerHeight}get isSafari(){const e=navigator.userAgent.toLowerCase();if(-1!==e.indexOf("safari"))return!(e.indexOf("chrome")>-1)}get counter(){let e;return e=this.loop?this.slideCounter%this.cellLength:this.slideCounter,e+1+this.counterSeparator+this.cellLength}get cellsElement(){return this.elementRef.nativeElement.querySelector(".carousel-cells")}set images(e){this._images=e}get images(){return this._images}set cellWidth(e){e&&(this._cellWidth=e)}set isCounter(e){e&&(this._isCounter=e)}get isCounter(){return this._isCounter&&this.cellLength>1}get activeDotIndex(){return this.slideCounter%this.cellLength}get cellLimit(){if(this.carousel)return this.carousel.cellLimit}onWindowResize(e){this.landscapeMode=this.isLandscape,this.ref.detectChanges(),this.initCarousel(),this.carousel.lineUpCells()}onMousemove(e){this.autoplay&&this.pauseOnHover&&this.carousel.stopAutoplay()}onMouseleave(e){this.autoplay&&this.pauseOnHover&&this.carousel.autoplay()}ngOnInit(){this.isNgContent=this.cellsElement.children.length>0,this.touches=new p({element:this.cellsElement,listeners:this.listeners,mouseListeners:{mousedown:"handleMousedown",mouseup:"handleMouseup"}}),this.touches.on("touchstart",this.handleTouchstart),this.touches.on("horizontal-swipe",this.handleHorizontalSwipe),this.touches.on("touchend",this.handleTouchend),this.touches.on("mousedown",this.handleTouchstart),this.touches.on("mouseup",this.handleTouchend),this.initCarousel(),this.setDimensions(),this.autoplay&&this.carousel.autoplay()}ngAfterViewInit(){this.cellLength=this.getCellLength(),this.dotsArr=Array(this.cellLength).fill(1),this.ref.detectChanges(),this.carousel.lineUpCells(),this.detectDomChanges()}ngOnChanges(e){(e.width||e.height||e.images)&&(this.setDimensions(),this.initCarousel(),this.carousel.lineUpCells(),this.ref.detectChanges())}ngOnDestroy(){this.touches.destroy(),this.carousel.destroy()}initCarousel(){this.carousel=new m({element:this.elementRef.nativeElement.querySelector(".carousel-cells"),container:this.elementRef.nativeElement,images:this.images,cellWidth:this.getCellWidth(),loop:this.loop,autoplayInterval:this.autoplayInterval,overflowCellsLimit:this.overflowCellsLimit,visibleWidth:this.width,margin:this.margin,minSwipeDistance:this.minSwipeDistance,transitionDuration:this.transitionDuration,transitionTimingFunction:this.transitionTimingFunction,videoProperties:this.videoProperties})}detectDomChanges(){new MutationObserver(e=>{this.onDomChanges()}).observe(this.elementRef.nativeElement,{attributes:!0,childList:!0,characterData:!0})}onDomChanges(){this.cellLength=this.getCellLength(),this.carousel.lineUpCells(),this.ref.detectChanges()}setDimensions(){this.hostStyleHeight=this.height+"px",this.hostStyleWidth=this.width+"px"}getFile(e){return this.carousel.getFile(e)}handleTransitionendCellContainer(e){this.carousel.handleSlideEnd()}toggleVideo(e){event.preventDefault(),this.videoProperties.noPlay||(e.paused?(e.play(),this.isVideoPlaying=!0):(e.pause(),this.isVideoPlaying=!1),this.ref.detectChanges())}getCurrentIndex(){return this.carousel.slideCounter}getCellWidth(){let e=this.elementRef.nativeElement.clientWidth;return this.cellsToShow?(e-(this.cellsToShow>1?this.margin:0)*(this.cellsToShow-1))/this.cellsToShow:"100%"===this._cellWidth?e:this._cellWidth}next(){this.carousel.next(this.cellsToScroll),this.carousel.stopAutoplay()}prev(){this.carousel.prev(this.cellsToScroll),this.carousel.stopAutoplay()}select(e){this.carousel.select(e)}isNextArrowDisabled(){return this.carousel.isNextArrowDisabled()}isPrevArrowDisabled(){return this.carousel.isPrevArrowDisabled()}getCellLength(){return this.images?this.images.length:this.cellsElement.children.length}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(s.l),s.Kb(s.h))},e.\u0275cmp=s.Eb({type:e,selectors:[["carousel"],["","carousel",""]],hostVars:6,hostBindings:function(e,t){1&e&&s.Xb("resize",(function(e){return t.onWindowResize(e)}),!1,s.nc)("mousemove",(function(e){return t.onMousemove(e)}))("mouseleave",(function(e){return t.onMouseleave(e)})),2&e&&(s.tc("height",t.hostStyleHeight)("width",t.hostStyleWidth),s.Cb("carousel",t.hostClassCarousel))},inputs:{height:"height",loop:"loop",autoplay:"autoplay",autoplayInterval:"autoplayInterval",pauseOnHover:"pauseOnHover",dots:"dots",margin:"margin",objectFit:"objectFit",minSwipeDistance:"minSwipeDistance",transitionDuration:"transitionDuration",transitionTimingFunction:"transitionTimingFunction",counterSeparator:"counterSeparator",overflowCellsLimit:"overflowCellsLimit",listeners:"listeners",cellsToScroll:"cellsToScroll",arrows:"arrows",arrowsTheme:"arrowsTheme",images:"images",cellWidth:"cellWidth",isCounter:["counter","isCounter"],width:"width",borderRadius:"borderRadius",videoProperties:"videoProperties",cellsToShow:"cellsToShow",arrowsOutside:"arrowsOutside"},outputs:{events:"events"},exportAs:["carousel"],features:[s.xb],ngContentSelectors:g,decls:8,vars:6,consts:[["class","carousel-counter",4,"ngIf"],[1,"carousel-container"],[1,"carousel-cells",3,"transitionend"],["cells",""],["ngFor","",3,"ngForOf"],["class","carousel-dots",4,"ngIf"],["class","carousel-arrows",3,"carousel-arrows-outside","carousel-dark-arrows",4,"ngIf"],[1,"carousel-counter"],["class","carousel-cell",3,"width","border-radius",4,"ngIf"],[1,"carousel-cell"],["draggable","false",3,"src","object-fit",4,"ngIf"],[3,"ngIf"],["draggable","false",3,"src"],[1,"carousel-play",3,"click"],[3,"loop","muted","controls"],["video",""],["type","video/mp4",3,"src"],[1,"carousel-dots"],["class","carousel-dot",3,"carousel-dot-active",4,"ngFor","ngForOf"],[1,"carousel-dot"],[1,"carousel-arrows"],[1,"carousel-arrow","carousel-arrow-prev",3,"click"],[1,"carousel-arrow","carousel-arrow-next",3,"click"]],template:function(e,t){1&e&&(s.fc(),s.wc(0,o,2,1,"div",0),s.Qb(1,"div",1),s.Qb(2,"div",2,3),s.Xb("transitionend",(function(e){return t.handleTransitionendCellContainer(e)})),s.ec(4),s.wc(5,a,1,1,"ng-template",4),s.Pb(),s.wc(6,u,2,1,"div",5),s.Pb(),s.wc(7,d,3,8,"div",6)),2&e&&(s.gc("ngIf",t.isCounter),s.zb(1),s.Cb("carousel-moving",t.isMoving),s.zb(4),s.gc("ngForOf",t.images),s.zb(1),s.gc("ngIf",t.dots),s.zb(1),s.gc("ngIf",t.arrows))},directives:[n.j,n.i],styles:["[_nghost-%COMP%]{-moz-user-select:none;-webkit-user-select:none;box-sizing:border-box;display:block;height:100%;left:0;position:relative;top:0;transform-origin:top left;user-select:none;width:100%;z-index:10000}[_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]{cursor:grab;height:100%;overflow:hidden;width:100%}[_nghost-%COMP%]   .carousel-container.carousel-moving[_ngcontent-%COMP%]{cursor:grabbing}[_nghost-%COMP%]   .carousel-counter[_ngcontent-%COMP%]{background-color:rgba(23,37,68,.3);border-radius:13px;color:#fff;font-size:11px;line-height:normal;padding:5px 7px;position:absolute;right:24px;text-align:right;top:8px;transition:opacity .2s;z-index:30}[_nghost-%COMP%]     .carousel-cells{display:block;height:100%;transition:transform .2s;width:100%}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell{height:100%;overflow:hidden;position:absolute;width:100%}[_nghost-%COMP%]     .carousel-cells .carousel-cell img, [_nghost-%COMP%]     .carousel-cells .carousel-cell video{height:100%;object-fit:contain;position:relative;width:100%}[_nghost-%COMP%]     .carousel-cells .carousel-cell img.swiper-hide{display:none}[_nghost-%COMP%]     .carousel-cells .carousel-cell .carousel-play{bottom:0;left:0;position:absolute;right:0;top:0;z-index:1}[_nghost-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{background-color:#fff;background-position:50%;background-repeat:no-repeat;background-size:31px;border-radius:100px;box-shadow:0 0 5px rgba(0,0,0,.15);cursor:pointer;height:40px;margin-top:-20px;position:absolute;top:50%;width:40px;z-index:10}[_nghost-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);left:10px}[_nghost-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);right:10px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:-60px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:-60px}[_nghost-%COMP%]   .carousel-dark-arrows[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{filter:invert(1)}[_nghost-%COMP%]   .carousel-arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]{bottom:0;left:0;position:absolute;right:0;text-align:center;z-index:10}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%]{border:2px solid #fff;border-radius:100px;display:inline-block;height:8px;margin:4px;width:8px}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot-active[_ngcontent-%COMP%]{background-color:#fff}"]}),e})(),v=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},providers:[],imports:[[n.c]]}),e})()},KCEv:function(e,t,i){"use strict";i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n})),i.d(t,"d",(function(){return o})),i.d(t,"b",(function(){return r}));var s=function(e){return e[e.CPM=1]="CPM",e[e.JSM=2]="JSM",e[e["University Group"]=3]="University Group",e[e.Bankier=4]="Bankier",e[e.MHM=5]="MHM",e[e["Green Street Realty"]=6]="Green Street Realty",e[e.Seven07=7]="Seven07",e}({}),n=function(e){return e[e.CPM=1]="CPM",e[e.JSM=2]="JSM",e[e["University Group"]=3]="University Group",e[e.Bankier=4]="Bankier",e[e.MHM=5]="MHM",e[e["Green Street Realty"]=6]="Green Street Realty",e[e.Seven07=7]="Seven07",e}({});const o=[{id:"null",name:"All"},{id:1,name:"CPM"},{id:2,name:"JSM"},{id:3,name:"University Group"},{id:4,name:"Bankier"},{id:5,name:"MHM"},{id:6,name:"Green Street Realty"},{id:7,name:"Seven07"}];class r{constructor(e,t,i){this.id=e,this.title=t,this.options=i}}}}]);