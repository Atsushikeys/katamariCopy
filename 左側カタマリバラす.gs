var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheetByName("歯抜け埋めまで");
var sheetEdaban = ss.getSheetByName("左側を枝番分作るシート");

//間に一行づつ挿入する関数
function insertBlankRowToList(){
  
  var lastRow = ss.getLastRow();
  
  for(var i=1; i<=lastRow*2 ; i+=2){
    sheet.insertRowAfter(i);
  }
  
  
}

//O列をE列にコピーする関数
function copyColumnOtoE(){
  
  var lastRow = ss.getLastRow();
  
   for(var i=1; i<=lastRow ; i++){
    sheet.getRange(i ,15).copyTo(sheet.getRange(i , 5));
  }
  

}

//E列の歯抜けになっている部分に下のセルをコピーする関数
function copyOneCellToUpCell(){
  
  var lastRow = ss.getLastRow();
  
   for(var i=2; i<=lastRow ; i+=2){
    sheet.getRange(i+1 ,5).copyTo(sheet.getRange(i , 5));
  }

}

function clearAll(){

  var lastRow = ss.getLastRow();
  var lastColumn = ss.getLastColumn()

  sheet.getRange(1, 5, lastRow, lastColumn).clear();
}

function deleteRowInList(){
  
  var lastRow = ss.getLastRow();
  
  if(lastRow < 3){
    lastRow = 3;
  }
  
  for(var i=1; i<=lastRow ; i++){
    sheet.deleteRow(i);
  }
  
  
}

//一連動作
function serialDo(){
  
  insertBlankRowToList();
  copyColumnOtoE();
  copyOneCellToUpCell();

}

function maruttoKirei(){
  
  clearAll();
  deleteRowInList();
}

