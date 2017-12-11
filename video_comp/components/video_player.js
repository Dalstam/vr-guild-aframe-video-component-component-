AFRAME.registerComponent('videoplayer', {
    schema: {
        video: {
            type: 'string'
        },
        delay:{
            type:'number',default: 1500
        }
    },

    init: function () {

    },
    update: function () {
        // Get the video source from data
        const sourceVid = this.data.video;
        const delayVid = this.data.delay;
        // Get the modal
        const modal = document.getElementById('videoModal');
        // Get the <span> element that closes the modal
        const closeBtn = document.getElementsByClassName("close")[0];

        this.el.addEventListener('click', function (evt) {
        // When the user clicks the button, open the modal
            let stopDelayVid;
            document.getElementById('videoSrc').src = sourceVid;
            document.getElementById('player').load();
            setTimeout(function () {
                modal.style.display = "block";
                closeBtn.style.display = "block";
            }, 600);


            // Play the video after a delay (default is 650 (after animation, no delay)
            // stopDelayVid necessary for stopping a delayed video when a user closes or
            // clicked away modal before vid has started
            stopDelayVid = setTimeout(function () {
                document.getElementById('player').play();
            }, delayVid);

// When the user clicks on <closeBtn> (x), close the modal
            closeBtn.onclick = function() {
               stopVid();
            };
// When the user clicks anywhere outside of the modal, close it
            window.onclick = function(){
                if (event.target == modal) {
                    stopVid();
                }
            };
            function stopVid() {
                clearTimeout(stopDelayVid);
                document.getElementById('player').pause();
                modal.style.display = "none";
                closeBtn.style.display = "none";
            }
        });

    }
});

