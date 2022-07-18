/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    //userId: Number;
    //id: Number;
   // title: String;
   // body: String;
}

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
   
};

// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
   
};

// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  
};

// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {

};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let Balance
    let Balance1
    let Balance2
    let Balance3
    let ID: string = req.body.ID;
    let Amount: string = req.body.Amount;
    let Currency: string = req.body.Currency;
    let CustomerEmail: string = req.body.CustomerEmail;
    let SplitInfo: string = req.body.SplitInfo;
    let SplitType: string = req.body.SplitType;
    let SplitEntityId: string[] = ["LNPYACC0011","LNPYACC0019","LNPYACC0015","LNPYACC0016"];
    let SplitValue: number[] = [450,3,3,2] 
    let SplitValue1 = req.body.SplitInfo[0]["SplitValue"];
    let SplitValue2 = req.body.SplitInfo[1]["SplitValue"];
    let SplitValue3 = req.body.SplitInfo[2]["SplitValue"];
    let SplitValue4 = req.body.SplitInfo[3]["SplitValue"];
    let SplitBreakdown: any;
    let ratio = 3+2
    
    if (SplitEntityId[1] ="LNPYACC0019")
    {

         Balance1 = req.body.Amount-SplitValue1
        // SplitBreakdown = ["SplitEntityId: "+SplitEntityId[1], "Amount: "+Balance1]
        let  bal1  = (SplitValue2/100)*Balance1
         if(SplitEntityId[0] ="LNPYACC0011")
         {
         Balance2 = Balance1 - bal1
         //SplitBreakdown = ["SplitEntityId: "+SplitEntityId[0], "Amount: "+bal,"SplitEntityId: "+SplitEntityId[1], "Amount: "+SplitValue[0]]
         if(SplitEntityId[2] ="LNPYACC0015")
         {
            let bal = (SplitValue3/ratio)*Balance2
            Balance3 = Balance2 - bal         
            if(SplitEntityId[3] ="LNPYACC0016")
            {
                let bal2 = (SplitValue4/ratio)*Balance2
                Balance = Balance3 - bal2
                SplitBreakdown = ["SplitEntityId: "+SplitEntityId[0], "Amount: "+bal1,"SplitEntityId: "+SplitEntityId[1], "Amount: "+SplitValue1, "SplitEntityId: "+SplitEntityId[2], "Amount: "+bal, "SplitEntityId: "+SplitEntityId[3], "Amount: "+bal2  ]  
        } 
        } 
         } 

         
    }
    
    
       
    
    // add the post
    let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        ID,
        Balance,
        SplitBreakdown,
    });
    // return response
    return res.status(200).json({
       
        message: response.data
    });
};

export default {getPosts,  getPost, updatePost, deletePost, addPost };