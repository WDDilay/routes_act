const m = {
    main:(req, res) => {
        res.render('index');
    },

    about:(req, res) => {
        res.render('about');
    },

    contact:(req, res) => {
        res.render('contact');
    },

    product:(req, res) => {
        res.render('product');
    },

    support:(req, res) => {
        res.render('support');
    }
};



module.exports = m;