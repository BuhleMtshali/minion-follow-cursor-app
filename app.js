//selecting the ey div
let eyesDom = document.querySelectorAll('.eye');

//creating mousemove for devices with mouse and thouchmove for touchscreen devices
let events = ["mousemove", "touchmove"];

//check for touch screen
function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        return true;
    } catch(e){
        return false;
    }
}

//same function for both events
events.forEach((eventType) => {
    document.body.addEventListener(eventType, 
        (event) => {
            eyesDom.forEach((eye) => {
                /*getBoundingClient method returns the position relative to the viewport */

                let eyeX = eye.getBoundingClientRect().
                left + eye.clientWidth / 2;
                let eyeY = eye.getBoundingClientRect().top
                + eye.clientHeight / 2;

                /*ClientX and ClientY return the position of the clients cursor from top left of the screen */

                let x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
                let y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;
                
                let radian = Math.atan2(x - eyeX, y - eyeY);
                let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;
                
                eye.style.transform = "rotate(" + rotationDegrees + "deg)";
            })

        }
    )
})