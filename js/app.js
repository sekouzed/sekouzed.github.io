
$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#portfolio_list').mixItUp({
        selectors: {
            target: '.portfolio',
            filter: '.filter'
        },
//            load: {
//                filter: '.app'
//            }
    });
})