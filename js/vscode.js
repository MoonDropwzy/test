function hello(){
    document.getElementById('area').value='print("Hello world!")';
}
function hhello(){
    document.getElementById('area').value='<!DOCTYPE html>                                          <html lang="en">                                                   <head>                                                            <meta charset="UTF-8">                                        <meta http-equiv="X-UA-Compatible" content="IE=edge">                                            <meta name="viewport" content="width=device-width, initial-scale=1.0">                                            <title>Happy New Year</title>                                        </head>                                                      <body>                                                      <script type="text/javascript">                                                          alert("Happy New Year")                                        </script>                                                         </body>                                                      </html>';
}
function print(){
    var val = document.getElementById('area').value;
    if(val.length>400){
        document.getElementById('out').value=val.slice(470,-455); 
    }else{
        document.getElementById('out').value=val.slice(7,-2); }
}