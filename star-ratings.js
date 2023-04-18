let star = document.querySelectorAll('input');
        let showValue = document.querySelector('#rating-value');
        let submitBtn = document.querySelector('#submit-btn');

        for (let i = 0; i < star.length; i++) {
            star[i].addEventListener('click', function () {
                i = this.value;

                showValue.innerHTML = i + " ud af 5";
            });
        }

        submitBtn.addEventListener('click', function () {
        
            let container = document.querySelector('.container');
            container.innerHTML = '<h3>Tak for dit input</h3>';
        });
