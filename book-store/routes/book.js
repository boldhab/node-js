const express = require('express');
const router = express.Router();
const path=require('path');

const books=[
    {id:1,title:'The Great Gatsby',author:'F. Scott Fitzgerald'},
    {id:2,title:'To Kill a Mockingbird',author:'Harper Lee'},
    {id:3,title:'1984',author:'George Orwell'},
];

router.route('/')
.get((req,res)=>{   
    res.json(books);
})
.post((req,res)=>{
    const {title,author}=req.body;
    const newBook={id:books.length+1,title,author};
    books.push(newBook);
    res.status(201).json(newBook);
});

router.route('/:id')    
.get((req,res)=>{
    const book=books.find(b=>b.id===parseInt(req.params.id));
    if(book){
        res.json(book);
    }else{
        res.status(404).json({message:'Book not found'});
    }   
})
.put((req,res)=>{
    const book=books.find(b=>b.id===parseInt(req.params.id));
    if(book){
        const {title,author}=req.body;
        book.title=title||book.title;
        book.author=author||book.author;
        res.json(book);
    }else{
        res.status(404).json({message:'Book not found'});
    }   
})
.delete((req,res)=>{
    const index=books.findIndex(b=>b.id===parseInt(req.params.id));
    if(index!==-1){
        const deletedBook=books.splice(index,1);
        res.json(deletedBook);
    }else{
        res.status(404).json({message:'Book not found'});
    }   
});


module.exports=router;