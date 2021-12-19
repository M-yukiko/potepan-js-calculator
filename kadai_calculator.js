let eq_status = "0"; //＝入力状態　０：オフ、１：オン


//ボタンを押した時
function clickbutton(target) { 
      
    const result = document.getElementById("result");
    const target_value = target.innerHTML; 
    const arr = Array.from(result.innerHTML); 
    const arr_length = arr.length;
    const last = arr.slice( -1 ); //最後の1文字
   
//演算子を抜いた配列
	const num_arr = result.innerHTML.split(/[-+/*]/);
    
//最後の数字を配列として再取得する
    const last_num = num_arr.slice( -1 );    
    const num = last_num.join('');
    const last_num_arr = Array.from(num);
    const L_is_number = parseFloat(last); //trueなら末尾は数字
    const T_is_number = parseFloat(target_value); //trueならボタン値は数字

//////////////////////////////////////////////////////////////////////
/*【AC】ボタンを押した時
        ●ディスプレイは0表示     */
        
if (target_value == "AC") {
  result.innerHTML = "0";
  eq_status = "0";
  return;
}

/*【=】ボタンを押した時
        ●計算させる*/
if (target_value == "="){ 
  result.innerHTML  = eval(result.innerHTML);
  eq_status = "1";
  return;
} 

if ( arr_length > 19){
  alert("文字数が多すぎます。やり直してください。");
  return;
} 

//【=】ボタンを押した後のリセット
if(eq_status == "1"){
  result.innerHTML = "0";
  eq_status = "0";
}

            
/*【.】ボタンを押した時  
        ●冒頭では0.
        ●演算子や小数点の後は出力させない
        ●ひとつの数字に2度出現させない */
if (target_value == "."){ 
    if (result.innerHTML == "0"){
        result.innerHTML = "0"+"."; 
    } 
                else if(last== "0" ){
                result.innerHTML += target_value;
                }
                else if(last== "."  || !L_is_number){
                result.innerHTML=result.innerHTML.replace(last, target_value);
                }
                else if(last_num_arr.includes(".")){
                result.innerHTML=result.innerHTML+"";
                }
         else {
                result.innerHTML += target_value;
            }
    }
    
  /*【00】ボタンを押した時 
        ●冒頭で押させない)  */

    else if(target_value == "00"||target_value =="0"){
        if (result.innerHTML == "0"){
                result.innerHTML = "0";
                } 
         else {
                result.innerHTML += target_value;
            }
    }  
    
 /*【演算子】押した時
        ●冒頭で押せない
        ●連続で出力させない  */
        
    else if(!T_is_number){ 
            if (result.innerHTML == "0"){
                result.innerHTML = "0"+target_value;
                } 
            else if(last=="0"){
              result.innerHTML += target_value;
            }
            else if(!L_is_number) { 
                result.innerHTML = result.innerHTML.replace(last, target_value);
            }
         else {
                result.innerHTML += target_value;
            }
    }
 
 /*ディスプレイの値が0の時
        ●0→ボタン値            */
    else if(result.innerHTML == "0"){
            result.innerHTML = target_value;
            } 
            else{
            result.innerHTML += target_value; 
            }
}
/////////////////////////////END//////////////////////////////
