                //Select the eyes: querySelectorAll grabs both eyes, like saying, "Hey, I want to control these two things!"
                let eyesDom = document.querySelectorAll('.eye');

                //Track movements: It listens for mouse moves (mousemove) or finger swipes (touchmove) for touchscreens!
                let events = ["mousemove", "touchmove"];

                //Touchscreen Check: This function tests if your device has a touchscreen by trying to create a "TouchEvent." If it works, it returns true!
                function isTouchDevice(){
                    try{
                        document.createEvent("TouchEvent");
                        return true;
                    } catch(e){
                        return false;
                    }
                }

                /*Listen for movement: This tells your page, "Watch out for any mouse or touch movements!" And when it sees one, it runs the following code*/
                events.forEach((eventType) => {
                document.body.addEventListener(eventType, 
                (event) => {
                eyesDom.forEach((eye) => {
                /*Loop through each eye: It goes through both eyes one by one and applies the same logic! */

                let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
                let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;
                /*Find eye center: It figures out the X and Y coordinates of the eye’s center point.*/



                /*Get cursor position: Depending on whether it’s a mouse or touchscreen, it grabs the current X and Y position of your cursor/finger */
                let x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
                let y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;
                
                /*Calculate angle: It uses math (trigonometry) to calculate the angle between the eye and the cursor. It then converts the angle from radians to degrees!*/
                let radian = Math.atan2(x - eyeX, y - eyeY);
                let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;
                
                //Rotate the eye: It rotates the whole eye based on the angle, so the eyeball points right at your cursor or finger!
                eye.style.transform = "rotate(" + rotationDegrees + "deg)";
            })

        }
    )
})