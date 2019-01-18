module.exports = {


    getMens(req, res) {
        let db = req.app.get('db');
        console.log('it works')
        db.get_mens().then(products => {
            res.status(200).send(products)
            console.log('this works 2')
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    },

    getWomens(req, res) {
        let db = req.app.get('db');
        console.log('got it')
        db.get_womens().then(products => {
            res.status(200).send(products)
            console.log('got it 2')
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },

    getAccessories(req, res) {
        let db = req.app.get('db');
        console.log('got it 3')
        db.get_accessories().then(products => {
            res.status(200).send(products)
            console.log('got it 4')
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },

    getHeadwear(req, res) {
        let db = req.app.get('db');
        console.log('got it 5')
        db.get_headwear().then(products => {
            res.status(200).send(products)
            console.log('got it 6')
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },

    getHoodies(req, res) {
        let db = req.app.get('db');
        console.log('got it 7')
        db.get_hoodies().then(products => {
            res.status(200).send(products)
            console.log('got it 8')
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },

    getTops(req, res) {
        let db = req.app.get('db');
        console.log('got it 9')
        db.get_tops().then(products => {
            res.status(200).send(products)
            console.log('got it 10')
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },

   cart(req, res) {
       let db = req.app.get('db');
       console.log('1')
       db.get_cart().then(products => {
           res.status(200).send(products)
           console.log('2')
       }).catch(err => {
           console.log(err);
           res.status(500).send(err)
       })
   },

   addToCart(req, res) {
       let db = req.app.get('db');
       console.log('3')
       db.insert_cart([req.body.item_id]).then(products => {
           res.status(200).send(products)
           console.log('4')
       }).catch(err => {
           console.log(err)
           res.status(500).send(err)
       })
   },

   removeItem(req, res) {
       let db = req.app.get('db');
       console.log('gone')
       db.remove_item([req.params.item_id]).then(products => {
           console.log('gone 2')
           res.status(200).send(products)
       }).catch(err => {
           console.log(err)
           res.status(500).send(err)
       })
   },

   checkout(req, res) {
       let db = req.app.get('db');
       db.clear_cart([req.params.cart_id]).then(cart => {
           console.log(req.params)
           res.status(200).send(cart)
       }).catch(err => {
           console.log(err)
           res.status(500).send(err)
       })
   }
}