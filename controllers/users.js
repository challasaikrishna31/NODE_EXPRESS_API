import { v4 as uuidv4 } from 'uuid';

let users=[
    {
        firstName:"John",
        lastName:"Doe",
        age:25
    },
    {
        firstName:"Jane",
        lastName:"Doe",
        age:30
    }
]
export const getUsers=(req,res)=>{
    res.send(users);
};
export const createUser=(req,res)=>{
    const user=req.body
    const userWithId={...user,id:uuidv4()} // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    users.push(userWithId);
    console.log("post route reached");
    res.send(users);
}
export const getUser=(req,res)=>{
    const {id}=req.params;
    const foundUser=users.find((user)=>user.id===id);
    res.send(foundUser);
}
export const deleteUser=(req,res)=>{
    console.log("delete route reached");
    const {id}=req.params;
    users=users.filter((user)=>user.id!==id)
    console.log(users)
    res.send(users);
}
export const updateUser=(req,res)=>{
    const {id}=req.params;
    const {firstName,lastName,age}=req.body;
    const user=users.find((user)=>user.id===id)
    if(firstName) user.firstName=firstName;
    if(lastName) user.lastName=lastName;
    if(age) user.age= age;
    res.send(user);
}
