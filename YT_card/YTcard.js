console.log("Script is initializing");
// let title = document.querySelector('.title');
// let title_text = title.innerText;
// title.innerText="This is new title";


function Text_change(title, cname, views, timeago) {
    let Current_title = document.querySelector('.title');
    Current_title.innerText = title;

    let Channel_name = document.querySelector('#cname');
    Channel_name.innerText = cname;

    let Current_views = document.querySelector('#views');
    views = views.toString();
    if (views.length === 4) {
        Current_views.innerText = views[0] + "K views";
    }
    else if (views.length === 5) {
        Current_views.innerText = views.slice(0, 2) + "K views";
    }
    else if (views.length === 6) {
        Current_views.innerText = views.slice(0, 3) + "K views";
    }
    else if (views.length === 7) {
        Current_views.innerText = views[0] + "M views";
    }
    else if (views.length > 7, views.length < 10) {
        Current_views.innerText = views.slice(0, views.length - 6) + "M views";
    }
    else if (views.length > 9) {
        Current_views.innerText = views.slice(0, views.length - 9) + "B views";
    }
    else {
        Current_views.innerText = views + " views";
    }
    
    let tago = document.querySelector('#timeago');
    tago.innerText = timeago
}

Text_change("This is new title", "SRAR_47", 3000000000000, "3 days ago");