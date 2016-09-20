function randomString( len ) {
  var str = "";                                         
  for(var i=0; i<len; i++){                             
    var rand = Math.floor( Math.random() * 62 );        
    var charCode = rand+= rand>9? (rand<36?55:61) : 48; 
    str += String.fromCharCode( charCode );             
  }
  return str;       
}

console.log( randomString(10) ); 