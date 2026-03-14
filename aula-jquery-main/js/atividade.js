$("#ordenar").click(function(){

        let x = parseInt($("#x").val());
        let y = parseInt($("#y").val());
        let z = parseInt($("#z").val());

        let a, b, c;

        if(x <= y && x <= z){
            a = "x = " + x;

            if(y <= z){
                b = "y = " + y;
                c = "z = " + z;
            } else {
                b = "z = " + z;
                c = "y = " + y;
            }
        }
        else if(y <= x && y <= z){
            a = "y = " + y;

            if(x <= z){
                b = "x = " + x;
                c = "z = " + z;
            } else {
                b = "z = " + z;
                c = "x = " + x;
            }
        }
        else {
            a = "z = " + z;

            if(x <= y){
                b = "x = " + x;
                c = "y = " + y;
            } else {
                b = "y = " + y;
                c = "x = " + x;
            }
        }

        $("#resultado").html("A ordem crescente é:<br>" + a + ", " + b + ", " + c);

    });