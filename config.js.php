<?php
header("Content-Type: application/javascript");
$mapboxKey = getenv('MAPBOX_API_KEY') ?: '';
echo "window.ENV = { MAPBOX_API_KEY: '" . htmlspecialchars($mapboxKey) . "' };";
?>
