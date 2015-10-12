$(function(){
    //初始websocket
    initWebSocket();
})

/**
 * 初始化web socket
 *
 */
function initWebSocket() {
    WEB_SOCKET_SWF_LOCATION = "//cdn.bootcss.com/web-socket-js/1.0.0/WebSocketMain.swf";
    ws = new WebSocket("ws://localhost:"+socket_prot+"/");

    /**
     * 连接
     *
     */
    ws.onopen = function() {

    };

    /**
     * 接受消息
     *
     * @param e
     */
    ws.onmessage = function(e) {
        var _data = $.parseJSON(e.data);

        if(_data.cmd == 'login'){
            $.post(save_user_socket, {'fd' : _data.fd}, function(data){})

        }else if(_data.cmd == 'message'){
            console.log(_data);
            showMessage(_data);
        }
    };

    /**
     * 关闭
     *
     */
    ws.onclose = function() {

    };

    /**
     * 发生错误
     *
     */
    ws.onerror = function() {
        layer.alert("<?php echo trans('response.connet_web_socket_error');?>", {
            area:[],
        });
    };
}

function showMessage(data){
    //聊天模版
    var keys = $('.xxim_chatlist li:first-child').attr('type') + $('.layim_move').attr('data-id');

    imarea = $('#layim_area'+ keys);

    //聊天模版
    setTimeout(function(){
        imarea.append(logHtml({
            time: data.time,
            name: data.name,
            face: data.face,
            content: data.content
        }));
        imarea.scrollTop(imarea[0].scrollHeight);
    }, 500);
}

/**
 * 聊天模版
 *
 * @param param
 * @param type
 * @returns {string}
 */
function logHtml(param, type){
    return '<li class="'+ (type === 'me' ? 'layim_chateme' : '') +'">'
        +'<div class="layim_chatuser">'
        + function(){
            if(type === 'me'){
                return '<span class="layim_chattime">'+ param.time +'</span>'
                    +'<span class="layim_chatname">'+ param.name +'</span>'
                    +'<img src="'+ param.face +'" >';
            } else {
                return '<img src="'+ param.face +'" >'
                    +'<span class="layim_chatname">'+ param.name +'</span>'
                    +'<span class="layim_chattime">'+ param.time +'</span>';
            }
        }()
        +'</div>'
        +'<div class="layim_chatsay">'+ param.content +'<em class="layim_zero"></em></div>'
        +'</li>';
}