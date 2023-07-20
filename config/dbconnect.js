
// connect the database ecommerce

const dbconnect = async () => {
    try {
        const mongoose = require('mongoose') ;
        await mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log('The database has been connected with success'))
        .catch(error => console.log(error));
    }
    catch(error) {
        console.log(error) ;
    }
}

module.exports = dbconnect ;