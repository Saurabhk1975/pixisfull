// this router folder
const express = require("express");
//const { route } = require("express/lib/application");

// Route is used for making URL from your web page on which click which page is served this decided by route
const routes = express.Router();
const Detail = require("../models/details");
const slider = require("../models/Slider");
const Service = require("../models/service");
const { request } = require("express");
const Contact = require("../models/Contact");
const Joind = require("../models/Joind");
const Influancer = require("../models/influancer");
// routes.get("/", async (req, res) => {
//   const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
//   const slides = await slider.findOne();
//   console.log(slides);
//   res.render("index", {
//     details: details,
//     slides: slides,
//   });
// });
routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
  const slides = await slider.find();
  const services = await Service.find();
  const influancer = await Influancer.find();

 // console.log(services);
  res.render("index", {
    details: details,
    slides: slides,
    services:services,
    influancer: influancer,
  });
});

routes.get("/galleryinf", async (req, res) => {
  const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
  const influancer = await Influancer.find();

  res.render("gallery", {
    influancer: influancer,
    details: details,
  });
});


routes.get("/contact", async (req, res) => {
  const details = await Detail.findOne({ _id: "640c9edc52b7e6c85774ab99" });
  const influancer = await Influancer.find();

  res.render("contact", {
    influancer: influancer,
    details: details,
  });
});


routes.post("/process-contact-form",async(req,res)=>{
   console.log("submitted successfully");
   console.log(req.body);
   // saving data to database comming from from
   try{
     const data = await 
      Contact.create(req.body);
     console.log(data);
     res.redirect("/");
   }
   catch(e)
   {
      console.log(e);
      res.redirect('/')
   }

});
routes.post("/contact",async(req,res)=>{
  console.log("submitted successfully");
  console.log(req.body);
  // saving data to database comming from from
  try{
    const data = await 
     Joind.create(req.body);
    console.log(data);
    res.redirect("/");
  }
  catch(e)
  {
     console.log(e);
     res.redirect('/')
  }

});



module.exports = routes;
