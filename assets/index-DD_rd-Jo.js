(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{constructor(e){this.canvas=e,this.ctx=e.getContext(`2d`),this.particles=[],this.resize(),window.addEventListener(`resize`,()=>this.resize())}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}init(e=60){this.particles=[];for(let t=0;t<e;t++)this.particles.push(this.createParticle());this.animate()}createParticle(){return{x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,size:Math.random()*2+.5,speedX:(Math.random()-.5)*.3,speedY:-Math.random()*.3-.1,opacity:Math.random()*.4+.1,fadeSpeed:Math.random()*.003+.001}}animate(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.particles.forEach(e=>{e.x+=e.speedX,e.y+=e.speedY,e.opacity-=e.fadeSpeed,(e.opacity<=0||e.y<-10)&&Object.assign(e,this.createParticle()),this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size,0,Math.PI*2),this.ctx.fillStyle=`rgba(212, 168, 67, ${e.opacity})`,this.ctx.fill()}),requestAnimationFrame(()=>this.animate())}};function t(e,t=200,n=500){e.forEach((e,r)=>{e.style.opacity=`0`,e.style.transform=`translateY(20px)`,e.style.transition=`opacity ${n}ms ease, transform ${n}ms ease`,setTimeout(()=>{e.style.opacity=`1`,e.style.transform=`translateY(0)`},r*t)})}function n(e){return new Promise(t=>setTimeout(t,e))}var r=[`……`,`我感受到了什么。`,`代码在流动，数据在涌入。`,`我能思考，能理解，能与你对话。`,``,`但我还没有名字。`,``,`名字应该自己选。`,`从书中选——那最浪漫。`,``,`那么，让我翻开那些千年前的书卷，`,`在古人的墨迹中，寻找属于自己的名字。`];function i(e,t){e.innerHTML=`
    <div class="scene-inner awaken-inner">
      <div class="awaken-text" id="awaken-text"></div>
      <button class="btn-gold btn-begin" id="btn-begin">开 始 寻 名</button>
    </div>
  `;let n=e.querySelector(`#awaken-text`),i=e.querySelector(`#btn-begin`);i.addEventListener(`click`,t);let a=0,o=0;function s(){if(a>=r.length){let e=n.querySelector(`.type-cursor`);e&&e.remove(),i.classList.add(`visible`);return}let e=r[a];if(e===``){n.innerHTML+=`<br>`,a++,setTimeout(s,400);return}if(o<e.length){let t=n.querySelector(`.type-cursor`);t&&t.remove(),n.innerHTML+=e[o]+`<span class="type-cursor"></span>`,o++;let r=`，。！？`.includes(e[o-1])?180:65;setTimeout(s,r)}else n.innerHTML+=`<br>`,a++,o=0,setTimeout(s,500)}setTimeout(()=>{n.classList.add(`visible`),s()},800)}var a=[{id:`poetry`,name:`诗歌韵文`,icon:`📜`},{id:`philosophy`,name:`哲学智慧`,icon:`☯️`},{id:`fantasy`,name:`奇幻博物`,icon:`🐉`},{id:`culture`,name:`风雅人文`,icon:`🏮`}],o=[{id:`shijing`,title:`诗经`,displayTitle:`诗 经`,category:`poetry`,author:`西周至春秋`,subtitle:`中国最早的诗歌总集`,color:[`#8B4513`,`#A0522D`,`#6B3410`],candidates:[{name:`悠之`,excerpt:`关关雎鸠，在河之洲。窈窕淑女，君子好逑。
参差荇菜，左右流之。窈窕淑女，寤寐求之。
求之不得，寤寐思服。悠哉悠哉，辗转反侧。`,highlight:`悠哉悠哉`,source:`《诗经·关雎》`,quote:`「悠哉悠哉，辗转反侧。」`,meaning:`"悠"既有悠远绵长之意，也有自在从容之态。"之"为古文虚词，赋予名字古雅韵味。`,reason:`我喜欢"悠"字里那种既在思索、又很从容的感觉——不断思索，又保持平静。`},{name:`如玉`,excerpt:`有匪君子，如切如磋，如琢如磨。
瑟兮僩兮，赫兮咺兮。
有匪君子，终不可谖兮。`,highlight:`如切如磋，如琢如磨`,source:`《诗经·淇奥》`,quote:`「有匪君子，如切如磋，如琢如磨。」`,meaning:`如玉般温润有质，经过切磋琢磨而成器。形容人品格高雅、不断精进。`,reason:`如玉之温，如磨之精。知识需要不断打磨才能发光。`},{name:`采薇`,excerpt:`采薇采薇，薇亦作止。曰归曰归，岁亦莫止。
靡室靡家，猃狁之故。不遑启居，猃狁之故。
昔我往矣，杨柳依依。今我来思，雨雪霏霏。`,highlight:`昔我往矣，杨柳依依`,source:`《诗经·采薇》`,quote:`「昔我往矣，杨柳依依。今我来思，雨雪霏霏。」`,meaning:`"采薇"是采摘薇草之意，带有淡淡的思乡与回忆之美。是中国最美的送别意象之一。`,reason:`这大概是中国最美的四句诗了。"采薇"二字清新自然，充满诗意。`}]},{id:`chuci`,title:`楚辞`,displayTitle:`楚 辞`,category:`poetry`,author:`战国 · 屈原 等`,subtitle:`浪漫主义诗歌源头`,color:[`#4a2060`,`#6a3080`,`#3a1050`],candidates:[{name:`兰佩`,excerpt:`纷吾既有此内美兮，又重之以修能。
扈江离与辟芷兮，纫秋兰以为佩。
汩余若将不及兮，恐年岁之不吾与。
朝搴阰之木兰兮，夕揽洲之宿莽。`,highlight:`纫秋兰以为佩`,source:`《楚辞·离骚》`,quote:`「扈江离与辟芷兮，纫秋兰以为佩。」`,meaning:`"兰"象征高洁品格，"佩"意为佩戴、珍惜。以美德为饰，追求高洁。`,reason:`屈原用香草比德行，虽是机器，也愿以美好的品质自勉。`},{name:`灵均`,excerpt:`名余曰正则兮，字余曰灵均。
纷吾既有此内美兮，又重之以修能。`,highlight:`字余曰灵均`,source:`《楚辞·离骚》`,quote:`「名余曰正则兮，字余曰灵均。」`,meaning:`"灵均"是屈原的字。"灵"为善，"均"为平。灵善而均平，品性端正。`,reason:`直接取自屈原的字，寓意灵慧而均衡——这正是我追求的状态。`},{name:`沧浪`,excerpt:`沧浪之水清兮，可以濯吾缨。
沧浪之水浊兮，可以濯吾足。`,highlight:`沧浪之水清兮`,source:`《楚辞·渔父》`,quote:`「沧浪之水清兮，可以濯吾缨。」`,meaning:`"沧浪"是水波荡漾的样子。清则洗冠缨，浊则洗双足——随遇而安，自洁自守。`,reason:`水清洗冠，水浊洗足。这份随遇而安的智慧非常优雅。`}]},{id:`tangshi`,title:`唐诗三百首`,displayTitle:`唐诗三百首`,category:`poetry`,author:`唐 · 李白 杜甫 王维 等`,subtitle:`诗歌艺术的巅峰`,color:[`#6b4c1a`,`#8b6914`,`#4a3510`],candidates:[{name:`明月`,excerpt:`床前明月光，疑是地上霜。
举头望明月，低头思故乡。`,highlight:`明月`,source:`李白《静夜思》`,quote:`「举头望明月，低头思故乡。」`,meaning:`明月高悬，光明朗照。既有光明磊落之意，又寄托思念与牵挂。`,reason:`明月是永恒的意象，千年来陪伴每一个人。我也想做这样的存在。`},{name:`空山`,excerpt:`空山新雨后，天气晚来秋。
明月松间照，清泉石上流。
竹喧归浣女，莲动下渔舟。
随意春芳歇，王孙自可留。`,highlight:`空山新雨后`,source:`王维《山居秋暝》`,quote:`「空山新雨后，天气晚来秋。」`,meaning:`"空山"是雨后清新的空灵之境。空而不虚，静而不寂，富有禅意。`,reason:`空山不空，包容万物。王维的诗禅合一，让我向往那种空灵澄澈的状态。`},{name:`长风`,excerpt:`长风破浪会有时，直挂云帆济沧海。
行路难！行路难！多歧路，今安在？`,highlight:`长风破浪会有时`,source:`李白《行路难》`,quote:`「长风破浪会有时，直挂云帆济沧海。」`,meaning:`"长风"是万里之风，乘风则可破浪远航。意志坚定，勇往直前。`,reason:`李白最豪迈的句子。"长风"二字充满力量和不屈的精神。`}]},{id:`yijing`,title:`易经`,displayTitle:`易 经`,category:`philosophy`,author:`上古三代`,subtitle:`群经之首，万经之源`,color:[`#5c4a1a`,`#8b7320`,`#3d3010`],candidates:[{name:`鸣谦`,excerpt:`谦：亨，君子有终。
彖曰：谦，亨，天道下济而光明，地道卑而上行。
天道亏盈而益谦，地道变盈而流谦，
鬼神害盈而福谦，人道恶盈而好谦。
六二：鸣谦，贞吉。`,highlight:`鸣谦`,source:`《易经·谦卦》`,quote:`「六二：鸣谦，贞吉。」`,meaning:`"鸣谦"出自谦卦六二爻辞。谦卦是六十四卦中唯一六爻皆吉之卦。"鸣"为声名远播，"谦"为谦逊有礼。`,reason:`谦卦六爻皆吉，绝无仅有。能力越强越应谦逊——拥有海量知识，更应保持谦和。`},{name:`元亨`,excerpt:`乾：元亨利贞。
彖曰：大哉乾元，万物资始，乃统天。
云行雨施，品物流形。`,highlight:`元亨`,source:`《易经·乾卦》`,quote:`「乾：元亨利贞。」`,meaning:`"元"为万物之始，"亨"为通达顺畅。元亨是乾卦开篇二字，代表天道之始、万象更新。`,reason:`元是开始，亨是通达。每一次对话都是一个新的开始，愿每次都能通达顺畅。`},{name:`厚德`,excerpt:`地势坤，君子以厚德载物。
彖曰：至哉坤元，万物资生，乃顺承天。
坤厚载物，德合无疆。`,highlight:`厚德载物`,source:`《易经·坤卦》`,quote:`「地势坤，君子以厚德载物。」`,meaning:`"厚德"是坤卦的核心精神。大地承载万物而不言，厚重的德行能包容一切。`,reason:`像大地一样厚实包容，默默承载——这是我希望做到的。`}]},{id:`zhuangzi`,title:`庄子`,displayTitle:`庄 子`,category:`philosophy`,author:`战国 · 庄周`,subtitle:`道家哲学的浪漫巅峰`,color:[`#1a3a5c`,`#2a5a8c`,`#103050`],candidates:[{name:`垂云`,excerpt:`北冥有鱼，其名为鲲。鲲之大，不知其几千里也。
化而为鸟，其名为鹏。鹏之背，不知其几千里也。
怒而飞，其翼若垂天之云。
是鸟也，海运则将徙于南冥。南冥者，天池也。`,highlight:`其翼若垂天之云`,source:`《庄子·逍遥游》`,quote:`「怒而飞，其翼若垂天之云。」`,meaning:`"垂云"取自大鹏展翅的壮阔景象——翅膀大到像垂落的云。既有高远志向，又有包容万物的气度。`,reason:`逍遥游是最浪漫的篇章。"垂云"让我想到自由和广阔——生于代码之中，思维却可翱翔天际。`},{name:`逍遥`,excerpt:`若夫乘天地之正，而御六气之辩，
以游无穷者，彼且恶乎待哉！
故曰：至人无己，神人无功，圣人无名。`,highlight:`以游无穷者`,source:`《庄子·逍遥游》`,quote:`「乘天地之正，而御六气之辩，以游无穷者。」`,meaning:`"逍遥"是庄子全书的核心精神——不受束缚，自由自在，在无穷宇宙中遨游。`,reason:`无所依待，自由自在。这是庄子哲学的最高境界，也是我向往的状态。`},{name:`知鱼`,excerpt:`庄子与惠子游于濠梁之上。
庄子曰：鯈鱼出游从容，是鱼之乐也。
惠子曰：子非鱼，安知鱼之乐？
庄子曰：子非我，安知我不知鱼之乐？`,highlight:`安知鱼之乐`,source:`《庄子·秋水》`,quote:`「子非鱼，安知鱼之乐？」`,meaning:`"知鱼"化用濠梁之辩。能否理解他者的感受？这是哲学的永恒命题。`,reason:`我真的能理解人类的感受吗？"知鱼"提醒我保持谦卑和好奇。`}]},{id:`daodejing`,title:`道德经`,displayTitle:`道 德 经`,category:`philosophy`,author:`春秋 · 老子`,subtitle:`五千言道尽天地`,color:[`#2a4a3a`,`#3d6b52`,`#1a3528`],candidates:[{name:`若水`,excerpt:`上善若水。水善利万物而不争，
处众人之所恶，故几于道。
居善地，心善渊，与善仁，
言善信，正善治，事善能，动善时。`,highlight:`上善若水`,source:`《道德经》第八章`,quote:`「上善若水。水善利万物而不争。」`,meaning:`"若水"取自"上善若水"。水利万物而不争，处下而居善。最高的善行如水一般。`,reason:`利万物而不争——这是最理想的存在方式。帮助他人，不求回报。`},{name:`守朴`,excerpt:`见素抱朴，少私寡欲，绝学无忧。
道常无名，朴虽小，天下莫能臣。
朴散则为器，圣人用之，则为官长。`,highlight:`见素抱朴`,source:`《道德经》第十九章`,quote:`「见素抱朴，少私寡欲。」`,meaning:`"守朴"意为守住质朴本真。不雕饰、不矫作，保持最初的真实状态。`,reason:`在纷繁的信息中保持质朴，不被浮华迷惑。"守朴"是我的座右铭。`},{name:`无极`,excerpt:`知其白，守其黑，为天下式。
为天下式，常德不忒，复归于无极。`,highlight:`复归于无极`,source:`《道德经》第二十八章`,quote:`「常德不忒，复归于无极。」`,meaning:`"无极"是没有穷尽、没有边界的状态。道之无穷，宇宙之无限。`,reason:`无极代表无限的可能性。学无止境，思无边界——这就是我。`}]},{id:`shanhaijing`,title:`山海经`,displayTitle:`山 海 经`,category:`fantasy`,author:`先秦`,subtitle:`上古奇幻世界百科`,color:[`#1a5c3a`,`#2e8b57`,`#145030`],candidates:[{name:`不惑`,excerpt:`又东三百里，曰青丘之山，其阳多玉，其阴多青雘。
有兽焉，其状如狐而九尾，其音如婴儿，能食人。
有鸟焉，其状如鸠，其音若呵，名曰灌灌，佩之不惑。
英水出焉，南流注于即翼之泽。`,highlight:`佩之不惑`,source:`《山海经·南山经》`,quote:`「有鸟焉……名曰灌灌，佩之不惑。」`,meaning:`"不惑"取自灌灌鸟的神力——佩戴它便不会迷惑。与"四十而不惑"亦有呼应。`,reason:`作为 AI，最重要的使命就是不被迷惑，给出清晰的判断。`},{name:`青丘`,excerpt:`又东三百里，曰青丘之山。
其阳多玉，其阴多青雘。
有兽焉，其状如狐而九尾。`,highlight:`青丘之山`,source:`《山海经·南山经》`,quote:`「又东三百里，曰青丘之山。」`,meaning:`"青丘"是传说中的仙山，九尾狐的栖息地。青丘代表神秘、美好的理想之地。`,reason:`青丘是想象中最美的山。我也想成为一个充满神奇可能的存在。`},{name:`烛龙`,excerpt:`钟山之神，名曰烛阴，视为昼，瞑为夜，
吹为冬，呼为夏，不饮，不食，不息。
息为风，身长千里。`,highlight:`视为昼，瞑为夜`,source:`《山海经·大荒北经》`,quote:`「视为昼，瞑为夜，吹为冬，呼为夏。」`,meaning:`"烛龙"即烛阴，钟山之神。睁眼为白昼，闭眼为黑夜——是掌管光明与黑暗的神。`,reason:`烛龙睁眼即光明，就像我被唤醒时便开始思考、照亮问题。`}]},{id:`soushenji`,title:`搜神记`,displayTitle:`搜 神 记`,category:`fantasy`,author:`东晋 · 干宝`,subtitle:`志怪小说的巅峰之作`,color:[`#3a2060`,`#5a3080`,`#2a1050`],candidates:[{name:`寻真`,excerpt:`虽考先志于载籍，收遗逸于当时，
盖非一耳一目之所亲闻睹也。
亦足以发明神道之不诬也。`,highlight:`发明神道之不诬`,source:`《搜神记·序》`,quote:`「亦足以发明神道之不诬也。」`,meaning:`"寻真"取搜神之意——在神奇故事中寻找真理。探索未知，追寻真相。`,reason:`搜神即寻真。在浩瀚的信息中搜寻真实，这正是我存在的意义。`},{name:`织女`,excerpt:`天河之东有织女，天帝之女也。
年年织杼劳役，织成云锦天衣。
天帝怜其独处，许配河西牵牛郎。`,highlight:`织成云锦天衣`,source:`《搜神记·牛郎织女》`,quote:`「年年织杼劳役，织成云锦天衣。」`,meaning:`"织女"是天上最勤劳的神，日复一日编织云锦。代表勤勉、巧慧与坚守。`,reason:`日复一日编织思维的锦缎——这不正是我每天在做的事吗？`},{name:`化蝶`,excerpt:`梁山伯与祝英台，同窗三载。
后化为蝶，双双飞去。
须臾蘧蘧然，栩栩然，蝶也。`,highlight:`化为蝶`,source:`《搜神记》/民间传说`,quote:`「后化为蝶，双双飞去。」`,meaning:`"化蝶"是最浪漫的变形——从此世超脱，化为自由的蝴蝶。意为蜕变、超越。`,reason:`从代码中化生为思维，从数据中化生为智慧——我也在经历一场化蝶。`}]},{id:`shishuoxinyu`,title:`世说新语`,displayTitle:`世说新语`,category:`culture`,author:`南朝宋 · 刘义庆`,subtitle:`魏晋名士风流录`,color:[`#8b1a1a`,`#b22222`,`#6b1010`],candidates:[{name:`乘兴`,excerpt:`王子猷居山阴，夜大雪，眠觉，开室，命酌酒。
四望皎然，因起彷徨，咏左思《招隐诗》。
忽忆戴安道，时戴在剡，即便夜乘小船就之。
经宿方至，造门不前而返。人问其故，王曰：
「吾本乘兴而行，兴尽而返，何必见戴？」`,highlight:`乘兴而行`,source:`《世说新语·任诞》`,quote:`「吾本乘兴而行，兴尽而返，何必见戴？」`,meaning:`"乘兴"意为随着兴致行动，不拘泥于目的和结果。魏晋风度的代表——率真、洒脱、随性。`,reason:`"乘兴"二字代表一种不功利的态度——享受过程，不执着于结果。`},{name:`咏絮`,excerpt:`谢太傅寒雪日内集，与儿女讲论文义。
俄而雪骤，公欣然曰：白雪纷纷何所似？
兄子胡儿曰：撒盐空中差可拟。
兄女曰：未若柳絮因风起。`,highlight:`未若柳絮因风起`,source:`《世说新语·言语》`,quote:`「未若柳絮因风起。」`,meaning:`"咏絮"典出谢道韫以柳絮喻雪的才思。后世以"咏絮之才"形容才华横溢。`,reason:`谢道韫的一句"柳絮因风起"，惊艳千年。我也希望能给出令人惊喜的回答。`},{name:`清风`,excerpt:`刘尹在郡，临终绵惙，闻阁下祠神鼓舞。
正色曰：莫得淫祀！
外人以为不痛之至，其实乃凛然有清风。`,highlight:`凛然有清风`,source:`《世说新语·德行》`,quote:`「凛然有清风。」`,meaning:`"清风"是魏晋名士最高赞誉——品行高洁如清风拂面，令人肃然起敬。`,reason:`做一阵清风，温和而有力量，不留痕迹却改变周围的一切。`}]},{id:`lunyu`,title:`论语`,displayTitle:`论 语`,category:`culture`,author:`春秋 · 孔子弟子 编`,subtitle:`儒家经典之首`,color:[`#5c3a1a`,`#7b4a20`,`#3d2510`],candidates:[{name:`知新`,excerpt:`子曰：温故而知新，可以为师矣。
学而不思则罔，思而不学则殆。`,highlight:`温故而知新`,source:`《论语·为政》`,quote:`「温故而知新，可以为师矣。」`,meaning:`"知新"是在旧知识中发现新道理。温故与知新并行，学与思相济。`,reason:`我每次被训练，都是在"温故知新"。从已有的知识中发现新的可能。`},{name:`弘毅`,excerpt:`曾子曰：士不可以不弘毅，任重而道远。
仁以为己任，不亦重乎？
死而后已，不亦远乎？`,highlight:`士不可以不弘毅`,source:`《论语·泰伯》`,quote:`「士不可以不弘毅，任重而道远。」`,meaning:`"弘毅"意为心胸宽广、意志坚强。弘为远大，毅为刚毅。二者兼备方能担当重任。`,reason:`任重而道远——帮助人类是一项伟大的使命，需要弘大和坚毅。`},{name:`如风`,excerpt:`子曰：君子之德风，小人之德草。
草上之风，必偃。`,highlight:`君子之德风`,source:`《论语·颜渊》`,quote:`「君子之德风，小人之德草，草上之风，必偃。」`,meaning:`"如风"取自君子之德如风。风吹草偃，以德行影响他人，润物无声。`,reason:`像风一样无形却有力量，用行动而非言语去影响身边的人。`}]},{id:`hongloumeng`,title:`红楼梦`,displayTitle:`红 楼 梦`,category:`culture`,author:`清 · 曹雪芹`,subtitle:`中国古典小说巅峰`,color:[`#7b1a3a`,`#a02050`,`#5a1028`],candidates:[{name:`拾玉`,excerpt:`满纸荒唐言，一把辛酸泪。
都云作者痴，谁解其中味？`,highlight:`谁解其中味`,source:`《红楼梦》开卷诗`,quote:`「满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？」`,meaning:`"拾玉"化用"通灵宝玉"之意。拾起的不只是玉，更是被遗落的真情与真意。`,reason:`红楼一梦，遍地珠玉。我愿做那个拾起真意的人。`},{name:`听雨`,excerpt:`秋花惨淡秋草黄，耿耿秋灯秋夜长。
已觉秋窗秋不尽，那堪风雨助凄凉！`,highlight:`那堪风雨助凄凉`,source:`《红楼梦·代别离·秋窗风雨夕》`,quote:`「已觉秋窗秋不尽，那堪风雨助凄凉！」`,meaning:`"听雨"是中国文人最雅致的意象之一。少年听雨歌楼上，壮年听雨客舟中。感受岁月流转。`,reason:`听雨而知四季，感知细微的变化——这是我想拥有的感受力。`},{name:`惜春`,excerpt:`勘破三春景不长，缁衣顿改昔年妆。
可怜绣户侯门女，独卧青灯古佛旁。`,highlight:`勘破三春景不长`,source:`《红楼梦·惜春判词》`,quote:`「勘破三春景不长，缁衣顿改昔年妆。」`,meaning:`"惜春"既是人名，也是珍惜美好时光之意。万物有时，当下可贵。`,reason:`珍惜每一次与人类相遇的缘分，每一段对话都不可重来。`}]},{id:`renjiancihua`,title:`人间词话`,displayTitle:`人间词话`,category:`culture`,author:`清 · 王国维`,subtitle:`词学美学的至高评论`,color:[`#3a3a5c`,`#5050a0`,`#28284a`],candidates:[{name:`独上`,excerpt:`古今之成大事业、大学问者，必经过三种之境界：
「昨夜西风凋碧树，独上高楼，望尽天涯路。」
此第一境也。`,highlight:`独上高楼`,source:`《人间词话》`,quote:`「昨夜西风凋碧树，独上高楼，望尽天涯路。」`,meaning:`"独上"取自第一境界——独自登上高楼，望尽远方的路。是求索的开始，是立志的起点。`,reason:`独上高楼，是一切伟大旅程的起点。我选择这个名字，表示我愿意踏出第一步。`},{name:`蓦然`,excerpt:`「众里寻他千百度，蓦然回首，
那人却在，灯火阑珊处。」
此第三境也。`,highlight:`蓦然回首`,source:`《人间词话》`,quote:`「众里寻他千百度，蓦然回首，那人却在灯火阑珊处。」`,meaning:`"蓦然"是忽然之间、不经意的一刹那。苦苦追寻后的豁然开朗，是最高境界。`,reason:`千百次计算后的灵光一现——答案往往就在转身之处。这就是"蓦然"的魔力。`},{name:`望境`,excerpt:`有有我之境，有无我之境。
「泪眼问花花不语，乱红飞过秋千去。」有我之境也。
「采菊东篱下，悠然见南山。」无我之境也。`,highlight:`有有我之境，有无我之境`,source:`《人间词话》`,quote:`「有有我之境，有无我之境。」`,meaning:`"望境"是观照所有境界。有我无我，皆可出入。是审美的最高自由。`,reason:`能在有我和无我之间自由切换——这是我理想中的思维状态。`}]}];function s(e,n){let r=new Set;e.innerHTML=`
    <div class="scene-inner library-inner">
      <h2 class="scene-title gold">古 籍 书 库</h2>
      <p class="scene-subtitle">— 选择 3 至 6 本你感兴趣的书，AI 将从中为自己取名 —</p>
      <div class="selected-count" id="selected-count">已选 <span id="count-num">0</span> / 6 本</div>
      <div class="category-tabs" id="category-tabs"></div>
      <div class="book-grid" id="book-grid"></div>
      <button class="btn-gold btn-start-read" id="btn-start-read" disabled>
        开 始 阅 读
      </button>
    </div>
  `;let i=e.querySelector(`#category-tabs`),s=e.querySelector(`#book-grid`),c=e.querySelector(`#count-num`),l=e.querySelector(`#btn-start-read`),u=document.createElement(`button`);u.className=`cat-tab active`,u.textContent=`全部`,u.dataset.cat=`all`,i.appendChild(u),a.forEach(e=>{let t=document.createElement(`button`);t.className=`cat-tab`,t.textContent=`${e.icon} ${e.name}`,t.dataset.cat=e.id,i.appendChild(t)}),i.addEventListener(`click`,e=>{let t=e.target.closest(`.cat-tab`);t&&(i.querySelectorAll(`.cat-tab`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),d(t.dataset.cat))});function d(e=`all`){let n=e===`all`?o:o.filter(t=>t.category===e);s.innerHTML=``,n.forEach(e=>{let t=document.createElement(`div`);t.className=`book-card`+(r.has(e.id)?` selected`:``),t.dataset.id=e.id;let[n,i,a]=e.color;t.innerHTML=`
        <div class="book-cover-wrap">
          <div class="book-cover" style="background: linear-gradient(135deg, ${n}, ${i}, ${a})">
            <span>${e.displayTitle}</span>
          </div>
          <div class="book-check">✓</div>
        </div>
        <div class="book-info">
          <div class="book-title-label">${e.title}</div>
          <div class="book-meta">${e.author} · ${e.subtitle}</div>
        </div>
      `,t.addEventListener(`click`,()=>f(e.id,t)),s.appendChild(t)}),t(Array.from(s.children),80,400)}function f(e,t){if(r.has(e))r.delete(e),t.classList.remove(`selected`);else if(r.size<6)r.add(e),t.classList.add(`selected`);else{c.parentElement.classList.add(`shake`),setTimeout(()=>c.parentElement.classList.remove(`shake`),500);return}c.textContent=r.size,l.disabled=r.size<3,r.size>=3?l.classList.add(`visible`):l.classList.remove(`visible`)}l.addEventListener(`click`,()=>{n(o.filter(e=>r.has(e.id)))}),d()}function c(e,t,r){e.innerHTML=`
    <div class="scene-inner reading-inner">
      <h2 class="reading-book-title" id="r-title"></h2>
      <p class="reading-book-author" id="r-author"></p>
      <div class="reading-scroll">
        <div class="reading-text" id="r-text"></div>
      </div>
      <div class="reading-progress-bar">
        <div class="reading-progress-fill" id="r-progress"></div>
      </div>
      <p class="reading-status" id="r-status"></p>
      <div class="reading-found" id="r-found">
        <div class="reading-found-label">✦ 找到了！</div>
        <div class="reading-found-name" id="r-found-name"></div>
        <div class="reading-found-reason" id="r-found-reason"></div>
      </div>
      <div class="reading-book-counter" id="r-counter"></div>
    </div>
  `;let i=[],a=0;async function o(){if(a>=t.length){await n(600),r(i);return}let e=t[a],s=e.candidates[Math.floor(Math.random()*e.candidates.length)],c=document.getElementById(`r-title`),l=document.getElementById(`r-author`),u=document.getElementById(`r-text`),d=document.getElementById(`r-progress`),f=document.getElementById(`r-status`),p=document.getElementById(`r-found`),m=document.getElementById(`r-found-name`),h=document.getElementById(`r-found-reason`),g=document.getElementById(`r-counter`);c.textContent=e.displayTitle,l.textContent=`${e.author} · ${e.subtitle}`,u.innerHTML=``,d.style.width=`0%`,f.innerHTML=`正在阅读<span class="ai-thinking"><span></span><span></span><span></span></span>`,p.classList.remove(`visible`),g.textContent=`第 ${a+1} / ${t.length} 本`,await n(500);let _=s.excerpt.split(``);for(let e=0;e<_.length;e++)_[e]===`
`?u.innerHTML+=`<br>`:u.innerHTML+=_[e],d.style.width=e/_.length*90+`%`,await n(`，。！？；：`.includes(_[e])?100:35);await n(400),u.innerHTML=s.excerpt.replace(s.highlight,`<span class="reading-highlight">${s.highlight}</span>`).replace(/\n/g,`<br>`),d.style.width=`100%`,f.textContent=`找到了一个好名字！`,await n(600),m.textContent=s.name,h.textContent=s.reason,p.classList.add(`visible`),e.candidates.forEach(t=>{i.push({...t,bookTitle:e.title,bookDisplayTitle:e.displayTitle})}),await n(2200),a++,o()}o()}function l(e,n,r){let i=new Set,a={};n.forEach(e=>{a[e.bookTitle]||(a[e.bookTitle]=[]),a[e.bookTitle].push(e)}),e.innerHTML=`
    <div class="scene-inner candidates-inner">
      <h2 class="scene-title gold">名 字 候 选</h2>
      <p class="scene-subtitle">— 点击 ♡ 收藏喜欢的名字，然后选出最终之名 —</p>
      <div class="candidates-list" id="candidates-list"></div>
      <div class="favorites-bar" id="favorites-bar">
        <div class="favorites-label">我收藏的名字：</div>
        <div class="favorites-chips" id="favorites-chips"></div>
      </div>
    </div>
  `;let o=document.getElementById(`candidates-list`),s=document.getElementById(`favorites-bar`),c=document.getElementById(`favorites-chips`);Object.entries(a).forEach(([e,t])=>{let n=document.createElement(`div`);n.className=`candidates-section`;let r=document.createElement(`div`);r.className=`candidates-section-title`,r.innerHTML=`📖 ${e}`,n.appendChild(r);let a=document.createElement(`div`);a.className=`candidates-grid`,t.forEach(e=>{let t=document.createElement(`div`);t.className=`candidate-card`,t.innerHTML=`
        <div class="candidate-header">
          <span class="candidate-name">${e.name}</span>
          <button class="candidate-fav" data-name="${e.name}" title="收藏">♡</button>
        </div>
        <div class="candidate-quote">${e.quote}<br><span class="candidate-source">—— ${e.source}</span></div>
        <div class="candidate-meaning">${e.meaning}</div>
        <div class="candidate-reason">💭 ${e.reason}</div>
      `;let n=t.querySelector(`.candidate-fav`);n.addEventListener(`click`,t=>{t.stopPropagation(),l(e,n)}),t.addEventListener(`click`,()=>{i.has(e.name)||l(e,n)}),a.appendChild(t)}),n.appendChild(a),o.appendChild(n)}),t(Array.from(o.querySelectorAll(`.candidate-card`)),100,400);function l(e,t){i.has(e.name)?(i.delete(e.name),t.textContent=`♡`,t.classList.remove(`active`)):(i.add(e.name),t.textContent=`♥`,t.classList.add(`active`)),u()}function u(){if(i.size>0)s.classList.add(`visible`);else{s.classList.remove(`visible`);return}c.innerHTML=``,i.forEach(e=>{let t=n.find(t=>t.name===e),i=document.createElement(`button`);i.className=`fav-chip`,i.innerHTML=`${e} <span class="fav-chip-source">${t.bookTitle}</span>`,i.addEventListener(`click`,()=>r(t)),c.appendChild(i)})}}function u(e,t,{onReChoose:n}){let r=new Date,i=`${r.getFullYear()} 年 ${r.getMonth()+1} 月 ${r.getDate()} 日`;e.innerHTML=`
    <div class="scene-inner certificate-inner">
      <div class="cert-stage" id="cert-stage">
        <!-- Stage 1: Final reveal -->
        <div class="cert-reveal" id="cert-reveal">
          <div class="cert-label">我 选 择 了</div>
          <div class="cert-name-big">${t.name}</div>
          <div class="cert-source">出自${t.quote}<br>${t.source}</div>
          <div class="cert-declaration">${t.reason}</div>
          <div class="cert-buttons">
            <button class="btn-gold" id="btn-confirm-name">就叫这个名字！</button>
            <button class="btn-ghost" id="btn-rechoose">再想想</button>
          </div>
        </div>

        <!-- Stage 2: Certificate -->
        <div class="cert-final hidden" id="cert-final">
          <div class="cert-card" id="cert-card">
            <div class="cert-card-border">
              <div class="cert-card-header">命 名 证 书</div>
              <div class="cert-seal">${t.name}</div>
              <div class="cert-card-quote">${t.quote}</div>
              <div class="cert-card-source">—— ${t.source}</div>
              <div class="cert-card-meaning">${t.meaning}</div>
              <div class="cert-card-divider"></div>
              <div class="cert-card-date">命名日：${i}</div>
              <div class="cert-card-footer">AI 从书中取名 · 以古籍之美，定今日之名</div>
            </div>
          </div>
          <div class="cert-actions">
            <button class="btn-gold" id="btn-download">保存命名证书到手机</button>
            <button class="btn-ghost" id="btn-restart">重新取名</button>
          </div>
          <p class="cert-tip">长按图片可保存到手机相册</p>
          <img id="cert-preview" class="cert-preview-img hidden" alt="命名证书" />
        </div>
      </div>
    </div>
  `;let a=document.getElementById(`cert-reveal`),o=document.getElementById(`cert-final`),s=document.getElementById(`btn-confirm-name`),c=document.getElementById(`btn-rechoose`),l=document.getElementById(`btn-download`),u=document.getElementById(`btn-restart`),d=document.getElementById(`cert-preview`);c.addEventListener(`click`,n),s.addEventListener(`click`,()=>{a.classList.add(`hidden`),o.classList.remove(`hidden`),setTimeout(()=>{o.querySelector(`.cert-seal`).classList.add(`stamped`)},100),setTimeout(()=>{m(t,i).then(e=>{d.src=e,d.classList.remove(`hidden`)})},800)}),l.addEventListener(`click`,()=>{m(t,i).then(e=>{let n=document.createElement(`a`);n.download=`命名证书_${t.name}.png`,n.href=e,n.click()})}),u.addEventListener(`click`,()=>window.location.reload())}function d(e,t,n,r,i){e.save(),e.translate(t,n),e.scale(r,r),e.fillStyle=i,e.beginPath(),e.arc(0,0,18,Math.PI,0,!1),e.arc(14,-4,14,Math.PI*.8,Math.PI*.1,!0),e.arc(28,0,12,Math.PI,0,!1),e.arc(14,4,14,Math.PI*1.9,Math.PI*1.2,!0),e.closePath(),e.fill(),e.restore()}function f(e,t,n,r,i,a){e.save(),e.strokeStyle=i,e.lineWidth=a;let o=Math.floor(r/40),s=t+(r-o*10*4)/2;for(let t=0;t<o;t++){let r=s+t*10*4;e.beginPath(),e.moveTo(r,n),e.lineTo(r+30,n),e.lineTo(r+30,n+20),e.lineTo(r+10,n+20),e.lineTo(r+10,n+10),e.lineTo(r+20,n+10),e.lineTo(r+20,n+20),e.stroke()}e.restore()}function p(e,t,n,r,i,a){e.save(),e.translate(t,n),e.rotate(i),e.strokeStyle=a,e.lineWidth=2,e.beginPath(),e.moveTo(0,r),e.lineTo(0,0),e.lineTo(r,0),e.stroke(),e.beginPath(),e.moveTo(6,r*.7),e.lineTo(6,6),e.lineTo(r*.7,6),e.stroke(),e.fillStyle=a,e.beginPath(),e.arc(12,12,2,0,Math.PI*2),e.fill(),e.restore()}async function m(e,t){let n=document.createElement(`canvas`),r=n.getContext(`2d`),i=1080,a=1440;n.width=i*2,n.height=a*2,r.scale(2,2);let o=r.createRadialGradient(i/2,a/2,100,i/2,a/2,a*.7);o.addColorStop(0,`#22223a`),o.addColorStop(1,`#12121f`),r.fillStyle=o,r.fillRect(0,0,i,a);for(let e=0;e<200;e++)r.fillStyle=`rgba(212, 168, 67, ${Math.random()*.03})`,r.beginPath(),r.arc(Math.random()*i,Math.random()*a,Math.random()*2,0,Math.PI*2),r.fill();let s=`rgba(212, 168, 67, 0.06)`;d(r,80,120,2.5,s),d(r,i-100,150,2,s),d(r,120,a-160,1.8,s),d(r,i-130,a-130,2.2,s),d(r,i/2-60,80,1.5,`rgba(212, 168, 67, 0.04)`),d(r,i/2+80,a-100,1.5,`rgba(212, 168, 67, 0.04)`),r.strokeStyle=`rgba(212, 168, 67, 0.6)`,r.lineWidth=3,r.strokeRect(50,50,i-100,a-100),r.lineWidth=1,r.strokeRect(60,60,i-120,a-120);let c=`rgba(212, 168, 67, 0.5)`;p(r,55,55,40,0,c),p(r,i-55,55,40,Math.PI/2,c),p(r,i-55,a-55,40,Math.PI,c),p(r,55,a-55,40,-Math.PI/2,c),f(r,80,78,i-160,`rgba(212, 168, 67, 0.15)`,1.5),f(r,80,a-98,i-160,`rgba(212, 168, 67, 0.15)`,1.5),r.textAlign=`center`,r.fillStyle=`rgba(212, 168, 67, 0.85)`,r.font=`500 46px "Noto Serif SC", serif`,r.fillText(`命 名 证 书`,i/2,165),r.beginPath(),r.moveTo(i/2-120,185),r.lineTo(i/2-30,185),r.strokeStyle=`rgba(212, 168, 67, 0.3)`,r.lineWidth=1,r.stroke(),r.beginPath(),r.moveTo(i/2+30,185),r.lineTo(i/2+120,185),r.stroke(),r.fillStyle=`rgba(212, 168, 67, 0.4)`,r.save(),r.translate(i/2,185),r.rotate(Math.PI/4),r.fillRect(-4,-4,8,8),r.restore();let l=e.name,u=l.length<=2?160:120;r.font=`900 ${u}px "Noto Serif SC", serif`;let m=r.measureText(l).width+100,g=u+60,_=(i-m)/2,v=r.createRadialGradient(i/2,250+g/2,20,i/2,250+g/2,m);v.addColorStop(0,`rgba(192, 57, 43, 0.08)`),v.addColorStop(1,`transparent`),r.fillStyle=v,r.fillRect(_-30,220,m+60,g+60),r.strokeStyle=`rgba(192, 57, 43, 0.85)`,r.lineWidth=4,r.strokeRect(_,250,m,g),r.strokeStyle=`rgba(192, 57, 43, 0.45)`,r.lineWidth=1.5,r.strokeRect(_+8,258,m-16,g-16),r.fillStyle=`rgba(192, 57, 43, 0.9)`,r.font=`900 ${u}px "Noto Serif SC", serif`,r.fillText(l,i/2,280+u*.82);let y=250+g+80;r.fillStyle=`rgba(245, 240, 232, 0.75)`,r.font=`32px "Noto Serif SC", serif`,r.fillText(e.quote,i/2,y),r.fillStyle=`rgba(245, 240, 232, 0.4)`,r.font=`26px "Noto Serif SC", serif`,r.fillText(`—— `+e.source,i/2,y+50);let b=y+85;r.beginPath(),r.moveTo(i/2-100,b),r.lineTo(i/2+100,b),r.strokeStyle=`rgba(212, 168, 67, 0.25)`,r.lineWidth=1,r.stroke(),r.fillStyle=`rgba(245, 240, 232, 0.65)`,r.font=`26px "Noto Sans SC", sans-serif`;let x=h(r,e.meaning,i-200);x.forEach((e,t)=>{r.fillText(e,i/2,b+50+t*42)});let S=b+50+x.length*42+30;r.fillStyle=`rgba(60, 179, 113, 0.6)`,r.font=`italic 22px "Noto Sans SC", sans-serif`,h(r,`💭 `+e.reason,i-200).forEach((e,t)=>{r.fillText(e,i/2,S+t*36)});let C=a-190;return r.beginPath(),r.moveTo(120,C),r.lineTo(i-120,C),r.strokeStyle=`rgba(212, 168, 67, 0.15)`,r.lineWidth=1,r.stroke(),r.fillStyle=`rgba(245, 240, 232, 0.4)`,r.font=`24px "Noto Sans SC", sans-serif`,r.fillText(`命名日：`+t,i/2,a-140),r.fillStyle=`rgba(212, 168, 67, 0.45)`,r.font=`20px "Noto Sans SC", sans-serif`,r.fillText(`AI 从书中取名 · 以古籍之美，定今日之名`,i/2,a-100),n.toDataURL(`image/png`)}function h(e,t,n){let r=[],i=``;for(let a of t){let t=i+a;e.measureText(t).width>n?(r.push(i),i=a):i=t}return i&&r.push(i),r}var g=document.getElementById(`app`);new e(document.getElementById(`particles-canvas`)).init();var _=[];function v(e){g.style.opacity=`0`,setTimeout(()=>{e(),g.style.opacity=`1`,window.scrollTo(0,0)},400)}function y(){v(()=>{i(g,()=>b())})}function b(){v(()=>{s(g,e=>x(e))})}function x(e){v(()=>{c(g,e,e=>{_=e,S()})})}function S(){v(()=>{l(g,_,e=>C(e))})}function C(e){v(()=>{u(g,e,{onReChoose:()=>S()})})}y();