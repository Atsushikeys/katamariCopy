var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheetEdaban = ss.getSheetByName("項番数を記入");
var sheetOut = ss.getSheetByName("枝番出力用シート");
var sheetCsNameAndNum = ss.getSheetByName("CSの項番と名前を貼る");

//カタマリの行数を取得
var katamariNum = sheetOut.getLastRow();

//項番の数を取得
//var kobanNum = sheetEdaban.getRange(3, 1).getValue();
var kobanNum = sheetCsNameAndNum.getLastRow();

function KatamariCopy(){
  
  var rangeToCopy = sheetOut.getRange(1, 1, katamariNum, 4);
  
  //カタマリの開始行記憶用変数を定義
  var nowKatamariStartRow =1;
  
  //カタマリを1行開けてコピーしていく
  for(var i=1; i<kobanNum; i++){

    var targetToCopy = sheetOut.getRange(nowKatamariStartRow+katamariNum+1, 1, katamariNum, 4);
    
    rangeToCopy.copyTo(targetToCopy);
    
    nowKatamariStartRow += katamariNum+1;
  
  }
  Logger.log("kobanNumは%sです",kobanNum);
//KatamariCopy終わり  
}

function copyColumnAandB(){
  
  
  //今の項番なんなのか記憶用変数を定義
  var nowKoban = 1;
  
  for(var i=1; i<= katamariNum*kobanNum; i+=katamariNum){
    
    var rangeToCopy = sheetEdaban.getRange(nowKoban, 1,1,2);
    
    //枝番シートにコピー
    for(var j=1; j<=katamariNum; j++){
      
      var targetToCopy = sheetOut.getRange(i, 1, 1, 2);
      rangeToCopy.copyTo(targetToCopy);
      
    }
    
    nowKoban ++ ;
    
  }
//copyColumnAandBおわり
}


function ichiren(){
  KatamariCopy();
  kobanNumAndNameCopy();
}


function clearAllEdaban(){
  var lastRow = sheetOut.getLastRow();
  sheetOut.getRange(1, 1, lastRow, 10).clear();
}

