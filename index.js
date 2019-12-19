console.log("javascipt loaded")

$(document).ready(function() {

    var NowMoment = moment();

    $("#currentDay").text(NowMoment.format("ll"));



    let time_slots = [];
    let start_time = 9;
    let end_time = 17;
    for (let i = start_time; i <= end_time; i++) {
        let suffix = 'AM';
        let hour = i;
        if (i >= 12) {
            suffix = 'PM';
        }
        if (i >= 13) {
            hour = i - 12;
        }
        time_slots[i] = hour + ':00 ' + suffix;
    }
    var currentHour = moment().hours()
   
    console.log("current", currentHour)

    time_slots.forEach(function(item, index) {

       
       $("#calendar").append(`<div id="time-slot-${index}" class="row time-block" id="time-slot- ${index}">
      <div class="col-md-2 hour">${item}</div>
      <textarea class="col-md-9 description" id="input">
      </textarea>
      <button class="btn saveBtn col-md-1 add"><i class="fas fa-save"></i></button>
    </div>`)


     

        if (index < currentHour){
            $("#time-slot-" + index).addClass("past")
        }
        else if (index === currentHour){
            $("#time-slot-" + index).addClass("present")
        }else{
            $("#time-slot-" + index).addClass("future")
        }
        var text = localStorage.getItem("time-slot-" + index)
        console.log(index, text)

        $("#time-slot-" + index).children("#input").val(text)
 
    });

   $(".add").on("click", function(){
    
    var input = $(this).siblings("#input").val()
    var slot = $(this).parent().attr("id")
    localStorage.setItem(slot, input)

   })





});


