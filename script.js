const ionIcon=document.getElementsByTagName("ion-icon")[0],goal=document.getElementById("goal"),goal_entries=document.querySelectorAll(".goal"),addBtn=document.getElementById("add"),current=document.getElementById("current"),serving=document.getElementById("serving");let goal_kcal=localStorage.getItem("goal_kcal")||2e3,current_kcal=localStorage.getItem("current_kcal")||0,date=localStorage.getItem("date")||new Date;for(date<new Date&&date.getDay()!==new Date.getDay&&(current_kcal=0,date=new Date),localStorage.setItem("date",date),i=0;i<goal_entries.length;i++)goal_entries[i].innerHTML=goal_kcal;current.innerHTML=current_kcal,progress.style.width=100*current_kcal/goal_kcal+"%";let goal_input=document.createElement("input");function addServing(){current_kcal=parseInt(current_kcal)+parseInt(serving.value),localStorage.setItem("current_kcal",current_kcal)}goal_input.value=`${goal_kcal}`,goal_input.type="number",goal_input.id="goal_input",ionIcon.addEventListener("click",()=>{if("pencil-sharp"===ionIcon.name)ionIcon.setAttribute("name","checkmark-sharp"),ionIcon.id="confirm",goal.replaceWith(goal_input);else{for(goal_kcal=goal_input.value,localStorage.setItem("goal_kcal",goal_kcal),goal_input.replaceWith(goal),i=0;i<goal_entries.length;i++)goal_entries[i].innerHTML=goal_kcal;progress.style.width=100*current_kcal/goal_kcal+"%",ionIcon.setAttribute("name","pencil-sharp"),ionIcon.id="edit"}});