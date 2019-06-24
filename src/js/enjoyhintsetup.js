$(function() {
    // initialize instance
    var enjoyhint_instance = new EnjoyHint({});

    // config.
    var enjoyhint_script_steps = [
        {
            'next .A1': '<p>Click To Select</p>',
        },
        {
            'next #saved-tt-picker-label': '<p>Multiple Tables</p>',
        },
        {
            'click #takeScreenshotBtn': '<p>Get Screenshot</p>',
            skipButton: {
                text: 'Done',
            },
        },
    ];
    enjoyhint_instance.set(enjoyhint_script_steps);
    enjoyhint_instance.run();
});
