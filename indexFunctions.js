
        function searchFunction() {
            // Declare variables
            var input, filter, ul, li, a, i;
            input = document.getElementById('myInput');
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            ul2 = document.getElementById("myULShort")
            li = ul.getElementsByTagName('li');

            if (input.value=="") {
                ul.style.display = "none";
                return;
            } else {
                ul2.style.display = "none";
                ul.style.display = "block";
            }
            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "block";
                } else {
                    li[i].style.display = "none";
                }
            }
        }

        function makeActive() {

            ul = document.getElementById("myULShort");
            var hasFocus = $('#myInput').is(':focus');
            if(hasFocus)
                ul.style.display = "block";
            else
                ul.style.display = "none";
        }
