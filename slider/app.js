const texts = [
    "lorem ipsum",
    "dolor sit amet",
    "consectetur adipiscing",
    "elit pellentesque",
    "gravida nulla",
    "a vulputate mattis",
    "risus diam",
    "pulvinar sapien",
    "vel porttitor"
];

const animationSpeed = 1000;
const cycleTimeout = 2000;
const visibleCount = 3;

$(document).ready(function(){
    const $container = $("#container");
    const headlineTpl = title => `<div class="headline bg-success">${title}</div>`

    texts.forEach(t => $container.append($(headlineTpl(t))))

    // implement rotating slider here
});
