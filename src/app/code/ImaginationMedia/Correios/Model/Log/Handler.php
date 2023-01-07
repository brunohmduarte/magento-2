<?php
namespace ImaginationMedia\Correios\Model\Log;

use Monolog\Logger;

class Handler extends \Magento\Framework\Logger\Handler\Base
{
    protected $fileName = '/var/log/imaginationmedia_correios.log';
    protected $loggerType = Logger::ALERT;
}