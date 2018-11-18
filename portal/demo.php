<html>
Demo php page.
<pre>


</html>
<?php
/**
 * PHP version 7
 *
 */

echo PHP_EOL . 'And php works too.', PHP_EOL;

if (isset($_ENV['ENV'])) {
    print_r($_ENV['ENV']);
} else {
    print "No ENV variable set" . PHP_EOL;
}

echo "argv", PHP_EOL;

print_r($argv);
