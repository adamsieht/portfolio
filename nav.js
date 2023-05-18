
        window.addEventListener('scroll', function () {
            var navbar = document.getElementById('navbar');
            var scrollPosition = window.scrollY;

            if (scrollPosition > 0) {
                navbar.classList.add('navbar-fixed');
            } else {
                navbar.classList.remove('navbar-fixed');
            }
        });
        (function download() {
            document.getElementById('dl').click(); 
        })()
        document.getElementById("download-resume").addEventListener("click", function () {
            var link = document.createElement("a");
            link.href = "Resume.docx";
            link.download = "Resume.docx";

            var click
            Event = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true
                });
                link.dispatchEvent(clickEvent);
            });