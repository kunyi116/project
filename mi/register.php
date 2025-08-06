<?php
require_once 'config.php';

$error = '';
$success = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if ($password !== $confirm_password) {
        $error = '密码不匹配';
    } else {
        try {
            // 检查用户名是否已存在
            $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
            $stmt->execute([$username]);
            if ($stmt->rowCount() > 0) {
                $error = '用户名已存在';
            } else {
                // 密码加密
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);

                // 插入新用户
                $stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
                $stmt->execute([$username, $email, $hashed_password]);

                $success = '注册成功！即将跳转到登录页面...';
                header("Refresh: 2; URL=login.php");
            }
        } catch(PDOException $e) {
            $error = "注册失败: " . $e->getMessage();
        }
    }
}
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>注册 - 小米商城</title>
    <style>
body {
    background: linear-gradient(135deg, #fff6f1 0%, #fff 100%);
    min-height: 100vh;
    font-family: 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}

.register-container {
    max-width: 400px;
    margin: 60px auto 0 auto;
    padding: 36px 32px 28px 32px;
    background: #fff;
    box-shadow: 0 8px 32px rgba(255,103,0,0.12), 0 1.5px 6px rgba(0,0,0,0.06);
    border-radius: 18px;
    position: relative;
    z-index: 2;
}

h2 {
    text-align: center;
    color: #ff6700;
    margin-bottom: 28px;
    font-weight: 700;
    letter-spacing: 2px;
}

.form-group {
    margin-bottom: 22px;
    position: relative;
}

.form-group input {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid #efefef;
    border-radius: 7px;
    font-size: 16px;
    background: #fcfcfc;
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
    box-sizing: border-box;
    color: #444;
}

.form-group input:focus {
    border-color: #ff6700;
    box-shadow: 0 0 6px #ff67004d;
    background: #fff;
}

.register-btn {
    width: 100%;
    padding: 13px 0;
    background: linear-gradient(90deg, #ff8a26 0%, #ff6700 100%);
    color: #fff;
    border: none;
    border-radius: 7px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(255,103,0,0.14);
    transition: background 0.2s, box-shadow 0.2s;
    letter-spacing: 1px;
}

.register-btn:hover, .register-btn:active {
    background: linear-gradient(90deg, #ff6700 0%, #ff8a26 100%);
    box-shadow: 0 4px 16px rgba(255,103,0,0.17);
}

.links {
    margin-top: 22px;
    text-align: center;
}

.links a {
    color: #888;
    text-decoration: none;
    margin: 0 12px;
    font-size: 15px;
    transition: color 0.18s;
}

.links a:hover {
    color: #ff6700;
    text-decoration: underline;
}

.error-message {
    background-color: #fff2f2;
    color: #ff3e3e;
    padding: 12px 0;
    margin-bottom: 18px;
    border-radius: 5px;
    text-align: center;
    border: 1px solid #ffd4d4;
    font-size: 15px;
}

.success-message {
    background-color: #f2fff8;
    color: #19b86b;
    padding: 12px 0;
    margin-bottom: 18px;
    border-radius: 5px;
    text-align: center;
    border: 1px solid #d4ffe9;
    font-size: 15px;
}

@media (max-width: 480px) {
    .register-container {
        max-width: 94vw;
        padding: 24px 8vw 18px 8vw;
    }
    h2 {
        font-size: 20px;
    }
}
    </style>
</head>
<body>
    <div class="register-container">
        <h2>注册小米账号</h2>
        <?php if($error): ?>
            <div class="error-message"><?php echo $error; ?></div>
        <?php endif; ?>
        <?php if($success): ?>
            <div class="success-message"><?php echo $success; ?></div>
        <?php endif; ?>
        <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <div class="form-group">
                <input type="text" name="username" placeholder="请输入用户名" required>
            </div>
            <div class="form-group">
                <input type="email" name="email" placeholder="请输入邮箱" required>
            </div>
            <div class="form-group">
                <input type="password" name="password" placeholder="请输入密码" required>
            </div>
            <div class="form-group">
                <input type="password" name="confirm_password" placeholder="请确认密码" required>
            </div>
            <button type="submit" class="register-btn">注册</button>
        </form>
        <div class="links">
            <a href="login.php">已有账号？立即登录</a>
        </div>
    </div>
</body>
</html>