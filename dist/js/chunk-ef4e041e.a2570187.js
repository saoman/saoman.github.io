(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef4e041e","chunk-72f37568"],{"0320":function(t,e,i){"use strict";var n=i("bcb5"),o=i.n(n);o.a},"20d6":function(t,e,i){"use strict";var n=i("5ca1"),o=i("0a49")(6),a="findIndex",c=!0;a in[]&&Array(1)[a](function(){c=!1}),n(n.P+n.F*c,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(a)},"33c2":function(t,e,i){"use strict";var n=i("672d"),o=i.n(n);o.a},"3acb":function(t,e,i){"use strict";i("20d6"),i("f751"),i("e17f");var n=i("2241"),o=(i("aef6"),i("a481"),i("e7e5"),i("d399")),a=i("2b0e"),c=i("4db0"),s=i("d225"),r=i("b0b4"),l=i("c7a1"),d=i("db49"),m=i("7734"),u=i("5f9c"),p=u["a"].esZmtH5,f=function(t){t.globalUid=p.globalUid,t.dataSrc="H5",t.registerTime=p.registerTime,t.access_token=p.access_token,t.simt_token=p.access_token,t.userId=p.userId||"1"},g=function(){function t(){Object(s["a"])(this,t)}return Object(r["a"])(t,[{key:"getCommunityInfo",value:function(t){f(t);var e=d["h"]+"cmt/api/community/getCommunityInfo";return Object(l["a"])(e,t)}},{key:"getCommunityDynamicNoteList",value:function(t){f(t);var e=d["h"]+"cmt/api/noteEntity/getCommunityDynamicNoteList";return Object(l["a"])(e,t)}},{key:"getCommunityGoodNoteList",value:function(t){f(t);var e=d["h"]+"cmt/api/noteEntity/getCommunityGoodNoteList";return Object(l["a"])(e,t)}},{key:"getCommunityTopicList",value:function(t){f(t);var e=d["h"]+"cmt/api/noteEntity/getCommunityTopicNoteList";return Object(l["a"])(e,t)}},{key:"getHotTopicList",value:function(t){f(t);var e=d["h"]+"cmt/api/topicInfo/queryHotTopic";return Object(l["a"])(e,t)}},{key:"getAnswerList",value:function(t){f(t);var e=d["h"]+"cmt/api/answer/list";return Object(l["a"])(e,t)}},{key:"getNoteInfo",value:function(t){f(t);var e=Object(m["a"])("v_");e&&(t.v_=e);var i=d["h"]+"cmt/api/noteEntity/getNoteDetailInfo";return Object(l["a"])(i,t)}},{key:"getQuestionInfo",value:function(t){f(t);var e=d["h"]+"cmt/api/question/info";return Object(l["a"])(e,t)}},{key:"getAnswerInfo",value:function(t){f(t);var e=Object(m["a"])("v_");e&&(t.v_=e);var i=d["h"]+"cmt/api/answer/info";return Object(l["a"])(i,t)}},{key:"getNoteCommentList",value:function(t){f(t);var e=d["h"]+"ctt/api/comment/select/note/comment/list";return Object(l["c"])(e,t)}},{key:"getNoteCommentHotList",value:function(t){f(t);var e=d["h"]+"ctt/api/comment/select/note/comment/hot/list";return Object(l["c"])(e,t)}},{key:"getTopicInfo",value:function(t){f(t);var e=d["h"]+"cmt/api/topicInfo/getTopicInfo/pbcdhe";return Object(l["a"])(e,t)}},{key:"getTopicNewNoteList",value:function(t){f(t);var e=d["h"]+"cmt/api/topicInfo/queryTopicNewNoteInfo/pbcdhe";return Object(l["a"])(e,t)}},{key:"getTopicHotNoteList",value:function(t){f(t);var e=d["h"]+"cmt/api/topicInfo/queryTopicHotNoteInfo/pbcdhe";return Object(l["a"])(e,t)}},{key:"saveComment",value:function(t){f(t);var e=d["h"]+"cmt/api/noteEntity/saveComment";return Object(l["c"])(e,t)}},{key:"setCommentLike",value:function(t){f(t);var e=d["h"]+"ctt/api/comment/add/comment/like";return Object(l["c"])(e,t)}},{key:"setNoteLike",value:function(t){f(t);var e=d["h"]+"cmt/api/noteEntity/setNoteLike";return Object(l["c"])(e,t)}},{key:"getCommentInfo",value:function(t){f(t);var e=d["h"]+"ctt/api/comment/select/note/comment/info";return Object(l["a"])(e,t)}},{key:"getCommentRelayList",value:function(t){var e=d["h"]+"ctt/api/comment/select/note/comment/reply/list";return Object(l["c"])(e,t)}}]),t}(),h=new g;i.d(e,"b",function(){return I}),i.d(e,"a",function(){return j}),i.d(e,"c",function(){return N});var v=u["a"].esZmtH5,w=function(t){},I=a["default"].observable({replyShow:!1,wxShareShow:!1,get appUserid(){var t=v.userId;return t||"1"},circleId:1,circleInfo:{},circleHotNotes:{},circleGoodNotes:{},hotTopics:{},circleTopics:{},circleAnswers:{},cHotPage:{loading:!1,finished:!1,page:1,total:1,limit:5},cGoodPage:{loading:!1,finished:!1,page:1,total:1,limit:5},cTopicPage:{loading:!1,finished:!1,page:1,total:1,limit:10},cAnswerPage:{loading:!1,finished:!1,page:1,total:1,limit:5},topicName:"",topicId:"",topicInfo:{},topicNewNotes:{},topicHotNotes:{},topicNewPage:{loading:!1,finished:!1,page:1,total:1,limit:5},topicHotPage:{loading:!1,finished:!1,page:1,total:1,limit:5},noteId:1,noteInfo:{},noteComments:{},notePage:{loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0},answerId:0,answerInfo:{},answerPage:{loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0},questionId:0,questionInfo:{},questionPage:{loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0},comment:{id:"",replyUserId:"",commentUserId:"",comment:"",commentType:"",commentId:"",commentPid:"",appUserid:"",globalUid:"",dataSrc:"",registerTime:""},commentNickName:""});function C(){I.noteInfo={},I.noteComments={},I.notePage={loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0}}function b(){I.qusetionInfo={},I.noteComments={},I.notePage={loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0}}function y(){I.answerInfo={},I.noteComments={},I.notePage={loading:!1,finished:!1,page:1,total:1,limit:5,createTime:0}}var j={toggelReply:function(t){I.replyShow=void 0!=t?t:!I.replyShow},wxShareShow:function(){I.wxShareShow=!0},wxShareHide:function(){I.wxShareShow=!1},initCircle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;I.circleId=t,t||Object(o["a"])("无效的圈子id"),h.getCommunityInfo({id:t,appUserid:I.appUserid}).then(function(t){200==t.code&&(I.circleInfo=t.data.result)}),h.getHotTopicList({communityId:t,appUserid:I.appUserid}).then(function(t){I.hotTopics=t.data.result})},loadCircleGoodNotes:function(){var t=I.cGoodPage,e={communityId:I.circleId,page:t.page,limit:t.limit,appUserid:I.appUserid};h.getCommunityGoodNoteList(e).then(function(e){console.log("page",e.data.page),e.data.page<=1?I.circleGoodNotes=e.data.result:I.circleGoodNotes=I.circleGoodNotes.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},loadCircleHotNotes:function(){var t=I.cHotPage,e={communityId:I.circleId,page:t.page,limit:t.limit,appUserid:I.appUserid};h.getCommunityDynamicNoteList(e).then(function(e){console.log("page",e.data.page),e.data.page<=1?I.circleHotNotes=e.data.result:I.circleHotNotes=I.circleHotNotes.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},loadCircleTopics:function(){var t=I.cTopicPage,e={communityId:I.circleId,page:t.page,limit:t.limit,appUserid:I.appUserid};h.getCommunityTopicList(e).then(function(e){console.log("page",e.data.page),e.data.page<=1?I.circleTopics=e.data.result:I.circleTopics=I.circleTopics.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},loadCircleAnswers:function(){var t=I.cAnswerPage,e={noteId:I.questionId,page:t.page,limit:t.limit,userId:I.appUserid};h.getAnswerList(e).then(function(e){if(0!=e.tag)return t.loading=!1,void(t.finished=!0);console.log("page",e.data.page),e.data.page<=1?I.circleAnswers=e.data.result:I.circleAnswers=I.circleAnswers.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},initTopic:function(t,e){var i={};if(t.topicName)i.topicName=t.topicName;else{if(!t.topicId)return void Object(o["a"])("无效的话题");i.topicId=parseInt(t.topicId)}h.getTopicInfo(i).then(function(t){0==t.tag?(I.topicInfo=t.data.result,I.topicId=t.data.result.topicId,I.topicName=t.data.result.topicName.replace(/#/g,"")):e&&e(t)})},loadTopicHotNotes:function(){var t=I.topicHotPage,e={topicName:I.topicName,page:t.page,limit:t.limit,appUserid:I.appUserid};h.getTopicHotNoteList(e).then(function(e){console.log("page",e.data.page),e.data.page<=1?I.topicHotNotes=e.data.result:I.topicHotNotes=I.topicHotNotes.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},loadTopicNewNotes:function(){var t=I.topicNewPage,e={topicName:I.topicName,page:t.page,limit:t.limit,appUserid:I.appUserid};h.getTopicNewNoteList(e).then(function(e){console.log("page",e.data.page),e.data.page<=1?I.topicNewNotes=e.data.result:I.topicNewNotes=I.topicNewNotes.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},initNote:function(t,e,i){var n=this;C(),I.noteId=t,t||Object(o["a"])("无效的帖子id"),h.getNoteInfo({id:t,appUserid:I.appUserid,is_wv:i?1:0}).then(function(t){if(0==t.tag){var i=t.data.result;i.content=n.removeBr(i.content),n.addIsArticle(i),i.isDelete||i.isHide?e&&e(i):I.noteInfo=i}else e&&e(t)})},addIsArticle:function(t){if(-1==location.href.indexOf("isArticle=")){var e="article"==t.mediaType?1:0,i="";i=-1!=location.href.indexOf("?")?location.href+"&isArticle="+e:location.href+"?isArticle="+e,history.replaceState("","",i)}},loadComments:function(){var t=I.notePage,e={contentId:I.noteId,contentTable:"SNF",page:t.page,limit:t.limit,appUserid:I.appUserid};h.getNoteCommentList(e).then(function(e){console.log("page",e.data.page),e.data.page<=1?I.noteComments=e.data.result:I.noteComments=I.noteComments.concat(e.data.result),t.page=e.data.page+1,t.total=e.data.total,t.loading=!1,e.data.page>=e.data.total/e.data.limit&&(t.finished=!0)})},initQuestion:function(t,e){b(),I.questionId=t,t||Object(o["a"])("无效的问答id"),h.getQuestionInfo({noteId:t,userId:I.appUserid}).then(function(t){if(0==t.tag){var i=t.data.result;i.isDelete||i.isHide?e&&e(i):I.questionInfo=i}else e&&e(t)})},initAnswer:function(t,e,i){var n=this;y(),I.answerId=t,I.noteId=t,t||Object(o["a"])("无效的回答id"),h.getAnswerInfo({answerId:t,userId:I.appUserid,is_wv:i?1:0}).then(function(t){if(0==t.tag){var o=t.data.result;o.isDelete||o.isHide?e&&e(o):(o.content=n.removeBr(o.content),I.answerInfo=o,i||n.initQuestion(I.answerInfo.parentId))}else e&&e(t)})},removeBr:function(t){if(!t)return"";var e="<p><br></p >";return t.endsWith(e)?t.substring(0,t.length-e.length):t},likeNote:function(t){if(v.registerTime){t.isLike=1;var e={id:t.id,appUserid:t.appUserid,likeSrc:"H5",userId:v.userId,dataSrc:"H5"};h.setNoteLike(e).then(function(e){0==e.tag&&t.likeCount++})}else n["a"].confirm({confirmButtonText:"立即登录",cancelButtonText:"稍后登录",closeOnClickOverlay:!0,title:"是否立即登录姿美汇？"}).then(function(){Object(c["i"])()})},likeComment:function(t){if(v.registerTime){t.userLike=!0;var e={src:"H5",contentId:t.id,userId:v.userId,referenceUserId:t.referenceUserId};h.setCommentLike(e).then(function(e){0==e.tag&&t.likeCount++})}else n["a"].confirm({confirmButtonText:"立即登录",cancelButtonText:"稍后登录",closeOnClickOverlay:!0,title:"是否立即登录姿美汇？"}).then(function(){Object(c["i"])()})},goCommentFromContent:function(t){var e={id:t.id,replyUserId:t.appUserid,commentUserId:I.appUserid,commentType:0,commentPid:0,appUserid:t.appUserid};w(e),console.log(t),I.comment=Object.assign(I.comment,e),I.commentNickName="说点什么...",this.goComment()},goCommentFromComment:function(t,e){var i={id:t.contentId,replyUserId:t.userId,commentUserId:I.appUserid,commentType:1,commentId:t.id,commentPid:1===e?t.id:t.pid,appUserid:t.referenceUserId};w(i),I.comment=Object.assign(I.comment,i),I.commentNickName='回复"'.concat(t.nickName,'"'),this.goComment()},goComment:function(){v.registerTime?I.replyShow=!0:n["a"].confirm({confirmButtonText:"立即登录",cancelButtonText:"稍后登录",closeOnClickOverlay:!0,title:"是否立即登录姿美汇？"}).then(function(){Object(c["i"])()})},saveComment:function(){var t=this;h.saveComment(I.comment).then(function(e){0==e.tag&&(Object(o["a"])("评论成功"),I.noteInfo.commentCount||I.noteInfo.commentCount++,I.answerInfo.commentCount||I.answerInfo.commentCount++,I.questionInfo.commentCount||I.questionInfo.commentCount++,t.getCommentInfo(e.data.result.commentId))})},getCommentInfo:function(t){h.getCommentInfo({commentId:t}).then(function(t){if(0==t.tag){var e=t.data.result,i=function(t){return e.id===t.id},n=I.noteComments.findIndex(i);if(-1===n)I.noteComments.unshift(e);else{var o=I.noteComments[n].userLike;I.noteComments.splice(n,1,e),I.noteComments[n].userLike=o}}})},getCommentRelayList:function(t){var e=t.childComment.list[t.childComment.limit-1],i={page:1,limit:10,pid:t.id,contentTable:"SNF",id:e.id};h.getCommentRelayList(i).then(function(e){0==e.tag&&(t.childComment.list=t.childComment.list.concat(e.data.result))})}},N={initCircle:function(){Object(c["h"])()&&setTimeout(function(){var t=I.circleInfo,e={imgUrl:t.mainImgUrl,desc:t.communityDesc.substring(0,20)||"发现一个超有意思圈子，快来加入吧！",title:t.communityName,link:window.location.href};Object(c["b"])(e)},1e3)},initTopic:function(){Object(c["h"])()&&setTimeout(function(){var t=I.topicInfo,e={imgUrl:t.mainImgUrl,desc:t.content.substring(0,20)||"发现一个有意思的话题，快来参与讨论吧！",title:"#"+t.topicName+"#",link:window.location.href};Object(c["b"])(e)},1e3)},initNote:function(){Object(c["h"])()&&setTimeout(function(){var t=I.noteInfo,e={imgUrl:t.articleCoverImgUrl||"https://mtmall.meetao.com/img/logo100.png",desc:t.content,title:t.topicName||"快来看看我在姿美汇发现了什么",link:window.location.href};Object(c["b"])(e)},1e3)},initAnswer:function(){Object(c["h"])()&&setTimeout(function(){var t=I.answerInfo,e=t.media&&t.media.length>0?t.media[0].imageUrl:"https://mtmall.meetao.com/img/logo100.png",i={imgUrl:e,desc:t.articleExtractContent,title:I.questionInfo.articleTitle||"快来看看我在姿美汇发现了什么",link:window.location.href};Object(c["b"])(i)},1e3)},initQuestion:function(){Object(c["h"])()&&setTimeout(function(){var t=I.questionInfo,e=t.media&&t.media.length>0?t.media[0].imageUrl:"https://mtmall.meetao.com/img/logo100.png",i={imgUrl:e,desc:t.articleTitle,title:"".concat(t.answerCount,"个回答"),link:window.location.href};Object(c["b"])(i)},1500)}}},"672d":function(t,e,i){},"77ca":function(t,e,i){},"793c":function(t,e,i){"use strict";i.d(e,"c",function(){return o}),i.d(e,"d",function(){return a}),i.d(e,"a",function(){return c}),i.d(e,"b",function(){return s});i("b54a"),i("a481"),i("097d"),i("e7e5"),i("d399"),i("c0e9");var n=i("2fb4");function o(t){var e={imgUrl:t.imgUrl||"",desc:t.desc||"描述",title:t.title||"标题",link:t.link||window.location.href};n["a"].callhandler("share.share",{type:"url",target:"wx",data:e})}function a(t){var e={imgUrl:t.imgUrl||"",desc:t.desc||"描述",title:t.title||"标题",link:t.link||window.location.href};n["a"].callhandler("share.share",{type:"url",target:"wx_circle",data:e})}function c(t,e){n["a"].callhandler("nativeui.jump",{type:t,data:{id:e}})}function s(t){n["a"].callhandler("play.video",{data:t})}},a187:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"user"},[n("div",{staticClass:"user-avatar"},[n("img",{attrs:{src:t._f("thumbnail")(t.answer.appUserHeadImg,48,48,i("ac9c"))}})]),n("span",{staticClass:"user-name"},[t._v(t._s(t.answer.appUserName))]),n("span",{staticClass:"user-time"},[t._v(t._s(t.answer.createTime?t.answer.createTime.substr(0,10):""))])]),t.simpleModel?t._e():n("div",{staticClass:"question"},[n("div",{staticClass:"question-content"},[t._v(t._s(t.question.articleTitle||"问题为空"))]),n("div",{staticClass:"question-answer",on:{click:t.goQuestion}},[n("span",{staticClass:"text"},[t._v("还有"+t._s(t.question.answerCount-1||"0")+"个优质回答")]),n("van-icon",{staticClass:"arrow",attrs:{name:"arrow"}})],1),n("div",{staticClass:"line"})]),t.simpleModel?[n("div",{staticClass:"content"},[n("div",{staticClass:"word-simple",domProps:{textContent:t._s(t.answer.articleExtractContent)},on:{click:function(e){return t.onContentClick()}}})]),"answer"==t.answer.mediaType?n("div",{staticClass:"images",class:t.imagesClass},[n("Photoswipe",{staticClass:"item"},t._l(t.imageList,function(t,e){return n("img",{directives:[{name:"pswp",rawName:"v-pswp",value:t,expression:"item"}],key:e,attrs:{src:t.msrc}})}),0)],1):t._e()]:n("NoteContentArticle",{attrs:{note:t.answer}}),n("div",{staticClass:"operate"},[n("div",{staticClass:"operate-item"},[t.answer.isLike?n("span",{staticClass:"operate-item-btn iconfont icon-dianzandianliang checked"}):n("span",{staticClass:"operate-item-btn iconfont icon-dianzan",on:{click:function(e){return t.like(t.answer)}}}),n("span",{staticClass:"operate-item-dis"},[t._v(t._s(t._f("formatNum")(t.answer.likeCount)))])]),n("div",{staticClass:"operate-item"},[n("span",{staticClass:"operate-item-btn iconfont icon-pinglun",on:{click:function(e){return t.onCommentClick()}}}),n("span",{staticClass:"operate-item-dis"},[t._v(t._s(t._f("formatNum")(t.answer.commentCount)))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.simpleModel,expression:"!simpleModel"}],staticClass:"operate-item",on:{click:t.wxShareShow}},[n("span",{staticClass:"operate-item-btn iconfont icon-fenxiang"}),n("span",{staticClass:"operate-item-dis"},[t._v(t._s(t._f("formatNum")(t.answer.shareCount)))])])]),t.simpleModel?n("div",{staticClass:"line10"}):t._e()],2)},o=[],a=i("4db0"),c=i("3acb"),s=i("b4c5"),r=i("7734"),l={name:"",data:function(){return{isfollow:!1}},props:{simpleModel:{type:Boolean,default:!0},question:{type:Object,default:function(){}},answer:{type:Object,default:function(){}}},watch:{},components:{NoteContentArticle:s["default"]},created:function(){this},mounted:function(){},computed:{imageList:function(){return this.answer.media.map(function(t){return{src:t.imageUrl,msrc:Object(r["f"])(t.imageUrl),size:"".concat(t.width,"x").concat(t.height)}})},imagesClass:function(){var t=this.answer.media.length;return 1===t?["one"]:4===t||2===t?["four"]:["nine"]}},methods:{onContentClick:function(){this.simpleModel&&this.goDetail()},onCommentClick:function(){this.simpleModel?this.goDetail():c["a"].goCommentFromContent(this.answer)},goDetail:function(){this.$router.push({path:"/answerDetail",query:{id:this.answer.id}})},goTopic:function(t){this.$router.push({path:"/topic",query:{topicId:t||this.answer.topicId}}),this.$router.go(0)},goQuestion:function(){this.$router.push({path:"/question",query:{id:this.question.id}})},follow:function(){Object(a["a"])()},like:function(t){c["a"].likeNote(t)},wxShareShow:function(){c["a"].wxShareShow()},imagePreview:function(t){}}},d=l,m=(i("0320"),i("be4f"),i("2877")),u=Object(m["a"])(d,n,o,!1,null,"50c31add",null);e["default"]=u.exports},ac9c:function(t,e){t.exports="data:image/png;base64,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"},aef6:function(t,e,i){"use strict";var n=i("5ca1"),o=i("9def"),a=i("d2c8"),c="endsWith",s=""[c];n(n.P+n.F*i("5147")(c),"String",{endsWith:function(t){var e=a(this,t,c),i=arguments.length>1?arguments[1]:void 0,n=o(e.length),r=void 0===i?n:Math.min(o(i),n),l=String(t);return s?s.call(e,l,r):e.slice(r-l.length,r)===l}})},b4c5:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"article-content",domProps:{innerHTML:t._s(t.note.content||"暂无内容")}})])},o=[],a=i("db49"),c=i("793c"),s=i("7734"),r=1,l=null,d={data:function(){return{}},props:{simpleModel:{type:Boolean,default:!1},note:{type:Object,default:function(){}}},created:function(){},mounted:function(){window.jump=this.jump,window.picture=this.picture,window.playVideo=this.playVideo,this.$nextTick(function(){Object(s["b"])("//imgcache.qq.com/open/qcloud/video/vcplayer/TcPlayer-2.3.2.js",function(){})})},methods:{jump:function(t,e){if(1==this.$route.query.isApp)console.log(t+"  "+e),Object(c["a"])(t,e);else switch(t){case"goods":location.href=a["g"]+"productDetails.html?isFx=1&productId="+e;break;case"groups":this.$router.push({path:"/circle",query:{communityId:e}});break;case"article":this.$router.push({path:"/noteDetail?"+new Date,query:{id:e}}),this.$router.go(0);break;default:alert("不支持的跳转类型")}},picture:function(){},playVideo:function(t,e){l&&(l.destroy(),l=null);var i=e.parentNode,n=i.getAttribute("srcwidth"),o=i.getAttribute("srcheight"),a=i.getElementsByClassName("tcplayer")[0],s=i.getElementsByClassName("poster")[0],d=i.getElementsByClassName("poster-box")[0];if(a.id="tc_"+r++,1==this.$route.query.isApp)Object(c["b"])({video:i.dataset.video,poster:s.currentSrc,width:n,height:o});else{d.style.zIndex=-100,l=new TcPlayer(a.id,{mp4:i.dataset.video,width:n,height:o,listener:function(t){"fullscreen"==t.type&&(t.detail.isFullscreen||l&&(l.destroy(),l=null,d.style.zIndex=1))}});var m=i.getElementsByTagName("video")[0];m.setAttribute("x5-video-player-type","h5-page"),l.play()}}}},m=d,u=(i("33c2"),i("2877")),p=Object(u["a"])(m,n,o,!1,null,"09d8e6fc",null);e["default"]=p.exports},bcb5:function(t,e,i){},be4f:function(t,e,i){"use strict";var n=i("77ca"),o=i.n(n);o.a}}]);