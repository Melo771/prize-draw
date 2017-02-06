<?php
$prize_arr = array( 
'0' => array('id'=>1,'min'=>-20,'max'=>20,'prize'=>'恭喜您获得了10元代金券','v'=>15), 
'1' => array('id'=>2,'min'=>40,'max'=>80,'prize'=>'恭喜您获得了50元代金券','v'=>3), 
'2' => array('id'=>3,'min'=>100,'max'=>140,'prize'=>'恭喜您获得了1元代金券','v'=>50), 
'3' => array('id'=>4,'min'=>160,'max'=>200,'prize'=>'恭喜您获得了100元代金券','v'=>2), 
'4' => array('id'=>5,'min'=>220,'max'=>260,'prize'=>'恭喜您获得了20元代金券','v'=>10), 
'5' => array('id'=>6,'min'=>280,'max'=>320,'prize'=>'恭喜您获得了5元代金券','v'=>20)
); 
function getRand($proArr) { 
$result = ''; 

//概率数组的总概率精度 
$proSum = array_sum($proArr); 

//概率数组循环 
foreach ($proArr as $key => $proCur) { 
$randNum = mt_rand(1, $proSum); 
if ($randNum <= $proCur) { 
$result = $key; 
break; 
} else { 
$proSum -= $proCur; 
} 
} 
unset ($proArr); 

return $result; 
} 

foreach ($prize_arr as $key => $val) { 
$arr[$val['id']] = $val['v']; 
} 

$rid = getRand($arr); //根据概率获取奖项id 

$res = $prize_arr[$rid-1]; //中奖项 
$min = $res['min']; 
$max = $res['max']; 

$result['angle'] = mt_rand($min,$max); //随机生成一个角度 
$result['prize'] = $res['prize']; 

echo json_encode($result); 
?>