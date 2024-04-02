const dcrbtn=document.getElementById("dcrbtn");
const incbtn=document.getElementById('incbtn');
const rstbtn=document.getElementById("rstbtn");
const cntlb=document.getElementById("cntlb");

let count=0;

incbtn.onclick =function (){
    count++;
    cntlb.textContent= count;
}

dcrbtn.onclick= function () {
    count--;
    cntlb.textContent= count;

}
rstbtn.onclick= function (){
    count=0; 
    cntlb.textContent= count;
}