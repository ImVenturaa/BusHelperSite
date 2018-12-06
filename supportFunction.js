
        function send() {

            var input1, input2, input3;

            input1 = input = document.getElementById('nome');
            input2 = input = document.getElementById('email');
            input3 = input = document.getElementById('mensagem');

            if(input1.value == ''){
                alert("Please fill every field.");
                return;
            }
            if(input2.value == ''){
                alert("Please fill every field.");
                return;
            }
            if(input3.value == ''){
                alert("Please fill every field.");
                return;
            }

            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if (!filter.test(input2.value)) {
                alert('Please provide a valid email address');
                input2.focus();
                return;
            }
            input1.value = '';
            input2.value = '';
            input3.value = '';

            alert("E-mail sent.");

        }
