<?php
$host = 'localhost';
$dbname = 'xiaomi_shop';
$username = 'root';  // 根据实际情况修改
$password = 'root';      // 根据实际情况修改

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "连接失败: " . $e->getMessage();
    die();
}
?>