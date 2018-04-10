
function dividerStick(){
    var stick_name = $("#stick_name").val();
    var sticks = stick_name.split('');
    var out_string = '';
    var count=0;
    console.log(sticks);
    sticks.forEach(function(val,index,arr){
        console.log(val); 
        if (val == 'i')
        {
        out_string+="小写的i,"
        count+=1;
        }
        else if (val=='I')
        {
        out_string+="大写的i,"
        count+=1;
        }
        else if (val=='l')
        {
        out_string+="小写的l,"
        count+=1;
        }
        else if (val=='L')
        {
        out_string+="大写的l,"
        count+=1;
        }
        else if (val=='1')
        {
        out_string+="数字1,"
        count+=1;
        }
        else
        {
        out_string+="不是棍子,"
        }
        
        
    });
	$("#s_out").text(out_string);
	$("#c_out").text(count );
}