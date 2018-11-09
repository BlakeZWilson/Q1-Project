if (self.CavalryLogger) { CavalryLogger.start_js(["lhmBI"]); }

__d("LiveChatPluginAlerts",["fbt","Arbiter","LiveChatPluginConstants","LiveChatPluginLocalStorageUtil","MercuryIDs","MercuryThreadActions","MercuryThreadInformer","MessengerState.bs","Sound","UnverifiedXD","UserActivity"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MercuryThreadActions").get();a={init:function(a,c,d,e,f,g){this._isMuted=f,this._pageID=b("MercuryIDs").getParticipantIDFromUserID(c),this._pageName=d,this._soundURLs=e,this._viewerFBID=a,this._threadID=b("MercuryIDs").getThreadIDFromUserID(c),this._threadInformer=b("MercuryThreadInformer").getForFBID(a),this._unreadCount=g,this._viewerID=b("MercuryIDs").getParticipantIDFromUserID(a),this._setupSubscriptions()},_setupSubscriptions:function(){__p&&__p();this._threadInformer.subscribe("messages-received",function(a,c){__p&&__p();for(var d in c){a=d===this._threadID?c[d][0]:null;if(a===null)continue;if(a.author!==this._pageID)break;this._messageReceived(a);b("UserActivity").isActive(1e3)&&b("UserActivity").isOnTab()&&h.markRead(this._threadID);break}}.bind(this)),this._threadInformer.listen(this._threadID,function(a){b("MessengerState.bs").getThreadMeta(this._viewerFBID,a,function(b){this._isMuted=b.mute_until!=null,a=b.unread_count,a!==this._unreadCount&&(b.snippet_sender===this._viewerID?this._unreadCount=0:(this._unreadCount=a,this._informUnreadCount(),this._updatePageTitle(this._pageName)))}.bind(this),null)}.bind(this)),b("Arbiter").subscribe(b("LiveChatPluginConstants").RESET_BADGING,function(a){b("LiveChatPluginLocalStorageUtil").getChatStarted()&&this._unreadCount>0&&(this._unreadCount=0,h.markRead(this._threadID),this._informUnreadCount())}.bind(this))},_playSound:function(a){b("Sound").play([this._soundURLs.get("sound.notif_ogg_url"),this._soundURLs.get("sound.notif_mp3_url")],a,!1)},_messageReceived:function(a){this._shouldAlert()&&!this._isMuted&&this._playSound(a.timestamp)},_shouldAlert:function(){return(b("LiveChatPluginLocalStorageUtil").getIsDialogHidden()||!b("UserActivity").isOnTab())&&b("LiveChatPluginLocalStorageUtil").getChatStarted()},_updatePageTitle:function(a){!b("UserActivity").isOnTab()&&this._unreadCount>0&&b("LiveChatPluginLocalStorageUtil").getChatStarted()?(b("UnverifiedXD").send({type:"liveChatPluginUpdatePageTitle",titleText:g._("{pageName} messaged you",[g._param("pageName",a)]).toString()}),b("UserActivity").subscribeOnce(function(){this._stopBlinking()}.bind(this))):this._unreadCount===0&&this._stopBlinking()},_stopBlinking:function(){b("UnverifiedXD").send({type:"liveChatPluginUpdatePageTitle"})},_informUnreadCount:function(){b("Arbiter").inform(b("LiveChatPluginConstants").UNREAD_COUNT_UPDATE,this._unreadCount),b("UnverifiedXD").send({type:"liveChatPluginUpdateShadow",resetShadow:this._unreadCount===0})}};e.exports=a}),null);