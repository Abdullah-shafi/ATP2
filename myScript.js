$(document).ready(function(){

	$("#load").click(function(){
		loadData();
	});

	$("#create").click(function(){
		postData();
	});
	$("#delete").click(function(){
		deleteData();
	});

    $("#loade").click(function(){
		loadDataE();
	});
	$("#deleteE").click(function(){
		deleteDataE();
	});
	$("#createE").click(function(){
		postDataE();
	});


	function loadData()
	{
		$.ajax({
			url:"http://localhost:4468/api/departments",
			method:"get",
			headers:{
				Authorization:"Basic "+btoa("admin:123")
			},
			complete:function(xmlHttp,status){
				if(xmlHttp.status==200)
				{
					var data=xmlHttp.responseJSON;
					var str='';
					for (var i = 0; i < data.length; i++) {
						str+="<tr><td>"+data[i].departmentId+"</td><td>"+data[i].departmentName+"</td><td>"+data[i].location+"</td></tr>";
					};

					$("#list tbody").html(str);

				}
				else
				{
					$("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
				}
			}
		});
	}

function postData()
{
	$.ajax({
			url:"http://localhost:4468/api/departments",
			method:"post",
			headers:{
				ContentType:"application/json"
			},
			data:{
				departmentName:$("#deptName").val(),
				location:$("#deptLoc").val()
			},
			complete:function(xmlHttp,status){
				if(xmlHttp.status==201)
				{
					$("#msg").html("Department Created");
					loadDataE();
				}
				else
				{
					$("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
				}
			}
		});
}

function deleteData()
{
	var id=$("#deptId").val();
	$.ajax({
			url:"http://localhost:4468/api/departments/"+id,
			method:"delete",
			complete:function(xmlHttp,status){
				if(xmlHttp.status==204)
				{
					$("#msg").html("Department Deleted");
					loadData();
				}
				else
				{
					$("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
				}
			}
		});
}


//Employee

function loadDataE()
	{
		$.ajax({
			url:"http://localhost:4468/api/employees",
			method:"get",
			
			complete:function(xmlHttp,status){
				if(xmlHttp.status==200)
				{
					var data=xmlHttp.responseJSON;
					var str='';
					for (var i = 0; i < data.length; i++) {
						str+="<tr><td>"+data[i].employeeId+"</td><td>"+data[i].employeeName+"</td><td>"+data[i].departmentId+"</td><td>"+data[i].salary+"</td></tr>";
					};

					$("#list tbody").html(str);

				}
				else
				{
					$("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
				}
			}
		});
	}

	function deleteDataE()
{
	var id=$("#employeeId").val();
	$.ajax({
			url:"http://localhost:4468/api/employees/"+id,
			method:"delete",
			complete:function(xmlHttp,status){
				if(xmlHttp.status==204)
				{
					$("#msg").html("Employee Deleted");
					loadDataE();
				}
				else
				{
					$("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
				}
			}
		});
}
function postDataE()
{
	$.ajax({
			url:"http://localhost:4468/api/employees",
			method:"post",
			headers:{
				ContentType:"application/json"
			},
			data:{
				
				employeeName:$("#employeeName").val(),
				salary:$("#salary").val(),
				departmentId:$("#deptId").val()
				

			},
			complete:function(xmlHttp,status){
				if(xmlHttp.status==201)
				{
					$("#msg").html("Department Created");
					loadDataE();
				}
				else
				{
					$("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
				}
			}
		});
}

});