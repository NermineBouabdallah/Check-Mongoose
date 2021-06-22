const mongoose= require('mongoose');
require('dotenv').config()
//const ConnectDB = () => {
    mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
      },
      (err) => {
        if (err) {
          console.log(err);
        } else console.log("database connected");
      }
    );

    //create many documents
 let person=require('./person')
//  person.create([{name:"wajih",age:25,favoriteFoods:["sandwich"]},{name:"nermine",age:28,favoriteFoods:["crepe"]}]) 
 
 //find people having given name
 //using callback function to show result

 /* person.find({ name: 'nermine' },function (err, docs) {
   if (err){console.log(err)}
   else console.log(docs)
 }).exec(); */

 //findone with favoriteFood 
 /* person.findOne({ favoriteFoods: 'pizza' }, function (err, doc) {
   if (err){
     console.log(err)
   } else console.log(doc)
 }); */

 //findbyId

 /* person.findById({_id:"60d0f4b70fa5612d98e0c8a6"}, function (err, doc) {
   if (err){
     console.log(err)
   } else console.log(doc)
 }); */

 //Find a person by _id,Add "hamburger" to the list of the person's favoriteFoods,save() the updated Person.
 /* person.findById({_id:"60d0f4b70fa5612d98e0c8a6"}, function (err, doc) {
  if (err){
    console.log(err)
  } else {doc.favoriteFoods.push('humberger'); doc.save();console.log(doc)}
}); */


//finOneAndUpdate

/* person.findOneAndUpdate({name:"nermine"}, { $set: { age:20 }}, {new:true},function (err, doc) {
  if (err){
    console.log(err)
  } else console.log(doc)
} ) */

//remove one by ID
/* person.findByIdAndRemove({_id:"60d1fad5f27d9121ac6818b8"},function (err, doc) {
  if (err){
    console.log(err)
  } else console.log(doc)
}  ) */

//remove many doc with the name nermine
/* person.remove({ name: 'nermine' },function (err, doc) {
  if (err){
    console.log(err)
  } else console.log(doc)
} );

 */
// query 

person.find({favoriteFoods:'salade'})
.sort({name:1})
.limit(2)
.select({age:0}) // ("-age")
.exec(done= (err, doc) => {
  if (err){
    console.log(err)
  } else console.log(doc)
})

 //create one doc
 /*   let p=new person( {name:"wafa",
  age:28,
  favoriteFoods:["salade"]
})
p.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })    */
  //};
  //module.exports = ConnectDB;