var sum_credits=0,count=0,t_credit=0;
function myFunction() {
  var myid,myid2,myid3,x,crdt;
  var grade=['O','A+','A','B+','B','C']
  var temp=1;
  var this_credit=0,my_crtd=0;
  for(var i=1;i<9;i++)
        {    
             myid='sem_'+i;
             myid2='sem'+i;
             myid3='credit'+i;
             x=document.getElementById(myid2).value;
             crdt=document.getElementById(myid3).value;
             my_crtd+=parseInt(crdt);
             for(var j=0;j<6;j++)
             {
             	if(!grade[j].localeCompare(x))
             	{
             		temp=crdt*(10-j);
             		this_credit+=temp;
                    sum_credits+=temp;
             	}
             }
             document.getElementById(myid).innerHTML = temp;
             temp=1;
        }
   document.getElementById('gpa'+(count+1)).innerHTML=Math.round((this_credit/my_crtd)*100)/100;
   t_credit+=my_crtd;
   count++;
   if(count==7)
   {
   	document.getElementById('btn').innerHTML="check Cgpa";
   }
   
   	document.getElementById('cgpa_final').innerHTML=Math.round((sum_credits/t_credit)*100)/100;
    document.getElementById('cgpa_sem').innerHTML="Cgpa Upto Sem : "+count;
    document.getElementById('marks').innerHTML="Enter the details of sem : "+(count+1);
    document.getElementById('leftbox').setAttribute("id","lef");
    timeFunction();
}
function timeFunction() 
       {

            setTimeout( function()
                             { 
                                document.getElementById('lef').setAttribute("id",'leftbox')

                              }
                             , 1000);
          }
