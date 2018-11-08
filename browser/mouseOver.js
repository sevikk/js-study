
const element = $(".left");
const getEnd = (dir, size) => dir + size;


const mouseUnderObject = (element, cb) => {
  const {top, left} = element.position();
  const objectW = element.width();
  const objectH = element.height();
  
  $("body").mousemove( ({pageY, pageX}) => {
    const endBlockY = getEnd(top, objectH);
    const endBlockX = getEnd(left, objectW);

    const isMouseInBlockX = pageX > left && pageX < endBlockX;
    const isMouseInBlockY = pageY > top && pageY < endBlockY;
    const isMouseInBlock = isMouseInBlockX && isMouseInBlockY;
  
  	isMouseInBlock && cb();
	});
};

mouseUnderObject(element, () => console.log("here"))


