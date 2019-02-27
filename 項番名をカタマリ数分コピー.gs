var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheetLestTwoLines = ss.getSheetByName("一次検証CSの項番と名前を貼る");
var sheetKobanOut = ss.getSheetByName("項番名出力シート");


var lastRow = sheetKobanOut.getLastRow();

function kobanNumAndNameCopy(){
  
  var startTime = new Date();
  
  //現在の項番と名前記憶用変数を定義
  var countKobanNameAndNumber = 1;
  
  for(var i =1; i<=lastRow; i++){
    
    var isBlankTheCell = sheetKobanOut.getRange(i, 1).getValue();
    
    //カタマリ同士の間に来た時
    if(!isBlankTheCell){
      Logger.log("現在のカウント：%s",countKobanNameAndNumber);
      countKobanNameAndNumber ++;
      i++;
      Logger.log("カウントが%sになりました",countKobanNameAndNumber);
      
    }
    
    var rangeToCopy = sheetLestTwoLines.getRange(countKobanNameAndNumber, 1, 1, 2);
    var targetToCopy = sheetKobanOut.getRange(i, 1, 1, 2);
    rangeToCopy.copyTo(targetToCopy);
    
    
    }

  var endTime = new Date();
  Logger.log("処理時間は%s秒でした",(endTime - startTime)/1000);
}


function clearAllKobanOut(){
  var lastRow = sheetKobanOut.getLastRow();
  sheetOut.getRange(1, 1, lastRow, 10).clear();
}