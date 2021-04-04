
import { json } from 'body-parser';
import Story from '../model/story.js';

export const createStory = async (req, res) => {

    try{
    //   req.se
    const story = new Story(req.originalQuery);
    
    // console.log(req.body);
    await story.save();
    res.send({story});
    }
    catch(err){
      res.send({message:err});
    }   
    
  };
  
export const getStory = async (req, res) => {
  Story.find({ writer: req.query.name}, function (err, docs) { 
    if (err){ 
        console.log(err); 
    } 
    else{ 
        console.log("First function call : ", docs); 
        res.json(docs);
    } 
}); 
};

  export const getStoryList = async (req, res) => {
    Story.find( function (err, docs) { 
      if (err){ 
          console.log(err); 
      } 
      else{ 
          console.log("First function call : ", docs); 
          res.json(docs);
      } 
  });  
    };