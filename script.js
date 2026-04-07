
    // قسم المهام المنجزة
    const Accomplished = document.getElementById("Finish");
    // قسم المهام غير المنجزة
    const Unfinished = document.getElementById("Unfinished");
    // قسم المهام التي قيد الإنتظار
    const Pending = document.getElementById("Pending");

    // نهاية مهمة

    // بداية مهمة

    // مدخلات المستخدم
    const idnum = document.getElementById("idnum");
    const time1 = document.getElementById("time");
    const taskName = document.getElementById("taskName");
    const SelectTask = document.getElementById("SelectTask")
    const IsFinished = document.getElementById("IsFinish");

    // نهاية مهمة


    // مصفوفة بالمهام الموجودة
    let Task = [];
    function createNewElement(event) {
         event.preventDefault();



        const parent1 = document.createElement("div");
        const Tnum = document.createElement("h4");
        const time = document.createElement("p");
        const Tname = document.createElement("h4");
        const slelctTask = document.createElement("p");
        slelctTask.classList.add("slcttask");
        const IsFinshed = document.createElement("p");
        const deletbtn = document.createElement("button");
        deletbtn.classList.add("delet");
        const finishedntn = document.createElement("button");
        const Unfinishedntn = document.createElement("button");


        for(let i = 0; i < Task.length; i++){
            if(idnum.value === Task[i].id){
                alert("المهمة موجودة بالفعل")
                return;
            }
        }
         
        
        Task.push(
            {
                id: idnum.value,
                TaskTime: time1.value,
                NameTask: taskName.value,
                selecttask: SelectTask.value,
                isfinished: IsFinished.value
            }
        );

       const nodno = Tnum.textContent = "رقم المهمة: " + Task[Task.length - 1].id;
       const nodname = Tname.textContent = "اسم المهمة: " + Task[Task.length - 1].NameTask;
       const nodtime = time.textContent =  "وقت انجاز المهمة: " + Task[Task.length - 1].TaskTime;
       const nodselect = slelctTask.textContent = "درجة الأولوية: " + Task[Task.length - 1].selecttask;
       const nodfinish = IsFinshed.textContent = "حالة الإنجاز: " + Task[Task.length - 1].isfinished;
       deletbtn.textContent = "حذف";
       finishedntn.textContent = "أُنجزت المهمة";
       Unfinishedntn.textContent = "لم تُنجز المهمة";


        

        parent1.appendChild(Tnum);
        parent1.appendChild(Tname);
        parent1.appendChild(time);
        parent1.appendChild(slelctTask);
        parent1.appendChild(IsFinshed);

        parent1.classList.add("parent1");


        if(IsFinished.value === "تم الإنجاز") {
            parent1.appendChild(deletbtn);
            Accomplished.appendChild(parent1);
            parent1.classList.add("pcom")
        }
        else if(IsFinished.value === "لم يتم الإنجاز"){
            parent1.appendChild(deletbtn);
            Unfinished.appendChild(parent1);
            parent1.classList.add("punf")
        }
        else {
            Pending.appendChild(parent1);
            parent1.classList.add("ppen");
            parent1.appendChild(finishedntn);
            parent1.appendChild(Unfinishedntn);
            finishedntn.classList.add("finishedbtn");
            Unfinishedntn.classList.add("Unfinishedbtn");
        }

        if(SelectTask.value === "أولوية قصوى") {
            slelctTask.style.backgroundColor = "rgb(200, 0, 0)";
            slelctTask.style.padding = "5px";
            slelctTask.style.color = "#ffffff";
            slelctTask.style.fontWeight = "bold";
        }
        else if(SelectTask.value === "أولوية متوسطة") {
            slelctTask.style.backgroundColor = "rgb(255, 136, 0)";
            slelctTask.style.padding = "5px";
            slelctTask.style.color = "#ffffff";
            slelctTask.style.fontWeight = "bold";
        }
        else {
            slelctTask.style.backgroundColor = "rgb(0, 180, 9)";
            slelctTask.style.padding = "5px";
            slelctTask.style.color = "#ffffff";
            slelctTask.style.fontWeight = "bold";
        }

                 idnum.value = "";
         taskName.value = "";
         time1.value = "";

       

        finishedntn.onclick = function() {
            IsFinshed.textContent = "حالة الإنجاز: تم الإنجاز";
            Accomplished.appendChild(parent1);
            parent1.removeChild(finishedntn);
            parent1.removeChild(Unfinishedntn);
            for (let index = 0; index < Task.length; index++) {
                Task[idTasknum].isfinished = "تم الإنجاز";
            }
            parent1.appendChild(deletbtn);
        }

        Unfinishedntn.onclick = function() {
            IsFinshed.textContent = "حالة الإنجاز: لم يتم الإنجاز";
            Unfinished.appendChild(parent1);
            parent1.removeChild(finishedntn);
            parent1.removeChild(Unfinishedntn);
                for (let index = 0; index < Task.length; index++) {
                Task[idTasknum].isfinished = "لم يتم الإنجاز";
            }
                        parent1.appendChild(deletbtn);

        }

         // حذف
        const taskId = idnum.value;
        const idTasknum = Number(taskId);
        deletbtn.onclick = function() {
            Task = Task.filter(delet);

            function delet(element ,i){
                if(element[i] !== taskId){
                    return element[i]
                }
            }
            parent1.remove();
        }

        

    }


