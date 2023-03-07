module.exports = {
    route: "/ejs",
    exec: async(req, res) => {
        // usage with /pages directory and EJS
        res.render('example.ejs'); // folder/file.ejs for pages inside directories
    },
}