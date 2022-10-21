<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (isset($_POST['letteremail'])) {
        
        $email = $_POST['letteremail'];
        
        // Set API credentials and build URL
        $data_center = 'us18';
        $audience_id = 'c168b0b1da';
        $api_key = 'e0f1ff59e95b5f56d9ed2af37c770ba0-us18';
        $url = 'https://' . $data_center . '.api.mailchimp.com/3.0/lists/' . $audience_id . '/members';
                
        // Build user details array to send
        $user_details = [
            'email_address' => $email,
            'status' => 'subscribed'
        ];
        $user_details = json_encode($user_details);
                
        // Send POST request with cURL
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_USERPWD, 'newsletter:' . $api_key);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $user_details);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Content-Length: ' . strlen($user_details)
        ]);
        $result = curl_exec($ch);
        $result_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
                
        $subscribed = false;
        if ($result_code === 200) {
        	$subscribed = true;
        }
        
        $status = $subscribed;
        
        $response = [
            'status' => $status
        ];
        
        echo json_encode($response);
        
    }
    
}else{
    header('Location: /mulberry.residence');
}

?>