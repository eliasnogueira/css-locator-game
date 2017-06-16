var level;
var currentLevel = parseInt(window.localStorage.getItem('currentLevel'), 10) || 0;
$(document).ready(function () {
    (function(){

        var tour = new Tour();

        tour.addSteps([
            {
                element: "h2",
                placement: "bottom",
                backdrop: true,
                title: "Bem vindo ao `locator game`!",
                content: "Aqui estão os desafios para você resolver"
            },
            {
                element: ".html",
                placement: "bottom",
                backdrop: true,
                title: "HTML",
                content: "Aqui é como o código do HTML aparece."
            },
            {
                element: "#render",
                placement: "top",
                backdrop: true,
                title: "Renderizado",
                content: "Aqui é como o HTML é renderizado"
            },
            {
                element: "#expression",
                placement: "top",
                backdrop: true,
                title: "Seletor",
                content: "Digite o seletor CSS."
            }
        ]);

        // Initialize the tour
        tour.init();

        // Start the tour
        tour.start();

    }());


    level = levels[currentLevel];
    loadLevel();

    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });

    $('#toggleHelp').click(function (event) {
        $('#help').toggle();
    });

    $('#try').click(function (event) {
        event.preventDefault();
        var userExpr;
        userExpr = $('#render').find($("[name='expression']").val());
        userExpr.addClass('highlight');
        setTimeout(function () {
            userExpr.removeClass('highlight');
        }, 500);
    });

    $('form').submit(function (event) {
        event.preventDefault();
        var win = false;
        var userExpr;
        var ruleExpr;
        ruleExpr = $("#render").find(level.selector.css);
        userExpr = $('#render').find($("[name='expression']").val());
        userExpr.addClass('highlight');

        win = (userExpr.sequenceEqual(ruleExpr));
        if (win) {
            currentLevel++;
            $.toaster({message: 'Muito bem!!!', title: '', priority: 'info'});
                setTimeout(function () {
                    loadLevel();
                }, 500);
        } else {
            setTimeout(function () {
                userExpr.removeClass('highlight');
                $('input[name="expression"]').val('');
                $.toaster({message: 'Tente novamente...', title: '', priority: 'danger'});
            }, 500);
        }
    });
});

$.fn.sequenceEqual = function (compareTo) {
    if (!compareTo || !compareTo.length || this.length !== compareTo.length) {
        return false;
    }
    for (var i = 0, length = this.length; i < length; i++) {
        if (this[i] !== compareTo[i]) {
            return false;
        }
    }
    return true;
}

$.fn.contentsEqual = function (compareTo) {
    return compareTo && this.length === compareTo.length && this.length === this.filter(compareTo).length;
}

function loadLevel() {
    $('#type').val('CSS');
    $('input[name="expression"]').val('');
    $('#console').text('');
    $('#helpTitle').text('');
    $('#helpText').html('');
    $('#examples').html('');

    window.localStorage.setItem("currentLevel", currentLevel);

    level = levels[currentLevel];
    $('h2').text(level.instruction);
    $('#render').html(level.html);
    $('pre code').text(level.html);
    $('#helpTitle').text(level.helpTitle);
    $('#helpText').html(level.helpText);
    level.examples.forEach(function (item) {
        $('#examples').append('<div>' + item + '</div>');
    });
}

function goToLevel(levelSelected) {
    $('#examples').html('');

    level = levels[levelSelected];
    $('h2').text(level.instruction);
    $('#render').html(level.html);
    $('pre code').text(level.html);
    $('#helpTitle').text(level.helpTitle);
    $('#helpText').html(level.helpText);
    level.examples.forEach(function (item) {
        $('#examples').append('<div>' + item + '</div>');
    });
}