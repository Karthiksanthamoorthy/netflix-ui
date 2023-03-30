const {
    addToLikedMovies,
    getLikedMovies,
    removeFromLikedMovies,
   } = require("../controllers/UserController")

    const router = require("express").Router();

    // router.get("/", (req,res)=>{
    //     res.send({
    //         message: "Hello"
    //     })
    // })

    router.get("/", (req,res)=>{
        res.send({
            message: "Hello from the backend"
        });
    });
    

    router.get("/liked/:email", getLikedMovies);
    router.post("/add", addToLikedMovies);
    router.put("/remove", removeFromLikedMovies);
    
    module.exports = router;