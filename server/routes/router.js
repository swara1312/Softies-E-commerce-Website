const express = require("express");
const router = new express.Router();
const Products = require("../models/productSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenicate = require("../middleware/authenticate");

router.get("/getproducts",async(req,res)=>{
    try{
        const productsdata = await Products.find();
        //console.log("hello"+productsdata);
        res.status(201).json(productsdata);
    }catch (error){
        console.log("error" + error.message);
    }
})


// // register the data
router.post("/signup", async (req, res) => {
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "Fill all details please !" });
    };

    try {
        const preuser = await USER.findOne({ email: email });
        const preno = await USER.findOne({ mobile: mobile });
        if (preuser) {
            res.status(422).json({ error: "This email is already exist" });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "passwords are not matching" });;
        } else if (preno) {
            res.status(422).json({ error: "This mobile number is already used." });;
        }else {

            const finaluser = new USER({
                fname, email, mobile, password, cpassword
            });

            // Hashing

            const storedata = await finaluser.save();
            res.status(201).json(storedata);
        }

    } catch (error) {
        console.log("error" + error.message);
        res.status(422).send(error);
    }

});


//login
router.post("/login", async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "Fill all details" });
    }

    try {

        const userlogin = await USER.findOne({ email: email });
        
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);//comparing passwords
            if (!isMatch) {
                res.status(400).json({ error: "Invalid Password" });
            } else {
                //token contains payload, secret key
                const token = await userlogin.generatAuthtoken();
                console.log(token);

                res.cookie("Softies", token, {
                    emaxAge: 30 * 24 * 60 * 60 * 1000,
                    httpOnly: true,
                    sameSite: 'strict'
                });
                res.status(201).json(userlogin);
            }

        } else {
            res.status(400).json({ error: "User does not exist, Please signup !" });
        }

    } catch (error) {
        res.status(400).json({ error: "invalid crediential pass" });
        console.log("error the bhai catch ma for login time" + error.message);
    }
});


//get individual product data
router.get("/getProductInfo/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const individualdata = await Products.findOne({id:id});
        res.status(201).json(individualdata);
    } catch (error) {
        res.status(400).json(individualdata);
        console.log("error" + error.message);
    }
});

//add to cart
router.post("/addcart/:id", authenicate, async (req, res) => {

    try {
        const { id } = req.params;
        const cart = await Products.findOne({ id: id });
        const Usercontact = await USER.findOne({ _id: req.userID });

        if (Usercontact) {
            const cartData = await Usercontact.addcartdata(cart);

            await Usercontact.save();
            console.log(cartData + " thse save wait kr");
            console.log(Usercontact + "userjode save");
            res.status(201).json(Usercontact);
        }else{
            res.status(401).json({error:"Invalid User"});
        }
    } catch (error) {
        console.log(error);
    }
});


// get data into the cart
router.get("/cartdetails", authenicate, async (req, res) => {
    try {
        const buyuser = await USER.findOne({ _id: req.userID });
        res.status(201).json(buyuser);
    } catch (error) {
        console.log(error + "error for buy now");
    }
});

// get user is login or not
router.get("/validuser", authenicate, async (req, res) => {
    try {
        const validuserone = await USER.findOne({ _id: req.userID });
        res.status(201).json(validuserone);
    } catch (error) {
        console.log(error + "error for valid user");
    }
});


// for userlogout

router.get("/logout", authenicate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        res.clearCookie("Softies", { path: "/" });
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);

    } catch (error) {
        console.log(error + "jwt provide then logout");
    }
});


//remove from cart
router.get("/remove/:id", authenicate, async (req, res) => {
    try {
        const { id } = req.params;

        req.rootUser.carts = req.rootUser.carts.filter((curel) => {
            return curel.id != id
        });

        req.rootUser.save();
        res.status(201).json(req.rootUser);

    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;