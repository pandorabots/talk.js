/*
 * Copyright (c) 2014, Pandorabots Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

function Pandorabot(host, app_id, botname, user_key) {
    this.host = host;
    this.app_id = app_id;
    this.botname = botname;
    this.user_key = user_key;
    this.sessionid = "";
    this.protocol = "http";
}

Pandorabot.prototype.talk = function(input, fn) {
    var pb = this;
    var cookie = document.cookie.replace(/(?:(?:^|.*;\s*)pb_client_name\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (cookie) {
        pb.client_name = cookie;
    } else {
        var c = Math.round(Math.random() * 1000001);
        document.cookie = "pb_client_name=" + c;
    }
    var url = this.protocol + "://" + this.host + "/talk/" + this.app_id + "/" + this.botname + "?user_key=" + this.user_key + "&client_name=" + this.client_name + "&sessionid=" + this.sessionid + "&input=" + encodeURIComponent(input);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var p = JSON.parse(xhr.responseText);
            pb.sessionid = p["sessionid"];
            fn(p);
        }
    };
};
