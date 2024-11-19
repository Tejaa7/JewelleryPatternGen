// auth.js
const islogged = (req) => {
    return req.session && req.session.user ? true : false;
};

module.exports = (req, res) => {
    const loggedIn = islogged(req);

    const viewMap = {
        '/traditional': 'traditional.ejs',
        '/upload': 'upload.ejs',
        '/contactus': 'contactus.ejs',
        '/Home':'Home.ejs',
        '/modern':'modern.ejs'
    };

    const view = viewMap[req.path];
    if (view) {
        res.render(view, { loggedin: loggedIn });
    } else {
        res.status(404).send('Page not found');
    }
};
