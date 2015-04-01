//OFFICE SPACE THEME
var css = document.createElement("style");
var enthusiasm = true;

//Colors
colorset = {};
colorset.primary = "#0f0";
colorset.secondary = "#0c0";
colorset.tertiary = "#090";
colorset.selected = "#050";
colorset.border = "#0a0";
colorset.background = "#222";
colorset.links = "#fff";

//Images
avatarImages = document.getElementsByClassName('avatar');
for(var i = 0; i < avatarImages.length; i++){
    console.log(avatarImages[i].nodeName );
    if(avatarImages[i].nodeName == 'img'){
    console.log(avatarImages[i].getAttribute('src'));
    }
}

cssItems = Array();
cssItems.push("bubble.left span.chat.ng-scope:after { content : " + (enthusiasm === true ? "' shit yeah!'" : "' mkay?'") + "; font-weight: 800; }");
cssItems.push("*{border-color:"+colorset.primary+" !important;}");
cssItems.push("body.chime{ font-family: monaco, courier, monospace;background:"+colorset.background+";}");
cssItems.push("body.chime.desktop .results .results-item a .line {border-bottom: 1px dashed "+colorset.border+";}");
cssItems.push("body.chime.desktop .navigation{border-right:1px solid "+colorset.primary+";}");
cssItems.push("body.chime.desktop .results .results-item > a .content .name{ color: "+colorset.primary+";}");
cssItems.push("body.chime.desktop .results .results-item a .content .subtext{ color: "+colorset.secondary+";}");
cssItems.push("body.chime.desktop .navigation .results .results-item a .date{ color: "+colorset.tertiary+";}");
cssItems.push("body.chime.desktop .results .results-item > a.selected{ background-color: "+colorset.selected+";}");
cssItems.push("body.chime.desktop .results .results-item > a.selected .content .name{ color: "+colorset.primary+";}");
cssItems.push("body.chime.desktop .results .results-item a .icon{ border-color: "+colorset.border+";}");
cssItems.push("body.chime.desktop *::-webkit-scrollbar{ background-color: "+colorset.border+"; }");
cssItems.push("body.chime.desktop *::-webkit-scrollbar-thumb{ background-color:rgba(0,0,0,.3);}");
cssItems.push("body.chime.desktop .right .conversation .middle .interaction bubble.right {background: transparent;}");
cssItems.push("body.chime.desktop .right .conversation .middle .interaction bubble.right a{color: "+colorset.primary+";}");
cssItems.push("body.chime.desktop .right .conversation .middle .interaction bubble.left{background: transparent;}");
cssItems.push("body.chime.desktop .right .conversation .middle .interaction bubble.left{color: "+colorset.primary+";}");
cssItems.push("body.chime.desktop .right .conversation .middle .interaction bubble.left a{color: "+colorset.links+";}");
cssItems.push("body.chime.desktop .right .conversation .middle .interaction .name{color:"+colorset.border+";}");
cssItems.push("body.chime.desktop .right .conversation .middle .interaction .avatar > img{background-color:"+colorset.secondary+";}");
cssItems.push("body.chime.desktop .right .conversation .middle .interaction .avatar .initials{ border:1px solid "+colorset.primary+"; color:"+colorset.primary+";}");
cssItems.push("body.chime.desktop .right .conversation .middle .time-break{color: "+colorset.border+";}");
cssItems.push("body.chime.desktop .right .conversation .middle .interaction .meta-interaction{color: "+colorset.border+";}");
cssItems.push("body.chime.desktop .navigation .top{background-color:"+colorset.background+"; border-bottom-color: "+colorset.primary+"; color: "+colorset.primary+";}");
cssItems.push("body.chime.desktop .right .conversation .top{background-color:"+colorset.background+"; border-bottom-color: "+colorset.primary+"; color: "+colorset.primary+";}");
cssItems.push("body.chime.desktop .right .conversation .top .with{color:"+colorset.secondary+"}");
cssItems.push("body.chime.desktop button{background:"+colorset.selected+"; color: "+colorset.primary+";}");
cssItems.push("body.chime.desktop .navigation .selector{background:"+colorset.background+"; color: "+colorset.primary+"; border-top-color: "+colorset.primary+";}");
cssItems.push("body.chime.desktop .navigation .selector ul{box-shadow: 0px 1px 1px "+colorset.secondary+";}");
cssItems.push("body.chime.desktop .navigation .selector ul > li button.selected{background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.1, "+colorset.tertiary+"), color-stop(0.9, "+colorset.selected+")); color: "+colorset.primary+"}");
cssItems.push("body.chime.desktop .right .conversation .bottom{background-color: "+colorset.background+"; border-top: 1px solid "+colorset.primary+";}");
cssItems.push("body.chime.desktop input[type=text], body.chime.desktop .messageInput{border:1px solid "+colorset.primary+";}");
cssItems.push("body.chime.desktop .right > .options{background: "+colorset.background+";}");
cssItems.push("body.chime.desktop .right > .options li.option{background:#444; color: "+colorset.primary+";}");
cssItems.push("body.chime.desktop .right > .options li.option .subject{color: "+colorset.border+";}");
cssItems.push("body.chime.desktop .right > .options .members.results{background-color: "+colorset.background+";}");
cssItems.push("body.chime.desktop .right > .options .members.results .leave{ color: "+colorset.selected+";}");
cssItems.push("body.chime.desktop .right > .options .sections .section .header, body.chime.desktop .right > .options .sections .section{border-bottom: 1px solid "+colorset.primary+"; color: "+colorset.selected+";}");
cssItems.push("body.chime.desktop .right > .options .add .addButton{color: "+colorset.primary+";}");
cssItems.push("body.chime.desktop .right > .options .add .addButton .icon .initials{color: "+colorset.primary+"; border-color:"+colorset.primary+";}");
cssItems.push("body.chime.desktop .right > .options .add .addButton .icon .initials .svg{stroke:"+colorset.primary+" !important;}");





css.innerHTML = cssItems.join(" ");
document.body.appendChild(css);
