var empList = [{
    name: "Mayank",
    avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
    createdAt: "Today",
    id: 1
}, {
    name: "Meha",
    avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
    createdAt: "Today",
    id: 1
}, {
    name: "Anshul",
    avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
    createdAt: "Today",
    id: 1
}]

for(let i of empList){
    console.log(i.name);
}

empList.forEach((ele,index,empList)=>{
    console.log(ele.name);
})

