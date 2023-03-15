<?php
header("Access-Control-Allow-Origin: *");
if(isset($_GET['imageUpload'])){
    if ($_POST['password'] != '123456') {
        echo json_encode([
            'data' => [
                'status' => 'error',
                'message' => 'Password is incorrect'
            ]
        ]);
        header("HTTP/1.1 401 Unauthorized");
        exit;
    }
    $imageData = saveImageFromBase64($_POST['file']);
    saveToJson($imageData, $_POST);
    echo json_encode([
        'data' => [
            'status' => 'success',
            'message' => 'Image uploaded successfully'
        ],
        'meta'=> $_POST
    ]);
}

if(isset($_GET['getImages'])){
   echo getJson();
}

function getJson(){
    return file_get_contents('backend/images.json');
}
function saveToJson($imageData, $otherData){
    $newData = [
        'image' => $imageData[0],
        'ownerName' => $otherData['ownerName'],
        'artName' => $otherData['artName']
    ];
    $json = file_get_contents('backend/images.json');
    $data = json_decode($json, true);
    $data[] = $newData;
    $json = json_encode($data);
    file_put_contents('backend/images.json', $json);
}


function saveImageFromBase64($string){
    $string = str_replace('data:image/jpeg;base64,', '', $string);
    $string = str_replace('data:image/jpg;base64,', '', $string);
    $string = str_replace('data:image/png;base64,', '', $string);
    $image = base64_decode($string);
    $folderName = 'backend/images/';
    $uniqueName = time();
    $imageName = $uniqueName.'.jpg';
    file_put_contents($folderName.$imageName, $image);
    return [
        $folderName.$imageName,
        $imageName,
        $uniqueName
    ];
}