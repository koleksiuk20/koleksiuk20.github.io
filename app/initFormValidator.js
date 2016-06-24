function initFormValidator() {
    var form = $('form');
    var name = $('#name');
    var email = $('#email');
    var subject = $('#subject');
    var message = $('#message');
    var success = $('<div>Your message has been sent</div>');
    var counterMaxLength = 500;
    var counterRemainingLength = counterMaxLength;
    var counter = $('#counter');

    // Validate each input except textarea
    form.submit(function (event) {
        event.preventDefault();

        var isValid = true;

        if (name.val().length < 3) {
            name.next().css('display', 'block');
            name.keyup(function() {
                name.next().css('display', 'none');
            });
            isValid = false;
        }
        if (!validateEmail(email.val())) {
            email.next().css('display', 'block');
            email.keyup(function() {
                email.next().css('display', 'none');
            });
            isValid = false;
        }
        if (subject.val().length < 3) {
            subject.next().css('display', 'block');
            subject.keyup(function() {
                subject.next().css('display', 'none');
            });
            isValid = false
        }
        if(isValid) {
            success.appendTo(form).css({
                'position': 'absolute',
                'top': '90%',
                'left': '40%',
                'display': 'inline-block',
                'font-weight': 'bold',
                'color': 'green'
            });
            setTimeout(function() {
                success.remove();
            }, 3000);
            $(this).closest(form).find('input[type=text], input[type=email], textarea').val('');
            counter.html(counterRemainingLength + '/' + counterMaxLength);
        }
    });

    // Validate email regular regex
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // Text area counter
    function counterMessage() {
        counter.html(counterRemainingLength + '/' + counterMaxLength);

        message.keyup(function(e) {
            e.preventDefault();

            var textLength = message.val().length;
            var counterRemainingLength = counterMaxLength - textLength;

            counter.html(counterRemainingLength + '/' + counterMaxLength);
        });
    }

    counterMessage();
}

module.exports = initFormValidator;