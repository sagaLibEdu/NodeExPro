
import { json } from 'body-parser';
import User from '../model/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createUser = async (req, res) => {

    try{
      const check = await User.find({ email: req.query.email});
      console.log('-------------------------------check----------------------------------');
      if(check.length!=0){
        console.log(check);
        return res.status(400).json({
          msg: "User Already Exists"
      });
    }
    else{
    // const salt = await bcrypt.genSalt(10);
    // req.query.password = await bcrypt.hash(req.query.password, salt);
    
        const user = new User(req.query);
        await user.save();
        const payload = {
          user: {
              id: user.id
          }
      };
      
      }
        res.send({user});
    }
    catch(err){
      res.send({message:err});
    }  
  };
  
export const getUser = async (req, res) => {
  User.findOne({ name: req.query.name}, function (err, docs) { 
    if (err){ 
        console.log(err); 
    } 
    else{ 
        console.log("First function call : ", docs); 
        res.json(docs);
    } 
}); 
  };

  export const getUserList = async (req, res) => {
    User.find( function (err, docs) { 
      if (err){ 
          console.log(err); 
      } 
      else{ 
          console.log("First function call : ", docs); 
          res.json(docs);
      } 
  });  
    };

    export const loginUser2 = (req, res) => {
      User.findOne({ email: req.query.email}).then(resolve=>{
        console.log(resolve);
        if(resolve){
         console.log(resolve);

         
        }
        else{
          return res.status(400).json({
            msg: "User do not Exists"
        });
        }
      }).catch(err=>{
       console.log(err)
       })
    }


    export const loginUser = async (req, res) => {

      try{
        console.log(req.body);
        const user = await User.find({ email: req.body.email});
        console.log('-------------------------------check----------------------------------');
        if(user.length==0){
          console.log('checkis0');
          return res.status(400).json({
            msg: "User do not Exists"
        });
      }
      else{
        
        // const isMatch = await bcrypt.compare(req.query.password, user.password);
        // console.log('help'+isMatch);
        // if (isMatch.length==0)
        if(req.body.password==user.password){
          return res.status(400).json({
            message: "Incorrect Password !"
          });}
          console.log(user.id);
          const payload = {
            user: {
                id: user.id
            }
          };
        jwt.sign(
          payload,
          "randomString", {
              expiresIn: 10000
          },
          (err, token) => {
              if (err) throw err;
              
              res.status(200).json({
                  token
              });
          }
      );
        }
          // res.send({user});
      }
      catch(err){
        res.send({message:err});
      }  
    };