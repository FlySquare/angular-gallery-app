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
    if (isBase64($_POST['file'])){
        $imageData = saveImageFromBase64($_POST['file']);
        saveToJson($imageData, $_POST);
    }
    echo json_encode([
        'data' => [
            'status' => 'success',
            'message' => 'Image uploaded successfully'
        ]
    ]);
    exit;
}
function isBase64($value) {
    if (preg_match('%^[a-zA-Z0-9/+]*={0,2}$%', $value)) {
        return true;
    }
    return false;
}
if(isset($_GET['getImages'])){
    echo json_encode([
        'data' => getJson()
    ]);
    exit;
}

function getJson(){
    return json_decode(file_get_contents('backend/images.json'));
}
function saveToJson($imageData, $otherData){
    $newData = [
        'image' => $imageData[0],
        'ownerName' => mb_strlen($otherData['ownerName']) > 0 ? $otherData['ownerName'] : 'Bilinmiyor',
        'artName' => mb_strlen($otherData['artName']) > 0 ? $otherData['artName'] : 'Bilinmiyor',
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

header("HTTP/1.1 404 Not Found");
exit;