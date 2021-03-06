<?php

namespace Qiniu\Http;

/**
 * HTTP response Object
 */
final class Response
{
    public $statusCode;
    public $headers;
    public $body;
    public $error;
    private $jsonData;
    public $duration;

    /** @var array Mapping of status codes to reason phrases */
    private static $statusTexts = array(
        100 => 'Continue',
        101 => 'Switching Protocols',
        102 => 'Processing',
        200 => 'OK',
        201 => 'Created',
        202 => 'Accepted',
        203 => 'Non-Authoritative Information',
        204 => 'No Content',
        205 => 'Reset Content',
        206 => 'Partial Content',
        207 => 'Multi-Status',
        208 => 'Already Reported',
        226 => 'IM Used',
        300 => 'Multiple Choices',
        301 => 'Moved Permanently',
        302 => 'Found',
        303 => 'See Other',
        304 => 'Not Modified',
        305 => 'Use Proxy',
        307 => 'Temporary Redirect',
        308 => 'Permanent Redirect',
        400 => 'Bad Request',
        401 => 'Unauthorized',
        402 => 'Payment Required',
        403 => 'Forbidden',
        404 => 'Not Found',
        405 => 'Method Not Allowed',
        406 => 'Not Acceptable',
        407 => 'Proxy Authentication Required',
        408 => 'Request Timeout',
        409 => 'Conflict',
        410 => 'Gone',
        411 => 'Length Required',
        412 => 'Precondition Failed',
        413 => 'Request Entity Too Large',
        414 => 'Request-URI Too Long',
        415 => 'Unsupported Media Type',
        416 => 'Requested Range Not Satisfiable',
        417 => 'Expectation Failed',
        422 => 'Unprocessable Entity',
        423 => 'Locked',
        424 => 'Failed Dependency',
        425 => 'Reserved for WebDAV advanced collections expired proposal',
        426 => 'Upgrade required',
        428 => 'Precondition Required',
        429 => 'Too Many Requests',
        431 => 'Request Header Fields Too Large',
        500 => 'Internal Server Error',
        501 => 'Not Implemented',
        502 => 'Bad Gateway',
        503 => 'Service Unavailable',
        504 => 'Gateway Timeout',
        505 => 'HTTP Version Not Supported',
        506 => 'Variant Also Negotiates (Experimental)',
        507 => 'Insufficient Storage',
        508 => 'Loop Detected',
        510 => 'Not Extended',
        511 => 'Network Authentication Required',
    );

    public function __construct($code, $duration, array $headers = array(), $body = null, $error = null)
    {
        $this->statusCode = $code;
        $this->duration = $duration;
        $this->headers = $headers;
        $this->body = $body;
        $this->error = $error;
        $this->jsonData = null;
<<<<<<< HEAD
        if ($error !== null) {
            return;
        }

        if ($body === null) {
=======
        if ($error != null) {
            return;
        }

        if ($body == null) {
>>>>>>> 705d3246d2b96a483f40bf87e0cc15b93106fad1
            if ($code >= 400) {
                $this->error = self::$statusTexts[$code];
            }
            return;
        }
        if (self::isJson($headers)) {
            try {
                $jsonData = self::bodyJson($body);
                if ($code >=400) {
<<<<<<< HEAD
                    $this->error = $body;
                    if ($jsonData['error'] !== null) {
                        $this->error = $jsonData['error'];
=======
                    if ($jsonData['error'] != null) {
                        $this->error = $jsonData['error'];
                    } else {
                        $this->error = $body;
>>>>>>> 705d3246d2b96a483f40bf87e0cc15b93106fad1
                    }
                }
                $this->jsonData = $jsonData;
            } catch (\InvalidArgumentException $e) {
<<<<<<< HEAD
                $this->error = $body;
                if ($code >= 200 && $code < 300) {
                    $this->error = $e->getMessage();
=======
                if ($code >= 200 && $code < 300) {
                    $this->error = $e->getMessage();
                } else {
                    $this->error = $body;
>>>>>>> 705d3246d2b96a483f40bf87e0cc15b93106fad1
                }
            }
        } elseif ($code >=400) {
            $this->error = $body;
        }
        return;
    }

    public function json()
    {
        return $this->jsonData;
    }

    private static function bodyJson($body, array $config = array())
    {
        return \Qiniu\json_decode(
            (string) $body,
<<<<<<< HEAD
            array_key_exists('object', $config) ? !$config['object'] : true,
            512,
            array_key_exists('big_int_strings', $config) ? JSON_BIGINT_AS_STRING : 0
=======
            isset($config['object']) ? !$config['object'] : true,
            512,
            isset($config['big_int_strings']) ? JSON_BIGINT_AS_STRING : 0
>>>>>>> 705d3246d2b96a483f40bf87e0cc15b93106fad1
        );
    }

    public function xVia()
    {
        $via = $this->headers['X-Via'];
<<<<<<< HEAD
        if ($via === null) {
            $via = $this->headers['X-Px'];
        }
        if ($via === null) {
=======
        if ($via == null) {
            $via = $this->headers['X-Px'];
        }
        if ($via == null) {
>>>>>>> 705d3246d2b96a483f40bf87e0cc15b93106fad1
            $via = $this->headers['Fw-Via'];
        }
        return $via;
    }

    public function xLog()
    {
        return $this->headers['X-Log'];
    }

    public function xReqId()
    {
        return $this->headers['X-Reqid'];
    }

    public function ok()
    {
<<<<<<< HEAD
        return $this->statusCode >= 200 && $this->statusCode < 300 && $this->error === null;
=======
        return $this->statusCode >= 200 && $this->statusCode < 300 && $this->error == null;
>>>>>>> 705d3246d2b96a483f40bf87e0cc15b93106fad1
    }

    public function needRetry()
    {
        $code = $this->statusCode;
<<<<<<< HEAD
        if ($code< 0 || ($code / 100 === 5 and $code !== 579) || $code === 996) {
=======
        if ($code< 0 || ($code / 100 == 5 and $code != 579) || $code == 996) {
>>>>>>> 705d3246d2b96a483f40bf87e0cc15b93106fad1
            return true;
        }
    }

    private static function isJson($headers)
    {
<<<<<<< HEAD
        return array_key_exists('Content-Type', $headers) &&
=======
        return isset($headers['Content-Type']) &&
>>>>>>> 705d3246d2b96a483f40bf87e0cc15b93106fad1
        strpos($headers['Content-Type'], 'application/json') === 0;
    }
}
