

// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}
document.querySelector('#center')
    .addEventListener("mousemove",
        throttleFunction((dets) => {
            var div = document.createElement("div");
            div.classList.add('imagediv');
            div.style.left = dets.clientX + 'px';
            div.style.top = dets.clientY + 'px';

            var img = document.createElement("img");
            img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1669380425272-8cc7f113f671?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8");
            div.appendChild(img);

            document.body.appendChild(div);
            gsap.to(img, {
                y: "0",
                ease: Power1,
                duration: .6,
            });
            gsap.to(img, {
                y: "100%",
                delay: .6,
                ease: Power2,
            });

            setTimeout(function () {
                div.remove();
            }, 2000)
        }, 400));