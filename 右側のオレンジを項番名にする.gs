var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheetOrangeToKoban = ss.getSheetByName("右側のオレンジを項番名にする");




function orangeRename(){
  
  //最終行、列取得
  var lastRow = sheetOrangeToKoban.getLastRow();
  var lastColumn = sheetOrangeToKoban.getLastColumn();
  
  //カタマリ範囲を取得
  var actRange = sheetOrangeToKoban.getRange(1, 5, lastRow, lastColumn);
  
  //前の値
  var beforeArray = actRange.getValues();
  var afterArray = new Array();
  
  Logger.log(beforeArray);
  
  for(var i = 1; i <= lastRow; i++){
    
    afterArray[i][10] = beforeArray[i][1];
    
  }
  
  actRange.setValues(afterArray);
  
}