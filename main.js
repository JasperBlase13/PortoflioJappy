let input1 = prompt("Admin or Guest?")
let proceed = false;
console.log(input1);


if(input1){

    while(input1)
    {
    input1 = input1.trim().toLowerCase();
    if(input1 === "admin" )
    {
       let password = prompt("Enter the password");
       password = password.trim().toLowerCase();
        if(password === "nomad")
        {
            alert("Welcome to your page");
            break;
        }
        else
        {
            alert("Wrong password");
            input1 = false;
            location.reload();
        }

        
    }
    else if(input1 === "guest")
    {
        alert("Welcome to my first build of portfolio website \nThis is subject to change.\n-Jappy")
        break;
    }

    else
    {
        alert("Wrong input");
        input1 = false;
        location.reload();
    }
    }
}

else if(input1 === null)
{
    alert("You can just type the guest keyword so that you can see what's on my page. \n-Jappy")
    location.reload();
}